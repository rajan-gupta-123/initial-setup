import "./App.css";
import Time from "./examples/time";

function App() {
  // Below is generator function
  function* generate() {
    yield 1;
    yield 2;
    return 4;
  }
  const a = generate();

  for (const value of a) {
    console.log(value);
  }
  // console.log(a.next());
  // console.log(a.next());
  // console.log(a.next());

  return (
    <div className="App">
      {/* <EntryStateEffect></EntryStateEffect>
      <EntryContext></EntryContext>
      <RenderRedeux></RenderRedeux>
      <p>Belo is use Ref Example</p>
      <TriggerUseRef></TriggerUseRef> */}
      {/* <LayoutEffect></LayoutEffect>
      <MemoCallback></MemoCallback> */}
      {/* <UseReducer></UseReducer>
      <Main></Main> */}
      {/* <ExampleMemo></ExampleMemo> */}
      {/* <InputForm></InputForm> */}
      {/* <FetchApi></FetchApi> */}
      <Time></Time>
    </div>
  );
}

export default App;
