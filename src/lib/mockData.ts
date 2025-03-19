
import { DetailedExamResult, Student } from "./types";

export const mockStudents: Student[] = [
  {
    id: "1",
    username: "john.doe",
    password: "password123",
    name: "John Doe",
    registrationNumber: "2023CS001",
    year: 2,
    branch: "Computer Science",
    section: "A"
  },
  {
    id: "2",
    username: "jane.smith",
    password: "password123",
    name: "Jane Smith",
    registrationNumber: "2023CS002",
    year: 2,
    branch: "Computer Science",
    section: "A"
  }
];

export const mockExamResults: DetailedExamResult[] = [
  {
    id: "1",
    examName: "Mid-Term Examination",
    semester: "Fall 2023",
    date: "2023-10-15",
    studentId: "1",
    categories: [
      { id: "c1", name: "coding", score: 85, maxScore: 100 },
      { id: "a1", name: "aptitude", score: 78, maxScore: 100 },
      { id: "m1", name: "math", score: 92, maxScore: 100 },
      { id: "com1", name: "communication", score: 88, maxScore: 100 }
    ],
    totalScore: 343,
    maxTotalScore: 400,
    ranking: {
      yearRank: 5,
      totalInYear: 120,
      branchRank: 3,
      totalInBranch: 40,
      sectionRank: 1,
      totalInSection: 20
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 7,
        totalInYear: 120,
        branchRank: 4,
        totalInBranch: 40,
        sectionRank: 2,
        totalInSection: 20
      },
      {
        category: "aptitude",
        yearRank: 12,
        totalInYear: 120,
        branchRank: 5,
        totalInBranch: 40,
        sectionRank: 3,
        totalInSection: 20
      },
      {
        category: "math",
        yearRank: 3,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      },
      {
        category: "communication",
        yearRank: 8,
        totalInYear: 120,
        branchRank: 4,
        totalInBranch: 40,
        sectionRank: 2,
        totalInSection: 20
      }
    ]
  },
  {
    id: "2",
    examName: "Final Examination",
    semester: "Fall 2023",
    date: "2023-12-20",
    studentId: "1",
    categories: [
      { id: "c2", name: "coding", score: 90, maxScore: 100 },
      { id: "a2", name: "aptitude", score: 82, maxScore: 100 },
      { id: "m2", name: "math", score: 95, maxScore: 100 },
      { id: "com2", name: "communication", score: 91, maxScore: 100 }
    ],
    totalScore: 358,
    maxTotalScore: 400,
    ranking: {
      yearRank: 3,
      totalInYear: 120,
      branchRank: 2,
      totalInBranch: 40,
      sectionRank: 1,
      totalInSection: 20
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 5,
        totalInYear: 120,
        branchRank: 3,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      },
      {
        category: "aptitude",
        yearRank: 9,
        totalInYear: 120,
        branchRank: 4,
        totalInBranch: 40,
        sectionRank: 2,
        totalInSection: 20
      },
      {
        category: "math",
        yearRank: 2,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      },
      {
        category: "communication",
        yearRank: 4,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      }
    ]
  },
  {
    id: "3",
    examName: "Mid-Term Examination",
    semester: "Spring 2024",
    date: "2024-03-10",
    studentId: "1",
    categories: [
      { id: "c3", name: "coding", score: 92, maxScore: 100 },
      { id: "a3", name: "aptitude", score: 85, maxScore: 100 },
      { id: "m3", name: "math", score: 94, maxScore: 100 },
      { id: "com3", name: "communication", score: 90, maxScore: 100 }
    ],
    totalScore: 361,
    maxTotalScore: 400,
    ranking: {
      yearRank: 2,
      totalInYear: 120,
      branchRank: 1,
      totalInBranch: 40,
      sectionRank: 1,
      totalInSection: 20
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 3,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      },
      {
        category: "aptitude",
        yearRank: 7,
        totalInYear: 120,
        branchRank: 3,
        totalInBranch: 40,
        sectionRank: 2,
        totalInSection: 20
      },
      {
        category: "math",
        yearRank: 1,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      },
      {
        category: "communication",
        yearRank: 5,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 40,
        sectionRank: 1,
        totalInSection: 20
      }
    ]
  }
];
