export default function IconLayoutKanban({ className }) {
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
      className={'icon icon-tabler icons-tabler-outline icon-tabler-layout-kanban ' + className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l6 0" />
      <path d="M14 4l6 0" />
      <path d="M4 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    </svg>
  );
}
