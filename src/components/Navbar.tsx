import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (label: string) => {
    setMessage(`"${label}" is being implemented...`);
    setTimeout(() => setMessage(''), 3000); 
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="text-xl font-bold text-black mb-2 lg:mb-0">FlatBelly</div>

      <button 
        onClick={toggleMenu} 
        className="lg:hidden p-2 text-black border-2 rounded-md mb-2"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <ul 
        className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-black font-medium ${isOpen ? 'flex' : 'hidden'} lg:flex`}
      >
        {['Home', 'Login', 'Health Tips', 'What We Do', 'Contact'].map((item) => (
          <li key={item}>
            <button
              onClick={() => handleClick(item)}
              className="block py-2 px-4 w-full text-left lg:text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black rounded-md"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {message && (
        <div className="mt-4 lg:mt-0 text-sm text-yellow-700 font-medium">
          {message}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
