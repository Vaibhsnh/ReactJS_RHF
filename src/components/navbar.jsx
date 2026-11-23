import React from "react";

const navbar = ({ setToggle }) => {
  return (
    <div className="h-20 w-full p-5 bg-amber-600 flex items-center justify-between text-white text-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOey5GdVwYmhhCRY9kCU9MDo5laRKJTV1h3Css1tlJpuS7c2ih5afVhKs&s=10"
        alt="Profile-pic"
        className="h-15 rounded-full"
      />
      <div className="flex gap-20 font-medium">
        <p>Home</p>
        <p>About</p>
        <p>Contacts</p>
      </div>
      <button
        className="bg-blue-700 border-0 rounded px-6 py-2 cursor-pointer"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default navbar;
