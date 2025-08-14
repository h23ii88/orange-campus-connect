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
  },
  {
    id: "7",
    title: "INSPIRE Scholarship (DST)",
    amount: "₹80,000/year + research fellowship",
    deadline: "2024-07-31",
    description: "Government of India scholarship for students pursuing Basic and Natural Sciences at undergraduate and postgraduate levels.",
    category: "Government",
    eligibility: "Indian citizens, top 1% in 12th boards or KVPY/NTSE qualified, pursuing Basic Sciences",
    requirements: [
      "12th standard marks certificate",
      "Admission to recognized institution",
      "KVPY/NTSE qualification (preferred)",
      "Bank account details",
      "Aadhar card",
      "Income certificate"
    ],
    applicationUrl: "https://online-inspire.gov.in/",
    provider: "Department of Science and Technology, GoI"
  },
  {
    id: "8",
    title: "CSIR NET JRF Fellowship",
    amount: "₹31,000/month + HRA",
    deadline: "2024-06-15",
    description: "Fellowship for pursuing PhD in Science and Technology. Includes Junior Research Fellowship and Senior Research Fellowship.",
    category: "Research Fellowship",
    eligibility: "Postgraduate in Science/Engineering with NET qualification",
    requirements: [
      "Master's degree in Science/Technology",
      "CSIR NET/GATE qualification",
      "Research proposal",
      "Supervisor's consent letter",
      "University admission letter",
      "Medical certificate"
    ],
    applicationUrl: "https://csirhrdg.res.in/",
    provider: "Council of Scientific and Industrial Research"
  },
  {
    id: "9",
    title: "UGC NET JRF",
    amount: "₹31,000/month + HRA",
    deadline: "2024-09-30",
    description: "University Grants Commission fellowship for pursuing PhD in humanities, social sciences, and other subjects.",
    category: "Research Fellowship",
    eligibility: "Postgraduate degree holders who qualify UGC NET",
    requirements: [
      "Master's degree (minimum 55% marks)",
      "UGC NET qualification",
      "PhD admission in recognized university",
      "Age limit: 28 years (relaxation for reserved categories)",
      "Research proposal",
      "Supervisor details"
    ],
    applicationUrl: "https://ugcnet.nta.nic.in/",
    provider: "University Grants Commission"
  },
  {
    id: "10",
    title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    amount: "₹7,000/month (undergraduate) + ₹28,000/month (PhD)",
    deadline: "2024-08-31",
    description: "National fellowship program in Basic Sciences for students from Class XI to PhD level.",
    category: "Science Fellowship",
    eligibility: "Students in Class XI, XII, 1st/2nd year BSc, MSc, integrated courses",
    requirements: [
      "Academic transcripts",
      "KVPY aptitude test qualification",
      "Interview performance",
      "Commitment to pursue research career",
      "Age limit varies by stream",
      "Medical fitness certificate"
    ],
    applicationUrl: "http://kvpy.iisc.ernet.in/",
    provider: "Indian Institute of Science"
  },
  {
    id: "11",
    title: "Aditya Birla Scholarship",
    amount: "₹2,00,000/year",
    deadline: "2024-09-15",
    description: "Merit-based scholarship for engineering and management students at premier institutions like IITs, IIMs, and top law schools.",
    category: "Corporate Scholarship",
    eligibility: "Students admitted to IITs, IIMs, BITS Pilani, AIIMS, National Law Schools",
    requirements: [
      "Admission to eligible institutions",
      "Excellent academic record",
      "JEE/CAT/CLAT scores",
      "Leadership qualities",
      "Community service experience",
      "Interview and group discussion"
    ],
    applicationUrl: "https://www.adityabirla.com/careers/aditya-birla-scholarships",
    provider: "Aditya Birla Group"
  },
  {
    id: "12",
    title: "Dr. A.P.J. Abdul Kalam IGNITE Awards",
    amount: "₹5,00,000 + mentorship",
    deadline: "2024-12-31",
    description: "Awards for original technological ideas/innovations by children up to Class XII, encouraging creativity and innovation.",
    category: "Innovation Award",
    eligibility: "Students up to Class XII with original technological ideas",
    requirements: [
      "Original technological idea/innovation",
      "Working prototype (preferred)",
      "Detailed project report",
      "School/teacher recommendation",
      "Video demonstration",
      "Patent search report"
    ],
    applicationUrl: "https://ignite.org.in/",
    provider: "National Innovation Foundation"
  },
  {
    id: "13",
    title: "Prime Minister's Research Fellowship (PMRF)",
    amount: "₹80,000/month + research grant",
    deadline: "2024-05-31",
    description: "Prestigious fellowship for PhD in science and technology at IITs, IISc, and select institutions.",
    category: "Government Fellowship",
    eligibility: "BTech/Integrated MTech graduates from CFTIs with CGPA 8.0+",
    requirements: [
      "BTech/MTech from IITs/NITs/IISERs/IISc",
      "CGPA 8.0 or above",
      "GATE/JAM/GPAT qualification",
      "Research proposal",
      "Statement of purpose",
      "Faculty recommendations"
    ],
    applicationUrl: "https://pmrf.in/",
    provider: "Ministry of Education, GoI"
  },
  {
    id: "14",
    title: "Reliance Foundation Scholarships",
    amount: "₹2,00,000/year",
    deadline: "2024-10-31",
    description: "Need and merit-based scholarships for undergraduate students in engineering, medicine, and other professional courses.",
    category: "Corporate Scholarship",
    eligibility: "Undergraduate students in professional courses, family income <₹6 lakhs",
    requirements: [
      "Admission to recognized institution",
      "12th standard marks (minimum 60%)",
      "Family income certificate",
      "Entrance exam scores",
      "Academic transcripts",
      "Recommendation letters"
    ],
    applicationUrl: "https://www.reliancefoundation.org/scholarships",
    provider: "Reliance Foundation"
  },
  {
    id: "15",
    title: "Sitaram Jindal Foundation Scholarship",
    amount: "₹48,000/year",
    deadline: "2024-11-30",
    description: "Merit-cum-means scholarship for economically disadvantaged meritorious students pursuing professional courses.",
    category: "Merit-cum-Means",
    eligibility: "Students in professional courses, family income <₹2.5 lakhs, good academic record",
    requirements: [
      "Academic transcripts",
      "Income certificate",
      "Caste certificate (if applicable)",
      "Entrance exam scorecard",
      "Bank account details",
      "College admission letter"
    ],
    applicationUrl: "https://www.sitaramjindalfoundation.org/",
    provider: "Sitaram Jindal Foundation"
  },
  {
    id: "16",
    title: "ONGC Scholarship",
    amount: "₹48,000/year",
    deadline: "2024-08-31",
    description: "Scholarship for economically disadvantaged students pursuing technical/professional courses in India.",
    category: "Corporate Scholarship",
    eligibility: "Students in technical/professional courses, family income <₹4.5 lakhs, good academic record",
    requirements: [
      "Course admission certificate",
      "Previous academic records",
      "Income certificate",
      "Bank account details",
      "Aadhar card",
      "Character certificate"
    ],
    applicationUrl: "https://www.ongcindia.com/careers/scholarships/",
    provider: "Oil and Natural Gas Corporation"
  },
  {
    id: "17",
    title: "Pratham Education Foundation Scholarship",
    amount: "₹30,000 - ₹75,000/year",
    deadline: "2024-07-15",
    description: "Supporting underprivileged students who have overcome challenges to pursue higher education in various fields.",
    category: "NGO Scholarship",
    eligibility: "Underprivileged students with academic merit, first-generation college students preferred",
    requirements: [
      "Academic excellence record",
      "Income certificate (<₹3 lakhs)",
      "Personal essay on challenges overcome",
      "Community service documentation",
      "Teacher recommendations",
      "Interview"
    ],
    applicationUrl: "https://www.pratham.org/scholarships",
    provider: "Pratham Education Foundation"
  },
  {
    id: "18",
    title: "Azim Premji Foundation Scholarship",
    amount: "Full tuition + living expenses",
    deadline: "2024-06-30",
    description: "Comprehensive scholarship for students from economically weaker sections to pursue higher education.",
    category: "NGO Scholarship",
    eligibility: "Meritorious students from low-income families, commitment to social development",
    requirements: [
      "Academic excellence",
      "Family income <₹2 lakhs",
      "Social development commitment",
      "Leadership potential",
      "Community service record",
      "Detailed application essay"
    ],
    applicationUrl: "https://azimpremjifoundation.org/scholarships",
    provider: "Azim Premji Foundation"
  },
  {
    id: "19",
    title: "Ramanujan Fellowship",
    amount: "₹85,000/month + research grant",
    deadline: "2024-12-15",
    description: "Fellowship for brilliant scientists and engineers to pursue independent research in India.",
    category: "Research Fellowship",
    eligibility: "Indian citizens/NRIs with PhD and outstanding research record",
    requirements: [
      "PhD degree",
      "Postdoctoral experience (preferred)",
      "Research proposal",
      "Publication record",
      "Host institution agreement",
      "Age limit: 35 years"
    ],
    applicationUrl: "https://www.dst.gov.in/scientific-programmes/scientific-engineering-research/ramanujan-fellowship",
    provider: "Department of Science and Technology"
  },
  {
    id: "20",
    title: "Swami Vivekananda Single Child Scholarship",
    amount: "₹2,000/month",
    deadline: "2024-09-30",
    description: "West Bengal government scholarship for single child students pursuing higher education.",
    category: "State Government",
    eligibility: "Single child of parents, domicile of West Bengal, studying in recognized institutions",
    requirements: [
      "Single child certificate",
      "Domicile certificate",
      "Academic transcripts",
      "Admission certificate",
      "Bank account details",
      "Income certificate"
    ],
    applicationUrl: "https://svmcm.wbhed.gov.in/",
    provider: "Government of West Bengal"
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
  },
  {
    id: "11",
    name: "Carleton College",
    location: "Northfield, Minnesota",
    description: "Elite liberal arts college with need-blind admissions for all students, including internationals. Meets 100% of demonstrated financial need.",
    type: "Private Liberal Arts College",
    studentCount: "2,100",
    programs: ["Liberal Arts", "Computer Science", "Economics", "Environmental Studies", "Psychology"],
    website: "https://carleton.edu",
    tuition: "$63,000/year (meets 100% demonstrated need)",
    admissionRate: "20%",
    establishedYear: "1866"
  },
  {
    id: "12",
    name: "Trinity College",
    location: "Hartford, Connecticut",
    description: "Prestigious liberal arts college offering substantial merit and need-based aid to international students with strong academic records.",
    type: "Private Liberal Arts College",
    studentCount: "2,400",
    programs: ["Liberal Arts", "Engineering", "Computer Science", "Economics", "International Studies"],
    website: "https://trincoll.edu",
    tuition: "$62,000/year (generous aid packages available)",
    admissionRate: "34%",
    establishedYear: "1823"
  },
  {
    id: "13",
    name: "University of Vermont",
    location: "Burlington, Vermont",
    description: "Public research university offering competitive merit scholarships for international students, particularly strong in environmental and health sciences.",
    type: "Public Research University",
    studentCount: "13,000",
    programs: ["Engineering", "Business", "Environmental Science", "Medicine", "Computer Science"],
    website: "https://uvm.edu",
    tuition: "$45,000/year (international), merit scholarships available",
    admissionRate: "67%",
    establishedYear: "1791"
  },
  {
    id: "14",
    name: "University of Kansas",
    location: "Lawrence, Kansas",
    description: "Major public university with automatic merit scholarships for high-achieving international students and relatively low tuition costs.",
    type: "Public Research University",
    studentCount: "28,000",
    programs: ["Engineering", "Business", "Journalism", "Medicine", "Liberal Arts"],
    website: "https://ku.edu",
    tuition: "$28,000/year (international), automatic merit scholarships",
    admissionRate: "93%",
    establishedYear: "1865"
  },
  {
    id: "15",
    name: "Lawrence University",
    location: "Appleton, Wisconsin",
    description: "Private liberal arts college and conservatory offering generous need-based aid and merit scholarships to international students.",
    type: "Private Liberal Arts College",
    studentCount: "1,500",
    programs: ["Liberal Arts", "Music", "Sciences", "Economics", "International Studies"],
    website: "https://lawrence.edu",
    tuition: "$55,000/year (average aid $40,000)",
    admissionRate: "72%",
    establishedYear: "1847"
  },
  {
    id: "16",
    name: "Temple University",
    location: "Philadelphia, Pennsylvania",
    description: "Large public research university offering merit scholarships up to full tuition for high-achieving international students.",
    type: "Public Research University",
    studentCount: "39,000",
    programs: ["Business", "Engineering", "Communications", "Medicine", "Arts"],
    website: "https://temple.edu",
    tuition: "$34,000/year (international), merit scholarships up to full tuition",
    admissionRate: "70%",
    establishedYear: "1884"
  },
  {
    id: "17",
    name: "University of Tulsa",
    location: "Tulsa, Oklahoma",
    description: "Private research university known for generous merit scholarships and excellent engineering programs. Strong financial aid for international students.",
    type: "Private Research University",
    studentCount: "4,200",
    programs: ["Engineering", "Business", "Computer Science", "Liberal Arts", "Law"],
    website: "https://utulsa.edu",
    tuition: "$48,000/year (average aid $35,000)",
    admissionRate: "69%",
    establishedYear: "1894"
  },
  {
    id: "18",
    name: "Iowa State University",
    location: "Ames, Iowa",
    description: "Top public research university with competitive tuition and automatic merit scholarships for high-achieving international students.",
    type: "Public Research University",
    studentCount: "34,000",
    programs: ["Engineering", "Agriculture", "Business", "Veterinary Medicine", "Design"],
    website: "https://iastate.edu",
    tuition: "$25,000/year (international), automatic merit scholarships",
    admissionRate: "92%",
    establishedYear: "1858"
  },
  {
    id: "19",
    name: "Denison University",
    location: "Granville, Ohio",
    description: "Highly selective liberal arts college offering substantial merit scholarships and need-based aid to international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,400",
    programs: ["Liberal Arts", "Economics", "Computer Science", "Environmental Studies", "Theater"],
    website: "https://denison.edu",
    tuition: "$58,000/year (average aid $42,000)",
    admissionRate: "29%",
    establishedYear: "1831"
  },
  {
    id: "20",
    name: "New Mexico State University",
    location: "Las Cruces, New Mexico",
    description: "Public research university with very affordable tuition and automatic merit scholarships for international students with good academic records.",
    type: "Public Research University",
    studentCount: "15,000",
    programs: ["Engineering", "Agriculture", "Business", "Health Sciences", "Arts"],
    website: "https://nmsu.edu",
    tuition: "$22,000/year (international), automatic merit scholarships",
    admissionRate: "78%",
    establishedYear: "1888"
  },
  {
    id: "21",
    name: "Macalester College",
    location: "Saint Paul, Minnesota",
    description: "Highly regarded liberal arts college with need-blind admissions for all students and meets 100% of demonstrated financial need for international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,200",
    programs: ["Liberal Arts", "International Studies", "Economics", "Computer Science", "Environmental Studies"],
    website: "https://macalester.edu",
    tuition: "$63,000/year (meets 100% demonstrated need)",
    admissionRate: "27%",
    establishedYear: "1874"
  },
  {
    id: "22",
    name: "Oberlin College",
    location: "Oberlin, Ohio",
    description: "Progressive liberal arts college with excellent financial aid, particularly generous to international students pursuing arts and sciences.",
    type: "Private Liberal Arts College",
    studentCount: "2,900",
    programs: ["Liberal Arts", "Music Conservatory", "Environmental Studies", "Neuroscience", "Creative Writing"],
    website: "https://oberlin.edu",
    tuition: "$61,000/year (average aid $45,000)",
    admissionRate: "35%",
    establishedYear: "1833"
  },
  {
    id: "23",
    name: "Reed College",
    location: "Portland, Oregon",
    description: "Prestigious liberal arts college known for academic rigor and substantial financial aid packages for qualified international students.",
    type: "Private Liberal Arts College",
    studentCount: "1,500",
    programs: ["Liberal Arts", "Physics", "Biology", "Psychology", "Creative Writing"],
    website: "https://reed.edu",
    tuition: "$62,000/year (meets 100% demonstrated need)",
    admissionRate: "31%",
    establishedYear: "1908"
  },
  {
    id: "24",
    name: "Colorado College",
    location: "Colorado Springs, Colorado",
    description: "Innovative liberal arts college with block plan curriculum, offering need-blind admissions and excellent financial aid to international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,100",
    programs: ["Liberal Arts", "Environmental Science", "Economics", "International Political Economy", "Neuroscience"],
    website: "https://coloradocollege.edu",
    tuition: "$64,000/year (meets 100% demonstrated need)",
    admissionRate: "14%",
    establishedYear: "1874"
  },
  {
    id: "25",
    name: "Brandeis University",
    location: "Waltham, Massachusetts",
    description: "Research university with strong liberal arts tradition, offering generous merit and need-based aid to international students.",
    type: "Private Research University",
    studentCount: "5,800",
    programs: ["Liberal Arts", "Computer Science", "Business", "International Business", "Psychology"],
    website: "https://brandeis.edu",
    tuition: "$62,000/year (average aid $50,000)",
    admissionRate: "31%",
    establishedYear: "1948"
  },
  {
    id: "26",
    name: "Skidmore College",
    location: "Saratoga Springs, New York",
    description: "Liberal arts college emphasizing creativity and interdisciplinary learning, with substantial financial aid for international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,600",
    programs: ["Liberal Arts", "Business", "Theater", "Studio Art", "Psychology"],
    website: "https://skidmore.edu",
    tuition: "$62,000/year (average aid $48,000)",
    admissionRate: "25%",
    establishedYear: "1903"
  },
  {
    id: "27",
    name: "University of Richmond",
    location: "Richmond, Virginia",
    description: "Private university offering Richmond Scholars Program with full scholarships, plus excellent financial aid for international students.",
    type: "Private Liberal Arts University",
    studentCount: "4,000",
    programs: ["Liberal Arts", "Business", "Law", "Leadership Studies", "International Studies"],
    website: "https://richmond.edu",
    tuition: "$60,000/year (generous merit scholarships available)",
    admissionRate: "27%",
    establishedYear: "1830"
  },
  {
    id: "28",
    name: "Gettysburg College",
    location: "Gettysburg, Pennsylvania",
    description: "Highly selective liberal arts college with excellent academic programs and substantial financial aid packages for international students.",
    type: "Private Liberal Arts College",
    studentCount: "2,400",
    programs: ["Liberal Arts", "Business", "International Affairs", "Environmental Studies", "Theater Arts"],
    website: "https://gettysburg.edu",
    tuition: "$60,000/year (average aid $45,000)",
    admissionRate: "44%",
    establishedYear: "1832"
  },
  {
    id: "29",
    name: "Juniata College",
    location: "Huntingdon, Pennsylvania",
    description: "Liberal arts college with innovative self-designed majors and generous merit scholarships for international students with strong academics.",
    type: "Private Liberal Arts College",
    studentCount: "1,600",
    programs: ["Liberal Arts", "Sciences", "Business", "Education", "Peace and Conflict Studies"],
    website: "https://juniata.edu",
    tuition: "$55,000/year (average aid $42,000)",
    admissionRate: "74%",
    establishedYear: "1876"
  },
  {
    id: "30",
    name: "Hampshire College",
    location: "Amherst, Massachusetts",
    description: "Progressive liberal arts college with no grades or distribution requirements, offering need-based financial aid to international students.",
    type: "Private Liberal Arts College",
    studentCount: "1,400",
    programs: ["Liberal Arts", "Creative Arts", "Natural Sciences", "Social Sciences", "Interdisciplinary Studies"],
    website: "https://hampshire.edu",
    tuition: "$58,000/year (generous aid available)",
    admissionRate: "65%",
    establishedYear: "1965"
  }
];