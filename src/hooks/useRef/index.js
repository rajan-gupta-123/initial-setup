import { useRef, useState } from "react";

const TriggerUseRef = () => {
  const [value, setValue] = useState("Test data");
  function handleChange(event) {
    setValue(event.target.value);
    ref.current.value = "my name is gupta";
  }
  const ref = useRef();

  function handleFocus() {
    ref.current.focus();
  }

  // useEffect(() => {
  //   ref.current.value = "my name is gupta";
  //   console.log("ref", ref.current);
  // }, []); // here it will not give undefied becuase here paint process complted & dom element also get rendered

  console.log("ref", ref.current); // this console will give undefined because until paint process dont get complete and our dom element gets rendered

  return (
    <div>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
      <button onClick={handleFocus}> Click to focus</button>
    </div>
  );
};

export default TriggerUseRef;
