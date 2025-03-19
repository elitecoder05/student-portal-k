
// Student object structure
export const StudentType = {
  id: "",
  username: "",
  password: "",
  name: "",
  registrationNumber: "",
  year: 0,
  branch: "",
  section: ""
};

// Exam category structure
export const ExamCategoryType = {
  id: "",
  name: "",  // "coding" | "aptitude" | "math" | "communication"
  score: 0,
  maxScore: 0
};

// Exam result structure
export const ExamResultType = {
  id: "",
  examName: "",
  semester: "",
  date: "",
  studentId: "",
  categories: [],
  totalScore: 0,
  maxTotalScore: 0
};

// Ranking structure
export const RankingType = {
  yearRank: 0,
  totalInYear: 0,
  branchRank: 0,
  totalInBranch: 0,
  sectionRank: 0,
  totalInSection: 0
};

// Category ranking structure
export const CategoryRankingType = {
  category: "",
  yearRank: 0,
  totalInYear: 0,
  branchRank: 0,
  totalInBranch: 0,
  sectionRank: 0,
  totalInSection: 0
};

// Detailed exam result structure
export const DetailedExamResultType = {
  ...ExamResultType,
  ranking: RankingType,
  categoryRankings: []
};
