// TeacherLayout.tsx
import Sidebar from '@/features/teacher/components/Sidebar';
import TopBar from '@/features/teacher/components/TopBar';

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Only once here */}
      <aside className="w-60 bg-gray-900 text-white shrink-0">
        <Sidebar />
      </aside>

      {/* Main section with TopBar + Content */}
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="flex-1 overflow-y-auto px-8 py-6 bg-gray-100 dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
}
