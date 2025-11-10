import React from 'react';
import { Heart, Baby, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-7 h-7" />
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pregnancy Journey</h1>
        </div>
        <p className="text-white/90 max-w-2xl leading-relaxed">
          Track your baby’s growth week by week and journal how you feel along the way.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-white/90">
          <Calendar className="w-4 h-4" />
          <span>Start by selecting the first day of your last period (LMP) to estimate your current week.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
