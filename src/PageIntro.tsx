import type { ReactNode } from 'react';

export default function PageIntro({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
}) {
  return (
    <section className="page-intro container" aria-labelledby="page-title">
      <div className="page-intro-copy">
        <span className="eyebrow">
          <span className="status-dot" /> {eyebrow}
        </span>
        <h1 id="page-title" className="page-title">
          {title}
        </h1>
        {children}
      </div>
      <img className="page-intro-art" src={image} alt="" />
    </section>
  );
}
