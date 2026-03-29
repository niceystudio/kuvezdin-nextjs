export default function RussianOrthodoxCross({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 4L24 44" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 10L32 10" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 22L36 22" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 38L32 34" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="22" r="1.5" fill="#C9A84C" />
      <circle cx="24" cy="10" r="1.5" fill="#C9A84C" />
    </svg>
  );
}
