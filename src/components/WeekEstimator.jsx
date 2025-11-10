import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Info } from 'lucide-react';

function calculateWeeksFromLMP(lmpDateStr) {
  if (!lmpDateStr) return null;
  const lmp = new Date(lmpDateStr);
  if (isNaN(lmp.getTime())) return null;
  const now = new Date();
  const diffMs = now - lmp;
  const weeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diffMs / (1000 * 60 * 60 * 24)) % 7);
  if (weeks < 0) return null;
  return { weeks, days };
}

const WeekEstimator = ({ onWeekChange }) => {
  const [lmp, setLmp] = useState('');
  const estimate = useMemo(() => calculateWeeksFromLMP(lmp), [lmp]);

  useEffect(() => {
    if (estimate && onWeekChange) onWeekChange(estimate.weeks);
  }, [estimate, onWeekChange]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Estimate your pregnancy week</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Choose the first day of your last period (LMP). We’ll estimate your current week to help track baby growth.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="date"
                value={lmp}
                onChange={(e) => setLmp(e.target.value)}
                className="w-full sm:w-auto rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {estimate ? (
                <div className="text-sm flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300">
                  <span className="font-medium">Current estimate:</span>
                  <span>
                    {estimate.weeks} week{estimate.weeks !== 1 ? 's' : ''}
                    {estimate.days > 0 ? ` + ${estimate.days} day${estimate.days !== 1 ? 's' : ''}` : ''}
                  </span>
                </div>
              ) : (
                <div className="text-sm flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300">
                  <Info className="w-4 h-4" />
                  <span>Enter a valid date to see your week.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekEstimator;
