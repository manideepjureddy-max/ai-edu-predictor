// Questions bank organized by education level and domain

const questionsBank = {
  "10th": {
    interest: [
      { id: "q1", text: "Do you enjoy solving complex mathematics problems?", subject: "math", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q2", text: "Are you fascinated by how living organisms work (biology)?", subject: "biology", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q3", text: "Do you enjoy conducting experiments in science labs?", subject: "science", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q4", text: "Are you interested in business, economics, and finance?", subject: "business", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q5", text: "Do you like working with computers and technology?", subject: "tech", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q6", text: "Are you interested in history, languages, and arts?", subject: "arts", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q7", text: "Do you enjoy logical puzzles and brain teasers?", subject: "logic", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q8", text: "Are you interested in medical field and healthcare?", subject: "medical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q9", text: "Do you like drawing, designing, or creative arts?", subject: "creative", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
      { id: "q10", text: "Are you interested in social work, law, or public service?", subject: "social", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
    ],
    aptitude: {
      math: [
        { id: "m1", text: "If 3x + 7 = 22, find the value of x.", subject: "math", options: ["3", "5", "7", "9"], correct: 1 },
        { id: "m2", text: "The HCF of 36 and 48 is:", subject: "math", options: ["6", "12", "18", "24"], correct: 1 },
        { id: "m3", text: "A train travels 360 km in 4 hours. Its speed in m/s is:", subject: "math", options: ["25", "27.5", "30", "22.5"], correct: 0 },
        { id: "m4", text: "If a = 2 and b = 3, then a² + b² equals:", subject: "math", options: ["10", "12", "13", "15"], correct: 2 },
        { id: "m5", text: "The sum of angles in a triangle is:", subject: "math", options: ["90°", "180°", "270°", "360°"], correct: 1 }
      ],
      science: [
        { id: "s1", text: "Which gas is produced during photosynthesis?", subject: "science", options: ["CO2", "N2", "O2", "H2"], correct: 2 },
        { id: "s2", text: "The atomic number of Carbon is:", subject: "science", options: ["4", "6", "8", "12"], correct: 1 },
        { id: "s3", text: "Newton's second law relates force to:", subject: "science", options: ["Velocity", "Acceleration", "Displacement", "Mass only"], correct: 1 },
        { id: "s4", text: "Which organ purifies blood in the human body?", subject: "science", options: ["Heart", "Liver", "Kidney", "Lungs"], correct: 2 },
        { id: "s5", text: "Sound travels fastest in:", subject: "science", options: ["Air", "Water", "Vacuum", "Steel"], correct: 3 }
      ],
      logic: [
        { id: "l1", text: "If all birds can fly and Eagle is a bird, then Eagle:", subject: "logic", options: ["Cannot fly", "Can fly", "Might fly", "Need more info"], correct: 1 },
        { id: "l2", text: "Next number in series: 2, 4, 8, 16, __", subject: "logic", options: ["24", "28", "32", "30"], correct: 2 },
        { id: "l3", text: "A is taller than B. C is shorter than A. Who could be tallest?", subject: "logic", options: ["A", "B", "C", "Cannot determine"], correct: 0 },
        { id: "l4", text: "Mirror image of 'STUDY' is:", subject: "logic", options: ["YDUTS", "STUDY", "YDUTZ", "ZTUS"], correct: 0 },
        { id: "l5", text: "Odd one out: Dog, Cat, Rose, Fish", subject: "logic", options: ["Dog", "Cat", "Rose", "Fish"], correct: 2 }
      ]
    }
  },

  "intermediate": {
    MPC: {
      interest: [
        { id: "mpc_i1", text: "Do you enjoy calculus and advanced mathematics?", subject: "math", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i2", text: "Are you interested in physics concepts like mechanics and waves?", subject: "physics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i3", text: "Do you like programming and building software?", subject: "coding", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i4", text: "Are you interested in electronics and circuits?", subject: "electronics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i5", text: "Do you enjoy designing structures and buildings?", subject: "civil", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i6", text: "Are you fascinated by machines and how they work?", subject: "mechanical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i7", text: "Do you like working with data and finding patterns?", subject: "data", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mpc_i8", text: "Are you interested in AI, robotics, and automation?", subject: "ai", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        math: [
          { id: "mpc_m1", text: "The derivative of sin(x) is:", subject: "math", options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"], correct: 0 },
          { id: "mpc_m2", text: "∫x dx equals:", subject: "math", options: ["x²", "x²/2 + C", "2x + C", "x³/3 + C"], correct: 1 },
          { id: "mpc_m3", text: "If log₂(8) = x, then x =", subject: "math", options: ["2", "3", "4", "8"], correct: 1 },
          { id: "mpc_m4", text: "The value of sin²(30°) + cos²(30°) =", subject: "math", options: ["0", "0.5", "1", "2"], correct: 2 },
          { id: "mpc_m5", text: "Determinant of [[1,2],[3,4]] is:", subject: "math", options: ["-2", "2", "-10", "10"], correct: 0 }
        ],
        physics: [
          { id: "mpc_p1", text: "Work done by a force perpendicular to displacement is:", subject: "physics", options: ["Maximum", "Minimum", "Zero", "Negative"], correct: 2 },
          { id: "mpc_p2", text: "Ohm's law states: V =", subject: "physics", options: ["I/R", "IR", "I+R", "I²R"], correct: 1 },
          { id: "mpc_p3", text: "The unit of electrical resistance is:", subject: "physics", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
          { id: "mpc_p4", text: "Speed of light in vacuum is approximately:", subject: "physics", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], correct: 1 },
          { id: "mpc_p5", text: "Which law explains action-reaction pairs?", subject: "physics", options: ["1st Law", "2nd Law", "3rd Law", "Gravity Law"], correct: 2 }
        ],
        coding: [
          { id: "mpc_c1", text: "In Python, what does len([1,2,3]) return?", subject: "coding", options: ["2", "3", "4", "Error"], correct: 1 },
          { id: "mpc_c2", text: "What does 'boolean' data type store?", subject: "coding", options: ["Numbers", "Text", "True/False", "Decimals"], correct: 2 },
          { id: "mpc_c3", text: "Which loop runs at least once?", subject: "coding", options: ["for", "while", "do-while", "foreach"], correct: 2 },
          { id: "mpc_c4", text: "HTML stands for:", subject: "coding", options: ["High Text Markup Language", "Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Transfer Markup Language"], correct: 1 },
          { id: "mpc_c5", text: "Array index in most languages starts at:", subject: "coding", options: ["1", "0", "-1", "2"], correct: 1 }
        ]
      }
    },
    BiPC: {
      interest: [
        { id: "bpc_i1", text: "Are you passionate about human anatomy and physiology?", subject: "biology", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i2", text: "Do you want to become a doctor or work in healthcare?", subject: "medical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i3", text: "Are you interested in genetics and molecular biology?", subject: "genetics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i4", text: "Do you enjoy studying chemical reactions?", subject: "chemistry", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i5", text: "Are you interested in pharmacy and drug formulation?", subject: "pharmacy", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i6", text: "Do you like environmental science and ecology?", subject: "environment", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i7", text: "Are you interested in biotechnology and research?", subject: "biotech", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "bpc_i8", text: "Do you want to work in agriculture or food science?", subject: "agriculture", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        biology: [
          { id: "bpc_b1", text: "The powerhouse of the cell is:", subject: "biology", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], correct: 2 },
          { id: "bpc_b2", text: "DNA stands for:", subject: "biology", options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleotide Acid", "Deoxynucleic Acid", "Diribonucleic Acid"], correct: 0 },
          { id: "bpc_b3", text: "Which blood group is the universal donor?", subject: "biology", options: ["A", "B", "AB", "O"], correct: 3 },
          { id: "bpc_b4", text: "Photosynthesis takes place in:", subject: "biology", options: ["Chloroplast", "Mitochondria", "Nucleus", "Vacuole"], correct: 0 },
          { id: "bpc_b5", text: "The functional unit of kidney is:", subject: "biology", options: ["Nephron", "Neuron", "Alveoli", "Villus"], correct: 0 }
        ],
        chemistry: [
          { id: "bpc_ch1", text: "The pH of pure water at 25°C is:", subject: "chemistry", options: ["5", "6", "7", "8"], correct: 2 },
          { id: "bpc_ch2", text: "NaCl is an example of:", subject: "chemistry", options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"], correct: 1 },
          { id: "bpc_ch3", text: "The valency of Oxygen is:", subject: "chemistry", options: ["1", "2", "3", "4"], correct: 1 },
          { id: "bpc_ch4", text: "Which gas has the smell of rotten eggs?", subject: "chemistry", options: ["SO2", "H2S", "NH3", "CO2"], correct: 1 },
          { id: "bpc_ch5", text: "Organic chemistry mainly studies compounds of:", subject: "chemistry", options: ["Nitrogen", "Sulfur", "Carbon", "Phosphorus"], correct: 2 }
        ]
      }
    },
    MEC: {
      interest: [
        { id: "mec_i1", text: "Are you interested in economic theories and markets?", subject: "economics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mec_i2", text: "Do you enjoy solving commerce and accounting problems?", subject: "commerce", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mec_i3", text: "Are you interested in banking and financial services?", subject: "banking", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mec_i4", text: "Do you like statistics and data analysis?", subject: "statistics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mec_i5", text: "Are you interested in entrepreneurship and business?", subject: "business", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mec_i6", text: "Do you enjoy public administration and policy?", subject: "policy", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        economics: [
          { id: "mec_e1", text: "Supply curve slopes:", subject: "economics", options: ["Downward", "Upward", "Horizontal", "Vertical"], correct: 1 },
          { id: "mec_e2", text: "GDP stands for:", subject: "economics", options: ["Gross Domestic Product", "General Domestic Product", "Gross Demand Product", "Global Demand Product"], correct: 0 },
          { id: "mec_e3", text: "Inflation means:", subject: "economics", options: ["Decrease in prices", "Increase in prices", "Stable prices", "No change"], correct: 1 },
          { id: "mec_e4", text: "Perfect competition has how many sellers?", subject: "economics", options: ["One", "Few", "Many", "Two"], correct: 2 },
          { id: "mec_e5", text: "RBI is the __ bank of India:", subject: "economics", options: ["Commercial", "Rural", "Central", "Urban"], correct: 2 }
        ]
      }
    },
    CEC: {
      interest: [
        { id: "cec_i1", text: "Are you interested in accountancy and bookkeeping?", subject: "accounts", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cec_i2", text: "Do you enjoy studying business studies?", subject: "business", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cec_i3", text: "Are you interested in taxation and finance?", subject: "finance", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cec_i4", text: "Do you like marketing and sales?", subject: "marketing", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cec_i5", text: "Are you interested in company law and corporate governance?", subject: "law", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cec_i6", text: "Do you enjoy auditing and financial reporting?", subject: "audit", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        commerce: [
          { id: "cec_c1", text: "Debit means:", subject: "commerce", options: ["Decrease in assets", "Increase in assets", "Increase in liability", "No change"], correct: 1 },
          { id: "cec_c2", text: "GST stands for:", subject: "commerce", options: ["General Sales Tax", "Goods and Services Tax", "Global Sales Tax", "Goods Supply Tax"], correct: 1 },
          { id: "cec_c3", text: "A balance sheet shows:", subject: "commerce", options: ["Profit/Loss", "Cash flow", "Assets and Liabilities", "Revenue"], correct: 2 },
          { id: "cec_c4", text: "Goodwill is an example of:", subject: "commerce", options: ["Current asset", "Fixed asset", "Intangible asset", "Fictitious asset"], correct: 2 },
          { id: "cec_c5", text: "Break-even point is where:", subject: "commerce", options: ["Revenue > Cost", "Revenue = Cost", "Revenue < Cost", "Revenue = Zero"], correct: 1 }
        ]
      }
    }
  },

  "btech": {
    CSE: {
      interest: [
        { id: "cse_i1", text: "Do you enjoy competitive programming and coding challenges?", subject: "coding", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i2", text: "Are you interested in building web/mobile applications?", subject: "webdev", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i3", text: "Do you like working with databases and data systems?", subject: "database", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i4", text: "Are you interested in AI and machine learning?", subject: "ai", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i5", text: "Do you enjoy network security and ethical hacking?", subject: "security", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i6", text: "Are you interested in cloud computing and DevOps?", subject: "cloud", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i7", text: "Do you like system design and software architecture?", subject: "architecture", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cse_i8", text: "Are you interested in data science and analytics?", subject: "datascience", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        programming: [
          { id: "cse_p1", text: "What is the time complexity of binary search?", subject: "programming", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1 },
          { id: "cse_p2", text: "Which data structure uses LIFO?", subject: "programming", options: ["Queue", "Stack", "Tree", "Graph"], correct: 1 },
          { id: "cse_p3", text: "OOP stands for:", subject: "programming", options: ["Object Oriented Program", "Object Oriented Programming", "Ordered Object Programming", "Online Object Programming"], correct: 1 },
          { id: "cse_p4", text: "SQL is used for:", subject: "programming", options: ["Network programming", "Web development", "Database queries", "AI development"], correct: 2 },
          { id: "cse_p5", text: "HTTP status code 404 means:", subject: "programming", options: ["Server Error", "Not Found", "Unauthorized", "Success"], correct: 1 }
        ],
        algorithms: [
          { id: "cse_a1", text: "Which sorting algorithm has best average case O(n log n)?", subject: "algorithms", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], correct: 2 },
          { id: "cse_a2", text: "A graph with no cycles is called:", subject: "algorithms", options: ["Cyclic Graph", "DAG", "Complete Graph", "Bipartite"], correct: 1 },
          { id: "cse_a3", text: "Dynamic programming solves problems by:", subject: "algorithms", options: ["Brute force", "Storing subproblem solutions", "Random approach", "Greedy method always"], correct: 1 },
          { id: "cse_a4", text: "Which is NOT a greedy algorithm?", subject: "algorithms", options: ["Dijkstra", "Prim's MST", "Floyd-Warshall", "Kruskal's"], correct: 2 },
          { id: "cse_a5", text: "Big O notation describes:", subject: "algorithms", options: ["Memory usage only", "Time complexity only", "Worst-case complexity", "Best-case complexity"], correct: 2 }
        ]
      }
    },
    "CSE-AI": {
      interest: [
        { id: "ai_i1", text: "Are you passionate about neural networks and deep learning?", subject: "deeplearning", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ai_i2", text: "Do you enjoy Python and data manipulation?", subject: "python", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ai_i3", text: "Are you interested in natural language processing?", subject: "nlp", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ai_i4", text: "Do you like building recommendation systems?", subject: "recommendation", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ai_i5", text: "Are you interested in computer vision and image recognition?", subject: "vision", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ai_i6", text: "Do you enjoy reinforcement learning and game AI?", subject: "rl", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        ai_basics: [
          { id: "ai_a1", text: "Supervised learning uses:", subject: "ai_basics", options: ["Unlabeled data", "Labeled data", "No data", "Random data"], correct: 1 },
          { id: "ai_a2", text: "Which activation function solves vanishing gradient?", subject: "ai_basics", options: ["Sigmoid", "Tanh", "ReLU", "Softmax"], correct: 2 },
          { id: "ai_a3", text: "Overfitting means the model:", subject: "ai_basics", options: ["Works on all data", "Performs well on training, poor on test", "Works only on test data", "Doesn't converge"], correct: 1 },
          { id: "ai_a4", text: "CNN is primarily used for:", subject: "ai_basics", options: ["Time series", "Image processing", "Text processing", "Audio only"], correct: 1 },
          { id: "ai_a5", text: "Gradient descent minimizes:", subject: "ai_basics", options: ["Accuracy", "Loss function", "Weights", "Bias"], correct: 1 }
        ]
      }
    },
    ECE: {
      interest: [
        { id: "ece_i1", text: "Are you interested in signal processing and communication?", subject: "signals", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ece_i2", text: "Do you enjoy designing electronic circuits?", subject: "circuits", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ece_i3", text: "Are you interested in embedded systems and microcontrollers?", subject: "embedded", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ece_i4", text: "Do you like wireless technologies like 5G, IoT?", subject: "wireless", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ece_i5", text: "Are you interested in VLSI design and chip fabrication?", subject: "vlsi", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ece_i6", text: "Do you enjoy robotics and automation?", subject: "robotics", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        electronics: [
          { id: "ece_e1", text: "A p-n junction diode allows current in:", subject: "electronics", options: ["Both directions", "Reverse bias only", "Forward bias only", "No direction"], correct: 2 },
          { id: "ece_e2", text: "Fourier transform converts signal from:", subject: "electronics", options: ["Time to frequency domain", "Frequency to time domain", "Analog to digital", "Digital to analog"], correct: 0 },
          { id: "ece_e3", text: "MOSFET is a type of:", subject: "electronics", options: ["Diode", "Transistor", "Capacitor", "Resistor"], correct: 1 },
          { id: "ece_e4", text: "Nyquist theorem relates to:", subject: "electronics", options: ["Power", "Sampling rate", "Resistance", "Frequency response"], correct: 1 },
          { id: "ece_e5", text: "AM stands for:", subject: "electronics", options: ["Amplitude Modulation", "Analog Modulation", "Audio Modulation", "Alternating Modulation"], correct: 0 }
        ]
      }
    },
    MECH: {
      interest: [
        { id: "mech_i1", text: "Are you interested in thermodynamics and heat transfer?", subject: "thermo", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mech_i2", text: "Do you enjoy designing machines and mechanisms?", subject: "design", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mech_i3", text: "Are you interested in manufacturing and production?", subject: "manufacturing", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mech_i4", text: "Do you like working with CAD/CAM tools?", subject: "cad", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mech_i5", text: "Are you interested in automotive and aerospace engineering?", subject: "automotive", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mech_i6", text: "Do you enjoy fluid mechanics and hydraulics?", subject: "fluids", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        mechanics: [
          { id: "mech_m1", text: "Stress is defined as:", subject: "mechanics", options: ["Force × Area", "Force / Area", "Area / Force", "Force + Area"], correct: 1 },
          { id: "mech_m2", text: "First law of thermodynamics relates to:", subject: "mechanics", options: ["Entropy", "Energy conservation", "Heat death", "Work only"], correct: 1 },
          { id: "mech_m3", text: "Poisson's ratio is:", subject: "mechanics", options: ["Stress/Strain", "Lateral strain/Longitudinal strain", "Load/Area", "Modulus of elasticity"], correct: 1 },
          { id: "mech_m4", text: "Pascal's law applies to:", subject: "mechanics", options: ["Solids", "Gases only", "Fluids", "Vacuum"], correct: 2 },
          { id: "mech_m5", text: "Efficiency of a Carnot engine depends on:", subject: "mechanics", options: ["Working fluid", "Source and sink temperatures", "Engine size", "RPM"], correct: 1 }
        ]
      }
    },
    CE: {
      interest: [
        { id: "ce_i1", text: "Are you interested in structural analysis and design?", subject: "structural", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ce_i2", text: "Do you enjoy urban planning and infrastructure?", subject: "urban", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ce_i3", text: "Are you interested in geotechnical and soil mechanics?", subject: "geotech", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ce_i4", text: "Do you like water resources and environmental engineering?", subject: "water", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ce_i5", text: "Are you interested in transportation engineering?", subject: "transport", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ce_i6", text: "Do you enjoy surveying and construction management?", subject: "construction", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        civil: [
          { id: "ce_c1", text: "The strongest type of arch is:", subject: "civil", options: ["Semicircular", "Parabolic", "Flat", "Gothic"], correct: 1 },
          { id: "ce_c2", text: "Standard cube used for concrete testing is:", subject: "civil", options: ["100mm", "150mm", "200mm", "250mm"], correct: 1 },
          { id: "ce_c3", text: "Bearing capacity is property of:", subject: "civil", options: ["Steel", "Concrete", "Soil", "Water"], correct: 2 },
          { id: "ce_c4", text: "BOD in water quality stands for:", subject: "civil", options: ["Biological Oxygen Demand", "Base Oxygen Density", "Biochemical Output Demand", "Basic Oxygen Distribution"], correct: 0 },
          { id: "ce_c5", text: "WBM road stands for:", subject: "civil", options: ["Water Bound Macadam", "Wide Base Macadam", "Water Base Mixture", "Weighted Bound Macadam"], correct: 0 }
        ]
      }
    },
    DataScience: {
      interest: [
        { id: "ds_i1", text: "Do you enjoy working with statistics and probability?", subject: "statistics", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ds_i2", text: "Are you interested in discovering patterns in large data sets?", subject: "data", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        data: [
          { id: "ds_a1", text: "Which language is most popular for data science?", subject: "data", options: ["C++", "Java", "Python", "HTML"], correct: 2 },
          { id: "ds_a2", text: "What is the mean of 1, 2, 3, 4, 5?", subject: "statistics", options: ["2", "3", "4", "5"], correct: 1 }
        ]
      }
    },
    CyberSecurity: {
      interest: [
        { id: "cs_i1", text: "Do you like finding vulnerabilities in computer networks?", subject: "network", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "cs_i2", text: "Are you interested in ethical hacking and security?", subject: "security", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        security: [
          { id: "cs_a1", text: "What does HTTPS stand for?", subject: "network", options: ["Hyper Text Transfer Protocol Secure", "High Text Transfer Protocol Secure", "Hyper Text Transmission Protocol Secure", "None"], correct: 0 },
          { id: "cs_a2", text: "A firewall is used to:", subject: "security", options: ["Cool the server", "Prevent unauthorized access", "Speed up internet", "Store data"], correct: 1 }
        ]
      }
    },
    IT: {
      interest: [
        { id: "it_i1", text: "Do you enjoy building web applications and writing code?", subject: "web", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "it_i2", text: "Are you interested in software development life cycles?", subject: "program", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        code: [
          { id: "it_a1", text: "Which tag is used for linking in HTML?", subject: "web", options: ["<link>", "<a>", "<href>", "<src>"], correct: 1 },
          { id: "it_a2", text: "What is a loop used for in programming?", subject: "code", options: ["To repeat a task", "To stop a task", "To declare a variable", "To compile code"], correct: 0 }
        ]
      }
    },
    AIDS: {
      interest: [
        { id: "aid_i1", text: "Are you fascinated by machine learning and artificial intelligence?", subject: "ai", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "aid_i2", text: "Do you enjoy processing massive amounts of data?", subject: "data", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        ai: [
          { id: "aid_a1", text: "Which algorithm is used for classification?", subject: "data", options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"], correct: 1 },
          { id: "aid_a2", text: "What is a neural network modeled after?", subject: "ai", options: ["Human brain", "Computer processor", "Tree structure", "Network cables"], correct: 0 }
        ]
      }
    },
    ECM: {
      interest: [
        { id: "ecm_i1", text: "Are you interested in designing embedded systems and circuits?", subject: "embedded", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ecm_i2", text: "Do you like writing code that interacts directly with hardware?", subject: "program", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        electronics: [
          { id: "ecm_a1", text: "Which component stores electrical energy?", subject: "circuits", options: ["Resistor", "Inductor", "Capacitor", "Diode"], correct: 2 },
          { id: "ecm_a2", text: "A microcontroller usually contains:", subject: "embedded", options: ["CPU", "Memory", "I/O peripherals", "All of the above"], correct: 3 }
        ]
      }
    },
    EEE: {
      interest: [
        { id: "eee_i1", text: "Are you passionate about power grids and electrical systems?", subject: "electrical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "eee_i2", text: "Do you enjoy learning about motors, generators, and transformers?", subject: "circuits", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        power: [
          { id: "eee_a1", text: "What is the unit of electrical power?", subject: "circuits", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 3 },
          { id: "eee_a2", text: "Which device steps up or steps down voltage?", subject: "power", options: ["Motor", "Generator", "Transformer", "Rectifier"], correct: 2 }
        ]
      }
    },
    Chemical: {
      interest: [
        { id: "chem_i1", text: "Are you interested in industrial chemical processes and reactions?", subject: "chemical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "chem_i2", text: "Do you like designing plants for pharmaceutical or fuel production?", subject: "chemistry", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        chemistry: [
          { id: "chem_a1", text: "What process separates crude oil into different products?", subject: "chemical", options: ["Filtration", "Fractional Distillation", "Decantation", "Centrifugation"], correct: 1 },
          { id: "chem_a2", text: "Which of the following is an exothermic reaction?", subject: "chemistry", options: ["Melting ice", "Combustion", "Boiling water", "Photosynthesis"], correct: 1 }
        ]
      }
    },
    Robotics: {
      interest: [
        { id: "rob_i1", text: "Do you want to build and program autonomous robots?", subject: "robot", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "rob_i2", text: "Are you interested in machine kinematics and control systems?", subject: "machine", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        robotics: [
          { id: "rob_a1", text: "What sensor is typically used by a robot to measure distance?", subject: "robot", options: ["Temperature sensor", "Ultrasonic sensor", "Light sensor", "Pressure sensor"], correct: 1 },
          { id: "rob_a2", text: "What does ROI stand for in computer vision?", subject: "program", options: ["Region of Interest", "Rate of Info", "Return on Income", "Robot Output Input"], correct: 0 }
        ]
      }
    },
    Aeronautical: {
      interest: [
        { id: "aero_i1", text: "Are you fascinated by airplanes, rockets, and flight dynamics?", subject: "aircraft", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "aero_i2", text: "Do you enjoy studying aerodynamics and propulsion?", subject: "aero", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        flight: [
          { id: "aero_a1", text: "Which force opposes the thrust of an aircraft?", subject: "flight", options: ["Lift", "Gravity", "Drag", "Weight"], correct: 2 },
          { id: "aero_a2", text: "What provides the lifting force for an airplane?", subject: "aero", options: ["Engine", "Wings", "Tail", "Landing gear"], correct: 1 }
        ]
      }
    },
    Production: {
      interest: [
        { id: "prod_i1", text: "Are you interested in optimizing manufacturing processes and assembly lines?", subject: "machine", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "prod_i2", text: "Do you like industrial engineering and quality control?", subject: "mechanic", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        mechanics: [
          { id: "prod_a1", text: "Which methodology is used to minimize waste in manufacturing?", subject: "machine", options: ["Agile", "Lean", "Scrum", "Waterfall"], correct: 1 },
          { id: "prod_a2", text: "What tool is used for precision machining?", subject: "mechanic", options: ["Hammer", "CNC Machine", "Screwdriver", "Wrench"], correct: 1 }
        ]
      }
    },
    Instrumentation: {
      interest: [
        { id: "inst_i1", text: "Do you enjoy working with sensors, meters, and measurement devices?", subject: "embedded", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "inst_i2", text: "Are you interested in control systems for industrial automation?", subject: "circuits", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        electronics: [
          { id: "inst_a1", text: "A thermocouple is used to measure:", subject: "embedded", options: ["Pressure", "Temperature", "Flow", "Level"], correct: 1 },
          { id: "inst_a2", text: "What is used to convert an analog signal to a digital signal?", subject: "circuits", options: ["DAC", "ADC", "Amplifier", "Filter"], correct: 1 }
        ]
      }
    }
  },
  "mbbs": {
    "MBBS": {
      interest: [
        { id: "mbbs_i1", text: "Are you passionate about disease diagnosis and patient care?", subject: "medical", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mbbs_i2", text: "Do you want to perform surgeries and treat injuries?", subject: "surgery", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "mbbs_i3", text: "Are you fascinated by human anatomy and physiological functions?", subject: "anatomy", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        biology: [
          { id: "mbbs_a1", text: "Which organ is responsible for pumping blood?", subject: "health", options: ["Liver", "Lungs", "Heart", "Kidney"], correct: 2 },
          { id: "mbbs_a2", text: "What is the structural unit of the human body?", subject: "anatomy", options: ["Tissue", "Cell", "Organ", "System"], correct: 1 },
          { id: "mbbs_a3", text: "Which branch of medicine deals with surgery?", subject: "surgery", options: ["Pathology", "Radiology", "Surgery", "Dermatology"], correct: 2 }
        ]
      }
    }
  },
  "barch": {
    "BArch": {
      interest: [
        { id: "ba_i1", text: "Do you enjoy sketching, designing, and architectural planning?", subject: "architecture", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ba_i2", text: "Are you interested in designing smart cities and urban spaces?", subject: "urban", options: ["Strongly Yes", "Yes", "Neutral", "No"] },
        { id: "ba_i3", text: "Do you like creating 3D building models using CAD?", subject: "drawing", options: ["Strongly Yes", "Yes", "Neutral", "No"] }
      ],
      aptitude: {
        design: [
          { id: "ba_a1", text: "Which software is widely used for architectural drafting?", subject: "cad", options: ["Photoshop", "AutoCAD", "Excel", "Word"], correct: 1 },
          { id: "ba_a2", text: "The concept of designing cities and public spaces is called:", subject: "urban", options: ["Structural design", "Urban planning", "Interior design", "Traffic mapping"], correct: 1 },
          { id: "ba_a3", text: "What is the primary purpose of a foundation in a building?", subject: "architecture", options: ["Aesthetics", "Roof support", "Load distribution to soil", "Insulation"], correct: 2 }
        ]
      }
    }
  }
};

module.exports = questionsBank;
