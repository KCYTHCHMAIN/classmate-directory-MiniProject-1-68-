// ไอคอนรูปสมุดนักเรียนสำหรับใช้ในส่วนหัวและการ์ด
const HeaderIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 64 64"
    className={`h-16 w-16 ${className}`}
    aria-hidden="true"
  >
    <rect x="6" y="14" width="52" height="36" rx="14" className="fill-current opacity-90" />
    <circle cx="32" cy="24" r="9" fill="#ffffff" />
    <path
      d="M48 44c0-8.837-7.163-16-16-16s-16 7.163-16 16"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="17" cy="28" r="6" fill="#ffffff" opacity="0.85" />
    <circle cx="47" cy="28" r="6" fill="#ffffff" opacity="0.85" />
    <path
      d="M26 44c-1.2-5.2-5.6-9-11-9"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.75"
    />
    <path
      d="M38 44c1.2-5.2 5.6-9 11-9"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

export default HeaderIcon;
