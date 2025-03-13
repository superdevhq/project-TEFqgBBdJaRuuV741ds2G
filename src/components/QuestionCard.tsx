
import { useState } from "react";
import { Question, Answer } from "@/data/questions";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard = ({ question, onNext, onAnswer }: QuestionCardProps) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (selectedAnswerId === null) return;
    
    setIsSubmitted(true);
    const isCorrect = question.answers.find(a => a.id === selectedAnswerId)?.isCorrect || false;
    onAnswer(isCorrect);
  };
  
  const handleNext = () => {
    setSelectedAnswerId(null);
    setIsSubmitted(false);
    onNext();
  };
  
  const isCorrectAnswer = selectedAnswerId !== null && 
    question.answers.find(a => a.id === selectedAnswerId)?.isCorrect;

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-right">שאלה {question.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-right text-lg font-medium mb-4">{question.text}</div>
        
        {question.image && (
          <div className="flex justify-center mb-4">
            <img 
              src={question.image} 
              alt="תמונת שאלה" 
              className="max-h-60 object-contain rounded-md border border-gray-200"
            />
          </div>
        )}
        
        <RadioGroup 
          value={selectedAnswerId?.toString()} 
          onValueChange={(value) => !isSubmitted && setSelectedAnswerId(parseInt(value))}
          className="space-y-3"
          disabled={isSubmitted}
        >
          {question.answers.map((answer) => (
            <div 
              key={answer.id} 
              className={`flex items-center justify-end space-x-2 space-x-reverse p-3 rounded-md border ${
                isSubmitted && answer.isCorrect 
                  ? "bg-green-50 border-green-200" 
                  : isSubmitted && selectedAnswerId === answer.id && !answer.isCorrect
                  ? "bg-red-50 border-red-200"
                  : "border-gray-200"
              }`}
            >
              <Label 
                htmlFor={`answer-${answer.id}`} 
                className="flex-1 text-right cursor-pointer"
              >
                {answer.text}
              </Label>
              <RadioGroupItem 
                value={answer.id.toString()} 
                id={`answer-${answer.id}`} 
                disabled={isSubmitted}
              />
              {isSubmitted && answer.isCorrect && (
                <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />
              )}
              {isSubmitted && selectedAnswerId === answer.id && !answer.isCorrect && (
                <XCircle className="h-5 w-5 text-red-500 ml-2" />
              )}
            </div>
          ))}
        </RadioGroup>
        
        {isSubmitted && question.explanation && (
          <Alert className={isCorrectAnswer ? "bg-green-50" : "bg-red-50"}>
            <AlertDescription className="text-right">
              {question.explanation}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {isSubmitted ? (
          <Button onClick={handleNext}>לשאלה הבאה</Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedAnswerId === null}
          >
            בדוק תשובה
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
