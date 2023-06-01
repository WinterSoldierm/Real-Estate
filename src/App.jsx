import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
      </div>
    </>
  );
}

export default App;
