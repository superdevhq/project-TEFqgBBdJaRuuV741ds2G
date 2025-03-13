
import { useState, useEffect } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import QuizProgress from "@/components/QuizProgress";
import QuizSummary from "@/components/QuizSummary";
import { Button } from "@/components/ui/button";
import { shuffle } from "@/utils/array";

const Index = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffle([...questions]));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // אתחול המבחן
  const startQuiz = () => {
    setShuffledQuestions(shuffle([...questions]));
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
    setQuizStarted(true);
  };

  // מעבר לשאלה הבאה
  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // טיפול בתשובה
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  // אתחול מחדש של המבחן
  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center" dir="rtl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">מבחן תאוריה</h1>
        <p className="text-gray-600">תרגול שאלות למבחן התאוריה בישראל</p>
      </header>

      {!quizStarted ? (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">ברוכים הבאים למבחן התאוריה</h2>
          <p className="mb-6 text-gray-600">
            המבחן כולל {questions.length} שאלות. עליך לענות נכון על לפחות 70% מהשאלות כדי לעבור.
          </p>
          <Button size="lg" onClick={startQuiz}>
            התחל מבחן
          </Button>
        </div>
      ) : quizCompleted ? (
        <QuizSummary
          correctAnswers={correctAnswers}
          totalQuestions={shuffledQuestions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <div className="w-full flex flex-col items-center space-y-6">
          <QuizProgress
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={shuffledQuestions.length}
          />
          <QuestionCard
            question={shuffledQuestions[currentQuestionIndex]}
            onNext={handleNextQuestion}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
