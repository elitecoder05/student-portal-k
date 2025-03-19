
import { useState } from "react";
import { DetailedExamResult } from "@/lib/types";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface ExamDropdownProps {
  exams: DetailedExamResult[];
  onSelectExam: (exam: DetailedExamResult | null) => void;
}

const ExamDropdown = ({ exams, onSelectExam }: ExamDropdownProps) => {
  const [selectedExamId, setSelectedExamId] = useState<string>("");

  const handleSelectExam = (value: string) => {
    setSelectedExamId(value);
    
    if (value && value !== "_default" && value !== "_no_exams") {
      const selectedExam = exams.find(exam => exam.id === value) || null;
      onSelectExam(selectedExam);
    } else {
      onSelectExam(null);
    }
  };

  return (
    <div className="w-full animate-slide-up">
      <div className="mb-2">
        <label htmlFor="exam-select" className="text-sm font-medium text-muted-foreground">
          Select Exam
        </label>
      </div>
      <Select value={selectedExamId} onValueChange={handleSelectExam}>
        <SelectTrigger id="exam-select" className="w-full h-11">
          <SelectValue placeholder="Select an exam" />
        </SelectTrigger>
        <SelectContent>
          {exams.length > 0 ? (
            <>
              <SelectItem value="_default">Choose an exam</SelectItem>
              {exams.map((exam) => (
                <SelectItem key={exam.id} value={exam.id}>
                  {`${exam.examName} - ${exam.semester}`}
                </SelectItem>
              ))}
            </>
          ) : (
            <SelectItem value="_no_exams">No exams available</SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ExamDropdown;
