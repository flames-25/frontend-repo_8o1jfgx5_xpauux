import React, { useState } from 'react';
import Header from './components/Header';
import WeekEstimator from './components/WeekEstimator';
import GrowthInsights from './components/GrowthInsights';
import WeeklyJournal from './components/WeeklyJournal';
import Footer from './components/Footer';

const App = () => {
  const [week, setWeek] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <WeekEstimator onWeekChange={setWeek} />
      <GrowthInsights currentWeek={week} />
      <WeeklyJournal currentWeek={week} />
      <Footer />
    </div>
  );
};

export default App;
