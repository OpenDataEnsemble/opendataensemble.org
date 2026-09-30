import Link from 'next/link';
import Brand from './Brand';
import DemoButton from './DemoButton';
import { Icon } from './Icons';
import { DOCS, GITHUB } from './site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand light />
            <p>Open data. Shared possibility.</p>
          </div>
          <div className="footer-links">
            <div>
              <h3>EXPLORE</h3>
              <Link href="/#platform">The platform</Link>
              <Link href="/about">About</Link>
              <DemoButton>
                Try the demo{' '}
                <Icon name="diagonal" size="var(--icon-size-xs)" />
              </DemoButton>
            </div>
            <div>
              <h3>BUILD</h3>
              <a href={DOCS} target="_blank" rel="noreferrer">
                Documentation
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                Source code{' '}
                <Icon name="diagonal" size="var(--icon-size-xs)" />
              </a>
              <a href={`${GITHUB}/releases`} target="_blank" rel="noreferrer">
                Releases
              </a>
            </div>
            <div>
              <h3>TOGETHER</h3>
              <Link href="/community">Community</Link>
              <Link href="/contact">Contact</Link>
              <a
                href={`${GITHUB}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noreferrer"
              >
                Contribute
              </a>
              <a href={`${GITHUB}/issues`} target="_blank" rel="noreferrer">
                Share an idea{' '}
                <Icon name="diagonal" size="var(--icon-size-xs)" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Open Data Ensemble</span>
          <span>
            Made for a world that isn’t always online.{' '}
            <Icon name="globe" size="var(--icon-size-site-14)" />
          </span>
          <a
            href={`${GITHUB}/blob/main/PRIVACYPOLICY.md`}
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
