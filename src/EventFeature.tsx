import Link from 'next/link';
import EventStamp from './EventStamp';
import { Icon } from './Icons';
import Photo from './Photo';
import type { CommunityEvent } from './events';

export default function EventFeature({ event }: { event: CommunityEvent }) {
  return (
    <article className="event-feature">
      <Link
        className="event-feature-media"
        href={event.href}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Photo
          photo={event.cover}
          sizes="(max-width: 900px) 100vw, 60vw"
          className="event-photo"
        />
        <EventStamp date={event.shortDate} />
      </Link>
      <div className="event-feature-body">
        <span className="event-kicker">
          {event.shortDate} · {event.city.toUpperCase()}
        </span>
        <h3>
          <Link href={event.href}>
            {event.name}
            <br />
            <span className="serif-word">{event.edition}</span>
          </Link>
        </h3>
        <p>{event.summary}</p>
        <dl className="event-facts">
          <div>
            <dt>Venue</dt>
            <dd>{event.venue}</dd>
          </div>
          <div>
            <dt>Partner</dt>
            <dd>
              <a href={event.partner.href} target="_blank" rel="noreferrer">
                {event.partner.name}
              </a>
            </dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>{event.format}</dd>
          </div>
        </dl>
        <ul className="event-highlights">
          {event.highlights.map((photo) => (
            <li key={photo.alt}>
              <Photo
                photo={photo}
                sizes="(max-width: 680px) 30vw, 140px"
                className="event-photo"
              />
            </li>
          ))}
        </ul>
        <Link className="inline-link" href={event.href}>
          Read the event story{' '}
          <Icon name="arrow" size="var(--icon-size-site-17)" />
        </Link>
      </div>
    </article>
  );
}
