// src/components/ThemeToggle.js
import { createVisualComponent } from "uu5g05";
import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const themes = [
  { name: 'sky-blue', color: '#0288d1' },
  { name: 'turquoise', color: '#009688' },
  { name: 'navy', color: '#1976d2' },
  { name: 'cerulean', color: '#29b6f6' },
  { name: 'azure', color: '#43a047' },
  { name: 'sapphire', color: '#5e35b1' },
];

const ThemeToggleComponent = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: "MyApp.ThemeToggle",
  //@@viewOff:statics

  //@@viewOn:propTypes
  // Přidejte potřebné propTypes, pokud jsou potřeba
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  //@@viewOn:render
  render() {
    console.log("ThemeToggleComponent rendered"); // Debugging

    const [theme, setTheme] = useState('sky-blue');
    const [activeIndex, setActiveIndex] = useState(0);

    // Načtení tématu z localStorage při načtení komponenty
    useEffect(() => {
      console.log("useEffect for loading theme");
      const storedTheme = localStorage.getItem('theme');
      const index = themes.findIndex((t) => t.name === storedTheme);

      if (storedTheme && index !== -1) {
        setTheme(storedTheme);
        setActiveIndex(index);
        document.documentElement.setAttribute("data-theme", storedTheme);
      } else {
        // Nastavení výchozího tématu
        setTheme(themes[0].name);
        setActiveIndex(0);
        document.documentElement.setAttribute("data-theme", themes[0].name);
      }
    }, []);

    // Uložení tématu do localStorage a aplikace
    useEffect(() => {
      console.log("useEffect for saving theme:", theme);
      if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }
    }, [theme]);

    const handleThemeChange = (index) => {
      setTheme(themes[index].name);
      setActiveIndex(index);
    };

    return (
      <div className="theme-toggle">
        {themes.map((themeItem, index) => (
          <div
            key={themeItem.name}
            className={`theme-toggle-dot ${activeIndex === index ? 'active' : ''}`}
            style={{
              backgroundColor: activeIndex === index ? themeItem.color : '#b0b0b0',
              boxShadow: activeIndex === index ? `0 0 8px 4px ${themeItem.color}` : 'none',
            }}
            onClick={() => handleThemeChange(index)}
            title={themeItem.name.replace('-', ' ').toUpperCase()}
          />
        ))}
      </div>
    ); 
    //@@viewOff:render
}
});
export { ThemeToggleComponent };
export default ThemeToggleComponent;