import React from "react";

const UserCards = () => {
  return (
    <div className="text-white p-5 h-80 w-60 border-2 rounded-xl font-mono flex flex-col gap-2">
      <img
        src="https://plus.unsplash.com/premium_photo-1795126099017-ce668d08a824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Profile-pic" className="h-45 object-cover w-full rounded-xl"
      />
      <p>Name</p>
      <p>Email</p>
      <p>Contact</p>
    </div>
  );
};

export default UserCards;
