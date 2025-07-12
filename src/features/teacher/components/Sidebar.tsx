
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
  { name: 'Dashboard', href: '', icon: Home },
  { name: 'Students', href: '', icon: Users },
  { name: 'Schedule', href: '', icon: Calendar },
  { name: 'Reports', href: '', icon: ClipboardList },
  { name: 'Settings', href: '', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-60 bg-gray-900 text-white flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-center border-b border-gray-700">
        Pearl Thoughts
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-4 px-4 space-y-2">
        {menu.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                isActive ? 'bg-gray-800' : 'hover:bg-gray-700'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-sm">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
