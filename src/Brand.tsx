import Link from 'next/link';
import { BrandMark } from './Icons';

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`brand ${light ? 'brand-light' : ''}`}
      href="/"
      aria-label="ODE home"
    >
      <BrandMark />
      <span>
        ode<span className="brand-period">.</span>
      </span>
    </Link>
  );
}
