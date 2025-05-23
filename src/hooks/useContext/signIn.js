import { GlobalContext } from "./index";
import { useContext } from "react";

const SignIn = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div style={{ paddingTop: "10px" }}>
      <button
        style={
          theme === "light"
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "red" }
        }
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
