// ไฟล์รวมไอคอนขนาดเล็กที่ใช้ประกอบข้อมูลของเพื่อนแต่ละคน
﻿// ไอคอนแสดงน้ำหนัก
export const WeightIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="4" className="fill-current" opacity="0.9" />
    <rect x="6" y="8" width="12" height="8" rx="2" fill="#ffffff" opacity="0.8" />
    <circle cx="12" cy="12" r="2.5" className="fill-current" />
  </svg>
);

// ไอคอนแสดงส่วนสูง
export const HeightIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true">
    <rect x="6" y="2" width="4" height="20" rx="2" className="fill-current" opacity="0.85" />
    <rect x="14" y="6" width="4" height="16" rx="2" className="fill-current" opacity="0.45" />
    <path
      d="M8 6h8M8 10h8M8 14h8M8 18h8"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ไอคอนแสดงข้อมูลอีเมล
export const EmailIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" className="fill-current" opacity="0.85" />
    <path
      d="M4 7l8 6 8-6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ไอคอนแสดงข้อมูลเบอร์โทร
export const PhoneIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="3" className="fill-current" opacity="0.85" />
    <circle cx="12" cy="18" r="1.3" fill="#ffffff" />
    <rect x="9" y="5" width="6" height="8" rx="1.4" fill="#ffffff" opacity="0.8" />
  </svg>
);

// ไอคอนแสดงสัญลักษณ์คำคม
export const QuoteIcon = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" className={`h-5 w-5 ${className}`} aria-hidden="true">
    <path
      d="M7 14c0-4.4 2.7-7.5 6.1-9.3l1.2 2.2C12 8 10.8 9.7 10.8 11.9c1.4.2 2.6 1.4 2.6 3 0 1.8-1.4 3.1-3.3 3.1C8.4 18 7 16.4 7 14zm12 0c0-4.4 2.7-7.5 6.1-9.3l1.2 2.2c-2.3 1.1-3.5 2.8-3.5 5 1.4.2 2.6 1.4 2.6 3 0 1.8-1.4 3.1-3.3 3.1-1.7 0-3.1-1.6-3.1-3.8z"
      className="fill-current"
      opacity="0.8"
    />
  </svg>
);
