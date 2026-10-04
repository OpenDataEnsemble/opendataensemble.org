'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { EventPhoto } from './events';
import { Icon } from './Icons';
import PhotoViewer from './PhotoViewer';

export default function EventGallery({
  photos,
  title,
}: {
  photos: EventPhoto[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="event-gallery-grid">
        {photos.map((photo, index) => (
          <li key={photo.src.src}>
            <button
              type="button"
              className="event-gallery-open"
              aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.alt}`}
              onClick={() => setOpen(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 680px) 100vw, (max-width: 1150px) 50vw, 400px"
                quality={90}
                placeholder="blur"
                className="event-photo"
              />
              <span className="event-gallery-zoom" aria-hidden="true">
                <Icon name="zoomIn" size="var(--icon-size-md)" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null ? (
        <PhotoViewer
          photos={photos}
          index={open}
          title={title}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
        />
      ) : null}
    </>
  );
}
