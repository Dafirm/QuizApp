import { useContext } from "react";
import QuizContext from "../../context/quiz-score.context";

 interface IProps {

   currentQuiz: number;
 }
 export default function ScoreCard({ currentQuiz }: IProps) {

      const { totalScore } = useContext(QuizContext);
      console.log('score:',totalScore);
   return (
     <div className="score-card relative flex flex-col items-end text-2xl">
       <div className="my-2">
         Score: <span className="ml-4">{totalScore}</span>{" "}
       </div>
       <div className="my-2">
         Questions Left: <span className="ml-4"> {10 - (currentQuiz + 1)}</span>
       </div>
       <br />
     </div>
   );
 }
