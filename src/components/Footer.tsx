import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} FlatBelly Routine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
