import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");
  const { setGameState, score, setScore } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChoosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="Questions">
        <button onClick={() => chooseOption("optionA")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => chooseOption("optionB")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => chooseOption("optionC")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => chooseOption("optionD")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} className="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}
export default Quiz;
