import React from 'react';

function Navbar() {
  return (
    <nav className="h-15 p-4">
      <div className="flex justify-around items-center h-15">
        <div className="text-red-700 text-2xl font-bold">Lucas | Portfólio</div>
        <div className="flex justify-around w-1/4">
          <a href="https://github.com/purpesy" target="_blank" className="text-white text-lg hover:text-red-500">Github</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
