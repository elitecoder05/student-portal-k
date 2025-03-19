
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const RankDisplay = ({ ranking, title = "Overall Rankings" }) => {
  const yearPercentile = (1 - ranking.yearRank / ranking.totalInYear) * 100;
  const branchPercentile = (1 - ranking.branchRank / ranking.totalInBranch) * 100;
  const sectionPercentile = (1 - ranking.sectionRank / ranking.totalInSection) * 100;

  return (
    <Card className="border shadow-sm animate-slide-up">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Year Rank</span>
              <span className="text-sm font-medium text-primary">
                {ranking.yearRank} / {ranking.totalInYear}
              </span>
            </div>
            <Progress value={yearPercentile} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Top {yearPercentile.toFixed(1)}% in your year
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Branch Rank</span>
              <span className="text-sm font-medium text-primary">
                {ranking.branchRank} / {ranking.totalInBranch}
              </span>
            </div>
            <Progress value={branchPercentile} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Top {branchPercentile.toFixed(1)}% in your branch
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Section Rank</span>
              <span className="text-sm font-medium text-primary">
                {ranking.sectionRank} / {ranking.totalInSection}
              </span>
            </div>
            <Progress value={sectionPercentile} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Top {sectionPercentile.toFixed(1)}% in your section
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankDisplay;
