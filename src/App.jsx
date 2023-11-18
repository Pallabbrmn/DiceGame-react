import { useState } from "react";
import "./App.css";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePage";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function toggleGame() {
    setIsClicked((prev) => !prev);
  }

  return <>{isClicked ? <GamePage /> : <StartPage toggle={toggleGame} />}</>;
}

export default App;
