import React from 'react';
import { Baby, Sparkles } from 'lucide-react';

const WEEK_INFO = [
  { range: [0, 4], text: 'Early weeks: implantation and tiny beginnings. Take your prenatal vitamins.' },
  { range: [5, 8], text: 'Heartbeat begins and major organs start to form. Fatigue is common—rest well.' },
  { range: [9, 12], text: 'Fingers and toes develop. Nausea may peak then improve.' },
  { range: [13, 16], text: 'Second trimester glow: baby grows quickly, you may feel more energy.' },
  { range: [17, 20], text: 'First flutters (quickening) often appear. Anatomy scan usually around week 20.' },
  { range: [21, 24], text: 'Baby practices breathing and sleep cycles; you may feel regular movement.' },
  { range: [25, 28], text: 'Hearing sharpens; consider glucose screening around this time.' },
  { range: [29, 32], text: 'Rapid brain development; keep hydrated and stretch for comfort.' },
  { range: [33, 36], text: 'Baby gains fat for warmth; prepare your hospital bag.' },
  { range: [37, 42], text: 'Full term approaches; watch for labor signs and keep your care team informed.' },
];

function getInsight(week) {
  if (week == null) return null;
  const item = WEEK_INFO.find(({ range }) => week >= range[0] && week <= range[1]);
  if (item) return item.text;
  return 'Enter a valid week (0-42) to see insights.';
}

const GrowthInsights = ({ currentWeek }) => {
  const insight = getInsight(currentWeek);

  return (
    <section className="max-w-5xl mx-auto px-6 pb-6">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600">
            <Baby className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Baby growth insights</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              A gentle snapshot of what’s happening this week.
            </p>
            {insight ? (
              <div className="flex items-start gap-2 text-neutral-800 dark:text-neutral-200">
                <Sparkles className="w-4 h-4 mt-1 text-fuchsia-500" />
                <p>{insight}</p>
              </div>
            ) : (
              <p className="text-neutral-500">Select your LMP above to see this week’s highlights.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInsights;
