import "./App.css";
import Main from "./forwardRef";
import UseReducer from "./hooks/reducer";

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
      <UseReducer></UseReducer>
      <Main></Main>
    </div>
  );
}

export default App;
