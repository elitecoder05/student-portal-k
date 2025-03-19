
import { Student } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StudentInfoProps {
  student: Student;
}

const StudentInfo = ({ student }: StudentInfoProps) => {
  return (
    <Card className="border shadow-sm overflow-hidden animate-fade-in">
      <div className="h-8 bg-primary" />
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">{student.name}</h3>
              <p className="text-muted-foreground">{student.registrationNumber}</p>
            </div>
            <Badge variant="outline" className="text-xs font-medium bg-background">
              Year {student.year}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-sm text-muted-foreground">Branch</p>
              <p className="font-medium">{student.branch}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Section</p>
              <p className="font-medium">{student.section}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentInfo;
