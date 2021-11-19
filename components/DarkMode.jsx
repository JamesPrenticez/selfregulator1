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
      <div className="pb-2">
        
        {darkTheme ? (
          <LightBulbIcon
          className="h-7 md:h-6 text-custom-secondary md:inline-flex cursor-pointer transform transition-all hover:scale-125 duration-150 ease-out"
          onClick={() => setDarkTheme(!darkTheme)}
          onChange={handleToggle}
          />
          ) : (
            <MoonIcon 
            className="h-7 md:h-6 text-custom-secondary md:inline-flex cursor-pointer transform transition-all hover:scale-125 duration-150 ease-out"
            onClick={() => setDarkTheme(!darkTheme)}
            onChange={handleToggle}
            />
            )}
      </div>
      </>
    );
}

export default DarkModeToggle