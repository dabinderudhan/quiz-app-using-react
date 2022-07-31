import React from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import "../App.css";

const EndScreen = () => {
  const { userName, setUserName, setGameState, score, setScore } =
    useContext(GameStateContext);

  const restartGame = () => {
    setScore(0);
    setGameState("menu");
    setUserName("");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        Score: {score} / {Questions.length}
      </h1>
      <button onClick={restartGame}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
