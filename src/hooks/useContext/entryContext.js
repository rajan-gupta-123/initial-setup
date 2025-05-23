import { useContext } from "react";
import { GlobalContext } from "./index";
import SignIn from "./signIn";
import  Register  from "./register";

const EntryContext = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  //   console.log("theme",theme);
  return (
    <div style={{ paddingTop: "20px" }}>
      <h4>use Context Example</h4>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Click to change the color
      </button>
      <SignIn />
      <Register />
    </div>
  );
};

export default EntryContext;
