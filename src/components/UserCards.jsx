import React from "react";

const UserCards = ({ user, setToggle, handleDelete, setUpdatedData}) => {
  return (
    <div className="text-white p-3 w-70 border-2 rounded-xl font-mono flex flex-col gap-4 bg-amber-400">
      <div>
        <img
          src={user.image}
          alt="Profile-pic"
          className="h-45 object-cover w-full rounded-xl"
        />
      </div>

      <div className="font-semibold">
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.contact}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev)}}
          className="bg-green-600 border-0 rounded px-8 py-2 cursor-pointer"
        >
          UPDATE
        </button>
        <button
          onClick={() => {
            handleDelete(user.id);
          }}
          className="bg-red-600 border-0 rounded px-8 py-2 cursor-pointer"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default UserCards;
