
// Mock student data
export const mockStudents = [
  {
    id: "s1",
    username: "john.doe",
    password: "password123",
    name: "John Doe",
    registrationNumber: "2021CS01",
    year: 3,
    branch: "Computer Science",
    section: "A"
  },
  {
    id: "s2",
    username: "jane.smith",
    password: "password123",
    name: "Jane Smith",
    registrationNumber: "2021CS02",
    year: 3,
    branch: "Computer Science",
    section: "A"
  },
  {
    id: "s3",
    username: "bob.johnson",
    password: "password123",
    name: "Bob Johnson",
    registrationNumber: "2021EE01",
    year: 3,
    branch: "Electrical Engineering",
    section: "B"
  }
];

// Mock exam results with detailed information
export const mockExamResults = [
  {
    id: "e1",
    examName: "Mid-term Evaluation",
    semester: "Fall 2023",
    date: "Oct 15, 2023",
    studentId: "s1",
    categories: [
      { id: "c1", name: "coding", score: 85, maxScore: 100 },
      { id: "c2", name: "aptitude", score: 72, maxScore: 100 },
      { id: "c3", name: "math", score: 90, maxScore: 100 },
      { id: "c4", name: "communication", score: 80, maxScore: 100 }
    ],
    totalScore: 327,
    maxTotalScore: 400,
    ranking: {
      yearRank: 5,
      totalInYear: 120,
      branchRank: 3,
      totalInBranch: 60,
      sectionRank: 1,
      totalInSection: 30
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 3,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "aptitude",
        yearRank: 10,
        totalInYear: 120,
        branchRank: 5,
        totalInBranch: 60,
        sectionRank: 2,
        totalInSection: 30
      },
      {
        category: "math",
        yearRank: 2,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "communication",
        yearRank: 8,
        totalInYear: 120,
        branchRank: 4,
        totalInBranch: 60,
        sectionRank: 2,
        totalInSection: 30
      }
    ]
  },
  {
    id: "e2",
    examName: "Final Evaluation",
    semester: "Fall 2023",
    date: "Dec 20, 2023",
    studentId: "s1",
    categories: [
      { id: "c1", name: "coding", score: 92, maxScore: 100 },
      { id: "c2", name: "aptitude", score: 78, maxScore: 100 },
      { id: "c3", name: "math", score: 95, maxScore: 100 },
      { id: "c4", name: "communication", score: 85, maxScore: 100 }
    ],
    totalScore: 350,
    maxTotalScore: 400,
    ranking: {
      yearRank: 3,
      totalInYear: 120,
      branchRank: 2,
      totalInBranch: 60,
      sectionRank: 1,
      totalInSection: 30
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 2,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "aptitude",
        yearRank: 8,
        totalInYear: 120,
        branchRank: 4,
        totalInBranch: 60,
        sectionRank: 2,
        totalInSection: 30
      },
      {
        category: "math",
        yearRank: 1,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "communication",
        yearRank: 6,
        totalInYear: 120,
        branchRank: 3,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      }
    ]
  },
  {
    id: "e3",
    examName: "Mid-term Evaluation",
    semester: "Spring 2024",
    date: "Mar 10, 2024",
    studentId: "s1",
    categories: [
      { id: "c1", name: "coding", score: 88, maxScore: 100 },
      { id: "c2", name: "aptitude", score: 82, maxScore: 100 },
      { id: "c3", name: "math", score: 91, maxScore: 100 },
      { id: "c4", name: "communication", score: 87, maxScore: 100 }
    ],
    totalScore: 348,
    maxTotalScore: 400,
    ranking: {
      yearRank: 4,
      totalInYear: 120,
      branchRank: 2,
      totalInBranch: 60,
      sectionRank: 1,
      totalInSection: 30
    },
    categoryRankings: [
      {
        category: "coding",
        yearRank: 3,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "aptitude",
        yearRank: 5,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "math",
        yearRank: 2,
        totalInYear: 120,
        branchRank: 1,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      },
      {
        category: "communication",
        yearRank: 4,
        totalInYear: 120,
        branchRank: 2,
        totalInBranch: 60,
        sectionRank: 1,
        totalInSection: 30
      }
    ]
  }
];
