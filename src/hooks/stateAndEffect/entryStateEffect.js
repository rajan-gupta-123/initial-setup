import useStateAndEffect from "./useStateAndEffect";

const EntryStateEffect = () => {
  const { increment, resetButton, decrement, count } = useStateAndEffect();
  return (
    <div>
      <h2>Use State & use Effect Example</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default EntryStateEffect;
