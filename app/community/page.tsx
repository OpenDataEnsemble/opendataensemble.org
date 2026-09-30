import type { Metadata } from 'next';
import { Icon } from '../../src/Icons';
import LinkList from '../../src/LinkList';
import { DOCS, FORUM, GITHUB } from '../../src/site';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'ODE is a young, open-source project. Write code, improve the docs, test the apps, or help others on the forum.',
};

const waysToHelp = [
  {
    label: 'CODE',
    title: 'Fix a bug or build a feature',
    description:
      'Start with issues labelled “good first issue” or “help wanted”. For anything significant, open an issue and talk it through first.',
    href: `${GITHUB}/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22`,
    cta: 'Good first issues',
  },
  {
    label: 'DOCUMENTATION',
    title: 'Make the docs clearer',
    description:
      'If a section is confusing or out of date, improve it. The docs always need polish.',
    href: DOCS,
    cta: 'Open the docs',
  },
  {
    label: 'TESTING',
    title: 'Try it and tell us what breaks',
    description:
      'Run the apps, sync some data, and report anything that breaks or feels rough.',
    href: `${GITHUB}/issues`,
    cta: 'Report an issue',
  },
  {
    label: 'FORUM',
    title: 'Help other people',
    description:
      'Answer questions, share how you use ODE, and swap ideas with others doing similar work.',
    href: FORUM,
    cta: 'Visit the forum',
  },
];

export default function CommunityPage() {
  return (
    <>
      <section
        className="community-section section-space container"
        aria-labelledby="page-title"
      >
        <div className="community-art" aria-hidden="true">
          <div className="community-art-caption">
            MANY PERSPECTIVES. SHARED POSSIBILITY.
          </div>
          <img className="ensemble-cast" src="/brand/ensemble.png" alt="" />
          <div className="community-art-bottom">
            <span>OPEN BY NATURE</span>
            <Icon name="diagonal" size="var(--icon-size-site-18)" />
          </div>
        </div>
        <div className="community-copy">
          <span className="eyebrow">
            <span className="status-dot" /> THERE’S ROOM FOR YOU HERE
          </span>
          <h1 id="page-title" className="page-title">
            Good things happen
            <br />
            when we <span className="serif-word">ensemble.</span>
          </h1>
          <p>
            We’re a growing, open-source project with a simple belief: better
            tools come from more perspectives.
          </p>
          <p>
            Fieldworker, developer, researcher, designer, or just curious: you
            don’t need to have all the answers to make a difference here.
          </p>
          <a
            className="button button-dark"
            href={FORUM}
            target="_blank"
            rel="noreferrer"
          >
            Join the conversation{' '}
            <Icon name="diagonal" size="var(--icon-size-site-18)" />
          </a>
          <a
            className="community-source"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size="var(--icon-size-site-17)" /> Or take a
            look under the hood{' '}
            <Icon name="arrow" size="var(--icon-size-sm)" />
          </a>
        </div>
      </section>

      <section
        className="container section-space page-section"
        aria-labelledby="help-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">WAYS TO TAKE PART</span>
            <h2 id="help-title">
              More than one way
              <br />
              <span className="serif-word">to contribute.</span>
            </h2>
          </div>
          <p>
            Code, docs, testing, or conversation.
            <br />
            Every contribution keeps the ensemble moving.
          </p>
        </div>
        <LinkList items={waysToHelp} />
        <a
          className="inline-link page-section-link"
          href={`${GITHUB}/blob/main/CONTRIBUTING.md`}
          target="_blank"
          rel="noreferrer"
        >
          Read the contributing guide{' '}
          <Icon name="diagonal" size="var(--icon-size-site-17)" />
        </a>
      </section>
    </>
  );
}
