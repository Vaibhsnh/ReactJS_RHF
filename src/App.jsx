import React, { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";
import UserCards from "./components/UserCards";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("newUsers")) || []
  });

  let handleDelete = (id) => {
    console.log(id);
    let filteredUser = users.filter((user)=>{
      return user.id !== id
    })
    console.log("filteredUser->", filteredUser);
    setUsers(filteredUser);
    localStorage.setItem("newUsers", JSON.stringify(filteredUser));
  };

  return (
    <div className="min-h-screen w-full bg-amber-300">
      <div>
        <Navbar setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
          <Form setUsers={setUsers} setToggle={setToggle} users={users} />
        </div>
      ) : (
        <div className="p-5 flex flex-wrap justify-between gap-4">
          {users.map((elem) => {
            return (
              <UserCards
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
