const Group1Icon = ({ className, ...props }: { className?: string }) => (
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
      d="M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <path d="M14 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="M14 15.9a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1V.1a.1.1 0 0 0-.1-.1H9.1a.1.1 0 0 0-.1.1v3.8a.1.1 0 0 0 .1.1h4.8a.1.1 0 0 1 .1.1v11.8Z" />
  </svg>
);
export default Group1Icon;
