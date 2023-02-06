import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from "./MainPage";
import { QuizProvider } from "./context/quiz-score.context"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <main className='h-screen bg-lightBlue'>
    <QuizProvider>
      <MainPage/>
    </QuizProvider>
  </main>

);

