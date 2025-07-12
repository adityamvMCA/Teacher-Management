'use client';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
];

// Dummy data
const booked = [
  { day: 'Tue', time: '09:00 AM' },
  { day: 'Fri', time: '11:00 AM' },
];

export default function WeeklyScheduleGrid() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Schedule</h2>

      {/* Grid */}
      <div className="min-w-[700px] grid grid-cols-[100px_repeat(7,1fr)] border border-gray-200">
        {/* Header Row */}
        <div className="bg-gray-100 border-r border-b p-2 font-medium text-center">Time</div>
        {days.map((day) => (
          <div key={day} className="bg-gray-100 border-r border-b p-2 text-center font-medium">
            {day}
          </div>
        ))}

        {/* Time Rows */}
        {timeSlots.map((time) => (
          <div key={time} className="contents">
            <div className="border-r border-b p-2 text-sm bg-gray-50 text-center font-medium">{time}</div>
            {days.map((day) => {
              const isBooked = booked.some((slot) => slot.day === day && slot.time === time);
              return (
                <div
                  key={`${day}-${time}`}
                  className={`border-r border-b p-2 h-12 text-sm text-center transition ${
                    isBooked ? 'bg-green-500 text-white' : 'hover:bg-blue-50'
                  }`}
                >
                  {isBooked ? 'Booked' : ''}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
