
'use client';
import TeacherCard from '../features/teacher/components/TeacherCard';
import ContactCard from '../features/teacher/components/ContactCard';
import QualificationsCard from '../features/teacher/components/QualificationsCard';
import AvailabilityTabs from '../features/teacher/components/AvailabilityTabs';
import WeeklyScheduleGrid from '../features/teacher/components/WeeklyScheduleGrid';

export default function TeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-sm">Teacher Management Portal</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Manage teacher profiles, schedules, and qualifications with ease.</p>
      </div>

      {/* Profile & Contact */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedCard><TeacherCard /></AnimatedCard>
        <AnimatedCard><ContactCard /></AnimatedCard>
      </section>

      {/* Divider */}
      <Divider title="Qualifications" />

      {/* Qualifications */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedCard><QualificationsCard title="Private Qualifications" /></AnimatedCard>
        <AnimatedCard><QualificationsCard title="Group Qualifications" /></AnimatedCard>
      </section>

      {/* Divider */}
      <Divider title="Schedule & Availability" />

      {/* Tabs & Weekly Schedule */}
      <section className="space-y-6 mt-6">
        <AnimatedCard><AvailabilityTabs /></AnimatedCard>
        <AnimatedCard><WeeklyScheduleGrid /></AnimatedCard>
      </section>
    </div>
  );
}

function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      {children}
    </div>
  );
}

function Divider({ title }: { title: string }) {
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded"></div>
    </div>
  );
}

