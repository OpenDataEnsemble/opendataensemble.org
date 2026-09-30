'use client';

import { useId } from 'react';

export interface FieldGlobeProps {
  className?: string;
}

export default function FieldGlobe({ className = '' }: FieldGlobeProps) {
  const id = `fg-${useId().replace(/:/g, '')}`;

  return (
    <div
      className={`field-globe fg-root ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        className="fg-svg"
        viewBox="0 0 550 520"
        width="550"
        height="520"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id={`${id}-ocean`} cx="31%" cy="24%" r="79%">
            <stop offset="0" stopColor="var(--color-brand-primary-100)" />
            <stop offset="0.38" stopColor="var(--color-brand-primary-300)" />
            <stop offset="0.72" stopColor="var(--color-brand-primary-500)" />
            <stop offset="1" stopColor="var(--color-brand-primary-800)" />
          </radialGradient>
          <linearGradient
            id={`${id}-land`}
            x1="153"
            y1="99"
            x2="430"
            y2="422"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-brand-secondary-200)" />
            <stop offset="0.46" stopColor="var(--color-brand-secondary-400)" />
            <stop offset="1" stopColor="var(--color-brand-secondary-600)" />
          </linearGradient>
          <radialGradient id={`${id}-shade`} cx="36%" cy="28%" r="74%">
            <stop
              offset="0.4"
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-0)"
            />
            <stop
              offset="0.78"
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-site-0-04)"
            />
            <stop
              offset="1"
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-site-0-24)"
            />
          </radialGradient>
          <radialGradient id={`${id}-light`} cx="29%" cy="22%" r="63%">
            <stop
              stopColor="var(--paper)"
              stopOpacity="var(--opacity-site-0-42)"
            />
            <stop
              offset="0.55"
              stopColor="var(--paper)"
              stopOpacity="var(--opacity-site-0-07)"
            />
            <stop
              offset="1"
              stopColor="var(--paper)"
              stopOpacity="var(--opacity-0)"
            />
          </radialGradient>
          <radialGradient id={`${id}-shadow`}>
            <stop
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-site-0-16)"
            />
            <stop
              offset="0.5"
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-6)"
            />
            <stop
              offset="1"
              stopColor="var(--color-brand-primary-900)"
              stopOpacity="var(--opacity-0)"
            />
          </radialGradient>
          <linearGradient id={`${id}-orbit`} x1="0" y1="0" x2="1" y2="1">
            <stop
              stopColor="var(--color-brand-primary-600)"
              stopOpacity="var(--opacity-20)"
            />
            <stop
              offset="0.48"
              stopColor="var(--color-brand-primary-600)"
              stopOpacity="var(--opacity-site-0-65)"
            />
            <stop
              offset="1"
              stopColor="var(--color-brand-primary-600)"
              stopOpacity="var(--opacity-35)"
            />
          </linearGradient>
          <clipPath id={`${id}-clip`}>
            <circle cx="278" cy="257" r="198" />
          </clipPath>
        </defs>

        <ellipse
          className="fg-shadow"
          cx="278"
          cy="478"
          rx="152"
          ry="19"
          fill={`url(#${id}-shadow)`}
        />

        <g className="fg-float">
          <ellipse
            className="fg-orbit fg-orbit-secondary"
            cx="278"
            cy="257"
            rx="221"
            ry="99"
            transform="rotate(58 278 257)"
          />
          <g transform="rotate(-19 278 257)">
            <path
              className="fg-orbit fg-orbit-back"
              d="M19 257 A259 73 0 0 1 537 257"
            />
            <circle className="fg-orbit-bead" cx="537" cy="257" r="3.5" />
          </g>

          <circle cx="278" cy="257" r="198" fill={`url(#${id}-ocean)`} />

          <g clipPath={`url(#${id}-clip)`}>
            <g transform="rotate(-12 278 257)">
              {/* Simplified orthographic coastlines, centered over the Atlantic. */}
              <g className="fg-land" fill={`url(#${id}-land)`}>
                <path d="M229.4 65 L219.4 68.8 211.3 72.6 211.8 74.3 223.7 72.5 230.3 73.5 235.4 75.1 250.4 72.9 256.6 73.3 251 79.4 232.5 87.3 219.9 90.5 215.3 88.5 201.6 93.9 194 103.4 188.6 114 196.6 110.8 209.6 100.7 210 106.4 211.1 115.1 212.9 123.9 216.6 133.1 211.1 144 198.6 147.9 192.8 143.5 182.5 150.6 188.4 155.3 174 158.3 163.5 162.1 153.5 172.9 137.3 185.1 133.5 198.5 129.2 204.2 129.7 193.2 129.5 185.5 121.1 184.9 116.3 181.8 108.7 188.7 103.4 201.3 102.2 216.8 107.3 220.1 114.8 212.7 113.3 223.3 114.9 231.6 113.2 249.1 119.8 258.9 123.5 263.8 117 264.9 110.9 251.6 107.7 239.2 102 228.3 96 219.9 95.4 201.7 99.3 187.4 102.5 175.7 108.7 162.2 110.1 156.1 104.9 163.1 97.2 181.3 96.2 186.1 101.6 171.4 112.2 150.9 123.1 134.6 132.7 123.3 147.5 109.2 166.1 94.2 187.6 81.1 196.1 76.7 206.6 72.3 217.1 68.6 Z" />
                <path d="M117.4 247.3 L127 254.4 134.1 253.1 140.6 258.6 150.1 264.5 161 263.5 165.5 274.8 173.7 283.1 188.3 292.2 194.3 303.1 197.5 310.2 210.3 314.9 226.8 319.6 243.7 327.1 244.1 343 235 357.6 229.8 371.6 221.7 379.1 210.8 383.3 207.6 392.9 202.6 401.4 196.9 404.9 195.3 410.7 188.1 414.8 189.6 423 194.6 430.4 200.1 434.8 196.3 434.7 184 427.4 172.6 418.3 165.2 408.9 159 398.4 152.6 384.4 147.9 369 144.8 352.5 130.8 337.1 121.8 319.2 114.5 304 115.8 288.3 122.4 277.2 123.1 267.2 Z" />
                <path d="M231.5 116.3 L243.6 115.2 253.5 106.6 260.8 98.3 275.9 92.8 280.5 85.5 281.6 79 276.3 74.7 270.5 74.4 263.5 76.6 253.8 80 248.3 86.7 246.2 94.6 241.3 105.2 Z" />
                <path d="M330.2 186.9 L343.2 185.5 352.2 180.9 368.7 178.2 374.5 187.2 395.9 192.6 406.6 185.9 420.3 184.5 427.9 192.5 434.6 204.5 444.8 218.5 454 228.3 458.8 236.6 464.2 232.1 466.6 233.6 467.3 252.1 462.7 269.9 460.1 285 456.5 299.8 454.2 316 442.7 341 435.8 356.5 427.3 367.2 420.2 378.6 407.4 391.3 392.7 397.8 393.9 384.7 394.3 372.6 392 354.3 395.3 333 388.6 312.1 388.6 292.2 376.6 287.5 364.5 289.3 345.5 291.5 332.4 292.7 315.3 280.1 304.6 259.9 307.1 242.6 303.5 235.8 314.7 218.2 322.4 207.5 323.2 194.1 Z" />
                <path d="M330.2 186.9 L321.6 184.4 317.9 165.6 333.7 160.9 332.9 151.8 323.3 149.9 324.6 146.8 332.6 140 337.6 133.4 341.4 129.9 336.7 122.3 341.4 121.4 344.8 129.3 349.7 128.3 352.5 124.7 358.3 123.2 353.8 112.7 357.1 108.6 342.1 99.3 335.9 98.5 339.3 105.5 342.6 118.4 335.1 119.8 327.5 115.8 322.9 108.9 324.2 101.3 325.5 93.8 327.4 88.5 334.1 88.6 343.6 93.1 353.8 94.3 346.8 88.2 349.3 86.2 341.8 79.5 339.1 75.1 333.9 70.9 320.7 66.3 313.1 64 350.5 73 384.7 90.4 413.2 112.4 437.7 140.1 455.7 169.7 461.1 182.2 457.4 175.7 456.5 181.7 459.8 192.7 463.9 211.3 463.5 228.8 458.1 233.2 447.7 216.8 430.9 191 423.4 186.9 420.3 176.9 418.1 166.5 412.3 169.2 407.6 171.1 397.6 163.9 390.7 162.6 397.3 171.1 393.6 172.2 385.3 164.2 376 163.2 381 168.7 380.4 172.3 368.6 161.6 357.6 157.3 354.7 161 346 162.4 344.5 172.2 341.5 179.1 Z" />
                <path d="M321.5 144.2 L324.7 140.9 319.7 138.6 319.7 133 315 130.7 313.9 122.8 316.2 119.9 320.1 124.7 322.4 129.9 328.4 134.8 332.6 140 Z M310.3 142.3 L314.4 141.9 316.8 136.1 315 130.7 311.2 131 308.1 134 Z M279.5 109.9 L282.2 105.3 287.8 105.2 294 107.1 290.5 112 284.3 112.1 Z" />
                <path d="M464.2 311.3 L461.8 323 456.9 336.2 447.7 353.5 445.5 355.2 450.6 343.5 458 326.5 Z M119 211 L125.1 210 129.5 215.4 135.5 224.9 129.4 222.8 125.8 214 Z M137.6 225.5 L146.4 228.2 150.3 232.8 140.3 233.6 Z" />
              </g>

              <g className="fg-graticule">
                <path d="M192.07 435.38 A99 27.29 0 0 0 363.93 435.38 M108.89 359.99 A171.47 47.26 0 0 0 447.11 359.99 M108.89 154.01 A171.47 47.26 0 1 0 447.11 154.01 M192.07 78.62 A99 27.29 0 1 0 363.93 78.62" />
                <path d="M278 66.67 C228.41 70.33 180.75 93.03 145.09 129.96 C109.43 166.89 88.55 215.18 86.86 264.63 C85.17 314.08 102.8 360.83 136.03 395.01" />
                <path d="M278 66.67 C231.32 77.47 187.25 114.63 158.5 167.42 C129.75 220.22 119.54 282.77 130.81 337 C142.08 391.23 173.58 431.11 216.21 445.11" />
                <path d="M278 66.67 C251.14 82.55 225.91 126.79 210.18 185.62 C194.44 244.44 190.12 310.68 198.55 363.71 C206.98 416.74 227.15 450.09 252.76 453.38" />
                <path d="M278 66.67 V455" />
                <path d="M278 66.67 C304.86 82.55 330.09 126.79 345.82 185.62 C361.56 244.44 365.88 310.68 357.45 363.71 C349.02 416.74 328.85 450.09 303.24 453.38" />
                <path d="M278 66.67 C324.68 77.47 368.75 114.63 397.5 167.42 C426.25 220.22 436.46 282.77 425.19 337 C413.92 391.23 382.42 431.11 339.79 445.11" />
                <path d="M278 66.67 C327.59 70.33 375.25 93.03 410.91 129.96 C446.57 166.89 467.45 215.18 469.14 264.63 C470.83 314.08 453.2 360.83 419.97 395.01" />
                <path
                  className="fg-equator"
                  d="M80 257 A198 54.58 0 0 0 476 257"
                />
              </g>
            </g>

            <circle cx="278" cy="257" r="198" fill={`url(#${id}-shade)`} />
            <circle cx="278" cy="257" r="198" fill={`url(#${id}-light)`} />

            <g transform="rotate(-12 278 257)">
              <path
                className="fg-field-arc"
                d="M206.7 358.1 C176 263 241 173 323 177.8 C382 155 439 209 452.8 285.9"
              />
              <g className="fg-location" transform="translate(206.7 358.1)">
                <circle className="fg-location-halo" r="12" />
                <circle className="fg-location-core" r="4.5" />
              </g>
              <g className="fg-location" transform="translate(323 177.8)">
                <circle className="fg-location-halo" r="11" />
                <circle className="fg-location-core" r="4" />
              </g>
              <g
                className="fg-location fg-location-lavender"
                transform="translate(452.8 285.9)"
              >
                <circle className="fg-location-halo" r="12" />
                <circle className="fg-location-core" r="4.5" />
              </g>
            </g>
          </g>

          <circle className="fg-rim" cx="278" cy="257" r="197.5" />
          <path className="fg-rim-light" d="M102 205 A185 185 0 0 1 332 80" />

          {/* Separate orbit halves let the sphere naturally occlude the far side. */}
          <g transform="rotate(-19 278 257)">
            <path
              className="fg-orbit fg-orbit-front"
              d="M537 257 A259 73 0 0 1 19 257"
              stroke={`url(#${id}-orbit)`}
            />
            <circle
              className="fg-orbit-bead fg-orbit-bead-lavender"
              cx="449"
              cy="311.8"
              r="5"
            />
            <circle className="fg-orbit-bead" cx="19" cy="257" r="3" />
          </g>
          <circle className="fg-satellite-ring" cx="452" cy="113" r="6" />
          <circle className="fg-satellite-dot" cx="452" cy="113" r="2" />
          <circle
            className="fg-satellite-dot fg-satellite-soft"
            cx="109"
            cy="400"
            r="3"
          />
        </g>
      </svg>
    </div>
  );
}
