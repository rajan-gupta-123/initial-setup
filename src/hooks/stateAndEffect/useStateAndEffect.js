import { useState, useEffect } from "react";

const useStateAndEffect = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState([]);

  // const a = {};

  useEffect(() => {
    console.log("rajan", "12");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((data) => setUser(data));
  }, [setUser]);
  

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const resetButton = () => setCount(0);

  return {
    increment,
    resetButton,
    decrement,
    count,
  };
};

export default useStateAndEffect;
