const roadmaps = {
  // === 10th to Intermediate Streams ===
  "10th_to_MPC": {
    stream: "MPC",
    fullName: "Mathematics, Physics, Chemistry",
    description: "Gateway to engineering and technology careers",
    duration: "2 years",
    subjects: ["Mathematics", "Physics", "Chemistry", "English"],
    careerPaths: ["Engineering", "Architecture", "Data Science", "Research"],
    nextStep: "B.Tech / B.Sc / B.Arch",
    steps: [
      { phase: "Class 11", duration: "1 year", tasks: ["Master Calculus basics", "Study Mechanics in Physics", "Organic Chemistry fundamentals", "Start JEE/EAMCET preparation"] },
      { phase: "Class 12", duration: "1 year", tasks: ["Advanced integration and differentiation", "Electromagnetism and Optics", "Chemical bonding and reactions", "Mock tests and past papers"] },
      { phase: "Entrance Exams", duration: "3-6 months", tasks: ["JEE Mains preparation", "EAMCET TS/AP", "BITSAT (optional)", "State board exams"] },
      { phase: "B.Tech Admission", duration: "1 month", tasks: ["Choose branch based on interest", "Apply through JOSAA/state counseling", "Select college"] }
    ]
  },
  "10th_to_BiPC": {
    stream: "BiPC",
    fullName: "Biology, Physics, Chemistry",
    description: "Path to medical, pharma, and life sciences",
    duration: "2 years",
    subjects: ["Biology", "Physics", "Chemistry", "English"],
    careerPaths: ["MBBS", "Pharmacy", "Biotechnology", "Nursing"],
    nextStep: "MBBS / B.Pharm / B.Sc Life Sciences",
    steps: [
      { phase: "Class 11", duration: "1 year", tasks: ["Cell biology and genetics", "Human anatomy basics", "Organic chemistry", "Start NEET foundation"] },
      { phase: "Class 12", duration: "1 year", tasks: ["Human physiology in-depth", "Plant biology", "Physical chemistry", "NEET mock tests"] },
      { phase: "Entrance Exams", duration: "3-6 months", tasks: ["NEET-UG preparation", "AP EAMCET (Agriculture/Pharmacy)", "State Medical CET", "AIIMS (if targeting top colleges)"] },
      { phase: "Admission", duration: "1 month", tasks: ["NEET counseling (MCC)", "State quota seats", "Private medical colleges"] }
    ]
  },
  "10th_to_MEC": {
    stream: "MEC",
    fullName: "Mathematics, Economics, Commerce",
    description: "Foundation for economics, finance, and business careers",
    duration: "2 years",
    subjects: ["Mathematics", "Economics", "Commerce", "English"],
    careerPaths: ["CA", "Economics", "MBA", "Banking"],
    nextStep: "B.Com / B.A Economics / CA / BBA",
    steps: [
      { phase: "Class 11", duration: "1 year", tasks: ["Microeconomics principles", "Accountancy basics", "Business studies", "Statistics fundamentals"] },
      { phase: "Class 12", duration: "1 year", tasks: ["Macroeconomics", "Advanced accountancy", "Indian economic development", "CA Foundation prep"] },
      { phase: "Competitive Exams", duration: "Ongoing", tasks: ["CA Foundation exam", "CUET for central universities", "State university entrance", "BBA entrance exams"] },
      { phase: "Higher Education", duration: "3-5 years", tasks: ["B.Com / BBA / B.A Eco", "CA / CMA articles", "MBA after graduation", "Government banking exams"] }
    ]
  },
  "10th_to_CEC": {
    stream: "CEC",
    fullName: "Commerce, Economics, Civics",
    description: "Ideal for law, business, and public service careers",
    duration: "2 years",
    subjects: ["Commerce", "Economics", "Civics", "English"],
    careerPaths: ["Law", "Civil Services", "Company Secretary", "Business"],
    nextStep: "B.Com / LLB / BBA",
    steps: [
      { phase: "Class 11", duration: "1 year", tasks: ["Business law basics", "Indian constitution", "Commerce principles", "Economics fundamentals"] },
      { phase: "Class 12", duration: "1 year", tasks: ["Corporate law", "Government and politics", "Tax laws", "Prepare for law entrance"] },
      { phase: "Entrance Exams", duration: "3-6 months", tasks: ["CLAT for law colleges", "UPSC CSE preparation start", "State PCS exams", "Company Secretary entrance"] },
      { phase: "Career Path", duration: "3-5 years", tasks: ["LLB / Integrated LLB", "Civil Services (IAS/IPS)", "Company Secretary (CS)", "Business Administration"] }
    ]
  },

  // === Intermediate (Inter) to Degrees ===
  
  "Inter_to_BTech": {
    stream: "B.Tech",
    fullName: "Bachelor of Technology",
    description: "Practical engineering degree prioritizing applied sciences, software, and hardware technology.",
    duration: "4 years",
    careerPaths: ["Software Developer", "IT Consultant", "Hardware Engineer", "Data Scientist"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math, Physics, Chemistry", "Basic Programming (C/Python)", "Engineering Graphics"], focus: "Core Sciences & Basics" },
      { sem: "Year 2", subjects: ["Data Structures", "Core Branch Subjects (e.g. OOPS/Circuits)", "Digital Logic"], focus: "Foundational Engineering" },
      { sem: "Year 3", subjects: ["Advanced Core Subjects", "Database Management", "Computer Networks", "Mini Projects"], focus: "Specialization & Application" },
      { sem: "Year 4", subjects: ["Electives (AI, Cloud, IoT)", "Major Project", "Industry Internship"], focus: "Industry Readiness" }
    ],
    skills: ["Problem Solving", "Programming (Python, Java, C++)", "Analytical Thinking", "System Design"],
    certifications: ["AWS Certified Developer", "Google IT Support", "Oracle Certified Professional"],
    salaryRange: "₹4-30 LPA depending on tier and branch",
    topCompanies: ["TCS", "Infosys", "Google", "Microsoft", "Amazon", "L&T"]
  },
  "Inter_to_BE": {
    stream: "B.E.",
    fullName: "Bachelor of Engineering",
    description: "Theoretical engineering degree with deep focus on engineering fundamentals and science.",
    duration: "4 years",
    careerPaths: ["Research and Development Engineer", "Design Engineer", "Manufacturing Engineer", "Academic/Professor"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Physics", "Advanced Calculus", "Mechanics", "Basic Electronics"], focus: "Theoretical Foundations" },
      { sem: "Year 2", subjects: ["Thermodynamics / Circuit Theory", "Fluid Mechanics", "Material Science"], focus: "Core Engineering Concepts" },
      { sem: "Year 3", subjects: ["Machine Design / Signal Processing", "Control Systems", "Industrial Engineering"], focus: "Analysis and Design" },
      { sem: "Year 4", subjects: ["Research Electives", "Thesis/Final Project", "Computational Methods"], focus: "Research & Development" }
    ],
    skills: ["Mathematical Modeling", "Theoretical Analysis", "Research Methodologies", "Complex Problem Solving"],
    certifications: ["Six Sigma Certification", "CAD/CAM Certification", "PMP"],
    salaryRange: "₹3.5-20 LPA",
    topCompanies: ["ISRO", "DRDO", "BHEL", "Tata Motors", "Mahindra", "Siemens"]
  },
  "Inter_to_BArch": {
    stream: "B.Arch",
    fullName: "Bachelor of Architecture",
    description: "Creative styling and science of building design, urban planning, and construction.",
    duration: "5 years",
    careerPaths: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Architectural Design I", "Visual Arts", "Building Construction", "History of Architecture"], focus: "Design Basics" },
      { sem: "Year 2-3", subjects: ["Structural Design", "Climatology", "Building Services (HVAC/Plumbing)", "Computer Aided Design (CAD)"], focus: "Technical Architecture" },
      { sem: "Year 4", subjects: ["Working Drawings", "Urban Planning", "Practical Training (Internship)"], focus: "Industry Experience" },
      { sem: "Year 5", subjects: ["Professional Practice", "Thesis Project", "Construction Management"], focus: "Professional Finalization" }
    ],
    skills: ["AutoCAD", "SketchUp / Revit", "Spatial Thinking", "Creative Design", "Project Management"],
    certifications: ["COA Registration", "LEED Green Associate", "Autodesk Revit Certification"],
    salaryRange: "₹3-15 LPA (varies highly across independent practice)",
    topCompanies: ["Hafeez Contractor", "L&T Construction", "DLF", "Godrej Properties"]
  },
  "Inter_to_Medical": {
    stream: "Medical",
    fullName: "Medical Courses (MBBS / BDS / BAMS / BHMS)",
    description: "Comprehensive path to becoming a doctor, surgeon, or healthcare professional.",
    duration: "5.5 years (including 1 year internship)",
    careerPaths: ["Physician / Surgeon", "Dentist", "Ayurvedic/Homeopathic Doctor", "Medical Researcher"],
    semesterPlan: [
      { sem: "Phase 1 (1st Year)", subjects: ["Anatomy", "Physiology", "Biochemistry"], focus: "Pre-clinical Science" },
      { sem: "Phase 2 (2nd Year)", subjects: ["Pharmacology", "Pathology", "Microbiology", "Forensic Medicine"], focus: "Para-clinical Science" },
      { sem: "Phase 3 (3rd-4th Year)", subjects: ["Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology (OBG)"], focus: "Clinical Subjects" },
      { sem: "Phase 4 (Final Year)", subjects: ["Mandatory Rotatory Internship (1 Year)"], focus: "Practical Application" }
    ],
    skills: ["Patient Care", "Diagnosis", "Surgical Procedures", "Clinical Decision Making", "Empathy"],
    certifications: ["State Medical Council Registration", "BLS/ACLS Certification"],
    salaryRange: "₹6-25 LPA (fresher to experienced specialist)",
    topCompanies: ["Apollo Hospitals", "Fortis", "AIIMS", "Max Healthcare", "Government Hospitals"]
  },


  // === B.Tech Streams (Historically Existing Data) ===

  "MPC_to_CSE": {
    stream: "CSE",
    fullName: "Computer Science Engineering",
    description: "Most in-demand technical degree of the decade",
    duration: "4 years",
    careerPaths: ["Software Developer", "Full Stack Engineer", "System Architect", "DevOps Engineer"],
    semesterPlan: [
      { sem: "Sem 1-2", subjects: ["C Programming", "Mathematics I & II", "Physics/Chemistry", "Engineering Graphics"], focus: "Foundations" },
      { sem: "Sem 3-4", subjects: ["Data Structures", "OOPS with Java/C++", "Computer Organization", "Discrete Mathematics"], focus: "Core CS" },
      { sem: "Sem 5-6", subjects: ["Operating Systems", "DBMS", "Computer Networks", "Software Engineering", "Algorithm Design"], focus: "Advanced" },
      { sem: "Sem 7-8", subjects: ["Cloud Computing", "Machine Learning elective", "Project", "Internship"], focus: "Specialization" }
    ],
    skills: ["C/C++/Java/Python", "Data Structures & Algorithms", "Web Development", "Databases", "System Design"],
    certifications: ["AWS/Azure Cloud", "Google Associate Developer", "Oracle Java", "Cisco CCNA"],
    salaryRange: "₹4-25 LPA (fresher to senior)",
    topCompanies: ["TCS", "Infosys", "Wipro", "Amazon", "Microsoft", "Google", "Flipkart"]
  },
  "MPC_to_CSE-AI": {
    stream: "CSE-AI",
    fullName: "Computer Science Engineering - Artificial Intelligence",
    description: "Future-focused degree combining CS with AI specialization",
    duration: "4 years",
    careerPaths: ["AI Engineer", "ML Engineer", "Data Scientist", "Research Scientist"],
    semesterPlan: [
      { sem: "Sem 1-2", subjects: ["Python Programming", "Mathematics I & II", "Statistics", "Data Science Fundamentals"], focus: "AI Foundation" },
      { sem: "Sem 3-4", subjects: ["Machine Learning", "Data Structures", "Linear Algebra", "Probability Theory"], focus: "ML Core" },
      { sem: "Sem 5-6", subjects: ["Deep Learning", "NLP", "Computer Vision", "Big Data Analytics"], focus: "Advanced AI" },
      { sem: "Sem 7-8", subjects: ["Generative AI", "Reinforcement Learning", "AI Ethics", "Capstone Project"], focus: "Industry AI" }
    ],
    skills: ["Python", "TensorFlow/PyTorch", "Scikit-learn", "SQL/NoSQL", "Cloud AI services"],
    certifications: ["Google TensorFlow Developer", "AWS ML Specialty", "IBM Data Science", "Coursera Deep Learning"],
    salaryRange: "₹6-40 LPA (highest paying branch)",
    topCompanies: ["Google", "Microsoft AI", "Amazon", "OpenAI", "NVIDIA", "DeepMind", "Indian AI startups"]
  },
  "MPC_to_ECE": {
    stream: "ECE",
    fullName: "Electronics & Communication Engineering",
    description: "Bridges electronics hardware with communication systems",
    duration: "4 years",
    careerPaths: ["Embedded Systems Engineer", "VLSI Designer", "Telecom Engineer", "IoT Engineer"],
    semesterPlan: [
      { sem: "Sem 1-2", subjects: ["Basic Electronics", "Circuit Theory", "Mathematics", "Engineering Physics"], focus: "Electronics Basics" },
      { sem: "Sem 3-4", subjects: ["Signals & Systems", "Digital Electronics", "Microprocessors", "Communication Theory"], focus: "Core ECE" },
      { sem: "Sem 5-6", subjects: ["VLSI Design", "Embedded Systems", "Wireless Communication", "Control Systems"], focus: "Advanced ECE" },
      { sem: "Sem 7-8", subjects: ["5G/IoT", "DSP Advanced", "Project", "Internship at hardware company"], focus: "Specialization" }
    ],
    skills: ["C/Assembly", "VHDL/Verilog", "MATLAB", "PCB Design", "Arduino/Raspberry Pi"],
    certifications: ["VLSI Design cert", "Embedded C certification", "Cisco Telecom", "IoT specialist"],
    salaryRange: "₹3.5-20 LPA",
    topCompanies: ["Qualcomm", "Samsung R&D", "Intel", "ISRO", "DRDO", "Bosch", "Texas Instruments"]
  },
  "MPC_to_MECH": {
    stream: "MECH",
    fullName: "Mechanical Engineering",
    description: "Evergreen engineering branch combining physics with design",
    duration: "4 years",
    careerPaths: ["Mechanical Design Engineer", "Production Engineer", "Automotive Engineer", "HVAC Engineer"],
    semesterPlan: [
      { sem: "Sem 1-2", subjects: ["Engineering Mechanics", "Thermodynamics I", "Engineering Drawing", "Material Science"], focus: "Mechanical Basics" },
      { sem: "Sem 3-4", subjects: ["Fluid Mechanics", "Manufacturing Processes", "Kinematics", "Strength of Materials"], focus: "Core Mechanical" },
      { sem: "Sem 5-6", subjects: ["Machine Design", "Heat Transfer", "CAD/CAM", "Industrial Engineering"], focus: "Design & Manufacturing" },
      { sem: "Sem 7-8", subjects: ["Robotics", "Finite Element Analysis", "Project", "Industry Internship"], focus: "Advanced" }
    ],
    skills: ["AutoCAD", "SolidWorks/CATIA", "ANSYS", "MATLAB", "Python for engineers"],
    certifications: ["AutoCAD certified", "SolidWorks CSWA", "Six Sigma", "PMP"],
    salaryRange: "₹3-18 LPA",
    topCompanies: ["TATA Motors", "L&T", "Bosch", "Hyundai", "Mahindra", "ISRO", "BHEL"]
  },
  "MPC_to_CE": {
    stream: "CE",
    fullName: "Civil Engineering",
    description: "Build the infrastructure that powers India's growth",
    duration: "4 years",
    careerPaths: ["Structural Engineer", "Urban Planner", "Construction Manager", "Government Engineer"],
    semesterPlan: [
      { sem: "Sem 1-2", subjects: ["Engineering Mechanics", "Building Materials", "Surveying", "Fluid Mechanics I"], focus: "Civil Basics" },
      { sem: "Sem 3-4", subjects: ["Structural Analysis", "Soil Mechanics", "Highway Engineering", "Environmental Engineering"], focus: "Core Civil" },
      { sem: "Sem 5-6", subjects: ["RCC Design", "Foundation Engineering", "Water Supply & Sanitation", "Transportation Engineering"], focus: "Design" },
      { sem: "Sem 7-8", subjects: ["Project Management", "Smart Cities", "Internship in construction/govt", "Final Project"], focus: "Industry" }
    ],
    skills: ["AutoCAD Civil", "STAAD Pro", "REVIT", "GIS tools", "MS Project"],
    certifications: ["AutoCAD Civil 3D", "STAAD Pro certified", "LEED Green Associate", "PMP"],
    salaryRange: "₹3-15 LPA (private), ₹6-12 LPA (govt)",
    topCompanies: ["L&T Construction", "AECOM", "NHAI", "NMRCL", "PWD", "Municipal Corporations"]
  },

  // === B.Tech to Engineering Careers ===

  "BTech_to_SoftwareDeveloper": {
    career: "Software Developer",
    description: "Build applications, web platforms, and software solutions",
    timeToAchieve: "0-2 years after B.Tech",
    roadmap: [
      { phase: "During B.Tech (Year 1-2)", tasks: ["Master one programming language", "Learn DSA", "Build small projects", "GitHub profile"] },
      { phase: "During B.Tech (Year 3-4)", tasks: ["Full stack development", "Internships", "Open source contribution", "Hackathons"] },
      { phase: "Placement Prep (6 months)", tasks: ["DSA practice (LeetCode 200+ problems)", "System design basics", "Mock interviews", "Resume building"] },
      { phase: "Career Growth", tasks: ["Junior to Senior Developer", "Tech Lead", "Software Architect", "CTO track"] }
    ],
    skills: ["Java/Python/JavaScript", "React/Node.js", "SQL/MongoDB", "Git", "System Design"],
    salaryProgression: { fresher: "₹4-8 LPA", midLevel: "₹10-20 LPA", senior: "₹25-50 LPA", lead: "₹50+ LPA" },
    demandTrend: "Very High - 1.5M new jobs by 2026 in India"
  },
  "BTech_to_DataScientist": {
    career: "Data Scientist",
    description: "Extract insights from complex data sets using statistics and ML.",
    timeToAchieve: "1-3 years after B.Tech",
    roadmap: [
      { phase: "Foundation", tasks: ["Master Python and SQL", "Learn Pandas & NumPy", "Brush up on Statistics & Probability", "Data Visualization tools (Tableau/PowerBI)"] },
      { phase: "Core Skills", tasks: ["Learn Machine Learning (Scikit-Learn)", "Deep Learning Basics", "Participate in Kaggle", "Read Research Papers"] },
      { phase: "Projects & Portfolio", tasks: ["End-to-End ML projects", "Deploy models to Cloud (AWS/GCP)", "Write tech blogs detailing your analysis"] },
      { phase: "Career Path", tasks: ["Data Analyst -> Junior Data Scientist", "Senior Data Scientist", "Lead AI/ML Researcher"] }
    ],
    skills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization Tools"],
    salaryProgression: { fresher: "₹5-10 LPA", midLevel: "₹12-25 LPA", senior: "₹30-60 LPA", lead: "₹60+ LPA" },
    demandTrend: "Extremely High - Rapid growth across tech, finance, and biotech sectors"
  },
  "BTech_to_CyberSecurity": {
    career: "Cyber Security Analyst / Engineer",
    description: "Protect systems, networks, and programs from digital attacks.",
    timeToAchieve: "1-2 years after B.Tech",
    roadmap: [
      { phase: "Fundamentals", tasks: ["Understand Computer Networks", "Learn Linux and CLI tools", "Basic Scripting (Python/Bash)"] },
      { phase: "Core Security", tasks: ["Network Security Protocols", "Cryptography Basics", "Vulnerability Scanning", "Ethical Hacking (CEH prep)"] },
      { phase: "Advanced Specilization", tasks: ["Penetration Testing", "Security Operations Center (SOC) techniques", "Incident Response"] },
      { phase: "Career Progression", tasks: ["Security Analyst", "PenTester", "Security Architect", "CISO (Chief Information Security Officer)"] }
    ],
    skills: ["Network Protocols", "Penetration Testing", "Linux OS", "Python/Bash", "Risk Assessment"],
    salaryProgression: { fresher: "₹4.5-9 LPA", midLevel: "₹10-22 LPA", senior: "₹25-50 LPA", lead: "₹50+ LPA" },
    demandTrend: "High - Constant and growing need as long as tech exists."
  },
  "BTech_to_CloudArchitect": {
    career: "Cloud Architect / DevOps",
    description: "Design and manage robust, scalable cloud environments and deployment pipelines.",
    timeToAchieve: "2-4 years after B.Tech",
    roadmap: [
      { phase: "Linux & Networking", tasks: ["Master Linux administration", "Learn Networking fundamentals", "Learn a scripting language"] },
      { phase: "Cloud Provider Core", tasks: ["Start with AWS, Azure, or GCP", "Understand Compute, Storage, and Database services", "Take an Associate Certification exam"] },
      { phase: "DevOps & IaC", tasks: ["Learn Docker & Kubernetes", "Master CI/CD pipelines (Jenkins/GitHub Actions)", "Infrastructure as Code (Terraform)"] },
      { phase: "Architecture", tasks: ["System Design", "Microservices architecture", "Security and Cost optimization"] }
    ],
    skills: ["AWS/Azure/GCP", "Docker & Kubernetes", "Terraform", "CI/CD", "Linux"],
    salaryProgression: { fresher: "₹5-10 LPA (DevOps Jr)", midLevel: "₹15-25 LPA", senior: "₹30-65 LPA", lead: "₹70+ LPA" },
    demandTrend: "Very High - Migration to cloud is massive"
  },
  "BTech_to_ProductManager": {
    career: "Product Manager",
    description: "Merge business, tech, and user experience to launch successful products.",
    timeToAchieve: "2-5 years after B.Tech",
    roadmap: [
      { phase: "Foundation", tasks: ["Read PM basics (e.g. 'Cracking the PM Interview')", "Understand Agile/Scrum", "Improve Communication and Empathy skills"] },
      { phase: "Bridge the Gap", tasks: ["Learn Wireframing (Figma)", "Data Analytics basics (Google Analytics/SQL)", "Write PRDs (Product Requirement Docs)"] },
      { phase: "Transition", tasks: ["Start as an Associate Product Manager (APM)", "Take on product ownership side-projects", "Consider an MBA (optional, but common)"] },
      { phase: "Career Steps", tasks: ["APM -> Product Manager -> Senior PM -> Director of Product"] }
    ],
    skills: ["Agile/Scrum", "Wireframing", "Data Analytics", "Cross-functional Leadership", "User Research"],
    salaryProgression: { fresher: "₹8-15 LPA (APM)", midLevel: "₹18-35 LPA", senior: "₹40-80 LPA", lead: "₹80+ LPA" },
    demandTrend: "High - Deep tech products need technically-sound PMs."
  }

};

module.exports = roadmaps;
