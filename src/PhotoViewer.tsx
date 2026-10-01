'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import type { EventPhoto } from './events';
import { Icon } from './Icons';

export type ViewerPhoto = EventPhoto & { label?: string };

const SLIDE_MS = 4500;
const SWIPE_PX = 50;

function fitSizes(photo: EventPhoto) {
  return photo.src.height > photo.src.width
    ? '(max-width: 680px) 100vw, 60vh'
    : '100vw';
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function PhotoViewer({
  photos,
  index,
  title,
  autoplay = false,
  onIndex,
  onClose,
}: {
  photos: ViewerPhoto[];
  index: number;
  title: string;
  autoplay?: boolean;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLOListElement>(null);
  const swipe = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [playing, setPlaying] = useState(autoplay);

  const count = photos.length;
  const photo = photos[index];

  const go = useCallback(
    (next: number) => {
      setZoomed(false);
      onIndex((next + count) % count);
    },
    [count, onIndex],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog?.close();
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    if (!playing || zoomed) return;
    const timer = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [playing, zoomed, index, go]);

  useEffect(() => {
    const active = stripRef.current?.querySelector<HTMLElement>(
      '[aria-current="true"]',
    );
    active?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [index]);

  function panTo(clientX: number, clientY: number) {
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    const x = ((clientX - box.left) / box.width) * 100;
    const y = ((clientY - box.top) / box.height) * 100;
    stage.style.setProperty('--zoom-x', `${Math.min(100, Math.max(0, x))}%`);
    stage.style.setProperty('--zoom-y', `${Math.min(100, Math.max(0, y))}%`);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const keys: Record<string, () => void> = {
      ArrowRight: () => go(index + 1),
      ArrowLeft: () => go(index - 1),
      Home: () => go(0),
      End: () => go(count - 1),
      z: () => setZoomed((value) => !value),
      p: () => setPlaying((value) => !value),
    };
    const action =
      keys[event.key.length === 1 ? event.key.toLowerCase() : event.key];
    if (!action) return;
    event.preventDefault();
    action();
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    swipe.current = { x: event.clientX, y: event.clientY, moved: false };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (zoomed) {
      panTo(event.clientX, event.clientY);
      return;
    }
    const start = swipe.current;
    if (start && Math.abs(event.clientX - start.x) > SWIPE_PX / 5) {
      start.moved = true;
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = swipe.current;
    swipe.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!zoomed && Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      setPlaying(false);
      go(index + (dx < 0 ? 1 : -1));
      return;
    }
    if (start.moved) return;
    panTo(event.clientX, event.clientY);
    setPlaying(false);
    setZoomed((value) => !value);
  }

  const neighbours = [
    photos[(index + 1) % count],
    photos[(index - 1 + count) % count],
  ];

  return (
    <dialog
      ref={dialogRef}
      className="viewer"
      aria-labelledby="viewer-title"
      onKeyDown={onKeyDown}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header className="viewer-bar">
        <p className="viewer-title">
          <span id="viewer-title">{title}</span>
          {photo.label ? (
            <span className="viewer-chapter">{photo.label}</span>
          ) : null}
        </p>
        <p className="viewer-count" aria-hidden="true">
          <strong>{String(index + 1).padStart(2, '0')}</strong> /{' '}
          {String(count).padStart(2, '0')}
        </p>
        <div className="viewer-tools">
          <button
            type="button"
            className="viewer-tool"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
          >
            <Icon
              name={playing ? 'pause' : 'play'}
              size="var(--icon-size-sm)"
            />
            <span>{playing ? 'Pause' : 'Slideshow'}</span>
          </button>
          <button
            type="button"
            className="viewer-tool"
            aria-pressed={zoomed}
            onClick={() => {
              setPlaying(false);
              setZoomed((value) => !value);
            }}
          >
            <Icon
              name={zoomed ? 'zoomOut' : 'zoomIn'}
              size="var(--icon-size-sm)"
            />
            <span>{zoomed ? 'Fit' : 'Zoom'}</span>
          </button>
          <button
            type="button"
            className="viewer-tool viewer-close"
            onClick={onClose}
            aria-label="Close photo viewer"
          >
            <Icon name="close" size="var(--icon-size-md)" />
          </button>
        </div>
        {playing && !zoomed ? (
          <span key={index} className="viewer-progress" aria-hidden="true" />
        ) : null}
      </header>

      <div className="viewer-body">
        <button
          type="button"
          className="viewer-nav viewer-prev"
          onClick={() => {
            setPlaying(false);
            go(index - 1);
          }}
          aria-label="Previous photo"
        >
          <Icon name="chevron" size="var(--icon-size-lg)" />
        </button>

        <figure className="viewer-figure">
          <div
            ref={stageRef}
            className={`viewer-stage${zoomed ? ' is-zoomed' : ''}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              swipe.current = null;
            }}
          >
            <Image
              key={photo.src.src}
              src={photo.src}
              alt={photo.alt}
              sizes={zoomed ? '250vw' : fitSizes(photo)}
              quality={90}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              draggable={false}
              className="viewer-image"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <figcaption aria-live="polite">
            <span className="visually-hidden">
              Photo {index + 1} of {count}.{' '}
            </span>
            {photo.alt}
          </figcaption>
        </figure>

        <button
          type="button"
          className="viewer-nav viewer-next"
          onClick={() => {
            setPlaying(false);
            go(index + 1);
          }}
          aria-label="Next photo"
        >
          <Icon name="chevron" size="var(--icon-size-lg)" />
        </button>

        <div className="viewer-preload" aria-hidden="true">
          {neighbours.map((neighbour) => (
            <Image
              key={neighbour.src.src}
              src={neighbour.src}
              alt=""
              sizes={fitSizes(neighbour)}
              quality={90}
              loading="eager"
            />
          ))}
        </div>
      </div>

      <ol ref={stripRef} className="viewer-strip" aria-label="All photos">
        {photos.map((item, itemIndex) => (
          <li key={item.src.src}>
            <button
              type="button"
              aria-current={itemIndex === index}
              aria-label={`Photo ${itemIndex + 1}: ${item.alt}`}
              onClick={() => {
                setPlaying(false);
                go(itemIndex);
              }}
            >
              <Image src={item.src} alt="" sizes="96px" quality={75} />
            </button>
          </li>
        ))}
      </ol>
      <p className="viewer-hint" aria-hidden="true">
        ← → to browse · Z to zoom · P for slideshow · Esc to close
      </p>
    </dialog>
  );
}
