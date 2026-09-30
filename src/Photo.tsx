import Image from 'next/image';
import type { EventPhoto } from './events';

export default function Photo({
  photo,
  sizes,
  className,
  eager = false,
}: {
  photo: EventPhoto;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      sizes={sizes}
      placeholder="blur"
      className={className}
      {...(eager ? { loading: 'eager', fetchPriority: 'high' } : {})}
    />
  );
}
