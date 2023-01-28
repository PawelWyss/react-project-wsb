import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer"
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import './Components/styles/main.css'
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);



function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={ theme }>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="menu" element={<Menu />} />
          <Route exact path="kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;