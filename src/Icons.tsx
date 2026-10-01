import type { CSSProperties } from 'react';

const paths = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  chevron: <path d="m8 4 8 8-8 8" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="m5 12 4 4L19 6" />,
  play: <path d="m9 5 11 7-11 7Z" />,
  pause: <path d="M8 5v14M16 5v14" />,
  zoomIn: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M11 8v6M8 11h6" />
    </>
  ),
  zoomOut: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M8 11h6" />
    </>
  ),
  shuffle: (
    <path d="M3 7h3c5 0 7 10 12 10h3m-3-3 3 3-3 3M3 17h3c2 0 3.5-1.6 4.7-3.5M13.3 9.5C14.5 8.1 16 7 18 7h3m-3-3 3 3-3 3" />
  ),
  scatter: (
    <>
      <rect
        x="2.5"
        y="5"
        width="11"
        height="9"
        rx="1"
        transform="rotate(-8 8 9.5)"
      />
      <rect
        x="10"
        y="10"
        width="11"
        height="9"
        rx="1"
        transform="rotate(7 15.5 14.5)"
      />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  offline: (
    <>
      <path d="m3 3 18 18M2 8a17 17 0 0 1 3-2m4-2a17 17 0 0 1 13 4M5 12a11 11 0 0 1 4-2m5 0a11 11 0 0 1 5 2M8.5 15.5a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r=".6" />
    </>
  ),
  sync: (
    <>
      <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 5h4M11 18h2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M5 6h14M5 18h14" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 3C9 1 3 6 4 13c1 8 16 8 16-10ZM4 21l11-12M7 13l1 4 5 1" />
    </>
  ),
  heart: (
    <path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-4 4 0 9 8 15 8-6 12-11 8-15Z" />
  ),
  people: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a7 7 0 0 0-3-6" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v7L4 20q-1 1 1 1h14q2 0 1-1l-6-10V3M7 15h10" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
    </>
  ),
  code: (
    <>
      <path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M2 13h20" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3 3 0 0 0-1-2c4-.5 7-2 7-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2-.5-5 2a13 13 0 0 0-6 0C6 2.5 4 3 4 3a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 4 3 5.5 7 6a3 3 0 0 0-1 2v4" />
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 'var(--icon-size-md)',
  className,
  style,
}: {
  name: IconName;
  size?: number | string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="var(--stroke-site-1-65)"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return <img src="/brand/ode-mark.png" alt="" className={className} />;
}
