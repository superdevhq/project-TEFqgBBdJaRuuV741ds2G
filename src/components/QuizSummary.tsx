
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizSummaryProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizSummary = ({ correctAnswers, totalQuestions, onRestart }: QuizSummaryProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPassing = percentage >= 70; // נחשב כמעבר אם התוצאה היא 70% ומעלה
  
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">סיכום המבחן</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          {isPassing ? (
            <CheckCircle className="h-24 w-24 text-green-500" />
          ) : (
            <XCircle className="h-24 w-24 text-red-500" />
          )}
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-xl font-bold">
            {isPassing ? "עברת בהצלחה!" : "לא עברת את המבחן"}
          </p>
          <p className="text-lg">
            ענית נכון על {correctAnswers} מתוך {totalQuestions} שאלות
          </p>
          <p className="text-2xl font-bold">
            ציון: {percentage}%
          </p>
        </div>
        
        <div className="text-center text-gray-600">
          {isPassing ? (
            <p>כל הכבוד! המשך לתרגל כדי להשתפר עוד יותר.</p>
          ) : (
            <p>המשך לתרגל ונסה שוב. אתה צריך לפחות 70% כדי לעבור.</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onRestart} size="lg">
          התחל מבחן חדש
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizSummary;
