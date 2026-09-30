import Link from 'next/link';
import { Icon } from './Icons';
import Photo from './Photo';
import { kampala2026, kampalaPhotos } from './events';

export default function EventTeaser() {
  return (
    <section
      className="event-teaser container section-space"
      aria-labelledby="event-teaser-title"
    >
      <div className="event-teaser-photos">
        <Photo
          photo={kampalaPhotos.table}
          sizes="(max-width: 900px) 70vw, 34vw"
          className="event-photo event-teaser-main"
        />
        <Photo
          photo={kampalaPhotos.joy}
          sizes="(max-width: 900px) 40vw, 18vw"
          className="event-photo event-teaser-accent"
        />
      </div>
      <div className="event-teaser-copy">
        <span className="eyebrow">
          <span className="status-dot" /> FROM THE COMMUNITY
        </span>
        <h2 id="event-teaser-title">
          We met in Kampala.
          <br />
          <span className="serif-word">And we built things.</span>
        </h2>
        <p>
          {kampala2026.name}, {kampala2026.edition}: a day at the{' '}
          {kampala2026.venue} with {kampala2026.partner.name}, learning the
          tools, building in groups, and sharing what we made.
        </p>
        <Link className="inline-link" href={kampala2026.href}>
          See how the day went{' '}
          <Icon name="arrow" size="var(--icon-size-site-17)" />
        </Link>
      </div>
    </section>
  );
}
