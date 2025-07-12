'use client';

interface Qualification {
  name: string;
  rate: string;
}

interface QualificationsCardProps {
  title: string;
  qualifications?: Qualification[];
}

export default function QualificationsCard({
  title,
  qualifications = [
    { name: 'General English', rate: '$35/hr' },
    { name: 'IELTS Prep', rate: '$40/hr' },
    { name: 'Business English', rate: '$45/hr' },
  ],
}: QualificationsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {qualifications.map((q, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            <span>{q.name}</span>
            <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full font-semibold">
              {q.rate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
