// ส่วนหัวของหน้าที่แสดงชื่อโปรเจกต์และคำโปรย
﻿import HeaderIcon from './HeaderIcon';
import { QuoteIcon } from './Icons';

const HeaderSection = ({ title, subtitle }) => (
  // แสดงกล่องหัวเรื่องพร้อมไอคอนและคำโปรย
  <header className="text-center">
    <div className="relative inline-flex items-center justify-center">
      <span className="absolute -inset-4 rounded-full bg-white/60 blur-xl" aria-hidden="true" />
      <h1 className="relative inline-flex items-center gap-4 rounded-full border border-slate-200/70 bg-white/85 px-8 py-4 text-2xl font-semibold tracking-wide text-slate-900 shadow-soft sm:text-3xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 via-white to-sky-100 shadow-soft animate-pulseSoft">
          <HeaderIcon className="text-rose-400/80" />
        </span>
        <span>{title}</span>
      </h1>
    </div>
    <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-slate-500">
      <QuoteIcon className="text-slate-300 animate-pulseSoft" />
      <span>{subtitle}</span>
    </p>
  </header>
);

export default HeaderSection;
