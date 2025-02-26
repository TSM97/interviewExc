const LoginEyesShowSVG = ({
  className,
  onMouseDown,
  ...props
}: {
  className: string;
  onMouseDown?: React.MouseEventHandler<SVGSVGElement>;
}) => (
  <svg
    onMouseDown={onMouseDown}
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
    />
    <circle
      cx={12}
      cy={12}
      r={3}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default LoginEyesShowSVG;
