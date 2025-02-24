const Group2Icon = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path
      fill="#000"
      fillOpacity={0.12}
      d="M16 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <path d="M9 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="M14 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM0 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="M7 15.9a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1V.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 0-.1.1v3.8a.1.1 0 0 0 .1.1h4.8a.1.1 0 0 1 .1.1v11.8Z" />
    <path d="M11 .1a.1.1 0 0 0-.1-.1H7.1a.1.1 0 0 0-.1.1v15.8a.1.1 0 0 0 .1.1h8.8a.1.1 0 0 0 .1-.1v-3.8a.1.1 0 0 0-.1-.1h-4.8a.1.1 0 0 1-.1-.1V.1Z" />
  </svg>
);
export default Group2Icon;
