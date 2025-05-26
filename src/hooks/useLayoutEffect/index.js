import { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffect = () => {
  const changeText = useRef();
  useEffect(() => {
    console.log("I am use effect");
  }, []);

  useLayoutEffect(() => {
    console.log("I am Layout");
    changeText.current.style.opacity = 0;

    setTimeout(() => {
      changeText.current.style.opacity = 1;
      changeText.current.style.color = "orange";
    }, 1000);
  }, []);
  return (
    <div>
      Hello I am Use Layout Effect
      <p ref={changeText}>I am invisible</p>
    </div>
  );
};
export default LayoutEffect;
