import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      style={{
        fontSize: "2em",
        fontFamily: "monospace",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h3>Current Time Zone :</h3>
      <p>{time.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      <p>{time.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
    </div>
  );
};
export default Time;
