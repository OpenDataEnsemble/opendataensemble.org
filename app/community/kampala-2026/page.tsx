import type { Metadata } from 'next';
import Link from 'next/link';
import EventGallery from '../../../src/EventGallery';
import EventStamp from '../../../src/EventStamp';
import { Icon } from '../../../src/Icons';
import Photo from '../../../src/Photo';
import {
  kampala2026 as event,
  kampalaPhotoCount,
  kampalaPhotos as photos,
} from '../../../src/events';
import { FORUM } from '../../../src/site';

export const metadata: Metadata = {
  title: 'ODE Community Days, Kampala 2026',
  description:
    'On 16 September 2026, ODE and Groundbreaker Talents spent a day at the National ICT Innovation Hub in Kampala learning the ODE tools, building in groups, and sharing the results.',
};

const pillars = [
  {
    word: 'Connect',
    text: 'Talents, facilitators, and the ODE team spent the day side by side, over phones, laptops, and lunch.',
    photo: photos.table,
  },
  {
    word: 'Learn',
    text: 'A tour of the ODE ecosystem, then hands-on time in the ODE Lab with real forms on real phones.',
    photo: photos.mentorPhones,
  },
  {
    word: 'Contribute',
    text: 'Groups presented what they built and what they would change: the kind of feedback open source runs on.',
    photo: photos.presentingGroup,
  },
];

const programme = [
  'Registration and snacks',
  'Introductions and the plan for the day',
  'The ODE ecosystem',
  'ODE Lab: introduction to group work',
  'Lunch',
  'ODE Lab: working in groups',
  'Group presentations',
  'Certificates and wrap-up',
];

const gallery = [
  photos.joy,
  photos.handsOn,
  photos.talentSpeaking,
  photos.summitShirt,
  photos.laptops,
  photos.speakerTalk,
  photos.mentorCloseup,
  photos.lunch,
  photos.laptopFocus,
  photos.speakerScreen,
  photos.phonesCloseup,
];

