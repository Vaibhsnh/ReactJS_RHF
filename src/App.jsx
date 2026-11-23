import React, { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";
import UserCards from "./components/UserCards";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-800">
      <div>
        <Navbar  setToggle={setToggle}/>
      </div>

      {toggle ? (
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
          <Form />
        </div>
      ) : (
        <div className="h-[calc(100vh-5rem)] bg-amber-300 p-5">
          <UserCards />
        </div>
      )}
    </div>
  );
};

export default App;
