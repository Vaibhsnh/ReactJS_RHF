import React from "react";

const form = () => {
  return (
    <div className="text-white text-lg border-2 rounded-2xl w-100 ">
      <form className="flex flex-col gap-3 p-5 font-semibold">
        <div className="flex flex-col gap-1">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            required
            placeholder="Enter Your UserName"
            className="border rounded px-2 py-3"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter Your Email"
            className="border rounded px-2 py-3"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label>Contact:</label>
          <input
            type="tel"
            id="contact"
            required
            placeholder="Enter Your Contact"
            className="border rounded px-2 py-3"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label>Profile Image:</label>
          <input
            type="text"
            id="image"
            required
            placeholder="Image URL"
            className="border rounded px-2 py-3"
          ></input>
        </div>

        
          <button
            type="submit"
            className="bg-blue-700 border-0 rounded px-6 py-3 cursor-pointer"
          >
            Add User
          </button>
        
      </form>
    </div>
  );
};

export default form;
