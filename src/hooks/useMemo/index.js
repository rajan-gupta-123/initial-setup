import { useMemo, useState } from "react";

const ExampleMemo = () => {
  const [text, setText] = useState("");
  //   console.log("text", text);
  function calculate(n) {
    let count = 0;
    console.log("Triggered");
    for (let i = 0; i <= n; i++) count += i;
    return count;
  }

  const expenseCalculate = useMemo((n) => {
    return calculate(n);
  }, []);
  console.log(expenseCalculate);

  return (
    <div>
      <input
        onChange={(e) => {
            expenseCalculate(e.target.value);
        }}
        placeholder="Please enter the text"
      ></input>
    </div>
  );
};

export default ExampleMemo;
