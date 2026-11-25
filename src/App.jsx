import React, { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";
import UserCards from "./components/UserCards";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("newUsers")) || [];
  });

  let handleDelete = (id) => {
    console.log(id);
    let filteredUser = users.filter((user) => {
      return user.id !== id;
    });
    console.log("filteredUser->", filteredUser);
    setUsers(filteredUser);
    localStorage.setItem("newUsers", JSON.stringify(filteredUser));
  };

  const [updatedData, setUpdatedData] = useState(null);
  console.log("SelectedUser->", updatedData);

  return (
    <div className="min-h-screen w-full bg-amber-300">
      <div>
        <Navbar setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
          <Form
            setUsers={setUsers}
            setToggle={setToggle}
            users={users}
            updatedData={updatedData}
          />
        </div>
      ) : users.length === 0 ? (
        <p className="flex justify-center items-center h-[calc(100vh-9rem)] text-6xl font-extrabold text-amber-600">
          No User Found. Please Add User
        </p>
      ) : (
        <div className="p-5 flex flex-wrap gap-5">
          {users.map((elem) => {
            return (
              <UserCards
                setUpdatedData={setUpdatedData}
                user={elem}
                setToggle={setToggle}
                handleDelete={handleDelete}
                key={elem.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
