import { useEffect, useMemo, useState } from "react";

const MemoCallback = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99.99,
      category: "Electronics",
    },
    { id: 2, title: "Running Shoes", price: 59.99, category: "Footwear" },
    { id: 3, title: "Smart Watch", price: 129.99, category: "Electronics" },
    { id: 4, title: "Backpack", price: 39.99, category: "Accessories" },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 49.99,
      category: "Electronics",
    },
    { id: 6, title: "Notebook", price: 4.99, category: "Stationery" },
    { id: 7, title: "Water Bottle", price: 14.99, category: "Kitchen" },
    { id: 8, title: "Desk Lamp", price: 24.99, category: "Furniture" },
    { id: 9, title: "Yoga Mat", price: 19.99, category: "Fitness" },
    { id: 10, title: "Wireless Mouse", price: 29.99, category: "Electronics" },
  ];

  useEffect(() => {
    async function getProducts() {
      try {
        const hitData = await fetch("https://dummyjson.com/products");
        const response = await hitData.json();
        console.log("response", response.products);
        setData([response.products]);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  const memorizeData = useMemo(() => {
    return (x) => {
      console.log("I am inside");
      return x + x;
    };
  }, []);

  return (
    <div>
      <h2>Product Titles</h2>
      {memorizeData(5)}
      <button onClick={() => setTheme(!theme)}>Click Me</button>
      <p>{theme ? "light" : "dark"}</p>
    </div>
  );
};

export default MemoCallback;
