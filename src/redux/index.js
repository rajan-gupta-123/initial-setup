import { useDispatch, useSelector } from "react-redux";

const RenderRedeux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>Below is redux example</p>
      {count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Hit me Harder for add
      </button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 23 })}>
        Hit me for subtract
      </button>
    </div>
  );
};

export default RenderRedeux;
