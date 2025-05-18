import React, { useState } from 'react';

const App: React.FC = () => {

  type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

type Routine = {
  ginger: boolean;
  exercise: boolean;
  vacuum: boolean;
};

type Progress = Record<Day, Routine>;

const [progress, setProgress] = useState<Progress>({
  Monday: { ginger: false, exercise: false, vacuum: false },
  Tuesday: { ginger: false, exercise: false, vacuum: false },
  Wednesday: { ginger: false, exercise: false, vacuum: false },
  Thursday: { ginger: false, exercise: false, vacuum: false },
  Friday: { ginger: false, exercise: false, vacuum: false },
  Saturday: { ginger: false, exercise: false, vacuum: false },
  Sunday: { ginger: false, exercise: false, vacuum: false }
});


  const handleToggle = (day: Day, activity: keyof Routine) => {
  setProgress(prev => ({
    ...prev,
    [day]: { ...prev[day], [activity]: !prev[day][activity] }
  }));
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <h1 className="text-3xl font-bold text-black bg-yellow-500 pt-8 pb-8 px-4 rounded-md mb-4">Flat Belly & Side Fat Routine</h1>

      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Morning Routine Section */}
        <h2 className="text-xl font-semibold text-black mb-6">Morning Routine</h2>
        <p className="text-black mb-4">
          - Drink 1 cup of <strong>warm water + fresh ginger</strong> (grated or sliced)
          <br />
          - Optional: Add a squeeze of <strong>lime</strong>
          <br />
          - Do this before eating.
        </p>

        <h2 className="text-xl font-semibold text-black mb-4">Daily Core Exercises (10–15 mins)</h2>
        <ul className="list-disc pl-5 text-black mb-4">
          <li>Push-ups: 2–4 sets of 10–15</li>
          <li>Side Planks: 30 sec each side</li>
          <li>Leg Raises: 3 sets of 10</li>
          <li>Russian Twists: 3 sets of 30 (15/side)</li>
          <li>Standing Side Bends: 3 sets of 20</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mb-4">Core Tightening Trick</h2>
        <p className="text-black mb-6">
          Practice stomach vacuuming anytime during the day:
          <br />
          - Pull belly inward, hold for 20 seconds, breathe slowly.
          <br />
          - Repeat 5–10 times a day (standing, sitting, or walking).
        </p>

        <h2 className="text-xl font-semibold text-black mb-4">Diet Plan</h2>
        <p className="text-black mb-4">
          - 2 eggs daily (protein)<br />
          - Rice (2 cups) + Beans (1 cup) daily (fiber + energy)<br />
          - Potatoes (3x a week)<br />
          - Vegetables (2x a week)<br />
          - Avoid sugar, oil, and carbonated drinks<br />
          - Drink plenty of water.
        </p>

        <button className="w-full bg-yellow-500 text-white py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
          Track My Progress
        </button>

        {/* Weekly Tracker Section */}
        <h2 className="text-xl font-semibold text-black mt-6 mb-4">Weekly Tracker</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Day</th>
              <th className="px-4 py-2 text-center">Ginger Drink</th>
              <th className="px-4 py-2 text-center">Exercise Done</th>
              <th className="px-4 py-2 text-center">Core Vacuum</th>
            </tr>
          </thead>

          <tbody>
           {(Object.keys(progress) as Day[]).map((day) => (
  <tr key={day} className="border-t">
    <td className="px-4 py-2 text-left font-medium text-black">{day}</td>
    <td className="px-4 py-2 text-center">
      <input
        type="checkbox"
        checked={progress[day].ginger}
        onChange={() => handleToggle(day, 'ginger')}
        className="w-5 h-5"
      />
    </td>
    <td className="px-4 py-2 text-center">
      <input
        type="checkbox"
        checked={progress[day].exercise}
        onChange={() => handleToggle(day, 'exercise')}
        className="w-5 h-5"
      />
    </td>
    <td className="px-4 py-2 text-center">
      <input
        type="checkbox"
        checked={progress[day].vacuum}
        onChange={() => handleToggle(day, 'vacuum')}
        className="w-5 h-5"
      />
    </td>
  </tr>
))}

          </tbody>


        </table>

      </div>
    </div>
  );
}

export default App;
