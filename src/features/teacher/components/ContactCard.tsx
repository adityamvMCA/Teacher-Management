'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 transition hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h2>

      <div className="flex items-center gap-3 text-gray-700">
        <Mail className="w-5 h-5 text-blue-500" />
        <span>raj@example.com</span>
      </div>

      <div className="flex items-center gap-3 text-gray-700">
        <Phone className="w-5 h-5 text-green-500" />
        <span>9141078787</span>
      </div>

      <div className="flex items-start gap-3 text-gray-700">
        <MapPin className="w-5 h-5 text-rose-500 mt-1" />
        <span>
          Bengaluru <br />
          Karnataka
        </span>
      </div>
    </div>
  );
}
