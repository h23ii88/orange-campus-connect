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
    title: "Fulbright Foreign Student Program",
    amount: "$25,000 - $45,000",
    deadline: "2024-10-15",
    description: "The prestigious Fulbright Program offers scholarships for Indian students to pursue Master's and PhD degrees in the United States.",
    category: "International Students",
    eligibility: "Indian citizens with excellent academic record, leadership potential, and English proficiency",
    requirements: [
      "Bachelor's degree with first class or high second class",
      "TOEFL/IELTS scores",
      "Statement of Purpose",
      "Three letters of recommendation",
      "Academic transcripts",
      "Research proposal (for PhD applicants)"
    ],
    applicationUrl: "https://www.usief.org.in/Fulbright-Fellowships.aspx",
    provider: "United States-India Educational Foundation"
  },
  {
    id: "2",
    title: "Inlaks Shivdasani Foundation Scholarship",
    amount: "$100,000 - $150,000",
    deadline: "2024-11-15",
    description: "Merit-based scholarships for outstanding Indian students to pursue postgraduate studies at top universities in the US, UK, and Europe.",
    category: "Merit-Based",
    eligibility: "Indian citizens under 30 years, exceptional academic record, admission to top-tier universities",
    requirements: [
      "Undergraduate degree with distinction",
      "Admission to partner universities",
      "GMAT/GRE/LSAT scores (if applicable)",
      "Personal statement",
      "Academic references",
      "Interview"
    ],
    applicationUrl: "https://www.inlaksfoundation.org/scholarships",
    provider: "Inlaks Shivdasani Foundation"
  },
  {
    id: "3",
    title: "Tata Scholarship at Cornell University",
    amount: "Full tuition + living expenses",
    deadline: "2024-12-01",
    description: "Comprehensive scholarship for Indian students to pursue undergraduate studies at Cornell University.",
    category: "Undergraduate",
    eligibility: "Indian citizens with outstanding academic achievement and financial need",
    requirements: [
      "Excellent high school grades (90%+ or equivalent)",
      "SAT/ACT scores",
      "Common Application",
      "Essays and personal statements",
      "Letters of recommendation",
      "Financial aid application"
    ],
    applicationUrl: "https://admissions.cornell.edu/financial-aid",
    provider: "Tata Education and Development Trust"
  },
  {
    id: "4",
    title: "Rhodes Scholarship",
    amount: "Full funding for 2-3 years",
    deadline: "2024-09-30",
    description: "One of the world's most prestigious scholarships for postgraduate study at the University of Oxford.",
    category: "Prestigious Award",
    eligibility: "Indian citizens aged 19-25, exceptional academic achievement, leadership, and character",
    requirements: [
      "Bachelor's degree with first class honors",
      "Demonstrated leadership",
      "Academic transcripts",
      "Personal statement",
      "Five to eight references",
      "Interview process"
    ],
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/",
    provider: "Rhodes Trust"
  },
  {
    id: "5",
    title: "JN Tata Endowment for Higher Education",
    amount: "Up to $50,000 (loan scholarship)",
    deadline: "2024-03-31",
    description: "Interest-free loan scholarships for Indian students pursuing higher education abroad in all fields.",
    category: "Loan Scholarship",
    eligibility: "Indian citizens with good academic record, admission to reputed foreign universities",
    requirements: [
      "Academic transcripts",
      "Admission letter from foreign university",
      "Statement of purpose",
      "Two academic references",
      "Financial statement",
      "Interview"
    ],
    applicationUrl: "https://www.jntataendowment.org/",
    provider: "JN Tata Endowment"
  },
  {
    id: "6",
    title: "Rotary Foundation Global Grant",
    amount: "$30,000 - $400,000",
    deadline: "2024-05-31",
    description: "Scholarships for graduate-level coursework or research in one of Rotary's areas of focus.",
    category: "Graduate Studies",
    eligibility: "Students pursuing education in peace, disease prevention, water sanitation, economic development, etc.",
    requirements: [
      "Bachelor's degree",
      "Admission to graduate program",
      "Project proposal",
      "Language proficiency test",
      "Endorsement from Rotary club",
      "Two references"
    ],
    applicationUrl: "https://www.rotary.org/en/our-programs/scholarships",
    provider: "Rotary International"
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