'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Calendar,
  ClipboardList,
  Settings,
  LogOut,
} from 'lucide-react';

const menu = [
  { name: 'Dashboard', href: '/teacher', icon: Home },
  { name: 'Students', href: '/teacher/students', icon: Users },
  { name: 'Schedule', href: '/teacher/schedule', icon: Calendar },
  { name: 'Reports', href: '/teacher/reports', icon: ClipboardList },
  { name: 'Settings', href: '/teacher/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold text-center border-b border-gray-700">
        PearlThoughts
      </div>

      <nav className="flex-1 mt-4 px-4 space-y-2">
        {menu.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive ? 'bg-gray-800' : 'hover:bg-gray-800/70'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-sm">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
