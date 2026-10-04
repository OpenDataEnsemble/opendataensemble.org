import Image from 'next/image';
import type { EventPhoto } from './events';

export default function Photo({
  photo,
  sizes,
  className,
  eager = false,
  quality = 90,
}: {
  photo: EventPhoto;
  sizes: string;
  className?: string;
  eager?: boolean;
  quality?: 75 | 90;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      className={className}
      {...(eager ? { loading: 'eager', fetchPriority: 'high' } : {})}
    />
  );
}
