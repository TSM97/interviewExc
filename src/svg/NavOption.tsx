const NavOption = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={13}
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill="#000"
      fillOpacity={0.58}
      fillRule="evenodd"
      d="M6.375.833h8.5c.782 0 1.417.635 1.417 1.417v9.208c0 .783-.635 1.417-1.417 1.417H2.125a1.417 1.417 0 0 1-1.417-1.417V2.25c0-.782.635-1.417 1.417-1.417h4.25ZM4.958 2.25H2.125v2.125h2.833V2.25Zm1.417 2.125V2.25h8.5v2.125h-8.5ZM4.958 5.792H2.125v2.125h2.833V5.792Zm1.417 2.125V5.792h8.5v2.125h-8.5ZM4.958 9.333H2.125v2.125h2.833V9.333Zm1.417 2.125V9.333h8.5v2.125h-8.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NavOption;
