import React, { useEffect, useMemo, useState } from 'react';
import { NotebookPen, Save } from 'lucide-react';

// LocalStorage key
const KEY = 'pregnancy_journal_entries_v1';

function loadEntries() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function saveEntries(obj) {
  localStorage.setItem(KEY, JSON.stringify(obj));
}

const WeeklyJournal = ({ currentWeek }) => {
  const [entries, setEntries] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    const data = loadEntries();
    setEntries(data);
  }, []);

  useEffect(() => {
    if (currentWeek == null) return;
    const existing = entries[currentWeek] || '';
    setText(existing);
  }, [currentWeek, entries]);

  const onSave = () => {
    if (currentWeek == null) return;
    const next = { ...entries, [currentWeek]: text };
    setEntries(next);
    saveEntries(next);
  };

  const weeksList = useMemo(() => Array.from({ length: 43 }, (_, i) => i), []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600">
            <NotebookPen className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Weekly journal</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Write how you’re feeling each week. Your notes are saved privately in your browser.
            </p>
            <div className="grid sm:grid-cols-[200px_1fr] gap-4">
              <div>
                <label className="block text-sm mb-2">Week</label>
                <select
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2"
                  value={currentWeek ?? ''}
                  onChange={() => {}}
                  disabled
                >
                  <option value="">Select via estimator above</option>
                  {weeksList.map((w) => (
                    <option key={w} value={w}>
                      Week {w}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Your feelings & notes</label>
                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2"
                  placeholder={currentWeek == null ? 'Select your LMP to begin journaling…' : 'Write a few lines about this week…'}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={currentWeek == null}
                />
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={onSave}
                    disabled={currentWeek == null}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save className="w-4 h-4" />
                    Save entry
                  </button>
                </div>
                {currentWeek != null && entries[currentWeek] && (
                  <p className="mt-2 text-xs text-neutral-500">Saved locally. You can clear your browser storage to remove entries.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyJournal;
