// import { useState } from 'react';

// function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = useState(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });
//   const setValue = (value) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return [storedValue, setValue] as const;
// }

// export default useLocalStorage;




// import * as React from 'react';
// import './style.css';
// import useLocalStorage from './useLocalStorate';

// export default function App() {
//   const [storedValue, setStoredValue] = useLocalStorage(
//     'select-value',
//     'light'
//   );

//   return (
//     <div>
//       <select
//         className="select"
//         value={storedValue}
//         onChange={(e) => setStoredValue(e.target.value)}
//       >
//         <option value="dark">Dark</option>
//         <option value="light">Light</option>
//       </select>
//       <p className="desc">
//         Value from local storage: <span>{storedValue}</span>
//       </p>
//     </div>
//   );
// }