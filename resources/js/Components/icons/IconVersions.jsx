export default function IconVersions({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={'icon icon-tabler icons-tabler-outline icon-tabler-versions ' + className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
      <path d="M7 7l0 10" />
      <path d="M4 8l0 8" />
    </svg>
  );
}
