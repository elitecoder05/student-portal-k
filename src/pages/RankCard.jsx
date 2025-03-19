
import StudentInfo from "../components/StudentInfo";
import RankDisplay from "../components/RankDisplay";
import CategoryRanks from "../components/CategoryRanks";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const RankCard = ({ student, examResult }) => {
  const scorePercentage = (examResult.totalScore / examResult.maxTotalScore) * 100;
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{examResult.examName}</h2>
          <p className="text-muted-foreground">{examResult.semester} • {examResult.date}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">
            {scorePercentage.toFixed(1)}%
          </div>
          <p className="text-sm text-muted-foreground">
            {examResult.totalScore} / {examResult.maxTotalScore} points
          </p>
        </div>
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <StudentInfo student={student} />
        </div>
        
        <div className="md:col-span-2">
          <div className="space-y-6">
            <RankDisplay ranking={examResult.ranking} />

            <Card className="border shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Category Scores</h3>
                <div className="space-y-4">
                  {examResult.categories.map((category) => {
                    const percent = (category.score / category.maxScore) * 100;
                    return (
                      <div key={category.id} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium capitalize">
                            {category.name}
                          </span>
                          <span className="text-sm">
                            {category.score} / {category.maxScore}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <CategoryRanks categoryRankings={examResult.categoryRankings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
