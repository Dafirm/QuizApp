import React, { useContext, useEffect, useState } from 'react'
import QuizContainer from './components/quizContainer';
import QuizContext from './context/quiz-score.context';
import Overlay from './Overlay';

const apiUrl =
  "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple";

   export interface Iquiz {
      category: string;
      correct_answer: string;
      incorrect_answers: string[];
      question: string;
      type: string;
    }
const MainPage = () => {

  const [quizes, setQuizes] = useState<Iquiz []>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [endQuiz, setEndQuiz] = useState<boolean>(false);
  const [currentQuizInd, setCurrentQuizInd] = useState<number>(0);
  const { resetScore } = useContext(QuizContext)

  const fetchQuiz = async () => {
    resetScore();
    setIsLoaded(false);
    setEndQuiz(false);
    const response = await fetch(apiUrl);
    const res = await response.json();
    setQuizes(res.results);
    setIsLoaded(true);
    setCurrentQuizInd(0);
  };
  useEffect(() => {
   fetchQuiz();
  }, [])

  return (
    <>
      {endQuiz && <Overlay resartQuiz={fetchQuiz} />}
      <div className="container mx-auto md:px-16 px-4">
        {isLoaded ? (
          <div>
            <QuizContainer
              quizess={quizes}
              setCurrentQuizInd={setCurrentQuizInd}
              currentQuizInd={currentQuizInd}
              setEndQuiz={setEndQuiz}
            />
          </div>
        ) : (
          <span>Loading ...</span>
        )}
      </div>
    </>
  );
}

export default MainPage