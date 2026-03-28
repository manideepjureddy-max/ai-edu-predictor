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

  // === Intermediate (Inter) to Degrees (B.Tech Branches) ===
  
  "Inter_to_BTech_CSE": {
    stream: "B.Tech - CSE",
    fullName: "Bachelor of Technology in Computer Science",
    description: "The core computing degree for software and systems engineering.",
    duration: "4 years",
    careerPaths: ["Software Developer", "Backend Engineer", "Systems Architect"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math, Physics", "C Programming", "Engineering Graphics"], focus: "Core Sciences & Basics" },
      { sem: "Year 2", subjects: ["Data Structures in C++", "Object Oriented Programming (Java)", "Digital Logic", "Computer Organization"], focus: "Foundational CS" },
      { sem: "Year 3", subjects: ["Operating Systems", "Database Management Systems", "Computer Networks", "Theory of Computation"], focus: "Core Computing" },
      { sem: "Year 4", subjects: ["Cloud Computing", "Compiler Design", "Major Project", "Industry Internship"], focus: "Industry Readiness" }
    ],
    skills: ["DSA (C++/Java)", "Web Development", "SQL/NoSQL", "System Design"],
    certifications: ["Oracle Java Certified", "AWS Certified Developer"],
    salaryRange: "₹4-30 LPA",
    topCompanies: ["TCS", "Infosys", "Google", "Microsoft", "Amazon", "Atlassian"],
    relatedCareers: ["BTech_to_SoftwareDeveloper", "BTech_to_CloudArchitect", "BTech_to_ProductManager"]
  },
  "Inter_to_BTech_AI": {
    stream: "B.Tech - CSE (AI & ML)",
    fullName: "B.Tech in Artificial Intelligence & Machine Learning",
    description: "Specialized branch focused on building intelligent systems and handling big data.",
    duration: "4 years",
    careerPaths: ["AI Engineer", "Machine Learning Researcher", "Data Scientist"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math", "Python Programming for Data Science", "Statistics Basics"], focus: "Math & Programming" },
      { sem: "Year 2", subjects: ["Advanced Data Structures", "Linear Algebra and Calculus", "Intro to AI", "RDBMS"], focus: "AI Foundations" },
      { sem: "Year 3", subjects: ["Machine Learning Algorithms", "Deep Learning", "Natural Language Processing (NLP)", "Big Data Analytics"], focus: "Core AI/ML" },
      { sem: "Year 4", subjects: ["Computer Vision", "Generative AI Labs", "Major AI Capstone Project"], focus: "Advanced AI" }
    ],
    skills: ["Python", "TensorFlow / PyTorch", "Pandas & NumPy", "Neural Networks"],
    certifications: ["Google ML Engineer", "AWS Machine Learning Specialty"],
    salaryRange: "₹6-35 LPA",
    topCompanies: ["OpenAI", "Google DeepMind", "Microsoft Research", "Amazon ML"],
    relatedCareers: ["BTech_to_DataScientist"]
  },
  "Inter_to_BTech_DataScience": {
    stream: "B.Tech - Data Science",
    fullName: "B.Tech in Data Science",
    description: "Dedicated curriculum to extract insights from massive, unstructured datasets.",
    duration: "4 years",
    careerPaths: ["Data Engineer", "Data Analyst", "Data Scientist", "Business Intelligence"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Math & Statistics", "Python", "Business Communication"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Data Mining", "Data Warehousing", "Statistical Inference", "SQL Advanced"], focus: "Data Core" },
      { sem: "Year 3", subjects: ["Big Data (Hadoop/Spark)", "Time Series Analysis", "Data Visualization (Tableau)"], focus: "Analytics" },
      { sem: "Year 4", subjects: ["Predictive Modeling", "Real-time Analytics", "Internship"], focus: "Application" }
    ],
    skills: ["Python / R", "Apache Spark", "Tableau / PowerBI", "Statistical Analysis"],
    certifications: ["IBM Data Science Professional", "SAS Certified Data Scientist"],
    salaryRange: "₹5-25 LPA",
    topCompanies: ["Mu Sigma", "Fractal Analytics", "Accenture", "Deloitte"],
    relatedCareers: ["BTech_to_DataScientist"]
  },
  "Inter_to_BTech_CyberSecurity": {
    stream: "B.Tech - Cyber Security",
    fullName: "B.Tech in Cyber Security",
    description: "Protecting systems, networks, and data from digital attacks.",
    duration: "4 years",
    careerPaths: ["Ethical Hacker", "Security Analyst", "Cryptographer", "Penetration Tester"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Computer Fundamentals", "C Programming", "Discrete Math"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Computer Networks", "Operating Systems (Linux heavy)", "Information Security Basics"], focus: "Infrastructure" },
      { sem: "Year 3", subjects: ["Cryptography", "Network Security Protocols", "Ethical Hacking Labs"], focus: "Core Security" },
      { sem: "Year 4", subjects: ["Digital Forensics", "Malware Analysis", "Capstone Project"], focus: "Advanced Security" }
    ],
    skills: ["Networking", "Linux", "Pen Testing", "Cryptography", "Python Scripting"],
    certifications: ["CEH (Certified Ethical Hacker)", "CompTIA Security+"],
    salaryRange: "₹5-28 LPA",
    topCompanies: ["Cisco", "Palo Alto Networks", "CrowdStrike", "IBM Security"],
    relatedCareers: ["BTech_to_CyberSecurity"]
  },
  "Inter_to_BTech_IT": {
    stream: "B.Tech - IT",
    fullName: "Bachelor of Technology in Information Technology",
    description: "Focuses on the application of computers and telecommunications to handle data.",
    duration: "4 years",
    careerPaths: ["IT Consultant", "Systems Administrator", "Cloud Engineer", "Web Developer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Programming in C", "Engineering Math", "IT Essentials"], focus: "Foundations" },
      { sem: "Year 2", subjects: ["Web Technologies (HTML/JS/PHP)", "Database Mgmt", "Data Structures"], focus: "Development" },
      { sem: "Year 3", subjects: ["Cloud Computing", "Software Engineering", "Network Administration"], focus: "Infrastructure" },
      { sem: "Year 4", subjects: ["Mobile App Development", "E-Commerce", "Industry Internship"], focus: "Specialization" }
    ],
    skills: ["Web Dev", "Network Admin", "Cloud Basics", "Database Management"],
    certifications: ["ITIL Certification", "AWS Cloud Practitioner"],
    salaryRange: "₹4-20 LPA",
    topCompanies: ["Wipro", "Cognizant", "Capgemini", "Tech Mahindra"],
    relatedCareers: ["BTech_to_SoftwareDeveloper", "BTech_to_CloudArchitect"]
  },
  "Inter_to_BTech_AIDS": {
    stream: "B.Tech - AIDS",
    fullName: "B.Tech in Artificial Intelligence & Data Science",
    description: "A hybrid engineering branch focusing on building intelligent systems using massive data architectures.",
    duration: "4 years",
    careerPaths: ["Big Data Engineer", "ML Ops Engineer", "Data Architect"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Math & Probablity", "Python Programming", "Digital Systems"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Advanced Data Structures", "Database Systems (NoSQL)", "Intro to ML"], focus: "Core Science" },
      { sem: "Year 3", subjects: ["Deep Learning", "Spark/Hadoop Architecture", "Reinforcement Learning"], focus: "AI/Data Apps" },
      { sem: "Year 4", subjects: ["Generative AI", "Data Governance", "Major Project & Internship"], focus: "Innovation" }
    ],
    skills: ["Python/R", "PyTorch", "Big Data Tools", "Statistical Modeling"],
    certifications: ["Google Professional Data Engineer", "Databricks ML Professional"],
    salaryRange: "₹7-35 LPA",
    topCompanies: ["Meta", "Microsoft", "Databricks", "Snowflake", "Google"],
    relatedCareers: ["BTech_to_DataScientist"]
  },
  "Inter_to_BTech_ECM": {
    stream: "B.Tech - ECM",
    fullName: "B.Tech in Electronics & Computer Engineering",
    description: "Modern engineering branch bridging the gap between hardware architecture and software systems.",
    duration: "4 years",
    careerPaths: ["Software Engineer", "Hardware-Software Co-designer", "Embedded Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["C Programming", "Digital Logic", "Calculus"], focus: "Foundations" },
      { sem: "Year 2", subjects: ["Microprocessors", "Computer Organization", "Java Programming"], focus: "Dual Core" },
      { sem: "Year 3", subjects: ["Operating Systems", "Computer Networks", "IoT & Sensor Systems"], focus: "Integration" },
      { sem: "Year 4", subjects: ["VLSI Design", "Full Stack Development", "Real-time Systems"], focus: "Advanced Specialization" }
    ],
    skills: ["Embedded C", "C++", "VHDL/Verilog", "OS Fundamentals"],
    certifications: ["CompTIA A+", "Cisco CCNA", "ARM Accredited Engineer"],
    salaryRange: "₹5-28 LPA",
    topCompanies: ["Intel", "Samsung", "Nvidia", "Adobe", "Qualcomm"],
    relatedCareers: ["BTech_to_EmbeddedEngineer", "BTech_to_SoftwareDeveloper"]
  },
  "Inter_to_BTech_ECE": {
    stream: "B.Tech - ECE",
    fullName: "Electronics & Communication Engineering",
    description: "Bridging the gap between software programming and hardware design.",
    duration: "4 years",
    careerPaths: ["VLSI Engineer", "Telecom Engineer", "IoT Developer", "Embedded Software Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Basic Electronics", "Engineering Math", "C Programming"], focus: "Foundations" },
      { sem: "Year 2", subjects: ["Digital Logic Design", "Signals and Systems", "Network Theory"], focus: "Core Electronics" },
      { sem: "Year 3", subjects: ["Microprocessors & Microcontrollers", "Digital Signal Processing", "Analog Comm"], focus: "Advanced ECE" },
      { sem: "Year 4", subjects: ["VLSI Design", "Internet of Things (IoT)", "Embedded Systems Lab", "Project"], focus: "Industry Prep" }
    ],
    skills: ["Verilog/VHDL", "MATLAB", "Embedded C", "Circuit Design"],
    certifications: ["Cisco CCNA", "VLSI Certification"],
    salaryRange: "₹4-22 LPA",
    topCompanies: ["Qualcomm", "Intel", "Texas Instruments", "Samsung R&D"]
  },
  "Inter_to_BTech_EEE": {
    stream: "B.Tech - EEE",
    fullName: "Electrical & Electronics Engineering",
    description: "Focus on heavy electrical systems, power grids, and electronic devices.",
    duration: "4 years",
    careerPaths: ["Electrical Engineer", "Power Systems Engineer", "Control Systems Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Basic Electrical Engg", "Math", "Engineering Mechanics"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Electrical Machines I", "Electromagnetic Fields", "Circuit Analysis"], focus: "Core Electrical" },
      { sem: "Year 3", subjects: ["Power Systems", "Control Systems", "Power Electronics"], focus: "System Mgmt" },
      { sem: "Year 4", subjects: ["Renewable Energy", "Smart Grids", "Final Project"], focus: "Future Tech" }
    ],
    skills: ["Circuit Analysis", "Power System Design", "MATLAB/Simulink"],
    certifications: ["Energy Auditor", "PLC/SCADA Certification"],
    salaryRange: "₹3-18 LPA",
    topCompanies: ["Siemens", "BHEL", "ABB", "Schneider Electric", "Tata Power"]
  },
  "Inter_to_BTech_MECH": {
    stream: "B.Tech - MECH",
    fullName: "Mechanical Engineering",
    description: "Designing, analyzing, and manufacturing machines and mechanical systems.",
    duration: "4 years",
    careerPaths: ["Design Engineer", "Automotive Engineer", "Production Manager"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Graphics", "Mechanics", "Math"], focus: "Fundamentals" },
      { sem: "Year 2", subjects: ["Thermodynamics", "Strength of Materials", "Kinematics of Machinery"], focus: "Core Mech" },
      { sem: "Year 3", subjects: ["Fluid Mechanics", "Heat Transfer", "Machine Design"], focus: "Analysis" },
      { sem: "Year 4", subjects: ["CAD/CAM", "Robotics", "Automobile Engineering Lab"], focus: "Modern Applications" }
    ],
    skills: ["AutoCAD / SolidWorks", "ANSYS", "Thermodynamics", "Manufacturing Processes"],
    certifications: ["CSWA (SolidWorks)", "AutoCAD Certified Professional"],
    salaryRange: "₹3-15 LPA",
    topCompanies: ["Tata Motors", "Mahindra", "L&T", "Bosch", "Boeing India"]
  },
  "Inter_to_BTech_Civil": {
    stream: "B.Tech - Civil",
    fullName: "Civil Engineering",
    description: "Design and construction of infrastructure projects.",
    duration: "4 years",
    careerPaths: ["Structural Engineer", "Site Engineer", "Urban Planner", "Geotechnical Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Building Materials", "Engineering Mechanics", "Math"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Surveying", "Fluid Mechanics", "Strength of Materials"], focus: "Core Civil" },
      { sem: "Year 3", subjects: ["Structural Analysis", "Reinforced Concrete Design", "Soil Mechanics"], focus: "Design" },
      { sem: "Year 4", subjects: ["Transportation Engg", "Environmental Engg", "Project Management"], focus: "Infrastructure" }
    ],
    skills: ["AutoCAD Civil 3D", "STAAD Pro", "Project Management (Primavera)"],
    certifications: ["LEED Green Associate", "PMP"],
    salaryRange: "₹3-15 LPA",
    topCompanies: ["L&T Construction", "Shapoorji Pallonji", "Tata Projects", "GMR"]
  },
  "Inter_to_BTech_Chemical": {
    stream: "B.Tech - Chemical",
    fullName: "Chemical Engineering",
    description: "Transforming raw materials into useful chemical products safely and efficiently.",
    duration: "4 years",
    careerPaths: ["Process Engineer", "Petrochemical Engineer", "Quality Plant Manager"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Physical Chemistry", "Math", "Engineering Basics"], focus: "Foundation" },
      { sem: "Year 2", subjects: ["Material & Energy Balances", "Fluid Flow Operations", "Organic Chem"], focus: "Core Chem Engg" },
      { sem: "Year 3", subjects: ["Mass Transfer", "Heat Transfer", "Chemical Reaction Engineering"], focus: "Reaction & Transfer" },
      { sem: "Year 4", subjects: ["Plant Design", "Process Control", "Industrial Safety"], focus: "Plant Operations" }
    ],
    skills: ["Process Simulation (ASPEN Plus)", "Thermodynamics", "Plant Safety"],
    certifications: ["Process Safety Management", "Six Sigma"],
    salaryRange: "₹4-16 LPA",
    topCompanies: ["Reliance Industries", "ONGC", "Hindustan Unilever", "Dr. Reddy's"]
  },

  // === Intermediate (Inter) to B.E. (Bachelor of Engineering) Branches ===

  "Inter_to_BE_Instrumentation": {
    stream: "B.E. - Instrumentation/Control",
    fullName: "B.E. in Instrumentation & Control Engineering",
    description: "Focus on measuring instruments and designing automated control systems.",
    duration: "4 years",
    careerPaths: ["Instrumentation Engineer", "Control Systems Engineer", "Automation Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Physics", "Calculus", "Basic Electronics"], focus: "Theory Basics" },
      { sem: "Year 2", subjects: ["Sensors and Transducers", "Linear ICs", "Network Theory"], focus: "Measurement" },
      { sem: "Year 3", subjects: ["Control Systems", "Industrial Instrumentation", "Microprocessors"], focus: "Control Core" },
      { sem: "Year 4", subjects: ["Process Control Automation", "PLC & SCADA", "Final Thesis"], focus: "Automation" }
    ],
    skills: ["PLC & SCADA", "LabVIEW", "Control Systems Theory", "Sensor Integration"],
    certifications: ["Certified Automation Professional (CAP)"],
    salaryRange: "₹4-15 LPA",
    topCompanies: ["Emerson", "Honeywell", "Rockwell Automation", "Siemens"]
  },
  "Inter_to_BE_Production": {
    stream: "B.E. - Production",
    fullName: "B.E. in Production & Industrial Engineering",
    description: "Optimization of manufacturing processes, lean production, and operations management.",
    duration: "4 years",
    careerPaths: ["Production Engineer", "Quality Control Manager", "Supply Chain Analyst"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Mechanics", "Math", "Mfg Processes Basics"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Material Science", "Machining Science", "Casting & Welding"], focus: "Core Mfg" },
      { sem: "Year 3", subjects: ["Operations Research", "Metrology & Quality", "Industrial Engg"], focus: "Optimization" },
      { sem: "Year 4", subjects: ["Supply Chain Mgmt", "CIM (Computer Integrated Mfg)", "Plant Training"], focus: "Industry" }
    ],
    skills: ["Lean Manufacturing", "Six Sigma", "AutoCAD", "Operations Research"],
    certifications: ["Six Sigma Green/Black Belt", "Certified Production and Inventory Mgmt (CPIM)"],
    salaryRange: "₹3.5-14 LPA",
    topCompanies: ["Maruti Suzuki", "Hero MotoCorp", "ITC", "L&T"]
  },
  "Inter_to_BE_Aeronautical": {
    stream: "B.E. - Aeronautical",
    fullName: "B.E. in Aeronautical Engineering",
    description: "Designing, manufacturing, and testing of aircraft and aerospace components.",
    duration: "4 years",
    careerPaths: ["Aerospace Engineer", "Aerodynamics Analyst", "Aircraft Design Engineer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math", "Physics", "Engineering Graphics"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Aerodynamics I", "Aircraft Materials", "Solid Mechanics"], focus: "Core Aero" },
      { sem: "Year 3", subjects: ["Propulsion", "Flight Mechanics", "Aircraft Structures"], focus: "Flight Dynamics" },
      { sem: "Year 4", subjects: ["Avionics", "Rocket Propulsion", "Thesis Research"], focus: "Advanced Aerospace" }
    ],
    skills: ["Aerodynamics", "CATIA / SolidWorks", "ANSYS Fluent", "CFD"],
    certifications: ["CATIA Aerospace certification", "CFD Expert"],
    salaryRange: "₹5-20 LPA",
    topCompanies: ["ISRO", "DRDO", "HAL", "Airbus India", "Boeing India"]
  },
  "Inter_to_BTech_Robotics": {
    stream: "B.Tech - Robotics",
    fullName: "B.Tech in Robotics & Automation",
    description: "Designing, building, and programming autonomous robots and automated systems.",
    duration: "4 years",
    careerPaths: ["Robotics Engineer", "Automation Developer", "Control Systems Analyst"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math", "Basic Electronics", "C Programming"], focus: "Foundations" },
      { sem: "Year 2", subjects: ["Mechanisms & Machines", "Microcontrollers", "Digital Logic"], focus: "Mechatronics Basics" },
      { sem: "Year 3", subjects: ["Robotic Kinematics", "Sensors & Actuators", "Computer Vision", "Control Systems"], focus: "Core Robotics" },
      { sem: "Year 4", subjects: ["Path Planning", "Industrial Automation (PLC)", "AI in Robotics", "Major Project"], focus: "Advanced Autonomy" }
    ],
    skills: ["Python/C++", "ROS (Robot OS)", "MATLAB", "SolidWorks"],
    certifications: ["Fanuc Robotics Cert", "Certified Automation Professional"],
    salaryRange: "₹6-30 LPA",
    topCompanies: ["FANUC", "Tesla", "TCS Robotics", "GreyOrange", "Hyundai"],
    relatedCareers: ["BTech_to_RoboticsEngineer"]
  },

  // === Intermediate (Inter) to B.Arch ===

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

  // === Intermediate (Inter) to Medical Streams ===

  "Inter_to_Med_MBBS": {
    stream: "MBBS",
    fullName: "Bachelor of Medicine and Bachelor of Surgery",
    description: "The premier medical degree to become a certified allopathic doctor/physician/surgeon.",
    duration: "5.5 years (including 1 yr internship)",
    careerPaths: ["General Physician", "Surgeon (after MS)", "Specialist Doctor (after MD)"],
    semesterPlan: [
      { sem: "Phase 1 (1 Year)", subjects: ["Human Anatomy", "Physiology", "Biochemistry"], focus: "Pre-clinical" },
      { sem: "Phase 2 (1.5 Years)", subjects: ["Pathology", "Pharmacology", "Microbiology", "Forensic Med"], focus: "Para-clinical" },
      { sem: "Phase 3 (2 Years)", subjects: ["General Medicine", "Surgery", "Pediatrics", "OBG", "Ophthalmology", "ENT"], focus: "Clinical Subjects" },
      { sem: "Phase 4 (1 Year)", subjects: ["Mandatory Rotatory Residential Internship (CRRI)"], focus: "Hospital Duty" }
    ],
    skills: ["Clinical Diagnosis", "Patient Care", "Surgical Skills", "Pharmacology Application", "Empathy"],
    certifications: ["State Medical Council Registration (NMC)", "BLS/ACLS", "NEET PG (for Masters)"],
    salaryRange: "₹8-20 LPA (Starting), Highly variable post-MD/MS",
    topCompanies: ["Apollo Hospitals", "Fortis", "AIIMS", "Max Healthcare", "Government Hospitals"],
    relatedCareers: ["Med_to_Specialist"]
  },
  "Inter_to_Med_BDS": {
    stream: "BDS",
    fullName: "Bachelor of Dental Surgery",
    description: "Specialized medical degree focusing on dentistry, oral health, and maxillofacial structures.",
    duration: "5 years (including 1 yr internship)",
    careerPaths: ["Dentist", "Orthodontist (after MDS)", "Oral & Maxillofacial Surgeon", "Academician"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["General Human Anatomy", "General Physiology", "Dental Anatomy/Histology"], focus: "Medical & Dental Basics" },
      { sem: "Year 2", subjects: ["General Pathology", "Microbiology", "Dental Materials"], focus: "Para-clinical" },
      { sem: "Year 3", subjects: ["General Medicine", "General Surgery", "Oral Pathology"], focus: "Systemic Clinics" },
      { sem: "Year 4", subjects: ["Orthodontics", "Oral Surgery", "Prosthodontics", "Periodontology"], focus: "Dental Specialties" },
      { sem: "Year 5", subjects: ["Internship - Clinical Rotations in all Dental Wards"], focus: "Practical Application" }
    ],
    skills: ["Precision Hand Skills", "Oral Diagnosis", "Dental Aesthetics", "Patient Management"],
    certifications: ["Dental Council of India (DCI) Registration", "Implantology Courses"],
    salaryRange: "₹3-12 LPA (Independent Clinics can earn much more)",
    topCompanies: ["Clove Dental", "Apollo White Dental", "Private Practice"],
    relatedCareers: ["Dental_to_MDS"]
  },
  "Inter_to_Med_BAMS": {
    stream: "BAMS",
    fullName: "Bachelor of Ayurvedic Medicine and Surgery",
    description: "Integrated degree combining modern medicine with traditional Ayurvedic healing systems.",
    duration: "5.5 years",
    careerPaths: ["Ayurvedic Doctor", "Medical Officer (AYUSH)", "Panchakarma Specialist", "Researcher"],
    semesterPlan: [
      { sem: "Professional 1", subjects: ["Padartha Vigyan", "Ayurved Itihas", "Sanskrit", "Rachana Sharir (Anatomy)"], focus: "Ayurvedic Foundations" },
      { sem: "Professional 2", subjects: ["Dravyaguna (Pharmacology)", "Rasashastra", "Charak Samhita"], focus: "Herbology & Metals" },
      { sem: "Professional 3", subjects: ["Agad Tantra (Toxicology)", "Swasthavritta (Preventive Med)", "Prasuti Tantra (OBG)"], focus: "Clinical Principles" },
      { sem: "Professional 4", subjects: ["Kayachikitsa (Internal Med)", "Shalya Tantra (Surgery)", "Panchakarma"], focus: "Clinical Practice" },
      { sem: "Year 5.5", subjects: ["Rotatory Internship"], focus: "Hospital Work" }
    ],
    skills: ["Nadi Pariksha (Pulse Diagnosis)", "Herbal Medicine Composition", "Panchakarma Therapy"],
    certifications: ["CCIM Registration", "Yoga/Naturopathy additional certs"],
    salaryRange: "₹3-10 LPA",
    topCompanies: ["Patanjali", "Dabur", "Himalaya Wellness", "Government AYUSH Hospitals"]
  },
  "Inter_to_Med_BHMS": {
    stream: "BHMS",
    fullName: "Bachelor of Homeopathic Medicine and Surgery",
    description: "Medical degree based on the alternative system of Homeopathy.",
    duration: "5.5 years",
    careerPaths: ["Homeopathic Doctor", "Pharmacist (Homeopathy)", "Public Health Officer"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Homeopathic Pharmacy", "Anatomy", "Physiology"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Pathology", "Forensic Medicine", "Materia Medica Basics"], focus: "Disease & Drugs" },
      { sem: "Year 3", subjects: ["Surgery Basics", "OBG basics", "Organon of Medicine"], focus: "Clinical Philosophy" },
      { sem: "Year 4", subjects: ["Practice of Medicine", "Repertory", "Advanced Materia Medica"], focus: "Prescribing" },
      { sem: "Year 5.5", subjects: ["Clinical Internship"], focus: "Practical Application" }
    ],
    skills: ["Materia Medica Knowledge", "Patient Interviewing", "Repertorization"],
    certifications: ["CCH Registration"],
    salaryRange: "₹2.5-8 LPA",
    topCompanies: ["Dr. Batra's", "Bakson's Homeopathy", "Private Practice"]
  },
  "Inter_to_Med_PharmD": {
    stream: "Pharm.D",
    fullName: "Doctor of Pharmacy",
    description: "A 6-year doctoral level pharmacy program focusing on clinical pharmacy and patient care.",
    duration: "6 years",
    careerPaths: ["Clinical Pharmacist", "Pharmacovigilance Scientist", "Drug Inspector", "Medical Writer"],
    semesterPlan: [
      { sem: "Year 1-2", subjects: ["Human Anatomy", "Pharmaceutics", "Pharmacognosy", "Pathophysiology"], focus: "Medical & Drug Basics" },
      { sem: "Year 3-4", subjects: ["Pharmacology", "Clinical Pharmacy", "Biostatistics", "Hospital Pharmacy"], focus: "Core Pharmacy" },
      { sem: "Year 5", subjects: ["Clinical Research", "Pharmacoepidemiology", "Clerkship in Wards"], focus: "Clinical Wards" },
      { sem: "Year 6", subjects: ["Internship / Residency in Hospital"], focus: "Full-time Hospital Practice" }
    ],
    skills: ["Prescription Auditing", "Drug Interactions", "Pharmacovigilance", "Patient Counseling"],
    certifications: ["Pharmacy Council of India (PCI) Registration", "Clinical Research Cert"],
    salaryRange: "₹3.5-12 LPA",
    topCompanies: ["Novartis", "Pfizer", "Sun Pharma", "Apollo Hospitals Clinical team"]
  },

  // === Intermediate (Inter) to B.Sc (Bachelor of Science) Streams ===

  "Inter_to_BSc_Ag": {
    stream: "B.Sc Agriculture",
    fullName: "Bachelor of Science in Agriculture",
    description: "Science and practice of farming, including soil cultivation and crop production.",
    duration: "4 years",
    careerPaths: ["Agriculture Officer", "Farm Manager", "Agricultural Scientist"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Agronomy", "Soil Science", "Plant Biochemistry"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Entomology", "Genetics & Plant Breeding", "Agri-Economics"], focus: "Agri Core" },
      { sem: "Year 3", subjects: ["Plant Pathology", "Horticulture", "Seed Tech"], focus: "Specialization" },
      { sem: "Year 4", subjects: ["Rural Agricultural Work Experience (RAWE)", "Agri-Business Projects"], focus: "Field Work" }
    ],
    skills: ["Soil Mapping", "Crop Mgmt", "Pest Control"],
    certifications: ["ICAR Certified", "Agri-Marketing Cert"],
    salaryRange: "₹3-12 LPA",
    topCompanies: ["Bayer", "Syngenta", "ITC", "Monsanto", "NABARD"],
    relatedCareers: ["BScAg_to_AgriOfficer"]
  },

  // === Additional Degree to Career Roadmaps ===

  "BTech_to_AI_Engineer": {
    career: "AI Engineer",
    description: "Building, training, and deploying large-scale AI models and intelligent software.",
    timeToAchieve: "0-2 years after B.Tech (CSE/AI)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Master Python and Advanced Math", "Take Deep Learning / NLP electives", "Build and deploy 2-3 Generative AI apps"] },
      { phase: "Early Career", tasks: ["Join AI-first startups or R&D labs", "Fine-tune models (LLMs)", "Learn MLOps (Weights & Biases, MLflow)"] },
      { phase: "Advanced", tasks: ["Specialize in Research or AI Architecture", "Lead AI implementation for scale"] }
    ],
    skills: ["Python", "PyTorch/TensorFlow", "NLP", "Computer Vision", "MLOps"],
    salaryProgression: { fresher: "₹8-15 LPA", midLevel: "₹20-45 LPA", senior: "₹50-1.2Cr LPA" },
    topCompanies: ["OpenAI", "Google", "DeepMind", "NVIDIA", "Meta"]
  },
  "BTech_to_VLSI_Engineer": {
    career: "VLSI / Chip Design Engineer",
    description: "Designing integrated circuits (ICs) for smartphones, cars, and computers.",
    timeToAchieve: "0-2 years after B.Tech (ECE/EEE)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Master Digital Design and CMOS basics", "Learn Verilog / VHDL", "Practice FPGA prototyping"] },
      { phase: "Specialization", tasks: ["Learn Synthesis and Physical Design tools (Cadence/Synopsys)", "Apply for VLSI internships"] },
      { phase: "Career", tasks: ["Join semiconductor giants", "Work on Analog/Digital IC Design or Verification"] }
    ],
    skills: ["Verilog/SystemVerilog", "Cadence Tools", "Static Timing Analysis", "Scripting (Tcl/Perl)"],
    salaryProgression: { fresher: "₹6-12 LPA", midLevel: "₹15-35 LPA", senior: "₹45-80 LPA" },
    topCompanies: ["Qualcomm", "Intel", "IBM", "Apple", "AMD"]
  },
  "BTech_to_PowerSystemsEngineer": {
    career: "Power Systems Engineer",
    description: "Managing large-scale electrical grids, renewable energy, and power distribution.",
    timeToAchieve: "0-2 years after B.Tech (EEE)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Master Power System Analysis", "Learn protective relaying", "Join electrical safety workshops"] },
      { phase: "Placement", tasks: ["Aim for PSUs (NTPC, PGCIL) or heavy industries", "Get certifications in Smart Grids"] },
      { phase: "Career", tasks: ["Design renewable energy integration", "Manage grid stability and load dispatch"] }
    ],
    skills: ["ETAP", "Power Electronics", "Renewable Energy Design", "MATLAB"],
    salaryProgression: { fresher: "₹4-10 LPA", midLevel: "₹12-25 LPA", senior: "₹30-50 LPA" },
    topCompanies: ["BHEL", "Tata Power", "Siemens", "General Electric", "PGCIL"]
  },
  "BTech_to_ChemicalEngineer": {
    career: "Chemical Process Engineer",
    description: "Optimizing the large-scale production of chemicals, pharmaceuticals, and fuels.",
    timeToAchieve: "0-2 years after B.Tech (Chem)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Master Thermodynamics and Reaction Engineering", "Learn Aspen Plus simulation", "Lab safety certifications"] },
      { phase: "Early Career", tasks: ["Join refinery or pharma plant as trainee", "Get hands-on experience in unit operations"] },
      { phase: "Specialization", tasks: ["Optimize process efficiency", "Work on Green Hydrogen or Carbon Capture"] }
    ],
    skills: ["Aspen Plus", "P&ID Interpretation", "Mass & Heat Transfer", "Process Safety"],
    salaryProgression: { fresher: "₹5-12 LPA", midLevel: "₹15-28 LPA", senior: "₹30-55 LPA" },
    topCompanies: ["Reliance", "ONGC", "Dr. Reddy's", "Royal Dutch Shell", "Asian Paints"]
  },
  "BTech_to_AerospaceEngineer": {
    career: "Aerospace Systems Engineer",
    description: "Designing next-gen aircraft, satellites, and space exploration tech.",
    timeToAchieve: "0-3 years after B.Tech (Aero/Mech)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Master Fluid Dynamics & Propulsion", "Learn CFD tools", "Join aerospace design competitions"] },
      { phase: "Career Launch", tasks: ["Clear GATE for ISRO/DRDO", "Join HAL as Management Trainee", "Specialization in Avionics or Structures"] }
    ],
    skills: ["Aerodynamics", "CATIA", "CFD Analysis", "Composite Materials"],
    salaryProgression: { fresher: "₹6-14 LPA", midLevel: "₹18-35 LPA", senior: "₹40-80 LPA" },
    topCompanies: ["ISRO", "Airbus", "Boeing", "SpaceX", "Lockheed Martin"]
  },
  "BTech_to_BiotechResearcher": {
    career: "Biotech / Pharma Researcher",
    description: "Developing vaccines, drugs, and bio-engineered products.",
    timeToAchieve: "1-4 years after B.Tech (Biotech)",
    roadmap: [
      { phase: "Foundations", tasks: ["Intensive lab work in Genomics and Molecular Bio", "Internships in Pharma R&D units"] },
      { phase: "Certification", tasks: ["Qualify CSIR-NET or GATE", "Learn Bioinformatics tools (NCBI/BLAST)"] },
      { phase: "Career", tasks: ["Clinical Trials management", "Drug Discovery pipeline development"] }
    ],
    skills: ["PCR Tech", "DNA Sequencing", "Bioinformatics", "GLP/GMP"],
    salaryProgression: { fresher: "₹4-9 LPA", midLevel: "₹10-22 LPA", senior: "₹25-50 LPA" },
    topCompanies: ["Biocon", "Serum Institute", "Pfizer", "Gilead", "Novartis"]
  },
  "BTech_to_RoboticsEngineer": {
    career: "Robotics & Automation Engineer",
    description: "Developing intelligent robots for manufacturing, space, and medical fields.",
    timeToAchieve: "1-3 years after B.Tech (Mech/ECE/CSE)",
    roadmap: [
      { phase: "Degree Level", tasks: ["Join robotics competitions", "Master ROS (Robot Operating System)", "Build 2-3 custom robotics projects"] },
      { phase: "Skill Up", tasks: ["Learn Computer Vision and SLAM", "Intern at automation firms"] },
      { phase: "Career", tasks: ["Design industrial robots or medical assist systems", "Work on drone autonomy"] }
    ],
    skills: ["ROS", "Python/C++", "Mechatronics", "Computer Vision", "Control Systems"],
    salaryProgression: { fresher: "₹7-15 LPA", midLevel: "₹18-40 LPA", senior: "₹50-90 LPA" },
    topCompanies: ["Tesla", "GreyOrange", "ABB", "Hyundai Robotics", "SpaceX"]
  },
  "MBBS_to_GeneralPhysician": {
    career: "General Physician",
    description: "The primary care provider for patient diagnosis and basic treatment.",
    timeToAchieve: "0-1 years after MBBS",
    roadmap: [
      { phase: "MBBS", tasks: ["Focus on Internal Medicine", "Complete internship with diverse ward rotations"] },
      { phase: "Launch", tasks: ["Obtain NMC License", "Start clinical practice or join govt health department"] }
    ],
    skills: ["Clinical Diagnosis", "Patient Management", "Emergency Care", "Empathy"],
    salaryProgression: { fresher: "₹8-14 LPA", midLevel: "₹18-30 LPA", senior: "₹35-60 LPA" },
    topCompanies: ["Apollo", "Fortis", "Govt Health Centers", "Private Practice"]
  },
  "MBBS_to_Surgeon": {
    career: "Specialist Surgeon (MS)",
    description: "Performing life-saving surgeries with high technical precision.",
    timeToAchieve: "3-5 years after MBBS",
    roadmap: [
      { phase: "MBBS", tasks: ["Excel in Human Anatomy and General Surgery subjects during degree"] },
      { phase: "Masters", tasks: ["Clear NEET PG", "Complete 3 years of MS (General Surgery) residency"] },
      { phase: "Expertise", tasks: ["Perform 100+ supervised surgeries", "Post-surgical patient care"] }
    ],
    skills: ["Surgical Precision", "Technical Knowledge", "Decision Making", "Stamina"],
    salaryProgression: { fresher: "₹12-22 LPA (Resident)", midLevel: "₹30-65 LPA", senior: "₹80-2.5Cr LPA" },
    topCompanies: ["AIIMS", "Max Healthcare", "Medanta", "Global Hospitals"]
  },
  "Degree_to_Architect": {
    career: "Professional Architect",
    description: "Designing iconic structures and sustainable living spaces.",
    timeToAchieve: "0-2 years after B.Arch",
    roadmap: [
      { phase: "Degree", tasks: ["Master Revit and SketchUp", "Intern at top architecture firms during 4th year"] },
      { phase: "COA", tasks: ["Register with Council of Architecture (COA)", "Start under a licensed Senior Architect"] },
      { phase: "Practice", tasks: ["Design residential/commercial projects", "Build a high-quality portfolio"] }
    ],
    skills: ["Spatial Design", "Revit/AutoCAD", "Sustainability", "Visualization"],
    salaryProgression: { fresher: "₹4-9 LPA", midLevel: "₹12-25 LPA", senior: "₹30-55 LPA" },
    topCompanies: ["Hafeez Contractor", "CP Kukreja", "Sanjay Puri Architects", "Genesis"]
  },
  "Degree_to_UrbanPlanner": {
    career: "Urban / Town Planner",
    description: "Designing the cities of the future with a focus on smart infrastructure and zoning.",
    timeToAchieve: "1-3 years after B.Arch/B.Tech Civil",
    roadmap: [
      { phase: "Degree", tasks: ["Electives in Urban Design and Transportation"] },
      { phase: "Masters (Optional)", tasks: ["Pursue M.Plan from SPA or IITs (highly recommended for govt roles)"] },
      { phase: "Career", tasks: ["Join city municipal corporations or smart city advisory boards"] }
    ],
    skills: ["GIS Mapping", "City Zoning Laws", "Demographic Analysis", "Sustainability"],
    salaryProgression: { fresher: "₹5-12 LPA", midLevel: "₹14-28 LPA", senior: "₹30-60 LPA" },
    topCompanies: ["NHAI", "NITI Aayog", "JLL India", "PwC Infrastructure Division"]
  },
  "Inter_to_BSc_Nursing": {
    stream: "B.Sc Nursing",
    fullName: "Bachelor of Science in Nursing",
    description: "Professional degree preparing students for a career in healthcare and patient care.",
    duration: "4 years",
    careerPaths: ["Staff Nurse", "Nursing Supervisor", "Critical Care Nurse"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Anatomy & Physiology", "Nursing Foundations", "Nutrition"], focus: "Pre-Clinical" },
      { sem: "Year 2", subjects: ["Pharmacology", "Medical Surgical Nursing", "Pathology"], focus: "Medical Nursing" },
      { sem: "Year 3", subjects: ["Child Health Nursing", "Mental Health Nursing", "OBG Nursing"], focus: "Specialized Care" },
      { sem: "Year 4", subjects: ["Community Health Nursing", "Research & Stats", "Internship"], focus: "Practical Application" }
    ],
    skills: ["Patient Care", "Injectable Admin", "Emergency Response"],
    certifications: ["Registered Nurse (RN)", "BLS/ACLS"],
    salaryRange: "₹2.5-10 LPA",
    topCompanies: ["Apollo", "Fortis", "Manipal Hospitals", "Govt Health Sector"],
    relatedCareers: ["Nursing_to_NurseAdmin"]
  },

  // === Additional Specialized Career Paths (Mechanical & Civil) ===

  "BTech_to_DesignEngineer": {
    career: "Design Engineer",
    description: "Creating technical drawings and blueprints for mechanical parts using CAD/CAE tools.",
    timeToAchieve: "0-2 years after B.Tech MECH",
    roadmap: [
      { phase: "Mastering Tools", tasks: ["Excel in AutoCAD, SolidWorks, and CATIA", "Learn GD&T (Geometric Dimensioning & Tolerancing)"] },
      { phase: "Simulation", tasks: ["Learn Finite Element Analysis (FEA) using ANSYS", "Understand materials and manufacturing constraints"] },
      { phase: "Career", tasks: ["Junior Design Engineer in Automotive or Aerospace", "Senior Designer / Product Architect"] }
    ],
    skills: ["CAD", "CAE", "GD&T", "Materials Science"],
    salaryEntry: "₹4-10 LPA",
    topCompanies: ["Tata Motors", "Mahindra", "L&T", "General Electric"]
  },
  "BTech_to_ProductionEngineer": {
    career: "Production Engineer",
    description: "Managing assembly lines, optimizing manufacturing processes, and ensuring output targets.",
    timeToAchieve: "0-1 years after B.Tech MECH",
    roadmap: [
      { phase: "Factory Floor", tasks: ["Understand CNC machining and shop floor management", "Learn Lean Manufacturing and Kaizen"] },
      { phase: "Operations", tasks: ["Manage supply chain and inventory (ERP tools like SAP)", "Optimize production cycle times"] }
    ],
    skills: ["Lean Mfg", "CNC Programming", "SAP/ERP", "Operations Research"],
    salaryEntry: "₹3.5-8 LPA",
    topCompanies: ["Maruti Suzuki", "Hero MotoCorp", "ITC", "Bosch"]
  },
  "BTech_to_MaintenanceEngineer": {
    career: "Maintenance Engineer",
    description: "Ensuring machines and plant equipment stay operational with minimal downtime.",
    timeToAchieve: "0-1 years after B.Tech MECH",
    roadmap: [
      { phase: "Basics", tasks: ["Learn Preventive vs Breakdown maintenance", "Understand hydraulics and pneumatics"] },
      { phase: "Advanced", tasks: ["Predictive maintenance using IoT sensors", "Reliability Centered Maintenance (RCM)"] }
    ],
    skills: ["Hydraulics", "IoT for Maintenance", "Troubleshooting", "Safety Protocols"],
    salaryEntry: "₹3-7 LPA",
    topCompanies: ["Reliance Industries", "JSW Steel", "Adani Power", "HAL"]
  },
  "BTech_to_EV_Engineer": {
    career: "EV (Electric Vehicle) Engineer",
    description: "Designing battery systems, electric powertrains, and motor controllers for the future of mobility.",
    timeToAchieve: "1-2 years after B.Tech MECH/EE",
    roadmap: [
      { phase: "Foundations", tasks: ["Study Battery Chemistry and Thermal Management", "Learn Power Electronics for EV"] },
      { phase: "Simulation", tasks: ["MATLAB/Simulink for vehicle dynamics", "Battery Management System (BMS) design"] }
    ],
    skills: ["BMS", "Motor Control", "Python", "Simulink", "Battery Tech"],
    salaryEntry: "₹6-15 LPA",
    topCompanies: ["Ola Electric", "Ather Energy", "Tesla", "TVS", "Mahindra Electric"]
  },
  "BTech_to_QualityEngineer": {
    career: "Quality Engineer",
    description: "Ensuring products meet stringent quality standards and regulatory requirements.",
    timeToAchieve: "0-2 years after B.Tech",
    roadmap: [
      { phase: "Control", tasks: ["Master Statistical Process Control (SPC)", "Learn Six Sigma methodologies"] },
      { phase: "Compliance", tasks: ["Understand ISO standards and quality auditing", "Implementation of TQM (Total Quality Management)"] }
    ],
    skills: ["Six Sigma", "SPC", "Quality Auditing", "ISO Standards"],
    salaryEntry: "₹4-9 LPA",
    topCompanies: ["Tata Motors", "Bosch", "L&T", "Maruti Suzuki"]
  },
  "BTech_to_Mech_GovtJobs": {
    career: "PESB / PSU / State Govt (Mech)",
    description: "Working in government-run entities or appearing for elite civil services.",
    timeToAchieve: "1-3 years of preparation",
    roadmap: [
      { phase: "Prep", tasks: ["Intensive preparation for GATE and ESE (UPSC)", "General studies and current affairs"] },
      { phase: "Goal", tasks: ["Join as Assistant Engineer (AE) or Management Trainee in PSUs"] }
    ],
    skills: ["Core Technical Mastery", "Logical Reasoning", "Exam Strategy"],
    salaryEntry: "₹8-14 LPA (plus perks)",
    topCompanies: ["BHEL", "IOCL", "NTPC", "Indian Railways", "ISRO"]
  },
  "BTech_to_Mech_Entrepreneur": {
    career: "Manufacturing / EV Entrepreneur",
    description: "Starting a production unit or tech startup in the mechanical domain.",
    timeToAchieve: "2-5 years",
    roadmap: [
      { phase: "Concept", tasks: ["Prototype development and market research", "Business plan and startup registration"] },
      { phase: "Scale", tasks: ["Small scale manufacturing setup", "Fundraising for innovation (EV/Robotics)"] }
    ],
    skills: ["Business Mgmt", "Pitching", "Financial Literacy", "Supply Chain"],
    salaryEntry: "Variable (High scale potential)",
    topCompanies: ["Self-Employed", "Startup India Incubators"]
  },
  "BTech_to_SiteEngineer": {
    career: "Site Engineer",
    description: "Supervising construction activities directly on the field.",
    timeToAchieve: "0-1 years after B.Tech Civil",
    roadmap: [
      { phase: "Execution", tasks: ["Labor oversight and site safety management", "Reading blueprints and coordinating with designers"] },
      { phase: "Quality", tasks: ["On-site material testing (Concrete/Steel)", "Process documentation"] }
    ],
    skills: ["Execution", "Safety Management", "Surveying Basics", "Documentation"],
    salaryEntry: "₹3-6 LPA",
    topCompanies: ["L&T", "GMR", "Tata Projects", "Shapoorji Pallonji"]
  },
  "BTech_to_ProjectEngineer": {
    career: "Project Engineer / Manager",
    description: "Managing project schedules, budgets, and overall execution coordination.",
    timeToAchieve: "0-3 years after B.Tech Civil",
    roadmap: [
      { phase: "Planning", tasks: ["Master Microsoft Project or Primavera P6", "Resource planning and monitoring"] },
      { phase: "Delivery", tasks: ["Stakeholder management and milestone tracking", "Cost control and risk assessment"] }
    ],
    skills: ["MS Project", "Primavera", "Scheduling", "Risk Management"],
    salaryEntry: "₹4.5-10 LPA",
    topCompanies: ["Adani Infrastructure", "Reliance Infrastructure", "WSP India"]
  },
  "BTech_to_QuantitySurveyor": {
    career: "Quantity Surveyor / Estimator",
    description: "Analyzing costs, preparing BOQs, and managing financial aspects of construction.",
    timeToAchieve: "0-2 years after B.Tech Civil",
    roadmap: [
      { phase: "Estimation", tasks: ["Learn detailed quantity estimation from architectural drawings", "Prepare Bill of Quantities (BOQ)"] },
      { phase: "Contracting", tasks: ["Contract management and vendor billing", "Cost analysis and budgeting"] }
    ],
    skills: ["BOQ", "MS Excel", "Estimation", "Contract Law"],
    salaryEntry: "₹4-10 LPA",
    topCompanies: ["Turner & Townsend", "CBRE", "L&T Construction"]
  },
  "BTech_to_GeotechnicalEngineer": {
    career: "Geotechnical Engineer",
    description: "Analyzing soil and rock properties for safe structure foundations.",
    timeToAchieve: "1-3 years (M.Tech often needed)",
    roadmap: [
      { phase: "Analysis", tasks: ["Soil sample testing and reporting", "Foundation design for bridges and tunnels"] },
      { phase: "Advanced", tasks: ["Learn Plaxis or GeoStudio software", "Work on seismic and slope stability projects"] }
    ],
    skills: ["Soil Mechanics", "Plaxis", "Foundation Design", "Geology"],
    salaryEntry: "₹5-12 LPA",
    topCompanies: ["Jacobs", "AECOM", "Keller", "L&T Infrastructure"]
  },
  "BTech_to_EnvironmentalEngineer": {
    career: "Environmental Engineer (Civil)",
    description: "Building sustainable systems for water, waste, and pollution control.",
    timeToAchieve: "0-2 years after B.Tech Civil",
    roadmap: [
      { phase: "Green Tech", tasks: ["Design waste treatment plants", "Study Environmental Impact Assessment (EIA) protocols"] },
      { phase: "Systems", tasks: ["Water distribution and treatment networks", "Solid waste management strategies"] }
    ],
    skills: ["EIA", "Waste Treatment Design", "GIS", "Sustainability"],
    salaryEntry: "₹4-9 LPA",
    topCompanies: ["Suez", "Veolia", "CPWD", "Green Consulting Firms"]
  },
  "BTech_to_TransportationEngineer": {
    career: "Transportation / Highway Engineer",
    description: "Designing roads, highways, and transport networks for urban development.",
    timeToAchieve: "0-3 years",
    roadmap: [
      { phase: "Design", tasks: ["Learn Highway Geometric Design", "Traffic analysis and flow optimization"] },
      { phase: "Pavements", tasks: ["Flexible and Rigid pavement design", "Work on NHAI/State highway projects"] }
    ],
    skills: ["Traffic Analysis", "Highway Design", "CIVIL 3D", "Pavement Design"],
    salaryEntry: "₹5-12 LPA",
    topCompanies: ["NHAI", "ARUP", "WSP", "Afcons Infrastructure"]
  },
  "BTech_to_WaterResourcesEngineer": {
    career: "Water Resources Engineer",
    description: "Designing systems for water supply, irrigation, and dam management.",
    timeToAchieve: "1-3 years",
    roadmap: [
      { phase: "Hydraulics", tasks: ["Study open channel flow and pipe hydraulics", "Learn HEC-RAS or EPANET software"] },
      { phase: "Conservation", tasks: ["Design rainwater harvesting and irrigation systems", "Flood risk management"] }
    ],
    skills: ["HEC-RAS", "Hydraulic Design", "EPANET", "GIS"],
    salaryEntry: "₹4-10 LPA",
    topCompanies: ["WAPCOS", "Irrigation Department", "MEIL", "L&T Water"]
  },
  "BTech_to_SmartCities_Planner": {
    career: "Smart Cities / Urban Development Expert",
    description: "Building the cities of the future with tech-integrated infrastructure.",
    timeToAchieve: "1-4 years",
    roadmap: [
      { phase: "Governance", tasks: ["Understand Smart City Mission rules and zoning laws", "Public-Private Partnership (PPP) modeling"] },
      { phase: "Tech Integration", tasks: ["Implementing IoT for smart lighting and traffic", "Sustainable urban planning"] }
    ],
    skills: ["Urban Planning", "IoT", "PPP Models", "Policy Analysis"],
    salaryEntry: "₹6-15 LPA",
    topCompanies: ["NITI Aayog", "Smart City Missions", "JLL", "PwC Infrastructure"]
  },
  "BTech_to_Civil_GovtJobs": {
    career: "IES / CPWD / State AE (Civil)",
    description: "Building national infrastructure via elite government services.",
    timeToAchieve: "1-3 years of prep",
    roadmap: [
      { phase: "Competitive Exam", tasks: ["Master civil subjects for GATE, IES, and State PSCs", "Focus on general studies and aptitude"] },
      { phase: "Career", tasks: ["Join as Sub-Divisional Officer or Assistant Engineer in CPWD/Railways"] }
    ],
    skills: ["Civil Mastery", "Analytical Skills", "Ethics", "Governance Basics"],
    salaryEntry: "₹10-18 LPA (with perks)",
    topCompanies: ["CPWD", "Indian Railways", "DMRC", "NHAI", "State PWDs"]
  },
  "BTech_to_Civil_Entrepreneur": {
    career: "Construction / Consultancy Entrepreneur",
    description: "Launching your own construction firm or civil consultancy.",
    timeToAchieve: "3-6 years",
    roadmap: [
      { phase: "Experience", tasks: ["Gain 3-5 years of industry experience to understand client specs", "Registration with Council of Engineers/Contractors"] },
      { phase: "Launch", tasks: ["Build a portfolio with small residential or road contracts", "Tender bidding mastery"] }
    ],
    skills: ["Bidding", "Client Management", "Finance", "Legal Approvals"],
    salaryEntry: "Variable (High scale potential)",
    topCompanies: ["Self-Employed", "Real Estate Ventures"]
  },
  "Inter_to_BSc_Biotech": {
    stream: "B.Sc Biotechnology",
    fullName: "Bachelor of Science in Biotechnology",
    description: "Using biological systems and organisms to develop products and technology.",
    duration: "3 years",
    careerPaths: ["Biotech Researcher", "Lab Technician", "Quality Analyst"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Cell Biology", "Molecular Biology", "Genetics"], focus: "Biological Basics" },
      { sem: "Year 2", subjects: ["Immunology", "Bioprocess Tech", "Genetic Engineering"], focus: "Applied Biotech" },
      { sem: "Year 3", subjects: ["Environment Biotech", "Bioinformatics", "IPR & Bioethics"], focus: "Industry Prep" }
    ],
    skills: ["PCR Tech", "DNA Sequencing", "Microscopy"],
    certifications: ["Bioinformatics Cert", "GLP (Good Lab Practices)"],
    salaryRange: "₹3-12 LPA",
    topCompanies: ["Biocon", "Serum Institute", "Dr. Reddy's", "Bharat Biotech"]
  },
  "Inter_to_BTech_Biotech": {
    stream: "B.Tech - Biotechnology",
    fullName: "Bachelor of Technology in Biotechnology",
    description: "Engineering principles applied to biological sciences and medical breakthroughs.",
    duration: "4 years",
    careerPaths: ["Bioprocess Engineer", "Clinical Researcher", "R&D Scientist"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Engineering Math", "Microbiology", "Calculus"], focus: "Foundations" },
      { sem: "Year 2", subjects: ["Biochemistry", "Momentum Transfer", "Genetic Engineering"], focus: "Chemical & Bio Specs" },
      { sem: "Year 3", subjects: ["Biomass Conversion", "Bioinformatics", "IPR in Pharma"], focus: "Engineering Apps" },
      { sem: "Year 4", subjects: ["Bionanotechnology", "Plant & Animal Biotech", "Major Thesis"], focus: "Research & Industry" }
    ],
    skills: ["Bioprocessing", "Genomics", "Chemical Engineering Basics", "Bio-safety"],
    certifications: ["CSIR-NET (for research)", "Quality Assurance Professional"],
    salaryRange: "₹4-18 LPA",
    topCompanies: ["Biocon", "Gilead", "Novartis", "AstraZeneca"],
    relatedCareers: ["Med_to_Specialist"]
  },

  // === Intermediate (Inter) to Commerce & Management ===

  "Inter_to_BCom_Comp": {
    stream: "B.Com (Computers)",
    fullName: "Bachelor of Commerce in Computer Applications",
    description: "Combining commerce principles with computer software application skills.",
    duration: "3 years",
    careerPaths: ["Accountant", "E-Commerce Analyst", "Data Entry Manager", "Audit Asst"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Financial Accounting", "C Programming", "Business Organization"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Corporate Accounting", "RDBMS", "Web Tech (HTML/CSS)"], focus: "Core Accounts & Tech" },
      { sem: "Year 3", subjects: ["Tally with GST", "MIS (Management Info Systems)", "E-Commerce"], focus: "Application" }
    ],
    skills: ["Tally Prime", "MS Excel Advanced", "Basic Web Design", "Taxation"],
    certifications: ["Tally Certified Professional", "Microsoft Office Specialist"],
    salaryRange: "₹2.5-8 LPA",
    topCompanies: ["Genpact", "Concentrix", "Banks", "SME Sector"]
  },
  "Inter_to_BBA": {
    stream: "BBA",
    fullName: "Bachelor of Business Administration",
    description: "Developing leadership and management skills for corporate environments.",
    duration: "3 years",
    careerPaths: ["Marketing Executive", "HR Coordinator", "Operations Analyst"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Principles of Mgmt", "Business Communication", "Financial Accounting"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Marketing Mgmt", "Human Resource Mgmt", "Business Law"], focus: "Functional Areas" },
      { sem: "Year 3", subjects: ["Strategic Mgmt", "Electives (Finance/HR/Mktg)", "Project Work"], focus: "Specialization" }
    ],
    skills: ["Leadership", "Presentation Skills", "Team Coordination", "Business Analysis"],
    certifications: ["Digital Marketing Cert", "Six Sigma Yellow Belt"],
    salaryRange: "₹3-12 LPA",
    topCompanies: ["Amazon", "Deloitte", "KPMG", "Byju's", "HDFC Bank"],
    relatedCareers: ["BBA_to_MBA_Manager"]
  },
  "Inter_to_BCA": {
    stream: "BCA",
    fullName: "Bachelor of Computer Applications",
    description: "Focused on computer applications and software development for non-engineering students.",
    duration: "3 years",
    careerPaths: ["Web Developer", "System Analyst", "Software Tester"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Computer Fundamentals", "Programming in C", "Mathematical Foundations"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Data Structures in Java", "Computer Networks", "Database Management"], focus: "Core IT" },
      { sem: "Year 3", subjects: ["Web Tech (React/Node)", "Software Engineering", "Final Project"], focus: "Development" }
    ],
    skills: ["Java/Python", "SQL", "Web Technologies", "Testing Basics"],
    certifications: ["Full Stack Dev Cert", "Google Associate Android Developer"],
    salaryRange: "₹3-10 LPA",
    topCompanies: ["TCS", "Accenture", "LTI", "Mindtree", "Capgemini"],
    relatedCareers: ["BCA_to_FullStack"]
  },

  // === Intermediate (Inter) to Professional & Arts ===

  "Inter_to_Law_LLB": {
    stream: "Integrated LLB",
    fullName: "BA LLB / BBA LLB (5 Years)",
    description: "Integrated program providing comprehensive legal education with humanities/management.",
    duration: "5 years",
    careerPaths: ["Advocate", "Legal Advisor", "Judicial Officer", "Corporate Lawyer"],
    semesterPlan: [
      { sem: "Year 1-2", subjects: ["English", "Political Science", "Economics", "Legal Theory"], focus: "Humanities & Law Basics" },
      { sem: "Year 3", subjects: ["Constitutional Law", "Law of Crimes", "Family Law"], focus: "Core Law" },
      { sem: "Year 4", subjects: ["Corporate Law", "Intellectual Property Rights", "Tax Law"], focus: "Specialized Law" },
      { sem: "Year 5", subjects: ["Moot Court", "Professional Ethics", "Internship with Chambers"], focus: "Clinical Practice" }
    ],
    skills: ["Legal Research", "Public Speaking", "Drafting", "Critical Thinking"],
    certifications: ["Bar Council of India (BCI) License", "Cyber Law Cert"],
    salaryRange: "₹4-25 LPA (Big Law firms pay more)",
    topCompanies: ["Shardul Amarchand Mangaldas", "AZB & Partners", "Private Practice"],
    relatedCareers: ["Law_to_Advocate"]
  },
  "Inter_to_BPharm": {
    stream: "B.Pharm",
    fullName: "Bachelor of Pharmacy",
    description: "Study of drug discovery, manufacturing, and clinical pharmacy.",
    duration: "4 years",
    careerPaths: ["Pharmacist", "Drug Inspector", "Medical Representative", "R&D Scientist"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Pharmaceutics", "Pharmacognosy", "Inorganic Chem"], focus: "Basics" },
      { sem: "Year 2", subjects: ["Organic Chem", "Physical Pharmaceutics", "Microbiology"], focus: "Drug Science" },
      { sem: "Year 3", subjects: ["Pharmacology", "Pharmaceutical Analysis", "Jurisprudence"], focus: "Systems" },
      { sem: "Year 4", subjects: ["Biopharmaceutics", "Industrial Pharmacy", "Internship"], focus: "Industry" }
    ],
    skills: ["Drug Formulation", "HPLC Analysis", "Clinical Research"],
    certifications: ["Registered Pharmacist", "Quality Control Cert"],
    salaryRange: "₹3-12 LPA",
    topCompanies: ["Sun Pharma", "Cipla", "Lupin", "Dr. Reddy's"],
    relatedCareers: ["Pharm_to_DrugInspector"]
  },
  "Inter_to_Design_BDes": {
    stream: "B.Des",
    fullName: "Bachelor of Design",
    description: "Creative degree specializing in Fashion, Product, UI/UX, or Communication design.",
    duration: "4 years",
    careerPaths: ["Fashion Designer", "UI/UX Designer", "Product Designer", "Art Director"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Design Fundamentals", "Color Theory", "Visualization"], focus: "Creative Basics" },
      { sem: "Year 2", subjects: ["Design Tools (Adobe Suite)", "History of Design", "Materials"], focus: "Domain Choice" },
      { sem: "Year 3", subjects: ["Advanced Domain Studio", "User Research", "Prototyping"], focus: "Execution" },
      { sem: "Year 4", subjects: ["Graduation Project", "Portfolio Design", "Industry Training"], focus: "Professional" }
    ],
    skills: ["Figma / Adobe XD", "Photoshop / Illustrator", "Design Thinking", "Sketching"],
    certifications: ["Google UX Design", "Adobe Certified Professional"],
    salaryRange: "₹4-20 LPA",
    topCompanies: ["Titan", "Myntra", "Microsoft UX", "Google Design", "Ogilvy"],
    relatedCareers: ["Design_to_ArtDirector"]
  },
  "Inter_to_BHM": {
    stream: "BHM",
    fullName: "Bachelor of Hotel Management",
    description: "Comprehensive training for hospitality operations, culinary arts, and tourism.",
    duration: "4 years",
    careerPaths: ["Hotel Manager", "Executive Chef", "Front Office Mgr", "Event Planner"],
    semesterPlan: [
      { sem: "Year 1", subjects: ["Food Production Basics", "Front Office", "Housekeeping"], focus: "Operations" },
      { sem: "Year 2", subjects: ["Beverage Service", "Nutrition", "Hygiene & Sanitation"], focus: "Core Service" },
      { sem: "Year 3", subjects: ["Industrial Exposure Training (IET)", "Hotel Accountancy"], focus: "Industry Exposure" },
      { sem: "Year 4", subjects: ["Facility Planning", "HR in Hospitality", "Menu Design"], focus: "Management" }
    ],
    skills: ["Customer Service", "Culinary Skills", "Multi-tasking", "Grooming"],
    certifications: ["FSSAI Food Safety Cert", "Chef Certifications"],
    salaryRange: "₹3-15 LPA",
    topCompanies: ["Taj Hotels", "ITC Hotels", "Marriott", "Oberoi Group", "Hyatt"],
    relatedCareers: ["BHM_to_HotelOwner"]
  },


  // === B.Tech to Engineering Careers ===

  "BTech_to_MechanicalEngineer": {
    career: "Mechanical Engineer",
    description: "Design, build, and maintain mechanical systems and machinery.",
    timeToAchieve: "0-2 years after B.Tech MECH",
    roadmap: [
      { phase: "During B.Tech (Year 1-2)", tasks: ["Master AutoCAD and SolidWorks", "Understand thermodynamics and mechanics of materials", "Join SAE or robotics clubs"] },
      { phase: "During B.Tech (Year 3-4)", tasks: ["Learn ANSYS for analysis", "Complete a major design project", "Secure an industrial internship"] },
      { phase: "Early Career (0-2 Yrs)", tasks: ["Join manufacturing or automotive sector", "Get hands-on plant experience", "Consider GATE for PSU roles"] },
      { phase: "Mid Career", tasks: ["Specialize in HVAC, Robotics, or Automotive design", "Pursue M.Tech if desired", "Lead design projects"] }
    ],
    relatedDegrees: ["Inter_to_BTech_MECH"],
    salaryEntry: "₹3-6 LPA",
    topCompanies: ["Tata Motors", "Mahindra", "L&T", "Bosch", "Godrej"]
  },
  "BTech_to_CivilEngineer": {
    career: "Civil Engineer",
    description: "Plan, design, and oversee construction and infrastructure projects.",
    timeToAchieve: "0-2 years after B.Tech Civil",
    roadmap: [
      { phase: "During B.Tech (Year 1-2)", tasks: ["Master AutoCAD Civil 3D", "Strong foundation in structural analysis", "Understand material properties"] },
      { phase: "During B.Tech (Year 3-4)", tasks: ["Learn STAAD.Pro or ETABS", "Site visit internships", "Complete a structural or environmental project"] },
      { phase: "Early Career (0-2 Yrs)", tasks: ["Start as Site Engineer or Junior Structural Designer", "Prepare for IES/GATE exams", "Gain field experience"] },
      { phase: "Mid Career", tasks: ["Become Project Manager or Senior Designer", "Obtain PMP certification", "Handle large infrastructure projects"] }
    ],
    relatedDegrees: ["Inter_to_BTech_Civil", "Inter_to_BArch"],
    salaryEntry: "₹3-7 LPA",
    topCompanies: ["L&T Construction", "Tata Projects", "Shapoorji Pallonji", "GMR Group"]
  },
  "BTech_to_EmbeddedEngineer": {
    career: "Embedded Systems Engineer",
    description: "Work at the intersection of hardware and software, programming microcontrollers.",
    timeToAchieve: "0-2 years after B.Tech ECE",
    roadmap: [
      { phase: "During B.Tech (Year 1-2)", tasks: ["Master C/C++ programming", "Understand digital electronics and microprocessors", "Build basic Arduino/Raspberry Pi projects"] },
      { phase: "During B.Tech (Year 3-4)", tasks: ["Learn RTOS concepts", "Work with ARM Cortex microcontrollers", "Complete IoT or Robotics projects"] },
      { phase: "Early Career (0-2 Yrs)", tasks: ["Join hardware tech companies", "Work on firmware development", "Debug board-level systems"] },
      { phase: "Mid Career", tasks: ["Design complex IoT architectures", "Work in automotive or aerospace domains", "Lead embedded software teams"] }
    ],
    relatedDegrees: ["Inter_to_BTech_ECE", "Inter_to_BTech_EEE"],
    salaryEntry: "₹4-10 LPA",
    topCompanies: ["Intel", "Qualcomm", "Texas Instruments", "Bosch", "Samsung R&D"]
  },

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
    demandTrend: "Very High - 1.5M new jobs by 2026 in India",
    relatedDegrees: ["Inter_to_BTech_CSE", "Inter_to_BTech_IT", "Inter_to_BCA"]
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
    demandTrend: "Extremely High - Rapid growth across tech, finance, and biotech sectors",
    relatedDegrees: ["Inter_to_BTech_AI", "Inter_to_BTech_DataScience", "Inter_to_BSc_Biotech"]
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
    demandTrend: "High - Deep tech products need technically-sound PMs.",
    relatedDegrees: ["Inter_to_BTech_CSE", "Inter_to_BTech_IT", "Inter_to_BBA"]
  },

  // === Medical Degrees to Careers ===

  "Med_to_Specialist": {
    career: "Specialist Doctor (MD/MS)",
    description: "Deep specialization in a specific medical field (Cardiology, Surgery, Pediatrics).",
    timeToAchieve: "3-5 years after MBBS",
    roadmap: [
      { phase: "MBBS Completion", tasks: ["Complete 1-year internship", "Obtain MCI/NMC registration", "Start NEET PG preparation"] },
      { phase: "Post-Graduation (MD/MS)", tasks: ["Clear NEET PG", "Join 3-year residency program", "Conduct clinical research and thesis", "Gain hands-on surgical/clinical skill"] },
      { phase: "Senior Residency", tasks: ["Work as a Senior Resident for 1-3 years in a teaching hospital", "Publish research papers"] },
      { phase: "Super-specialization (Optional)", tasks: ["Apply for DM/MCh (3 years) for fields like Neurology or Urology"] }
    ],
    skills: ["Advanced Diagnosis", "Surgical Precision", "Research Methodology", "Clinical Leadership"],
    salaryProgression: { fresher: "₹8-15 LPA (Resident)", midLevel: "₹20-40 LPA (Specialist)", senior: "₹50-1.5Cr LPA", lead: "₹2Cr+ LPA" },
    demandTrend: "Extremely High - Significant shortage of specialists in India"
  },
  "Dental_to_MDS": {
    career: "Orthodontist / Oral Surgeon (MDS)",
    description: "Master of Dental Surgery with specialized practice.",
    timeToAchieve: "3 years after BDS",
    roadmap: [
      { phase: "BDS Completion", tasks: ["Clear DCI registration", "Gain 1-2 years clinical experience (optional)", "NEET MDS prep"] },
      { phase: "MDS Program", tasks: ["3 years of intensive clinical specialty training", "Manage complex patient cases"] },
      { phase: "Independent Practice", tasks: ["Set up a specialized clinic", "Collaborate with multi-specialty hospitals"] }
    ],
    skills: ["Maxillofacial Surgery", "Orthodontic Realignment", "Patient Rehab"],
    salaryProgression: { fresher: "₹4-7 LPA", midLevel: "₹12-25 LPA", senior: "₹30-60 LPA", lead: "₹80+ LPA" },
    demandTrend: "High - Growing demand for cosmetic and specialized dentistry"
  },

  // === B.Sc to Careers ===

  "BScAg_to_AgriOfficer": {
    career: "Agriculture Officer / Consultant",
    description: "Working in government or private sectors to improve farming productivity.",
    timeToAchieve: "0-2 years after B.Sc Ag",
    roadmap: [
      { phase: "Exam Prep", tasks: ["Prepare for IBPS AFO (Agricultural Field Officer) exam", "State PSC Agri-exams"] },
      { phase: "Private Sector", tasks: ["Join Agri-tech startups", "Work in Fertilizer/Seed companies (e.g. Bayer, Syngenta)"] },
      { phase: "Higher Edu (Optional)", tasks: ["Pursue M.Sc or MBA in Agribussiness (ABM)"] }
    ],
    skills: ["Soil Science", "Pest Mgmt", "Agri-Business Management", "Rural Outreach"],
    salaryProgression: { fresher: "₹4-7 LPA", midLevel: "₹8-15 LPA", senior: "₹18-35 LPA", lead: "₹40+ LPA" },
    demandTrend: "Steady - High demand in government and Agri-tech startups"
  },
  "Nursing_to_NurseAdmin": {
    career: "Nurse Administrator / Supervisor",
    description: "Managing nursing staff and hospital ward operations.",
    timeToAchieve: "5-8 years after B.Sc Nursing",
    roadmap: [
      { phase: "Clinical Experience", tasks: ["Work as a Staff Nurse in multiple departments (ER, ICU, Ward)"] },
      { phase: "Specialization", tasks: ["Get certifications in Critical Care or Emergency Nursing", "M.Sc Nursing (optional)"] },
      { phase: "Leadership", tasks: ["Transition to Head Nurse -> Nursing Supervisor -> Nursing Superintendent"] }
    ],
    skills: ["Patient Safety", "Staff Management", "Healthcare Policy", "Crisis Mgmt"],
    salaryProgression: { fresher: "₹3-5 LPA", midLevel: "₹7-12 LPA", senior: "₹15-25 LPA", lead: "₹30+ LPA" },
    demandTrend: "High - Global demand for nursing leadership"
  },

  // === Commerce & Management to Careers ===

  "BCom_to_CA": {
    career: "Chartered Accountant (CA)",
    description: "Expert in accounting, auditing, and taxation.",
    timeToAchieve: "4-5 years total",
    roadmap: [
      { phase: "Foundation", tasks: ["Clear CA Foundation exam (even during/after 12th)"] },
      { phase: "Intermediate", tasks: ["Complete 8 subjects of CA Inter", "Articleship orientation"] },
      { phase: "Articleship", tasks: ["3 years of mandatory training under a practicing CA"] },
      { phase: "CA Final", tasks: ["Pass the final exam", "Apply for ICAI membership"] }
    ],
    skills: ["Auditing", "Direct/Indirect Taxation", "Financial Reporting", "Stategic Mgmt"],
    salaryProgression: { fresher: "₹8-15 LPA", midLevel: "₹18-30 LPA", senior: "₹35-70 LPA", lead: "₹1Cr+ LPA" },
    demandTrend: "Extremely High - Essential for every business entity"
  },
  "BBA_to_MBA_Manager": {
    career: "Management Consultant / Manager",
    description: "Strategic leadership roles in Corporate, Finance, or Marketing.",
    timeToAchieve: "2-5 years after BBA",
    roadmap: [
      { phase: "Work Experience", tasks: ["Join as an Analyst or Trainee", "Learn corporate workflows (1-3 years)"] },
      { phase: "MBA", tasks: ["Prepare for CAT / GMAT / XAT", "Pursue MBA from top tier B-School (IIMs/ISB)"] },
      { phase: "Career Transition", tasks: ["Join big firms (MBB - McKinsey, BCG, Bain) as Associate or Consultant"] }
    ],
    skills: ["Business Strategy", "Data Analytics", "Public Speaking", "Corporate Finance"],
    salaryProgression: { fresher: "₹4-7 LPA", midLevel: "₹18-35 LPA (post-MBA)", senior: "₹40-80 LPA", lead: "₹1Cr+ LPA" },
    demandTrend: "High - Constant need for high-level management talent"
  },
  "BCA_to_FullStack": {
    career: "Full Stack Developer (Web/Mobile)",
    description: "End-to-end development of software applications.",
    timeToAchieve: "1-3 years after BCA",
    roadmap: [
      { phase: "Skill Up", tasks: ["Master JS (Node.js, React/Vue)", "Learn Backend (Express, Python/Django)"] },
      { phase: "Portfolio", tasks: ["Build 3+ production-ready apps", "Contribute to open source"] },
      { phase: "MCA (Optional)", tasks: ["Pursue MCA for better eligibility in MNCs"] }
    ],
    skills: ["MERN/MEAN Stack", "DevOps basics", "API Design", "Database Optimization"],
    salaryProgression: { fresher: "₹3-6 LPA", midLevel: "₹8-18 LPA", senior: "₹20-45 LPA", lead: "₹50+ LPA" },
    demandTrend: "Very High - Digital economy backbone"
  },

  // === Law & Professional to Careers ===

  "Law_to_Advocate": {
    career: "Advocate / Legal Counsel",
    description: "Representing clients in court and providing legal advice.",
    timeToAchieve: "1-3 years after LLB",
    roadmap: [
      { phase: "AIBE Exam", tasks: ["Clear All India Bar Examination", "Enroll with State Bar Council"] },
      { phase: "Junior Advocacy", tasks: ["Practice under a Senior Advocate in High Court/Supreme Court (2-5 years)"] },
      { phase: "Independent Practice", tasks: ["Build your own client base", "Handle independent litigations"] }
    ],
    skills: ["Drafting", "Argumentation", "Case Analysis", "Negotiation"],
    salaryProgression: { fresher: "₹3-6 LPA", midLevel: "₹10-25 LPA", senior: "₹40-1Cr+ (Independent)", lead: "₹5Cr+ (Senior Counsel)" },
    demandTrend: "Steady - Specialized law fields are growing fast"
  },
  "Pharm_to_DrugInspector": {
    career: "Drug Inspector / Pharma Researcher",
    description: "Ensuring drug quality and conducting pharmaceutical research.",
    timeToAchieve: "2-4 years after B.Pharm/M.Pharm",
    roadmap: [
      { phase: "M.Pharm (Recommended)", tasks: ["Specialize in Pharmaceutics or Analysis", "GPAT prep"] },
      { phase: "Govt Sector", tasks: ["Prepare for UPSC/State PSC Drug Inspector exams", "Regulatory Affairs"] },
      { phase: "R&D", tasks: ["Join R&D departments of Cipla, Sun Pharma, or Novartis"] }
    ],
    skills: ["Chemical Analysis", "Pharmacology", "FDA Regulations", "Lab SOPs"],
    salaryProgression: { fresher: "₹3.5-6 LPA", midLevel: "₹8-15 LPA", senior: "₹18-35 LPA", lead: "₹40+ LPA" },
    demandTrend: "High - India is the 'Pharmacy of the world'"
  },
  "Design_to_ArtDirector": {
    career: "Art Director / Senior UX Designer",
    description: "Overseeing visual style and user experience strategies.",
    timeToAchieve: "6-10 years after B.Des",
    roadmap: [
      { phase: "Junior Designer", tasks: ["Gain proficiency in Figma, Sketch, Webflow", "Learn visual hierarchy"] },
      { phase: "UI/UX Lead", tasks: ["Manage small design teams", "Conduct large scale user research"] },
      { phase: "Art/Design Director", tasks: ["Lead the design vision for brands or products"] }
    ],
    skills: ["Creative Leadership", "Branding", "User Psychology", "Strategy"],
    salaryProgression: { fresher: "₹5-9 LPA", midLevel: "₹15-30 LPA", senior: "₹35-65 LPA", lead: "₹80+ LPA" },
    demandTrend: "Very High - Growing importance of design in tech"
  },
  "BHM_to_HotelOwner": {
    career: "Hotel Manager / Hospitality Entrepreneur",
    description: "Managing luxury hotels or starting your own hospitality venture.",
    timeToAchieve: "5-10 years",
    roadmap: [
      { phase: "Operations", tasks: ["Work in various departments (F&B, Front Office, Housekeeping)"] },
      { phase: "General Manager", tasks: ["Move up to GM of a 5-star property"] },
      { phase: "Entrepreneurship", tasks: ["Start a boutique cafe, resort, or luxury homestay chain"] }
    ],
    skills: ["Guest Relations", "Operations Management", "Revenue Mgmt", "Leadership"],
    salaryProgression: { fresher: "₹3-6 LPA", midLevel: "₹10-25 LPA", senior: "₹30-60 LPA", lead: "₹1Cr+ (Profit/Scale)" },
    demandTrend: "High - Post-pandemic travel boom"
  }

};

module.exports = roadmaps;
