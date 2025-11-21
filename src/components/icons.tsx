import type { SVGProps } from 'react';

export const Icons = {
  react: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="text-foreground"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM75.0839 104.385V64.7523C75.0839 61.2584 76.2235 57.8824 78.2323 55.1537L86.4165 44.615H55.2323V83.3853H63.9602V52.8472H65.8039L55.2323 66.867V104.385H75.0839Z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z" />
    </svg>
  ),
  typescript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.5 1.5h21v21h-21z" style={{ fill: '#007acc' }} />
      <path
        d="M11.23 15.356v-6.942h3.298v1.626h-1.649v1.892h1.49v1.59h-1.49v1.834h1.682v1.626z"
        style={{ fill: '#fff' }}
      />
      <path
        d="M5.42 8.414h4.86v1.626H7.93v6.316H6.302V10.04H5.42z"
        style={{ fill: '#fff' }}
      />
    </svg>
  ),
  nodejs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
    </svg>
  ),
  firebase: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3.1 11.2 7.1 7.1c.4.4.9.6 1.4.6s1-.2 1.4-.6l7.1-7.1a1.9 1.9 0 0 0 0-2.8L13.4 1.7c-.8-.8-2-.8-2.8 0L3.1 8.4a1.9 1.9 0 0 0 0 2.8z" />
    </svg>
  ),
};
