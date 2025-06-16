import { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Http Error Code ${response.statusCode}`);
        } else {
          const result = await response.json();
          setData(result);
        }
      } catch (e) {
        console.log("Error", e);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  if (loading) {
    return <div>Loading Data....</div>;
  }
  // setTimeout(() => {
  //   console.log("I am time out only execute after specific timing");
  // }, 1000);
  // setInterval(() => {
  //   console.log("I am time interval only keep on executing whatever time has mentioned")
  // }, 5000);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
