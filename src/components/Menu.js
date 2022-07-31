import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { setGameState, setUserName } = useContext(GameStateContext);

  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  );
}

export default Menu;
