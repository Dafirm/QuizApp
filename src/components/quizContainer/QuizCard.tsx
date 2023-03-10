
import { useContext } from "react";
import QuizContext from "../../context/quiz-score.context";
import { Iquiz } from "../../MainPage";

interface Iprops {
  quiz: Iquiz;
  key: any;
  changeQuiz: () => void;
  currentQuiz: number;
}

export default function QuizCard(data: Iprops) {
  const { updateScore } = useContext(QuizContext);
  const options = [...data.quiz.incorrect_answers, data.quiz.correct_answer];

  const handleClick = (evt: any) => {
    data.changeQuiz();
    updateScore(evt.target.textContext === data.quiz.correct_answer);
  };
  return (
    <div className="card w-full rounded-md shadow-lg my-16 p-6">
      <h1 className="py-4 text-2xl flex justify-center align-items-center">
        {data?.quiz.category}
      </h1>
      <p
        className="md:text:2xl"
        dangerouslySetInnerHTML={{
          __html: `Q.${data?.currentQuiz + 1} ${data?.quiz?.question}`,
        }}
      ></p>
      <div className="options grid grid-cols-2 gap-8 mt-4">
        {options.map((opt, i: number) => {
          return (
            <button
              className="py-3 text-sm bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-600 hover: translate-y-24"
              dangerouslySetInnerHTML={{ __html: opt }}
              onClick={handleClick}
            ></button>
          );
        })}
      </div>

      <div className="flex my-14 justify-end">
        <button
          className="py-4 my-14 w-20 bg-red-400 hover:bg-red-500 text-gray-200 rounded-md"
          onClick={() => data.changeQuiz()}
        >
          SKIP
        </button>
      </div>
    </div>
  );
}


