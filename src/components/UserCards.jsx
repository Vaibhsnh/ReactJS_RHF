import React from "react";

const UserCards = () => {
  return (
    <div className="text-white p-3 w-60 border-2 rounded-xl font-mono flex flex-col gap-4 bg-amber-400">
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1795126099017-ce668d08a824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Profile-pic"
          className="h-45 object-cover w-full rounded-xl"
        />
      </div>

      <div className="font-semibold">
        <p>Name</p>
        <p>Email</p>
        <p>Contact</p>
      </div>

      <div className="flex gap-2">
        <button className="bg-green-600 border-0 rounded px-6 py-2 cursor-pointer">UPDATE</button>
        <button className="bg-red-600 border-0 rounded px-6 py-2 cursor-pointer">DELETE</button>
      </div>
    </div>
  );
};

export default UserCards;
