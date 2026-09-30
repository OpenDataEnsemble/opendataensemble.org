import type { Metadata } from 'next';
import { Icon } from '../../src/Icons';
import LinkList from '../../src/LinkList';
import PageIntro from '../../src/PageIntro';
import { DOCS, GITHUB, faqs } from '../../src/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Open Data Ensemble is a family of open-source, offline-first tools for collecting, syncing, and working with field data.',
};

const tools = [
  {
    label: 'COLLECT',
    title: 'Formulus',
    description:
      'The mobile field companion. Custom forms and apps, photos, audio, and locations, offline by design.',
    href: 'https://opendataensemble.org/docs/reference/form-specifications',
    cta: 'Form specifications',
  },
  {
    label: 'SYNCHRONIZE',
    title: 'Synkronus',
    description:
      'The connection between. One public API that brings observations and attachments together when a connection returns.',
    href: 'https://opendataensemble.org/docs/getting-started/architecture-overview',
    cta: 'Architecture overview',
  },
  {
    label: 'EXPLORE',
    title: 'ODE Desktop',
    description:
      'Manage observations locally, and build and test your next custom app in the workbench.',
    href: 'https://opendataensemble.org/docs/guides/ode-desktop-developer-mode',
    cta: 'Developer mode guide',
  },
  {
    label: 'MANAGE',
    title: 'Web Portal and CLI',
    description:
      'Manage app bundles, users, observations, and exports in the browser, or use the CLI to export data for your own analysis tools.',
    href: `${GITHUB}/tree/main/synkronus-portal`,
    cta: 'See the portal',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT ODE"
        title={
          <>
            Open tools for data
            <br />
            <span className="serif-word">that has to travel.</span>
          </>
        }
        image="/brand/laptop.png"
      >
        <p className="page-lead">
          Open Data Ensemble is a family of open-source tools for collecting
          and synchronizing data. They share one public API, so your data can
          flow into the tools you already use.
        </p>
        <p className="page-text">
          ODE is made for people doing work that matters, in conservation,
          public health, communities, and research, wherever the signal ends.
        </p>
      </PageIntro>

      <section
        className="container section-space page-section"
        aria-labelledby="tools-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE ENSEMBLE</span>
            <h2 id="tools-title">
              Different instruments.
              <br />
              <span className="serif-word">One ensemble.</span>
            </h2>
          </div>
          <p>
            Each tool does one job well.{' '}
            <br />
            Together they take an observation from the field to understanding.
          </p>
        </div>
        <LinkList items={tools} />
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <div className="container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                LESS IN THE WAY. MORE IN YOUR HANDS.
              </span>
              <h2 id="why-title">
                Built for the field.
                <br />
                <span className="serif-word">Not the other way around.</span>
              </h2>
            </div>
            <span className="why-asterisk" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="principle-grid">
            <article className="principle">
              <div className="principle-icon">
                <Icon name="offline" size="var(--icon-size-site-28)" />
              </div>
              <h3>
                No signal?
                <br />
                Still in business.
              </h3>
              <p>
                Remote trail or patchy connection, your work keeps moving.
                Collect now. Synchronize when you’re ready.
              </p>
              <span className="principle-tag">
                OFFLINE IS A FIRST-CLASS FEATURE
              </span>
            </article>
            <article className="principle">
              <div className="principle-icon">
                <Icon name="lock" size="var(--icon-size-site-27)" />
              </div>
              <h3>
                Your data.
                <br />
                Your home for it.
              </h3>
              <p>
                Self-host your infrastructure and keep a local copy. Data should
                flow into your work, not get locked inside ours.
              </p>
              <span className="principle-tag">OWN YOUR INFRASTRUCTURE</span>
            </article>
            <article className="principle">
              <div className="principle-icon">
                <Icon name="code" size="var(--icon-size-site-29)" />
              </div>
              <h3>
                Open by nature.
                <br />
                Flexible by design.
              </h3>
              <p>
                Make a form. Build a custom app. Connect your tools. Open-source
                foundations, with room for your ideas.
              </p>
              <span className="principle-tag">
                NO BLACK BOXES. MORE POSSIBILITIES.
              </span>
            </article>
          </div>
        </div>
      </section>

      <section
        className="faq-section container section-space"
        aria-labelledby="faq-title"
      >
        <div className="faq-heading">
          <span className="eyebrow">A FEW GOOD QUESTIONS</span>
          <h2 id="faq-title">
            Glad you
            <br />
            <span className="serif-word">asked.</span>
          </h2>
          <a className="inline-link" href={DOCS} target="_blank" rel="noreferrer">
            Dig into the docs{' '}
            <Icon name="diagonal" size="var(--icon-size-site-17)" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{faq.question}</span>
                <Icon name="plus" size="var(--icon-size-md)" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
