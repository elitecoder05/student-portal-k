
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { DetailedExamResult, Student } from "@/lib/types";
import { mockExamResults } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ExamDropdown from "@/components/ExamDropdown";
import RankCard from "@/pages/RankCard";

const Dashboard = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [examResults, setExamResults] = useState<DetailedExamResult[]>([]);
  const [selectedExam, setSelectedExam] = useState<DetailedExamResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const studentData = sessionStorage.getItem("currentStudent");
    
    if (!studentData) {
      toast.error("Please login to access the dashboard");
      navigate("/login");
      return;
    }
    
    const parsedStudent: Student = JSON.parse(studentData);
    setStudent(parsedStudent);
    
    // Fetch exam results for the student
    const results = mockExamResults.filter(
      (result) => result.studentId === parsedStudent.id
    );
    
    setExamResults(results);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("currentStudent");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!student) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary">
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2z"></path>
                <path d="M9 7h6"></path>
                <path d="M9 11h6"></path>
                <path d="M9 15h4"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold">Exam Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium">
              Welcome, <span className="text-primary">{student.name}</span>
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-xs h-8"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <ExamDropdown 
              exams={examResults} 
              onSelectExam={setSelectedExam} 
            />
          </div>
          
          {selectedExam ? (
            <RankCard 
              student={student} 
              examResult={selectedExam} 
            />
          ) : (
            <Card className="border shadow-sm p-6 text-center animate-fade-in">
              <h3 className="font-semibold text-lg mb-2">No Exam Selected</h3>
              <p className="text-muted-foreground">
                Please select an exam from the dropdown to view your rank card
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
