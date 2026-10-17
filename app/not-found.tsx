import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container section-space page-section">
      <span className="eyebrow">
        <span className="status-dot" /> 404
      </span>
      <h1 className="page-title">This page is not here.</h1>
      <p className="page-text">It may have moved, or the link is wrong.</p>
      <Link className="button button-dark" href="/">
        Back to the home page
      </Link>
    </section>
  );
}
