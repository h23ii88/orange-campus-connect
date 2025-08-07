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
    name: "Knox College",
    location: "Galesburg, Illinois",
    description: "A prestigious liberal arts college offering generous financial aid and scholarships, especially for international students including those from India.",
    type: "Private Liberal Arts College",
    studentCount: "1,400",
    programs: ["Liberal Arts", "Computer Science", "Business", "Creative Writing", "International Studies"],
    website: "https://knox.edu",
    tuition: "$54,000/year (with average aid of $35,000)",
    admissionRate: "73%",
    establishedYear: "1837"
  },
  {
    id: "2",
    name: "University of Rochester",
    location: "Rochester, New York",
    description: "A top-tier research university offering excellent need-based financial aid and merit scholarships for international students.",
    type: "Private Research University",
    studentCount: "12,000",
    programs: ["Engineering", "Business", "Computer Science", "Medicine", "Optics"],
    website: "https://rochester.edu",
    tuition: "$63,150/year (generous aid available)",
    admissionRate: "30%",
    establishedYear: "1850"
  },
  {
    id: "3",
    name: "Grinnell College",
    location: "Grinnell, Iowa",
    description: "One of the most generous colleges for financial aid, offering need-blind admissions and full scholarships to qualified students.",
    type: "Private Liberal Arts College",
    studentCount: "1,700",
    programs: ["Liberal Arts", "Science", "Economics", "Computer Science", "Environmental Studies"],
    website: "https://grinnell.edu",
    tuition: "$62,000/year (meets 100% demonstrated need)",
    admissionRate: "11%",
    establishedYear: "1846"
  },
  {
    id: "4",
    name: "Berea College",
    location: "Berea, Kentucky",
    description: "Unique tuition-free college for students with financial need. All students work on campus to earn their education.",
    type: "Private Liberal Arts College",
    studentCount: "1,600",
    programs: ["Liberal Arts", "Agriculture", "Technology", "Nursing", "Business"],
    website: "https://berea.edu",
    tuition: "$0 (tuition-free with work-study program)",
    admissionRate: "35%",
    establishedYear: "1855"
  },
  {
    id: "5",
    name: "Clark University",
    location: "Worcester, Massachusetts",
    description: "Known for excellent financial aid packages and strong support for international students, particularly from India.",
    type: "Private Research University",
    studentCount: "3,100",
    programs: ["Psychology", "International Development", "Business", "Computer Science", "Liberal Arts"],
    website: "https://clarku.edu",
    tuition: "$58,000/year (average aid $40,000)",
    admissionRate: "55%",
    establishedYear: "1887"
  },
  {
    id: "6",
    name: "Arizona State University",
    location: "Tempe, Arizona",
    description: "Large public university offering significant merit scholarships including the New American University Scholarship for international students.",
    type: "Public Research University",
    studentCount: "80,000",
    programs: ["Engineering", "Business", "Computer Science", "Journalism", "Innovation"],
    website: "https://asu.edu",
    tuition: "$32,000/year (international), scholarships available",
    admissionRate: "88%",
    establishedYear: "1885"
  },
  {
    id: "7",
    name: "Colby College",
    location: "Waterville, Maine",
    description: "Elite liberal arts college offering need-blind admissions and generous financial aid to international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,200",
    programs: ["Liberal Arts", "Environmental Science", "Economics", "Government", "International Studies"],
    website: "https://colby.edu",
    tuition: "$63,000/year (meets 100% demonstrated need)",
    admissionRate: "8%",
    establishedYear: "1813"
  },
  {
    id: "8",
    name: "University of Alabama",
    location: "Tuscaloosa, Alabama",
    description: "Public university offering substantial merit scholarships including full-ride scholarships for high-achieving students.",
    type: "Public Research University",
    studentCount: "38,000",
    programs: ["Engineering", "Business", "Medicine", "Law", "Communications"],
    website: "https://ua.edu",
    tuition: "$32,000/year (international), merit scholarships up to full tuition",
    admissionRate: "83%",
    establishedYear: "1831"
  },
  {
    id: "9",
    name: "Wesleyan University",
    location: "Middletown, Connecticut",
    description: "Prestigious liberal arts university with excellent financial aid for international students, including those from India.",
    type: "Private Liberal Arts University",
    studentCount: "3,200",
    programs: ["Liberal Arts", "Film Studies", "Government", "Economics", "Science"],
    website: "https://wesleyan.edu",
    tuition: "$63,000/year (meets 100% demonstrated need)",
    admissionRate: "16%",
    establishedYear: "1831"
  },
  {
    id: "10",
    name: "Drew University",
    location: "Madison, New Jersey",
    description: "Small liberal arts university known for generous merit scholarships and personalized attention to international students.",
    type: "Private Liberal Arts University",
    studentCount: "2,100",
    programs: ["Liberal Arts", "Theater", "Sciences", "Business", "Education"],
    website: "https://drew.edu",
    tuition: "$57,000/year (average aid $35,000)",
    admissionRate: "69%",
    establishedYear: "1867"
  }
];