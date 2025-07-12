// 'use client';

// import { LogOut, User } from 'lucide-react';
// import { useState } from 'react';

// const TopBar = () => {
//   return (
//     <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center z-50">
//       {/* Left side */}
//       <h1 className="text-xl font-bold text-blue-700">Teacher Panel</h1>

//       {/* Profile Hover Card */}
//       <div className="relative group">
//         {/* Profile Circle */}
//         <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center cursor-pointer">
//           B
//         </div>

//         {/* Hover Card */}
//         <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-right z-50">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold text-gray-800">Bhimappa L</h2>
//             <p className="text-sm text-gray-500">Senior English Teacher</p>
//           </div>
//           <div className="px-4 py-2">
//             <button
//               className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:text-blue-600 py-1"
//               onClick={() => alert('Go to Profile')}
//             >
//               <User className="w-4 h-4" />
//               Profile
//             </button>
//             <button
//               className="flex items-center gap-2 w-full text-left text-sm text-red-600 hover:text-red-800 py-1"
//               onClick={() => alert('Logout clicked')}
//             >
//               <LogOut className="w-4 h-4" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopBar;
'use client';

import { LogOut, User } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const TopBar = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-white">Teacher Panel</h1>

      <div className="flex items-center gap-4">
        <DarkModeToggle />

        <div className="relative group">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center cursor-pointer">
            B
          </div>

          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-right z-50">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Bhimappa L</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">Senior English Teacher</p>
            </div>
            <div className="px-4 py-2">
              <button className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-1">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button className="flex items-center gap-2 w-full text-left text-sm text-red-600 hover:text-red-800 py-1">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
