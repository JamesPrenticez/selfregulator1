import { useEffect, useState } from "react";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/solid"

const DarkModeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
 
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode",
      );
      console.log("init", initialColorValue);
      
      setDarkTheme(initialColorValue === "dark");
    }, []);
    useEffect(() => {
      if (darkTheme !== undefined) {
        if (darkTheme) {
          document.documentElement.setAttribute("data-theme", "dark");
          window.localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
          window.localStorage.setItem("theme", "light");
        }
      }
    }, [darkTheme]);

    return (
      <>
        {darkTheme ? (
          <LightBulbIcon
            className="navBtn"
            onClick={() => setDarkTheme(!darkTheme)}
            onChange={handleToggle}
            />
            ) : (
              <MoonIcon 
              className="navBtn"
              onClick={() => setDarkTheme(!darkTheme)}
              onChange={handleToggle}
          />
        )}
      </>
    );
}

export default DarkModeToggle