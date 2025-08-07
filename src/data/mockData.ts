export interface Scholarship {
  id: string;
  title: string;
  amount: string;
  deadline: string;
  description: string;
  category: string;
  eligibility: string;
  requirements: string[];
  applicationUrl: string;
  provider: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  description: string;
  type: string;
  studentCount: string;
  programs: string[];
  website: string;
  tuition: string;
  admissionRate: string;
  establishedYear: string;
}

export const mockScholarships: Scholarship[] = [
  {
    id: "1",
    title: "Merit Excellence Scholarship",
    amount: "$5,000",
    deadline: "2024-12-15",
    description: "A competitive scholarship for high-achieving students with exceptional academic records.",
    category: "Academic Merit",
    eligibility: "High school seniors with GPA 3.8+",
    requirements: [
      "GPA of 3.8 or higher",
      "Letter of recommendation",
      "Personal essay (500 words)",
      "Community service hours"
    ],
    applicationUrl: "https://example.com/apply",
    provider: "Education Foundation"
  },
  {
    id: "2",
    title: "STEM Innovation Grant",
    amount: "$10,000",
    deadline: "2024-11-30",
    description: "Supporting future innovators in Science, Technology, Engineering, and Mathematics fields.",
    category: "STEM",
    eligibility: "Students pursuing STEM degrees",
    requirements: [
      "Enrolled in STEM program",
      "Research proposal",
      "Academic transcripts",
      "Faculty recommendation"
    ],
    applicationUrl: "https://example.com/apply",
    provider: "Tech Innovation Fund"
  },
  {
    id: "3",
    title: "Community Leadership Award",
    amount: "$3,000",
    deadline: "2025-01-20",
    description: "Recognizing students who have demonstrated outstanding leadership in their communities.",
    category: "Leadership",
    eligibility: "Students with demonstrated leadership experience",
    requirements: [
      "Leadership portfolio",
      "Community impact statement",
      "Two letters of recommendation",
      "Interview"
    ],
    applicationUrl: "https://example.com/apply",
    provider: "Community Leaders Association"
  }
];

export const mockColleges: College[] = [
  {
    id: "1",
    name: "State University",
    location: "Austin, Texas",
    description: "A prestigious public research university known for its diverse academic programs and vibrant campus life.",
    type: "Public University",
    studentCount: "45,000",
    programs: ["Engineering", "Business", "Liberal Arts", "Computer Science", "Medicine"],
    website: "https://example.edu",
    tuition: "$12,000/year (in-state)",
    admissionRate: "68%",
    establishedYear: "1883"
  },
  {
    id: "2",
    name: "Technical Institute",
    location: "San Francisco, California",
    description: "A leading technical institute specializing in engineering, computer science, and innovation.",
    type: "Private Institute",
    studentCount: "8,500",
    programs: ["Computer Science", "Electrical Engineering", "Data Science", "Robotics"],
    website: "https://example.edu",
    tuition: "$58,000/year",
    admissionRate: "15%",
    establishedYear: "1891"
  },
  {
    id: "3",
    name: "Liberal Arts College",
    location: "Burlington, Vermont",
    description: "A small, prestigious liberal arts college known for its close-knit community and academic excellence.",
    type: "Private College",
    studentCount: "2,800",
    programs: ["Literature", "Philosophy", "Art History", "Psychology", "Environmental Studies"],
    website: "https://example.edu",
    tuition: "$62,000/year",
    admissionRate: "22%",
    establishedYear: "1800"
  }
];