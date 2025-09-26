import HeaderIcon from './HeaderIcon';
import { EmailIcon, HeightIcon, PhoneIcon, QuoteIcon, WeightIcon } from './Icons';

// คอมโพเนนต์แสดงการ์ดข้อมูลของเพื่อนแต่ละคน พร้อมแอนิเมชันและการคลิกเพื่อเปิดรายละเอียด
const ClassmateCard = ({ classmate, index, mounted, onSelect }) => {
  // ดึงค่าที่จำเป็นจากข้อมูลเพื่อน
  const { fullName, avatar, weightKg, heightCm, email, phone, quote, accent } = classmate;

  // รายการตัวเลขสำคัญที่ต้องการแสดงในการ์ด
  const stats = [
    { id: 'weight', label: '\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01', value: `${weightKg} kg`, icon: WeightIcon },
    { id: 'height', label: '\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07', value: `${heightCm} cm`, icon: HeightIcon },
  ];

  // รายการช่องทางการติดต่อที่เป็นลิงก์ใช้งานได้จริง
  const contacts = [
    { id: 'email', label: 'E-mail', value: email, href: `mailto:${email}`, icon: EmailIcon },
    { id: 'phone', label: '\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23', value: phone, href: `tel:${phone.replace(/[^0-9+]/g, '')}`, icon: PhoneIcon },
  ];

  // โครงสร้างหลักของการ์ดพร้อมกำหนดแอนิเมชันการเข้าสู่หน้าจอและเอฟเฟกต์เมื่อโฮเวอร์
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`group relative flex h-full w-full flex-col items-center rounded-[2.75rem] border border-slate-200/60 bg-white/95 px-10 pb-14 pt-20 text-center shadow-soft backdrop-blur transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-glow focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200/80 ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* เงาสะท้อนด้านล่างเพื่อเพิ่มมิติให้การ์ด */}
      <span
        className="pointer-events-none absolute inset-x-16 -bottom-14 h-20 rounded-full bg-gradient-to-r from-white/0 via-slate-200/40 to-white/0 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-80"
        aria-hidden="true"
      />

      <div className="relative flex w-full flex-col items-center">
        {/* วงแสงและรูปโปรไฟล์ของเพื่อน */}
        <span
          className="pointer-events-none absolute -top-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl opacity-70 animate-glow"
          aria-hidden="true"
        />
        <div className="relative h-32 w-32 sm:h-36 sm:w-36">
          <span
            className={`pointer-events-none absolute inset-0 scale-[1.35] rounded-full bg-gradient-to-br ${accent.gradient} opacity-60 blur-xl animate-tilt`}
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white shadow-soft">
            <img src={avatar} alt={fullName} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <span
            className="pointer-events-none absolute -right-2 top-6 h-3 w-3 rounded-full bg-white/80 shadow-soft animate-sparkle"
            style={{ animationDelay: `${index * 0.7}s` }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -left-3 bottom-6 h-2 w-2 rounded-full bg-white/70 shadow-soft animate-sparkle"
            style={{ animationDelay: `${index * 0.4 + 0.6}s` }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ส่วนชื่อของเพื่อนร่วมกับไอคอนประจำตัว */}
      <div className="mt-8 flex w-full items-center justify-center gap-2 text-xl font-semibold text-slate-900">
        <HeaderIcon className="h-8 w-8 text-rose-400/80 animate-pulseSoft" />
        <span>{fullName}</span>
      </div>

      {/* คำคมประกอบการ์ด */}
      <p className="mt-4 flex w-full items-center justify-center gap-2 text-sm italic text-slate-500">
        <QuoteIcon className="text-rose-300 animate-pulseSoft" />
        <span>{quote}</span>
      </p>

      {/* รายการข้อมูลตัวเลข เช่น น้ำหนักและส่วนสูง */}
      <div className="mt-6 grid w-full gap-4 text-left text-sm text-slate-600">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-5 py-2.5 shadow-soft"
            >
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                <Icon className="text-slate-400" />
                {item.label}
              </span>
              <span className="font-medium text-slate-700">{item.value}</span>
            </div>
          );
        })}
      </div>

      {/* รายการข้อมูลการติดต่อแบบคลิกได้ */}
      <div className="mt-4 w-full space-y-3 text-left">
        {contacts.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl border border-transparent bg-slate-50/85 px-4 py-3 text-sm text-slate-600 shadow-soft transition-all duration-300 hover:border-slate-200/70 hover:bg-white hover:text-slate-900"
            >
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <Icon className="text-slate-400" />
                {item.label}
              </span>
              <span className="truncate font-medium text-slate-700">{item.value}</span>
            </a>
          );
        })}
      </div>

      {/* เส้นกรอบโปร่งใสเพื่อเพิ่มเอฟเฟกต์เมื่อโฮเวอร์ */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-[2.75rem] ring-1 transition-all duration-500 ${accent.ring} ${accent.hoverRing}`}
      />
    </button>
  );
};

export default ClassmateCard;
