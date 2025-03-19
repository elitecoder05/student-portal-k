
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";

const CategoryRanks = ({ categoryRankings }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryRankings[0]?.category || ""
  );

  const getSelectedRanking = () => {
    return (
      categoryRankings.find((cr) => cr.category === selectedCategory) ||
      categoryRankings[0]
    );
  };

  const selectedRanking = getSelectedRanking();

  if (!selectedRanking) {
    return null;
  }

  const yearPercentile = (1 - selectedRanking.yearRank / selectedRanking.totalInYear) * 100;
  const branchPercentile = (1 - selectedRanking.branchRank / selectedRanking.totalInBranch) * 100;
  const sectionPercentile = (1 - selectedRanking.sectionRank / selectedRanking.totalInSection) * 100;

  return (
    <Card className="border shadow-sm animate-slide-up">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Category Rankings</h3>
          <Badge variant="outline" className="capitalize">
            {selectedCategory}
          </Badge>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-6"
        >
          <TabsList className="w-full grid grid-cols-4">
            {categoryRankings.map((cr) => (
              <TabsTrigger
                key={cr.category}
                value={cr.category}
                className="capitalize text-xs py-1"
              >
                {cr.category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Year Rank</span>
              <span className="text-sm font-medium text-primary">
                {selectedRanking.yearRank} / {selectedRanking.totalInYear}
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
                {selectedRanking.branchRank} / {selectedRanking.totalInBranch}
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
                {selectedRanking.sectionRank} / {selectedRanking.totalInSection}
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

export default CategoryRanks;