export default function Kampala2026Page() {
  return (
    <>
      <section className="event-hero container" aria-labelledby="page-title">
        <Link className="event-back" href="/community">
          <Icon name="arrow" size="var(--icon-size-site-15)" /> Community
        </Link>
        <div className="event-hero-grid">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> COMMUNITY EVENT · COMPLETED
            </span>
            <h1 id="page-title" className="page-title event-title">
              {event.name}
              <br />
              <span className="serif-word">{event.edition}.</span>
            </h1>
            <p className="page-lead">
              On {event.dateLabel}, we spent a day at the {event.venue} in
              Kampala with students from {event.partner.name}: learning the ODE
              tools, building in groups, and sharing what we made.
            </p>
          </div>
          <dl className="event-facts event-facts-hero">
            <div>
              <dt>Date</dt>
              <dd>
                <time dateTime={event.date}>{event.dateLabel}</time>
              </dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>
                {event.venue}, {event.city}
              </dd>
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
        </div>
        <figure className="event-hero-figure">
          <div className="event-hero-photo">
            <Photo
              photo={photos.groupOutside}
              sizes="(max-width: 1240px) 100vw, 1200px"
              className="event-photo"
              eager
            />
            <EventStamp date={event.shortDate} />
          </div>
          <figcaption>
            Everyone who made the day, outside the {event.venue}.
          </figcaption>
        </figure>
      </section>

      <section className="event-partner" aria-labelledby="partner-title">
        <div className="container event-partner-grid section-space">
          <div className="event-partner-photo">
            <Photo
              photo={photos.talentsBanner}
              sizes="(max-width: 900px) 100vw, 45vw"
              className="event-photo"
            />
          </div>
          <div className="event-partner-copy">
            <span className="eyebrow">IN PARTNERSHIP WITH</span>
            <h2 id="partner-title">
              Groundbreaker
              <br />
              <span className="serif-word">Talents.</span>
            </h2>
            <p>
              Groundbreaker Talents is a Ugandan-German nonprofit. It gives
              young women in Uganda fully funded, residential training in
              software engineering and AI, with mentorship and career support,
              on its campus in Bukerere.
            </p>
            <p>
              Its students, known as Talents, joined us as developers for the
              day. They explored the ODE ecosystem, built in teams, and showed
              the room what they made.
            </p>
            <a
              className="button button-lime"
              href={event.partner.href}
              target="_blank"
              rel="noreferrer"
            >
              Visit Groundbreaker Talents{' '}
              <Icon name="diagonal" size="var(--icon-size-site-18)" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="event-pillars container section-space"
        aria-labelledby="pillars-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE DAY IN THREE WORDS</span>
            <h2 id="pillars-title">
              Connect. Learn.
              <br />
              <span className="serif-word">Contribute.</span>
            </h2>
          </div>
          <p>
            The words on our banner <br />
            turned out to be the plan.
          </p>
        </div>
        <ol className="event-pillar-list">
          {pillars.map((pillar, index) => (
            <li key={pillar.word}>
              <figure>
                <div className="event-pillar-photo">
                  <Photo
                    photo={pillar.photo}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="event-photo"
                  />
                </div>
                <figcaption>
                  <span className="event-pillar-number">0{index + 1}</span>
                  <strong>{pillar.word}</strong>
                  <span>{pillar.text}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="event-programme container section-space"
        aria-labelledby="programme-title"
      >
        <div className="event-programme-photos">
          <Photo
            photo={photos.programme}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="event-photo event-programme-main"
          />
          <Photo
            photo={photos.banner}
            sizes="(max-width: 900px) 35vw, 16vw"
            className="event-photo event-programme-banner"
          />
        </div>
        <div className="event-programme-copy">
          <span className="eyebrow">THE PROGRAMME</span>
          <h2 id="programme-title">
            How the day
            <br />
            <span className="serif-word">ran.</span>
          </h2>
          <ol className="event-timeline">
            {programme.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="event-gallery container section-space"
        aria-labelledby="gallery-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">GALLERY</span>
            <h2 id="gallery-title">
              Moments
              <br />
              <span className="serif-word">from the day.</span>
            </h2>
          </div>
          <p>
            Focus, laughter, and a lot of <br />
            phones held up to compare notes.
          </p>
        </div>
        <EventGallery
          photos={gallery}
          title={`${event.name}, ${event.edition}`}
        />
        <Link
          className="inline-link page-section-link"
          href="/community#photo-wall"
        >
          See all {kampalaPhotoCount} photos on the photo wall{' '}
          <Icon name="arrow" size="var(--icon-size-site-17)" />
        </Link>
      </section>

      <section className="event-close" aria-labelledby="close-title">
        <div className="container event-close-grid">
          <div className="event-close-copy">
            <span className="eyebrow">TO CLOSE THE DAY</span>
            <h2 id="close-title">
              Thank you,
              <br />
              <span className="serif-word">Kampala.</span>
            </h2>
            <p>
              The day ended with a certificate ceremony and a room full of
              people who now know their way around ODE. Want to be at the next
              one? Join the forum to hear first.
            </p>
            <div className="event-close-actions">
              <a
                className="button button-dark"
                href={FORUM}
                target="_blank"
                rel="noreferrer"
              >
                Join the forum{' '}
                <Icon name="diagonal" size="var(--icon-size-site-18)" />
              </a>
              <Link className="inline-link" href="/contact">
                Get in touch{' '}
                <Icon name="arrow" size="var(--icon-size-site-17)" />
              </Link>
            </div>
          </div>
          <figure className="event-print">
            <Photo
              photo={photos.certificate}
              sizes="(max-width: 900px) 90vw, 40vw"
              className="event-photo"
            />
            <figcaption>Certificates, Kampala · {event.shortDate}</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
