const roadmaps = {
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

  "CSE_to_SoftwareDeveloper": {
    career: "Software Developer",
    description: "Build applications and software solutions",
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
  "CSE-AI_to_AIEngineer": {
    career: "AI Engineer",
    description: "Design and deploy AI/ML systems at scale",
    timeToAchieve: "0-3 years after B.Tech",
    roadmap: [
      { phase: "Foundation (B.Tech Year 1-2)", tasks: ["Python mastery", "Linear Algebra & Statistics", "ML algorithms theory", "Kaggle competitions start"] },
      { phase: "Build Projects (Year 3-4)", tasks: ["End-to-end ML projects", "Deep Learning models", "MLOps basics", "Research paper reading"] },
      { phase: "Specialization", tasks: ["LLM fine-tuning", "Computer Vision or NLP track", "Cloud AI deployment", "AI product building"] },
      { phase: "Career Path", tasks: ["ML Engineer → Senior ML Engineer", "AI Researcher at FAANG", "AI startup founder", "AI Product Manager"] }
    ],
    skills: ["Python", "TensorFlow/PyTorch", "MLflow/Kubeflow", "AWS SageMaker", "Docker/Kubernetes"],
    salaryProgression: { fresher: "₹6-12 LPA", midLevel: "₹15-30 LPA", senior: "₹35-70 LPA", lead: "₹70+ LPA" },
    demandTrend: "Extremely High - AI is the #1 hiring category in India 2024-2026"
  }
};

module.exports = roadmaps;
