// ไฟล์หลักสำหรับจัดองค์ประกอบหน้าเพจและควบคุมสถานะของข้อมูลเพื่อนร่วมชั้น
import { useEffect, useState } from 'react';
import HeaderSection from './components/HeaderSection';
import ClassmateCard from './components/ClassmateCard';
import ClassmateModal from './components/ClassmateModal';

// ข้อความหัวเรื่องหลักที่แสดงบนส่วนบนของหน้า
const headerTitle = '\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e23\u0e48\u0e27\u0e21\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e23\u0e35\u0e22\u0e19';
// คำโปรยอธิบายประกอบหัวเรื่อง
const headerSubtitle = '\u0e1b\u0e31\u0e01\u0e2b\u0e19\u0e38\u0e14\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e25\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48';

// ข้อความคำพูดประจำตัวของเพื่อนแต่ละคนเพื่อใช้แสดงบนการ์ด
const quotes = {
  kan: '\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32\u0e23\u0e2d\u0e22\u0e22\u0e34\u0e49\u0e21\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19\u0e2a\u0e14\u0e43\u0e2a',
  ploy: '\u0e08\u0e34\u0e19\u0e15\u0e19\u0e32\u0e01\u0e32\u0e23\u0e04\u0e37\u0e2d\u0e41\u0e23\u0e07\u0e1a\u0e31\u0e19\u0e14\u0e32\u0e25\u0e43\u0e08\u0e2a\u0e33\u0e04\u0e31\u0e0d',
  ton: '\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e2a\u0e21\u0e2d',
};

function App() {
  // สถานะเพื่อคุมแอนิเมชันการแสดงการ์ดเมื่อหน้าโหลดเสร็จ
  const [mounted, setMounted] = useState(false);
  // สถานะเก็บเพื่อนที่ถูกเลือกเพื่อเปิดโมดัลรายละเอียด
  const [selected, setSelected] = useState(null);
  // กำหนดข้อมูลเพื่อนร่วมชั้นในรูปแบบสถานะเพื่อใช้แสดงบนหน้า
  const [classmates] = useState(() => [
    {
      id: 'kan',
      fullName: '\u0e01\u0e31\u0e19\u0e15\u0e1e\u0e31\u0e12\u0e19\u0e4c \u0e2a\u0e38\u0e27\u0e23\u0e23\u0e13',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=320&h=320&q=80',
      weightKg: 58,
      heightCm: 168,
      email: 'kanta.suwan@example.com',
      phone: '081-234-5678',
      quote: quotes.kan,
      accent: {
        gradient: 'from-rose-100 via-white to-rose-200',
        ring: 'ring-rose-200/50',
        hoverRing: 'group-hover:ring-rose-300/70',
        highlight: 'via-rose-100/70',
      },
    },
    {
      id: 'ploy',
      fullName: '\u0e1b\u0e27\u0e35\u0e13\u0e32 \u0e28\u0e23\u0e35\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34',
      avatar:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&w=320&h=320&q=80',
      weightKg: 50,
      heightCm: 160,
      email: 'paweena.art@example.com',
      phone: '082-987-6543',
      quote: quotes.ploy,
      accent: {
        gradient: 'from-sky-100 via-white to-sky-200',
        ring: 'ring-sky-200/50',
        hoverRing: 'group-hover:ring-sky-300/70',
        highlight: 'via-sky-100/70',
      },
    },
    {
      id: 'ton',
      fullName: '\u0e13\u0e31\u0e10\u0e1e\u0e07\u0e28\u0e4c \u0e1e\u0e23\u0e2b\u0e21\u0e40\u0e21\u0e28',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=320&h=320&q=80',
      weightKg: 62,
      heightCm: 172,
      email: 'natthapong.reads@example.com',
      phone: '086-112-7788',
      quote: quotes.ton,
      accent: {
        gradient: 'from-emerald-100 via-white to-emerald-200',
        ring: 'ring-emerald-200/50',
        hoverRing: 'group-hover:ring-emerald-300/70',
        highlight: 'via-emerald-100/70',
      },
    },
  ]);

  // สร้างดีเลย์เล็กน้อยเพื่อให้การ์ดแสดงพร้อมแอนิเมชันนุ่มนวล
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // ล็อกการเลื่อนหน้าจอเมื่อเปิดโมดัลเพื่อประสบการณ์ที่ดีขึ้น
  useEffect(() => {
    if (!selected) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selected]);

  // โครงสร้างหน้าหลักพร้อมพื้นหลังและการจัดวางส่วนประกอบทั้งหมด
  return (
    <main className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-soft-noise opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 animate-float rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-36 h-80 w-80 animate-float rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-6 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-emerald-200/35 blur-3xl" />

      <section className="relative w-full space-y-12 px-6 sm:px-10 lg:px-20 xl:px-24">
        <HeaderSection title={headerTitle} subtitle={headerSubtitle} />

        <div className="relative w-full rounded-[2.75rem] border border-slate-200/70 bg-white/80 p-8 shadow-soft backdrop-blur sm:p-12">
          <div className="absolute inset-x-8 -top-4 h-1 rounded-full bg-gradient-to-r from-rose-200/70 via-slate-200/70 to-sky-200/70" />
          <div className="grid w-full gap-12 md:grid-cols-2 xl:grid-cols-3">
            {classmates.map((classmate, index) => (
              <ClassmateCard
                key={classmate.id}
                index={index}
                mounted={mounted}
                onSelect={() => setSelected(classmate)}
                classmate={classmate}
              />
            ))}
          </div>
        </div>
      </section>

      {selected ? <ClassmateModal classmate={selected} onClose={() => setSelected(null)} /> : null}
    </main>
  );
}

export default App;
