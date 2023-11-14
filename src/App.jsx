import React from "react";
import Logo from "./images/Logo.png";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div className="App text-center bg-blue-950 ">
      <header className="App-header text-center">
        <img src={Logo} className="App-logo w-28 h-20" alt="logo" />
      </header>
      <Profile />
    </div>
  );
};

export default App;
