import { Button } from "./ui/button";

type ExampleQuestionsProps = {
  questions: string[];
  onQuestionClick: (question: string) => void;
};

export function ExampleQuestions({
  questions,
  onQuestionClick,
}: ExampleQuestionsProps) {
  if (questions.length === 0) return null;

  return (
    <div className="space-y-2 w-full">
      <p className="text-sm text-muted-foreground">Try asking:</p>
      <div className="flex flex-wrap gap-2">
        {questions.slice(0, 3).map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs text-left"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}
