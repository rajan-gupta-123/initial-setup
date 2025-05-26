import { useRef } from "react";
import Component1 from "./Component1";

const Main = () => {
  const ref = useRef();
  function clickMe() {
    ref.current.focus();
  }

  return (
    <>
      <Component1 ref={ref} value="My name is gupta"></Component1>
      <button onClick={clickMe}> Click to focus</button>
    </>
  );
};

export default Main;
