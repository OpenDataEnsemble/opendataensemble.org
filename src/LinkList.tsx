import Link from 'next/link';
import { Icon } from './Icons';

export type LinkItem = {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export default function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <ul className="link-list">
      {items.map((item) => {
        const external = /^(https?:|mailto:)/.test(item.href);
        const body = (
          <>
            <span className="link-row-label">{item.label}</span>
            <span className="link-row-copy">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
            <span className="link-row-cta">
              {item.cta}{' '}
              <Icon
                name={external ? 'diagonal' : 'arrow'}
                size="var(--icon-size-site-17)"
              />
            </span>
          </>
        );
        return (
          <li key={item.title}>
            {external ? (
              <a
                className="link-row"
                href={item.href}
                {...(item.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' })}
              >
                {body}
              </a>
            ) : (
              <Link className="link-row" href={item.href}>
                {body}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
