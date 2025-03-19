
export interface Student {
  id: string;
  username: string;
  password: string;
  name: string;
  registrationNumber: string;
  year: number;
  branch: string;
  section: string;
}

export interface ExamCategory {
  id: string;
  name: "coding" | "aptitude" | "math" | "communication";
  score: number;
  maxScore: number;
}

export interface ExamResult {
  id: string;
  examName: string;
  semester: string;
  date: string;
  studentId: string;
  categories: ExamCategory[];
  totalScore: number;
  maxTotalScore: number;
}

export interface Ranking {
  yearRank: number;
  totalInYear: number;
  branchRank: number;
  totalInBranch: number;
  sectionRank: number;
  totalInSection: number;
}

export interface CategoryRanking {
  category: string;
  yearRank: number;
  totalInYear: number;
  branchRank: number;
  totalInBranch: number;
  sectionRank: number;
  totalInSection: number;
}

export interface DetailedExamResult extends ExamResult {
  ranking: Ranking;
  categoryRankings: CategoryRanking[];
}
