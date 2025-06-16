import { useEffect, useState } from "react";
const InputForm = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);
  function onHandle(e) {
    setInput(e.target.value);
  }
  function addNames() {
    setNames([...names, input]);
    setInput("");
  }
  useEffect(() => {
    console.log("names", names);
  }, [names]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          onHandle(e);
        }}
      ></input>
      <button onClick={addNames}>Click to Add Names</button>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default InputForm;
