import * as React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const AetherFlowLogo: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.75"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
    {...props}
  >
    {/* Premium mathematical double-helix wave flow loops */}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12c3.5-7 5.5-7 10 0s6.5 7 10 0"
      className="text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300"
    />
    <path
      stroke="url(#logoGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12c3.5 7 5.5 7 10 0s6.5-7 10 0"
    />
    {/* Embedded active core node anchors with elegant pulse/glow styles */}
    <circle cx="7" cy="5.5" r="1.5" className="fill-primary-accent" stroke="none" />
    <circle cx="17" cy="18.5" r="1.5" className="fill-secondary-accent" stroke="none" />
    <defs>
      <linearGradient id="logoGradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFC801" />
        <stop offset="100%" stopColor="#FF9932" />
      </linearGradient>
    </defs>
  </svg>
);

export default AetherFlowLogo;
