import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";

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
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
