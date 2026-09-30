'use client';

import { useState, type ReactNode } from 'react';
import Demo from './Demo';

export default function DemoButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && <Demo onClose={() => setOpen(false)} />}
    </>
  );
}
