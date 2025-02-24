const SettingsIcon = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill="#909090"
      fillRule="evenodd"
      d="M3.604 6.792a3.187 3.187 0 1 1 0-6.375 3.187 3.187 0 0 1 0 6.375ZM.417 11.396a3.188 3.188 0 1 0 6.375 0 3.188 3.188 0 0 0-6.375 0Zm7.791 0a3.188 3.188 0 1 0 6.375 0 3.188 3.188 0 0 0-6.375 0Zm0-7.792a3.188 3.188 0 1 0 6.375 0 3.188 3.188 0 0 0-6.375 0Zm3.188 1.771a1.77 1.77 0 1 0 0-3.542 1.77 1.77 0 0 0 0 3.542Zm-6.021-1.77a1.77 1.77 0 1 1-3.542 0 1.77 1.77 0 0 1 3.542 0Zm6.02 9.562a1.77 1.77 0 1 0 0-3.542 1.77 1.77 0 0 0 0 3.542Zm-6.02-1.771a1.77 1.77 0 1 1-3.542 0 1.77 1.77 0 0 1 3.542 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SettingsIcon;
