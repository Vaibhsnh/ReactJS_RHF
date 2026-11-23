import React, { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";
import UserCards from "./components/UserCards";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([])
  return (
    <div className="h-screen w-full bg-amber-300">
      <div>
        <Navbar setToggle={setToggle}/>
      </div>

      {toggle ? (
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
          <Form setUsers={setUsers} setToggle={setToggle}/>
        </div>
      ) : (
        <div className="p-5 flex gap-4">
          {
            users.map((elem)=>{
              return <UserCards user={elem}/>
            })
          }
        </div>
      )}
    </div>
  );
};

export default App;
