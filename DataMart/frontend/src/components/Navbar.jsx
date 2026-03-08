import { useState } from "react";

const Navbar = () => {

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div
      className="
      flex
      justify-between
      items-center
      dark:bg-gray-950
      border-b
      border-gray-200
      px-6
      py-4
    "
    >
      <h2 className="font-semibold text-white">
        Dashboard
      </h2>

    
    </div>
  );
};

export default Navbar;