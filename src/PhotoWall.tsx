'use client';

import Image from 'next/image';
import {
  useMemo,
  useState,
  type CSSProperties,
  type PointerEvent,
} from 'react';
import { flushSync } from 'react-dom';
import type { PhotoChapter } from './events';
import { Icon } from './Icons';
import PhotoViewer, { type ViewerPhoto } from './PhotoViewer';

type Layout = 'scatter' | 'sheet';

const COLLAPSED_COUNT = 12;

type Print = ViewerPhoto & {
  id: number;
  chapterId: string;
  frame: string;
};

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function withTransition(update: () => void) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('startViewTransition' in document)) {
    update();
    return;
  }
  document.startViewTransition(() => flushSync(update));
}

export default function PhotoWall({
  chapters,
  title,
}: {
  chapters: PhotoChapter[];
  title: string;
}) {
  const prints = useMemo<Print[]>(() => {
    let id = 0;
    return chapters.flatMap((chapter) =>
      chapter.photos.map((photo) => {
        id += 1;
        return {
          ...photo,
          id,
          chapterId: chapter.id,
          label: chapter.title,
          frame: String(id).padStart(2, '0'),
        };
      }),
    );
  }, [chapters]);

  const [chapterId, setChapterId] = useState('all');
  const [layout, setLayout] = useState<Layout>('scatter');
  const [seed, setSeed] = useState(2026);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<{ index: number; autoplay: boolean } | null>(
    null,
  );

  const visible = useMemo(() => {
    const chosen =
      chapterId === 'all'
        ? prints
        : prints.filter((print) => print.chapterId === chapterId);
    if (layout === 'sheet') return chosen;
    const random = seeded(seed);
    const shuffled = [...chosen];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [prints, chapterId, layout, seed]);

  const collapsed = !expanded && visible.length > COLLAPSED_COUNT;
  const shown = collapsed ? visible.slice(0, COLLAPSED_COUNT) : visible;
  const chapter = chapters.find((item) => item.id === chapterId);
  const status = `Showing ${visible.length} photos${
    chapter ? ` from ${chapter.title}` : ''
  }, ${layout === 'scatter' ? 'scattered' : 'as a contact sheet'}.`;

  function pose(print: Print) {
    const random = seeded(seed * 31 + print.id * 7919);
    return {
      '--wall-tilt': (random() * 2 - 1).toFixed(3),
      '--wall-dx': (random() * 2 - 1).toFixed(3),
      '--wall-dy': (random() * 2 - 1).toFixed(3),
      viewTransitionName: `wall-print-${print.id}`,
    } as CSSProperties;
  }

  function lean(event: PointerEvent<HTMLButtonElement>) {
    if (layout !== 'scatter' || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    event.currentTarget.style.setProperty('--wall-lean-x', x.toFixed(3));
    event.currentTarget.style.setProperty('--wall-lean-y', y.toFixed(3));
  }

  function straighten(event: PointerEvent<HTMLButtonElement>) {
    event.currentTarget.style.removeProperty('--wall-lean-x');
    event.currentTarget.style.removeProperty('--wall-lean-y');
  }

  return (
    <div className={`wall is-${layout}`}>
      <div className="wall-toolbar">
        <div
          className="wall-chapters"
          role="group"
          aria-label="Moments of the day"
        >
          <button
            type="button"
            aria-pressed={chapterId === 'all'}
            onClick={() => withTransition(() => setChapterId('all'))}
          >
            <small>The whole day</small>
            <span>
              All <em>{prints.length}</em>
            </span>
          </button>
          {chapters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={chapterId === item.id}
              onClick={() => withTransition(() => setChapterId(item.id))}
            >
              <small>{item.time}</small>
              <span>
                {item.title} <em>{item.photos.length}</em>
              </span>
            </button>
          ))}
        </div>

        <div className="wall-actions">
          <div className="wall-layouts" role="group" aria-label="Layout">
            <button
              type="button"
              aria-pressed={layout === 'scatter'}
              onClick={() => withTransition(() => setLayout('scatter'))}
            >
              <Icon name="scatter" size="var(--icon-size-sm)" /> Scatter
            </button>
            <button
              type="button"
              aria-pressed={layout === 'sheet'}
              onClick={() => withTransition(() => setLayout('sheet'))}
            >
              <Icon name="grid" size="var(--icon-size-sm)" /> Contact sheet
            </button>
          </div>
          <button
            type="button"
            className="wall-action"
            disabled={layout !== 'scatter'}
            onClick={() =>
              withTransition(() =>
                setSeed(Math.floor(Math.random() * 1_000_000) + 1),
              )
            }
          >
            <Icon name="shuffle" size="var(--icon-size-sm)" /> Shuffle
          </button>
          <button
            type="button"
            className="wall-action wall-action-play"
            onClick={() => setOpen({ index: 0, autoplay: true })}
          >
            <Icon name="play" size="var(--icon-size-sm)" /> Slideshow
          </button>
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {status}
      </p>

      <ul className={`wall-prints${collapsed ? ' is-collapsed' : ''}`}>
        {shown.map((print, index) => (
          <li key={print.id} style={pose(print)}>
            <button
              type="button"
              className="wall-print"
              aria-label={`Open photo ${index + 1} of ${visible.length}: ${print.alt}`}
              onClick={() => setOpen({ index, autoplay: false })}
              onPointerMove={lean}
              onPointerLeave={straighten}
            >
              <span className="wall-print-photo">
                <Image
                  src={print.src}
                  alt={print.alt}
                  sizes="(max-width: 680px) 50vw, (max-width: 1150px) 33vw, 28vw"
                  quality={90}
                  placeholder="blur"
                />
              </span>
              <span className="wall-print-meta" aria-hidden="true">
                <span className="wall-print-frame">{print.frame}</span>
                <span className="wall-print-label">{print.label}</span>
                <Icon name="zoomIn" size="var(--icon-size-sm)" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {collapsed ? (
        <div className="wall-more">
          <button
            type="button"
            className="button button-lime"
            onClick={() => withTransition(() => setExpanded(true))}
          >
            Show all {visible.length} photos
            <Icon name="plus" size="var(--icon-size-site-17)" />
          </button>
        </div>
      ) : null}

      {open ? (
        <PhotoViewer
          photos={visible}
          index={open.index}
          autoplay={open.autoplay}
          title={title}
          onIndex={(index) =>
            setOpen((value) => (value ? { ...value, index } : value))
          }
          onClose={() => setOpen(null)}
        />
      ) : null}
    </div>
  );
}
