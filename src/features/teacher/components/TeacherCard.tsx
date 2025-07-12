'use client';

export default function TeacherCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition hover:shadow-xl">
      {/* Profile Image */}
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
        A
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Bhimappa L</h2>
          <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            Active
          </span>
        </div>

        <p className="text-gray-600 mt-1">Senior English Teacher</p>

        <div className="mt-4 space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Date of Birth:</span> April 12, 1987
          </p>
          <p>
            <span className="font-medium">Experience:</span> 8+ years
          </p>
          <p>
            <span className="font-medium">Location:</span>Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </div>
  );
}
