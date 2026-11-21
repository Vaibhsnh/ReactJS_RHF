import React from "react";

const form = () => {
  return (
    <div className="text-white text-lg border-2 rounded w-100 ">
      <form className="flex flex-col gap-3 p-5 font-semibold">
        <label>Username:</label>
        <input type="text" id="username" required placeholder="Enter your name" className="border rounded-xl px-2 py-3"></input>

        <label>Email:</label>
        <input type="email" id="email" required placeholder="Enter your Email"className="border rounded-xl px-2 py-3"></input>

        <label>Contact:</label>
        <input type="tel" id="contact" required placeholder="Enter your Contact"className="border rounded-xl px-2 py-3"></input>

        <label>Profile Image:</label>
        <input type="text" id="image" required placeholder="Image URL" className="border rounded-xl px-2 py-3"></input>

        <button type="submit" className="bg-blue-700 border-2 rounded-xl px-6 py-2 cursor-pointer">Add User</button>
      </form>
    </div>
  );
};

export default form;
