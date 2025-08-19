'use client';

import Link from 'next/link';
import { User, Settings } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-3">
      {/* Profile Icon */}
      <Link
        href="/profile"
        className="group bg-black/20 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110"
      >
        <User className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
      </Link>

      {/* Settings Icon */}
      <Link
        href="/settings"
        className="group bg-black/20 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110"
      >
        <Settings className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
      </Link>
    </div>
  );
};

export default BottomNav;
