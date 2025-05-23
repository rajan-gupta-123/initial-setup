import { useContext } from "react";
import { GlobalContext } from "./index";

const Register = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <button
        style={
          theme !== "light"
            ? { backgroundColor: "black" }
            : { backgroundColor: "red" }
        }
      >
        Register
      </button>
    </div>
  );
};

export default Register;
