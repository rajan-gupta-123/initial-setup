import { useContext } from "react";
import "./App.css";
import EntryStateEffect from "./hooks/stateAndEffect/entryStateEffect";
import { GlobalContext } from "./hooks/useContext";
import EntryContext from "./hooks/useContext/entryContext"
import RenderRedeux from "./redux"

function App() {
  const {theme} = useContext(GlobalContext);
  console.log("theme",theme);

  return (
    <div className="App">
      <EntryStateEffect></EntryStateEffect>
      <EntryContext></EntryContext>
      <RenderRedeux></RenderRedeux>

    </div>
  );
}

export default App;
