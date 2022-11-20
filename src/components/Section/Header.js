import React, { useState } from "react";

function Header() {
  const [dropdownListActive, setDropdownListActive] = useState(false);

  return (
    <header className="relative flex justify-between items-center rounded-2xl   border-dotted border-blue-700">
      <h3 className="text-lg">Tembisa</h3>
      <button
        onClick={() => setDropdownListActive(!dropdownListActive)}
        className={`p-2`}
      >
        Up Arrow
      </button>

      {/* dropdown list */}
      {dropdownListActive && (
        <div className="absolute top-full py-2 rounded-2xl shadow w-full bg-white ">
          <h4 className="mb-2 px-2 text-xs   font-medium">Nearby Circles</h4>

          <ul className="pb-1 space-y-[1px]">
            <li className="py-1 px-2 hover:bg-gray-100 bg-opacity-50">
              Maokeng Ext 4
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 bg-opacity-50">
              Difateng Center As
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
