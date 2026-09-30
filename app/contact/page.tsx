import type { Metadata } from 'next';
import LinkList from '../../src/LinkList';
import PageIntro from '../../src/PageIntro';
import { DOCS, FORUM, GITHUB, SECURITY_EMAIL } from '../../src/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Ask questions on the ODE community forum, report bugs on GitHub, and send security reports privately.',
};

const channels = [
  {
    label: 'QUESTIONS & IDEAS',
    title: 'Community forum',
    description:
      'Ask how something works or how to set it up, share how you use ODE, or float an idea.',
    href: FORUM,
    cta: 'Ask on the forum',
  },
  {
    label: 'BUGS & CHANGES',
    title: 'GitHub issues',
    description:
      'Found something broken, or have a concrete change in mind? Search existing reports first, then open an issue.',
    href: `${GITHUB}/issues`,
    cta: 'Open an issue',
  },
  {
    label: 'SECURITY',
    title: SECURITY_EMAIL,
    description:
      'Please don’t report vulnerabilities in public issues. Email us privately so nothing is exposed before a fix exists.',
    href: `mailto:${SECURITY_EMAIL}`,
    cta: 'Email security',
  },
  {
    label: 'SELF-SERVE',
    title: 'Documentation',
    description:
      'Setup guides, the architecture overview, and reference material, all in one place.',
    href: DOCS,
    cta: 'Read the docs',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title={
          <>
            Let’s talk.
            <br />
            <span className="serif-word">We’re listening.</span>
          </>
        }
        image="/brand/bird.png"
      >
        <p className="page-lead">
          ODE is built in the open, so most conversations happen in the open
          too. Pick the channel that fits and we’ll meet you there.
        </p>
        <p className="page-text">
          Questions go to the forum. Issues are for bugs and concrete change
          requests.
        </p>
      </PageIntro>

      <section
        className="container page-section page-section-flush"
        aria-label="Ways to get in touch"
      >
        <LinkList items={channels} />
      </section>
    </>
  );
}
