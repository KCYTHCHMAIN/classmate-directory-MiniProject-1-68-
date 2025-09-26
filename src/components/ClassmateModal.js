import { useEffect, useRef, useState } from 'react';
import HeaderIcon from './HeaderIcon';
import { EmailIcon, HeightIcon, PhoneIcon, QuoteIcon, WeightIcon } from './Icons';

// ???????????????????????????????????????????
const ClassmateModal = ({ classmate, onClose }) => {
  // ??????? DOM ????????????????????????????????????
  const dialogRef = useRef(null);
  // ?????????????????????????????????????????
  const [visible, setVisible] = useState(false);
  // ?????????????????????????????????
  const { fullName, avatar, weightKg, heightCm, email, phone, quote, accent } = classmate;

  // ??????? Escape ?????????????????????????????
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // ??????????????????????????????????????????????
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();
    setVisible(true);

    return () => {
      previouslyFocused?.focus?.();
    };
  }, []);

  // ???????????????????????????
  const stats = [
    { id: 'weight', label: '\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01', value: `${weightKg} kg`, icon: WeightIcon },
    { id: 'height', label: '\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07', value: `${heightCm} cm`, icon: HeightIcon },
  ];

  // ??????????????????????
  const contacts = [
    { id: 'email', label: 'E-mail', value: email, href: `mailto:${email}`, icon: EmailIcon },
    { id: 'phone', label: '\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23', value: phone, href: `tel:${phone.replace(/[^0-9+]/g, '')}`, icon: PhoneIcon },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-10 sm:px-10">
      {/* ?????????????????????????????????????? */}
      <div
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={fullName}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`relative z-10 w-full max-w-3xl overflow-hidden rounded-[3rem] border border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur-lg transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
      >
        <div className="relative flex flex-col items-center bg-gradient-to-b from-white via-white/95 to-white/80 px-10 pb-12 pt-12">
          <div className="relative flex flex-col items-center">
            {/* ????????????????????????????????? */}
            <span
              className={`pointer-events-none absolute -top-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-gradient-to-br ${accent.gradient} opacity-60 blur-3xl animate-tilt`}
              aria-hidden="true"
            />
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 animate-orbit rounded-full border-2 border-white/60" aria-hidden="true" />
              <div className="absolute inset-5 animate-orbit rounded-full border border-white/40" aria-hidden="true" style={{ animationDelay: '1.2s' }} />
              <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white bg-white shadow-soft">
                <img src={avatar} alt={fullName} className="h-full w-full object-cover" />
              </div>
              <span className="pointer-events-none absolute -right-3 top-8 h-4 w-4 rounded-full bg-white/80 shadow-soft animate-sparkle" aria-hidden="true" />
              <span className="pointer-events-none absolute -left-4 bottom-10 h-3 w-3 rounded-full bg-white/70 shadow-soft animate-sparkle" style={{ animationDelay: '0.6s' }} aria-hidden="true" />
            </div>
          </div>

          {/* ???????????????????????? */}
          <div className="mt-10 flex items-center gap-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
            <HeaderIcon className="h-10 w-10 text-rose-400/80 animate-pulseSoft" />
            <span>{fullName}</span>
          </div>
          <p className="mt-4 flex items-center gap-2 text-base italic text-slate-500">
            <QuoteIcon className="text-rose-300 animate-pulseSoft" />
            <span>{quote}</span>
          </p>

          {/* ???????????????????? ???? ????????????????? */}
          <div className="mt-8 grid w-full gap-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-5 py-3 shadow-soft"
                >
                  <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    <Icon className="text-slate-400" />
                    {item.label}
                  </span>
                  <span className="text-base font-medium text-slate-700">{item.value}</span>
                </div>
              );
            })}
          </div>

          {/* ???????????????????? */}
          <div className="mt-6 w-full space-y-3">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-5 py-3 text-left text-sm text-slate-600 shadow-soft transition-all duration-300 hover:border-slate-200 hover:bg-white hover:text-slate-900"
                >
                  <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    <Icon className="text-slate-400" />
                    {item.label}
                  </span>
                  <span className="truncate pl-6 font-medium text-slate-700">{item.value}</span>
                </a>
              );
            })}
          </div>

          {/* ?????????????????? */}
          <button
            type="button"
            onClick={onClose}
            className="mt-10 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-slate-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
          >
            {'\u0e1b\u0e34\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e32\u0e07'}
          </button>
        </div>

        {/* ?????????????????????????????????????????? */}
        <div className={`pointer-events-none absolute inset-0 rounded-[3rem] ring-1 transition-all duration-500 ${accent.ring}`} aria-hidden="true" />
      </div>
    </div>
  );
};

export default ClassmateModal;
