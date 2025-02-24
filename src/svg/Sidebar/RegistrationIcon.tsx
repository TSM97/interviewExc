const RegistrationIcon = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill="#474EBB"
      d="M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM14 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM0 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </svg>
);
export default RegistrationIcon;
