'use client';

import { useState } from 'react';

const tabItems = [
  'Availability',
  'Unavailabilities',
  'Students',
  'Schedule',
  'Invoiced Lessons',
  'Unscheduled Lessons',
  'Time Voucher',
  'Comments',
  'History',
];

export default function AvailabilityTabs() {
  const [activeTab, setActiveTab] = useState('Availability');

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <div className="flex flex-wrap gap-2">
        {tabItems.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-md font-medium ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* You can conditionally show content based on the active tab */}
      <div className="mt-4 text-gray-700">
        <p>
          <span className="font-semibold">Selected Tab:</span> {activeTab}
        </p>
      </div>
    </div>
  );
}
