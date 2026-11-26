// VidyarthiMitra Career Data
// Source: VidyarthiMitra SSC & HSC Career Guidance Chart
// All data extracted from the official career chart infographics

const careerData = {
  id: 'root',
  label: 'Career Roadmap',
  fullForm: 'VidyarthiMitra Interactive Career Roadmap',
  description: 'Explore all career options after 10th (SSC) and 12th (HSC) — courses, streams, entrance exams and future opportunities.',
  type: 'root',
  color: '#6366f1',
  children: [
    // ==========================================
    // 1. AFTER 10TH SSC
    // ==========================================
    {
      id: 'ssc-10th',
      label: '10th SSC',
      fullForm: 'Career Options After 10th (SSC)',
      description: 'All career pathways available after completing SSC (10th standard). Students can choose from Science, Commerce, Arts streams for HSC, or opt for Diploma, ITI, Vocational or other alternative pathways.',
      type: 'category',
      color: '#a855f7',
      children: [
        {
          id: 'ssc-science',
          label: 'Science Stream',
          fullForm: 'HSC Science (PCM / PCB / PCMB)',
          description: 'Choose Science stream in 11th-12th with Physics, Chemistry, Mathematics (PCM), Physics, Chemistry, Biology (PCB), or all four subjects (PCMB).',
          type: 'category',
          color: '#a855f7',
          children: [
            {
              id: 'ssc-science-pcm',
              label: 'PCM',
              fullForm: 'Physics, Chemistry, Mathematics',
              description: 'PCM stream opens doors to Engineering, Architecture, Defence, Aviation and other technical careers.',
              type: 'stream',
              color: '#818cf8',
              children: [
                {
                  id: 'pcm-engineering',
                  label: 'Engineering (B.E./B.Tech)',
                  fullForm: 'Bachelor of Engineering / Bachelor of Technology',
                  duration: '4 Years',
                  eligibility: '12th Science (PCM) with minimum 50% marks',
                  entranceExams: ['JEE Main', 'JEE Advanced', 'MHT-CET', 'BITSAT', 'VITEEE', 'State CETs'],
                  description: 'Professional engineering degree with various specializations.',
                  type: 'course',
                  color: '#06b6d4',
                  children: [
                    { id: 'eng-cs', label: 'Computer Science & Engineering', type: 'specialization', color: '#06b6d4', description: 'Software development, algorithms, AI, databases and computing systems.' },
                    { id: 'eng-it', label: 'Information Technology', type: 'specialization', color: '#06b6d4', description: 'IT systems, networking, web technologies and information management.' },
                    { id: 'eng-mech', label: 'Mechanical Engineering', type: 'specialization', color: '#06b6d4', description: 'Design, manufacturing, thermodynamics and mechanical systems.' },
                    { id: 'eng-civil', label: 'Civil Engineering', type: 'specialization', color: '#06b6d4', description: 'Construction, structural design, infrastructure and urban planning.' },
                    { id: 'eng-elec', label: 'Electrical Engineering', type: 'specialization', color: '#06b6d4', description: 'Electrical systems, power generation, circuits and control systems.' },
                    { id: 'eng-extc', label: 'Electronics & Telecommunication', type: 'specialization', color: '#06b6d4', description: 'Electronic circuits, communication systems and signal processing.' },
                    { id: 'eng-chemical', label: 'Chemical Engineering', type: 'specialization', color: '#06b6d4', description: 'Chemical processes, petrochemicals, pharmaceuticals and material science.' },
                    { id: 'eng-aids', label: 'AI & Data Science', type: 'specialization', color: '#06b6d4', description: 'Artificial Intelligence, Machine Learning, Data Analytics and Big Data.' },
                    { id: 'eng-auto', label: 'Automobile Engineering', type: 'specialization', color: '#06b6d4', description: 'Automotive design, manufacturing and vehicle technology.' },
                    { id: 'eng-instru', label: 'Instrumentation Engineering', type: 'specialization', color: '#06b6d4', description: 'Measurement systems, control systems and industrial automation.' },
                    { id: 'eng-biomedical', label: 'Biomedical Engineering', type: 'specialization', color: '#06b6d4', description: 'Medical devices, healthcare technology and biological systems.' },
                    { id: 'eng-cyber', label: 'Cybersecurity', type: 'specialization', color: '#06b6d4', description: 'Network security, ethical hacking, cryptography and digital forensics.' },
                    { id: 'eng-robotics', label: 'Robotics & Automation', type: 'specialization', color: '#06b6d4', description: 'Robotics, industrial automation, IoT and embedded systems.' },
                    {
                      id: 'eng-higher',
                      label: 'Higher Education After Engineering',
                      type: 'category',
                      color: '#06b6d4',
                      children: [
                        { id: 'eng-mtech', label: 'M.Tech / M.E.', fullForm: 'Master of Technology / Master of Engineering', duration: '2 Years', type: 'course', color: '#06b6d4', description: 'Postgraduate engineering specialization.' },
                        { id: 'eng-mba', label: 'MBA', fullForm: 'Master of Business Administration', duration: '2 Years', type: 'course', color: '#06b6d4', description: 'Management degree for engineering graduates.' },
                        { id: 'eng-mca', label: 'MCA', fullForm: 'Master of Computer Applications', duration: '2 Years', type: 'course', color: '#06b6d4', description: 'Advanced computing and software engineering.' },
                        { id: 'eng-ms', label: 'MS (Abroad)', fullForm: 'Master of Science', duration: '2 Years', type: 'course', color: '#06b6d4', description: 'Masters degree from international universities. Exams: GRE, TOEFL, IELTS.' },
                        { id: 'eng-phd', label: 'Ph.D.', fullForm: 'Doctor of Philosophy', duration: '3-5 Years', type: 'course', color: '#06b6d4', description: 'Research-oriented doctoral program.' },
                        { id: 'eng-gate', label: 'GATE', fullForm: 'Graduate Aptitude Test in Engineering', type: 'exam', color: '#eab308', description: 'National-level exam for M.Tech admissions and PSU recruitment.' }
                      ]
                    }
                  ]
                },
                {
                  id: 'pcm-bsc-math',
                  label: 'B.Sc. (Mathematics / Statistics)',
                  fullForm: 'Bachelor of Science in Mathematics or Statistics',
                  duration: '3 Years',
                  eligibility: '12th Science (PCM)',
                  type: 'course',
                  color: '#818cf8',
                  description: 'Undergraduate degree in pure or applied mathematics, statistics.'
                },
                {
                  id: 'pcm-bsc-physics',
                  label: 'B.Sc. (Physics)',
                  fullForm: 'Bachelor of Science in Physics',
                  duration: '3 Years',
                  eligibility: '12th Science (PCM)',
                  type: 'course',
                  color: '#818cf8',
                  description: 'Undergraduate degree in physics — leads to research, teaching, or further studies.'
                },
                {
                  id: 'pcm-architecture',
                  label: 'Architecture (B.Arch)',
                  fullForm: 'Bachelor of Architecture',
                  duration: '5 Years',
                  eligibility: '12th Science (PCM) with min 50% marks',
                  entranceExams: ['NATA', 'JEE Main Paper 2'],
                  type: 'course',
                  color: '#818cf8',
                  description: 'Professional degree in architectural design, construction planning and urban design.',
                  children: [
                    { id: 'arch-interior', label: 'Interior Design', type: 'specialization', color: '#818cf8' },
                    { id: 'arch-urban', label: 'Urban Planning', type: 'specialization', color: '#818cf8' },
                    { id: 'arch-landscape', label: 'Landscape Architecture', type: 'specialization', color: '#818cf8' },
                    { id: 'arch-march', label: 'M.Arch (Masters)', fullForm: 'Master of Architecture', duration: '2 Years', type: 'course', color: '#818cf8' }
                  ]
                },
                {
                  id: 'pcm-aviation',
                  label: 'Aviation',
                  fullForm: 'Aviation & Pilot Training',
                  description: 'Career in commercial aviation, pilot training, aerospace and airline management.',
                  type: 'category',
                  color: '#818cf8',
                  children: [
                    { id: 'avi-pilot', label: 'Commercial Pilot License (CPL)', duration: '18-24 Months', type: 'course', color: '#818cf8', description: 'License to fly commercial aircraft.' },
                    { id: 'avi-ame', label: 'Aircraft Maintenance Engineering (AME)', duration: '3 Years', type: 'course', color: '#818cf8', description: 'Maintenance and repair of aircraft.' },
                    { id: 'avi-bsc-aviation', label: 'B.Sc. Aviation', duration: '3 Years', type: 'course', color: '#818cf8', description: 'Aviation management and operations.' },
                    { id: 'avi-aerospace', label: 'Aerospace Engineering', duration: '4 Years', type: 'course', color: '#818cf8', description: 'Design and development of aircraft and spacecraft.' }
                  ]
                },
                {
                  id: 'pcm-defence',
                  label: 'Defence Services',
                  fullForm: 'Indian Armed Forces',
                  description: 'Career in Army, Navy, Air Force through various entry schemes.',
                  type: 'category',
                  color: '#eab308',
                  children: [
                    { id: 'def-nda', label: 'NDA', fullForm: 'National Defence Academy', eligibility: '12th (PCM for Air Force / Navy)', type: 'exam', color: '#eab308', description: 'Combined training for Army, Navy and Air Force. UPSC conducts the exam.' },
                    { id: 'def-cds', label: 'CDS', fullForm: 'Combined Defence Services', eligibility: 'Graduation', type: 'exam', color: '#eab308', description: 'Entry into Indian Military Academy, Naval Academy, Air Force Academy and OTA.' },
                    { id: 'def-afcat', label: 'AFCAT', fullForm: 'Air Force Common Admission Test', type: 'exam', color: '#eab308', description: 'Entry into Indian Air Force.' },
                    { id: 'def-navy', label: 'Indian Navy (10+2 B.Tech Entry)', type: 'course', color: '#eab308', description: 'Technical entry into Indian Navy after 12th PCM.' },
                    { id: 'def-army-tech', label: 'Indian Army (TES Entry)', fullForm: 'Technical Entry Scheme', type: 'course', color: '#eab308', description: '10+2 Technical Entry Scheme for engineering in Army.' }
                  ]
                },
                {
                  id: 'pcm-merchant-navy',
                  label: 'Merchant Navy',
                  description: 'Career in commercial shipping and maritime services.',
                  type: 'category',
                  color: '#818cf8',
                  children: [
                    { id: 'mn-bsc-nautical', label: 'B.Sc. Nautical Science', duration: '3 Years', type: 'course', color: '#818cf8', description: 'Degree program for Merchant Navy officers.' },
                    { id: 'mn-marine-eng', label: 'Marine Engineering', duration: '4 Years', type: 'course', color: '#818cf8', description: 'Engineering for ships and marine vessels.' },
                    { id: 'mn-dns', label: 'DNS (Diploma in Nautical Science)', duration: '1 Year', type: 'course', color: '#818cf8', description: 'Diploma for deck officers.' }
                  ]
                }
              ]
            },
            {
              id: 'ssc-science-pcb',
              label: 'PCB',
              fullForm: 'Physics, Chemistry, Biology',
              description: 'PCB stream leads to Medical, Pharmacy, Paramedical, Agriculture and life science careers.',
              type: 'stream',
              color: '#ef4444',
              children: [
                {
                  id: 'pcb-mbbs',
                  label: 'MBBS',
                  fullForm: 'Bachelor of Medicine and Bachelor of Surgery',
                  duration: '5.5 Years (including internship)',
                  eligibility: '12th Science (PCB) with min 50% marks',
                  entranceExams: ['NEET-UG'],
                  type: 'course',
                  color: '#ef4444',
                  description: 'Professional medical degree. Gateway to becoming a doctor.',
                  children: [
                    { id: 'mbbs-md', label: 'MD (Doctor of Medicine)', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Postgraduate specialization in medical subjects.' },
                    { id: 'mbbs-ms', label: 'MS (Master of Surgery)', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Postgraduate specialization in surgical subjects.' },
                    { id: 'mbbs-dm', label: 'DM (Doctorate of Medicine)', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Super-specialization after MD.' },
                    { id: 'mbbs-mch', label: 'MCh (Master of Chirurgiae)', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Super-specialization after MS.' }
                  ]
                },
                {
                  id: 'pcb-bds',
                  label: 'BDS',
                  fullForm: 'Bachelor of Dental Surgery',
                  duration: '5 Years (including internship)',
                  eligibility: '12th Science (PCB)',
                  entranceExams: ['NEET-UG'],
                  type: 'course',
                  color: '#ef4444',
                  description: 'Professional dental degree for dentistry practice.'
                },
                {
                  id: 'pcb-bams',
                  label: 'BAMS',
                  fullForm: 'Bachelor of Ayurvedic Medicine and Surgery',
                  duration: '5.5 Years',
                  eligibility: '12th Science (PCB)',
                  entranceExams: ['NEET-UG'],
                  type: 'course',
                  color: '#ef4444',
                  description: 'Ayurvedic medical degree.'
                },
                {
                  id: 'pcb-bhms',
                  label: 'BHMS',
                  fullForm: 'Bachelor of Homeopathic Medicine and Surgery',
                  duration: '5.5 Years',
                  eligibility: '12th Science (PCB)',
                  entranceExams: ['NEET-UG'],
                  type: 'course',
                  color: '#ef4444',
                  description: 'Homeopathic medical degree.'
                },
                {
                  id: 'pcb-bums',
                  label: 'BUMS',
                  fullForm: 'Bachelor of Unani Medicine and Surgery',
                  duration: '5.5 Years',
                  eligibility: '12th Science (PCB)',
                  entranceExams: ['NEET-UG'],
                  type: 'course',
                  color: '#ef4444',
                  description: 'Unani medical degree.'
                },
                {
                  id: 'pcb-pharmacy',
                  label: 'Pharmacy',
                  fullForm: 'Pharmacy Courses',
                  description: 'Pharmaceutical sciences — drug development, clinical pharmacy, pharmacology.',
                  type: 'category',
                  color: '#ef4444',
                  children: [
                    { id: 'pharma-bpharm', label: 'B.Pharm', fullForm: 'Bachelor of Pharmacy', duration: '4 Years', eligibility: '12th Science (PCB/PCM)', entranceExams: ['MHT-CET', 'State CET'], type: 'course', color: '#ef4444', description: 'Professional pharmacy degree.' },
                    { id: 'pharma-dpharm', label: 'D.Pharm', fullForm: 'Diploma in Pharmacy', duration: '2 Years', type: 'course', color: '#ef4444', description: 'Diploma-level pharmacy qualification.' },
                    { id: 'pharma-mpharm', label: 'M.Pharm', fullForm: 'Master of Pharmacy', duration: '2 Years', type: 'course', color: '#ef4444', description: 'Postgraduate pharmacy degree.' },
                    { id: 'pharma-phd', label: 'Ph.D. Pharmacy', duration: '3-5 Years', type: 'course', color: '#ef4444', description: 'Research doctorate in pharmaceutical sciences.' }
                  ]
                },
                {
                  id: 'pcb-nursing',
                  label: 'Nursing',
                  fullForm: 'Nursing Courses',
                  description: 'Healthcare nursing — patient care, clinical nursing, community health.',
                  type: 'category',
                  color: '#ef4444',
                  children: [
                    { id: 'nurs-bsc', label: 'B.Sc. Nursing', duration: '4 Years', type: 'course', color: '#ef4444', description: 'Bachelor of Science in Nursing.' },
                    { id: 'nurs-gnm', label: 'GNM', fullForm: 'General Nursing and Midwifery', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Diploma in general nursing.' },
                    { id: 'nurs-anm', label: 'ANM', fullForm: 'Auxiliary Nurse Midwifery', duration: '2 Years', type: 'course', color: '#ef4444', description: 'Basic nursing diploma.' },
                    { id: 'nurs-msc', label: 'M.Sc. Nursing', duration: '2 Years', type: 'course', color: '#ef4444', description: 'Postgraduate nursing specialization.' }
                  ]
                },
                {
                  id: 'pcb-paramedical',
                  label: 'Paramedical Courses',
                  fullForm: 'Allied Health Sciences',
                  description: 'BPT, BOT, Optometry, MLT, Radiology and other allied health programs.',
                  type: 'category',
                  color: '#ef4444',
                  children: [
                    { id: 'para-bpt', label: 'BPT', fullForm: 'Bachelor of Physiotherapy', duration: '4.5 Years', type: 'course', color: '#ef4444', description: 'Physiotherapy degree for rehabilitation and physical therapy.' },
                    { id: 'para-bot', label: 'BOT', fullForm: 'Bachelor of Occupational Therapy', duration: '4.5 Years', type: 'course', color: '#ef4444', description: 'Occupational therapy degree.' },
                    { id: 'para-optometry', label: 'B.Sc. Optometry', duration: '4 Years', type: 'course', color: '#ef4444', description: 'Eye care and vision science.' },
                    { id: 'para-mlt', label: 'BMLT', fullForm: 'Bachelor of Medical Lab Technology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Medical laboratory diagnostics and testing.' },
                    { id: 'para-radiology', label: 'B.Sc. Radiology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Medical imaging — X-ray, MRI, CT scan technology.' },
                    { id: 'para-audiology', label: 'B.Sc. Audiology', duration: '4 Years', type: 'course', color: '#ef4444', description: 'Hearing and speech disorders diagnosis and treatment.' },
                    { id: 'para-cardiac', label: 'B.Sc. Cardiac Technology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Heart-related diagnostic technology.' },
                    { id: 'para-perfusion', label: 'B.Sc. Perfusion Technology', duration: '4 Years', type: 'course', color: '#ef4444', description: 'Cardiovascular perfusion during open-heart surgery.' }
                  ]
                },
                {
                  id: 'pcb-bsc-bio',
                  label: 'B.Sc. (Life Sciences)',
                  fullForm: 'Bachelor of Science in Biological / Life Sciences',
                  duration: '3 Years',
                  type: 'category',
                  color: '#ef4444',
                  description: 'Undergraduate science degrees in biological and life sciences.',
                  children: [
                    { id: 'bsc-biotech', label: 'B.Sc. Biotechnology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Biological technology, genetic engineering, molecular biology.' },
                    { id: 'bsc-microbio', label: 'B.Sc. Microbiology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Study of microorganisms — bacteria, viruses, fungi.' },
                    { id: 'bsc-zoology', label: 'B.Sc. Zoology', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Animal biology and zoological sciences.' },
                    { id: 'bsc-botany', label: 'B.Sc. Botany', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Plant biology, ecology, plant genetics.' },
                    { id: 'bsc-forensic', label: 'B.Sc. Forensic Science', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Crime scene investigation, forensic analysis.' },
                    { id: 'bsc-genetics', label: 'B.Sc. Genetics', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Human genetics, genomics and hereditary sciences.' },
                    { id: 'bsc-biochem', label: 'B.Sc. Biochemistry', duration: '3 Years', type: 'course', color: '#ef4444', description: 'Chemical processes in living organisms.' }
                  ]
                },
                {
                  id: 'pcb-agriculture',
                  label: 'Agriculture',
                  fullForm: 'Agricultural Sciences',
                  description: 'B.Sc. Agriculture, Horticulture, Dairy Technology and other agricultural courses.',
                  type: 'category',
                  color: '#22c55e',
                  children: [
                    { id: 'agri-bsc', label: 'B.Sc. Agriculture', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Agricultural sciences, farming technology and crop management.' },
                    { id: 'agri-horti', label: 'B.Sc. Horticulture', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Fruit, vegetable, flower and plantation crop science.' },
                    { id: 'agri-forestry', label: 'B.Sc. Forestry', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Forest management, conservation and ecology.' },
                    { id: 'agri-dairy', label: 'B.Tech Dairy Technology', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Dairy processing and technology.' },
                    { id: 'agri-fisheries', label: 'B.F.Sc. (Fisheries)', fullForm: 'Bachelor of Fisheries Science', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Fisheries and aquaculture science.' },
                    { id: 'agri-food-tech', label: 'B.Tech Food Technology', duration: '4 Years', type: 'course', color: '#22c55e', description: 'Food processing, preservation and quality control.' }
                  ]
                },
                {
                  id: 'pcb-veterinary',
                  label: 'B.V.Sc.',
                  fullForm: 'Bachelor of Veterinary Science',
                  duration: '5 Years',
                  eligibility: '12th Science (PCB)',
                  type: 'course',
                  color: '#ef4444',
                  description: 'Veterinary medicine — animal healthcare and surgery.'
                }
              ]
            },
            {
              id: 'ssc-science-pcmb',
              label: 'PCMB',
              fullForm: 'Physics, Chemistry, Mathematics, Biology',
              description: 'PCMB students have the flexibility to pursue both Engineering and Medical career paths.',
              type: 'stream',
              color: '#f97316',
              children: [
                { id: 'pcmb-eng', label: 'Engineering (All PCM Options)', description: 'All engineering pathways available to PCM students are also open to PCMB students.', type: 'reference', refId: 'pcm-engineering', color: '#06b6d4' },
                { id: 'pcmb-med', label: 'Medical (All PCB Options)', description: 'All medical pathways available to PCB students are also open to PCMB students.', type: 'reference', refId: 'pcb-mbbs', color: '#ef4444' },
                { id: 'pcmb-pharma', label: 'Pharmacy', description: 'All pharmacy pathways available.', type: 'reference', refId: 'pcb-pharmacy', color: '#ef4444' },
                { id: 'pcmb-arch', label: 'Architecture', description: 'Architecture pathways available.', type: 'reference', refId: 'pcm-architecture', color: '#818cf8' },
                { id: 'pcmb-bio', label: 'B.Sc. (All Science Options)', description: 'All B.Sc. options across both PCM and PCB streams.', type: 'reference', color: '#f97316' }
              ]
            },
            {
              id: 'ssc-science-bsc',
              label: 'B.Sc. (General & Applied)',
              fullForm: 'Bachelor of Science',
              description: 'General and applied science degrees — CS, IT, Data Science, AI and more.',
              type: 'category',
              color: '#3b82f6',
              children: [
                { id: 'bsc-cs', label: 'B.Sc. Computer Science', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Computer science fundamentals, programming and software.' },
                { id: 'bsc-it', label: 'B.Sc. Information Technology', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'IT systems, databases, web and application development.' },
                { id: 'bsc-ds', label: 'B.Sc. Data Science', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Data analytics, statistics, machine learning.' },
                { id: 'bsc-ai', label: 'B.Sc. Artificial Intelligence', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'AI, neural networks and intelligent systems.' },
                { id: 'bsc-electronics', label: 'B.Sc. Electronics', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Electronic circuits, digital systems and embedded technology.' },
                { id: 'bsc-chemistry', label: 'B.Sc. Chemistry', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Organic, inorganic, physical and analytical chemistry.' },
                { id: 'bsc-env', label: 'B.Sc. Environmental Science', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Environmental conservation, ecology and sustainability.' }
              ]
            },
            {
              id: 'ssc-science-other',
              label: 'Other Science Careers',
              description: 'Additional career paths available after 12th Science.',
              type: 'category',
              color: '#3b82f6',
              children: [
                { id: 'sci-nda', label: 'NDA (Defence)', fullForm: 'National Defence Academy', type: 'exam', color: '#eab308', description: 'Entry to Army, Navy, Air Force after 12th.' },
                { id: 'sci-govt', label: 'Government Exams', description: 'SSC, Railway, Banking exams after graduation.', type: 'category', color: '#eab308' },
                { id: 'sci-bca', label: 'BCA', fullForm: 'Bachelor of Computer Applications', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Computer applications and programming.' },
                { id: 'sci-stats', label: 'B.Sc. Statistics', duration: '3 Years', type: 'course', color: '#3b82f6', description: 'Statistical methods and data analysis.' }
              ]
            }
          ]
        },
        {
          id: 'ssc-commerce',
          label: 'Commerce Stream',
          fullForm: 'HSC Commerce (With / Without Maths)',
          description: 'Commerce stream — Accounting, Finance, Business, Banking and professional qualifications like CA, CS, CMA.',
          type: 'category',
          color: '#ec4899',
          children: [
            {
              id: 'comm-bcom',
              label: 'B.Com',
              fullForm: 'Bachelor of Commerce',
              duration: '3 Years',
              eligibility: '12th Commerce',
              description: 'General, Accounting & Finance, Banking & Insurance.',
              type: 'category',
              color: '#ec4899',
              children: [
                { id: 'bcom-general', label: 'B.Com (General)', duration: '3 Years', type: 'course', color: '#ec4899', description: 'General commerce degree covering accounting, economics and business.' },
                { id: 'bcom-af', label: 'B.Com (Accounting & Finance)', fullForm: 'B.Com A&F', duration: '3 Years', type: 'course', color: '#ec4899', description: 'Specialized in accounting, auditing and financial management.' },
                { id: 'bcom-bi', label: 'B.Com (Banking & Insurance)', duration: '3 Years', type: 'course', color: '#ec4899', description: 'Banking operations, insurance and financial services.' },
                { id: 'bcom-fm', label: 'B.Com (Financial Markets)', duration: '3 Years', type: 'course', color: '#ec4899', description: 'Stock markets, mutual funds, portfolio management.' },
                {
                  id: 'bcom-higher',
                  label: 'After B.Com',
                  type: 'category',
                  color: '#ec4899',
                  children: [
                    { id: 'bcom-mcom', label: 'M.Com', fullForm: 'Master of Commerce', duration: '2 Years', type: 'course', color: '#ec4899' },
                    { id: 'bcom-mba-after', label: 'MBA', fullForm: 'Master of Business Administration', duration: '2 Years', type: 'course', color: '#ec4899' },
                    { id: 'bcom-ca-after', label: 'CA (after graduation)', type: 'course', color: '#ec4899' },
                    { id: 'bcom-cs-after', label: 'CS (after graduation)', type: 'course', color: '#ec4899' }
                  ]
                }
              ]
            },
            {
              id: 'comm-bba',
              label: 'BBA',
              fullForm: 'Bachelor of Business Administration',
              duration: '3 Years',
              eligibility: '12th Commerce (or any stream)',
              description: 'Business administration — Finance, Marketing, International Business.',
              type: 'course',
              color: '#ec4899',
              children: [
                { id: 'bba-finance', label: 'BBA (Finance)', type: 'specialization', color: '#ec4899' },
                { id: 'bba-marketing', label: 'BBA (Marketing)', type: 'specialization', color: '#ec4899' },
                { id: 'bba-ib', label: 'BBA (International Business)', type: 'specialization', color: '#ec4899' },
                { id: 'bba-hr', label: 'BBA (Human Resources)', type: 'specialization', color: '#ec4899' }
              ]
            },
            {
              id: 'comm-bms',
              label: 'BMS / BAF',
              fullForm: 'Bachelor of Management Studies / Bachelor of Accounting & Finance',
              duration: '3 Years',
              type: 'course',
              color: '#ec4899',
              description: 'Management and finance undergraduate degrees.'
            },
            {
              id: 'comm-professional',
              label: 'Professional Courses',
              description: 'CA, CS, CMA — Professional qualifications in accounting, company law and cost management.',
              type: 'category',
              color: '#ec4899',
              children: [
                {
                  id: 'prof-ca',
                  label: 'CA',
                  fullForm: 'Chartered Accountancy',
                  eligibility: 'After 12th (Foundation) or After Graduation (Direct Entry)',
                  description: 'India\'s premier accounting qualification — Audit, Taxation, Finance.',
                  type: 'course',
                  color: '#ec4899',
                  children: [
                    { id: 'ca-foundation', label: 'CA Foundation', description: 'Entry-level after 12th', type: 'exam', color: '#ec4899' },
                    { id: 'ca-inter', label: 'CA Intermediate', description: 'Second level (8 papers)', type: 'exam', color: '#ec4899' },
                    { id: 'ca-articleship', label: 'CA Articleship (3 Years)', description: 'Practical training under a CA', type: 'course', color: '#ec4899' },
                    { id: 'ca-final', label: 'CA Final', description: 'Final qualification examination', type: 'exam', color: '#ec4899' }
                  ]
                },
                {
                  id: 'prof-cs',
                  label: 'CS',
                  fullForm: 'Company Secretary',
                  description: 'Corporate governance, company law, compliance and board procedures.',
                  type: 'course',
                  color: '#ec4899',
                  children: [
                    { id: 'cs-foundation', label: 'CSEET (Entry Test)', type: 'exam', color: '#ec4899' },
                    { id: 'cs-executive', label: 'CS Executive', type: 'exam', color: '#ec4899' },
                    { id: 'cs-professional', label: 'CS Professional', type: 'exam', color: '#ec4899' }
                  ]
                },
                {
                  id: 'prof-cma',
                  label: 'CMA',
                  fullForm: 'Cost and Management Accountant',
                  description: 'Cost accounting, management accounting and financial management.',
                  type: 'course',
                  color: '#ec4899',
                  children: [
                    { id: 'cma-foundation', label: 'CMA Foundation', type: 'exam', color: '#ec4899' },
                    { id: 'cma-inter', label: 'CMA Intermediate', type: 'exam', color: '#ec4899' },
                    { id: 'cma-final', label: 'CMA Final', type: 'exam', color: '#ec4899' }
                  ]
                }
              ]
            },
            {
              id: 'comm-economics',
              label: 'Economics (BA/B.Sc.)',
              fullForm: 'Bachelor of Arts / Science in Economics',
              duration: '3 Years',
              type: 'course',
              color: '#ec4899',
              description: 'Economics — micro, macro, econometrics and policy.'
            },
            {
              id: 'comm-actuarial',
              label: 'Actuarial Science',
              description: 'Mathematical and statistical methods applied to insurance and finance.',
              type: 'course',
              color: '#ec4899'
            },
            {
              id: 'comm-business-analytics',
              label: 'Business Analytics',
              description: 'Data-driven business decisions, analytics tools and business intelligence.',
              type: 'course',
              color: '#ec4899'
            },
            {
              id: 'comm-digital-marketing',
              label: 'Digital Marketing',
              description: 'SEO, SEM, social media marketing, content marketing and analytics.',
              type: 'course',
              color: '#ec4899'
            },
            {
              id: 'comm-mba',
              label: 'MBA (after Graduation)',
              fullForm: 'Master of Business Administration',
              duration: '2 Years',
              eligibility: 'Any Graduation',
              entranceExams: ['CAT', 'MAT', 'XAT', 'CMAT', 'SNAP', 'NMAT'],
              type: 'course',
              color: '#ec4899',
              description: 'Postgraduate management degree — various specializations.'
            },
            {
              id: 'comm-govt',
              label: 'Government Examinations',
              description: 'UPSC, MPSC, SSC, Banking, Railway and other competitive exams.',
              type: 'category',
              color: '#eab308',
              children: [
                { id: 'comm-upsc', label: 'UPSC Civil Services', fullForm: 'Union Public Service Commission', type: 'exam', color: '#eab308', description: 'IAS, IPS, IFS — India\'s premier civil services examination.' },
                { id: 'comm-mpsc', label: 'MPSC', fullForm: 'Maharashtra Public Service Commission', type: 'exam', color: '#eab308', description: 'State-level administrative services.' },
                { id: 'comm-banking-exam', label: 'Banking Exams (IBPS/SBI)', type: 'exam', color: '#eab308', description: 'PO, Clerk, SO exams for public sector banks.' },
                { id: 'comm-ssc-exam', label: 'SSC Exams', fullForm: 'Staff Selection Commission', type: 'exam', color: '#eab308', description: 'CGL, CHSL, MTS and other central government exams.' },
                { id: 'comm-railway', label: 'Railway Exams (RRB)', type: 'exam', color: '#eab308', description: 'Various railway recruitment board examinations.' }
              ]
            }
          ]
        },
        {
          id: 'ssc-arts',
          label: 'Arts / Humanities Stream',
          fullForm: 'HSC Arts (Humanities)',
          description: 'Arts stream — Liberal arts, humanities, social sciences, law, design, media and creative careers.',
          type: 'category',
          color: '#f97316',
          children: [
            {
              id: 'arts-ba',
              label: 'BA (Bachelor of Arts)',
              fullForm: 'Bachelor of Arts',
              duration: '3 Years',
              description: 'Various specializations in humanities and social sciences.',
              type: 'category',
              color: '#f97316',
              children: [
                { id: 'ba-psychology', label: 'BA Psychology', duration: '3 Years', type: 'course', color: '#f97316', description: 'Human behaviour, mental health, counselling and clinical psychology.' },
                { id: 'ba-polsci', label: 'BA Political Science', duration: '3 Years', type: 'course', color: '#f97316', description: 'Politics, governance, international relations and public policy.' },
                { id: 'ba-sociology', label: 'BA Sociology', duration: '3 Years', type: 'course', color: '#f97316', description: 'Social structures, culture and community studies.' },
                { id: 'ba-economics', label: 'BA Economics', duration: '3 Years', type: 'course', color: '#f97316', description: 'Economic theory, policy and analysis.' },
                { id: 'ba-english', label: 'BA English', duration: '3 Years', type: 'course', color: '#f97316', description: 'English literature, linguistics and communication.' },
                { id: 'ba-history', label: 'BA History', duration: '3 Years', type: 'course', color: '#f97316', description: 'Historical studies, archaeology and cultural heritage.' },
                { id: 'ba-geography', label: 'BA Geography', duration: '3 Years', type: 'course', color: '#f97316', description: 'Physical and human geography, GIS and mapping.' },
                { id: 'ba-philosophy', label: 'BA Philosophy', duration: '3 Years', type: 'course', color: '#f97316', description: 'Ethics, logic, metaphysics and critical thinking.' },
                { id: 'ba-hindi', label: 'BA Hindi / Marathi', duration: '3 Years', type: 'course', color: '#f97316', description: 'Language, literature and cultural studies.' }
              ]
            },
            {
              id: 'arts-journalism',
              label: 'Journalism & Mass Communication',
              fullForm: 'BA / BMM in Journalism & Mass Communication',
              duration: '3 Years',
              type: 'course',
              color: '#f97316',
              description: 'Print, electronic and digital media, broadcasting and content creation.',
              children: [
                { id: 'jmc-print', label: 'Print Journalism', type: 'specialization', color: '#f97316' },
                { id: 'jmc-broadcast', label: 'Broadcast Journalism', type: 'specialization', color: '#f97316' },
                { id: 'jmc-digital', label: 'Digital Media', type: 'specialization', color: '#f97316' },
                { id: 'jmc-advertising', label: 'Advertising & PR', type: 'specialization', color: '#f97316' }
              ]
            },
            {
              id: 'arts-bsw',
              label: 'BSW',
              fullForm: 'Bachelor of Social Work',
              duration: '3 Years',
              type: 'course',
              color: '#f97316',
              description: 'Community development, NGO work, rural development and social welfare.'
            },
            {
              id: 'arts-design',
              label: 'Design',
              fullForm: 'Design & Fine Arts',
              description: 'B.Des, BFA — Fashion, Graphic, Interior, Product and Industrial Design.',
              type: 'category',
              color: '#f97316',
              children: [
                { id: 'des-bdes', label: 'B.Des.', fullForm: 'Bachelor of Design', duration: '4 Years', entranceExams: ['UCEED', 'NID DAT', 'NIFT Entrance'], type: 'course', color: '#f97316', description: 'Design thinking, product design, UX/UI design.' },
                { id: 'des-bfa', label: 'BFA', fullForm: 'Bachelor of Fine Arts', duration: '4 Years', type: 'course', color: '#f97316', description: 'Visual arts — painting, sculpture, applied arts.' },
                { id: 'des-fashion', label: 'B.Des. Fashion Design', duration: '4 Years', entranceExams: ['NIFT Entrance'], type: 'course', color: '#f97316', description: 'Fashion design, textile and garment technology.' },
                { id: 'des-graphic', label: 'Graphic Design', type: 'course', color: '#f97316', description: 'Visual communication, branding and digital design.' },
                { id: 'des-interior', label: 'Interior Design', type: 'course', color: '#f97316', description: 'Interior spaces, furniture design and spatial planning.' }
              ]
            },
            {
              id: 'arts-law',
              label: 'Law',
              fullForm: 'Legal Studies',
              description: 'BA LLB, LLB — Legal education and practice.',
              type: 'category',
              color: '#f97316',
              children: [
                { id: 'law-ballb', label: 'BA LLB (Integrated)', duration: '5 Years', eligibility: '12th (any stream)', entranceExams: ['CLAT', 'AILET', 'LSAT India', 'MH CET Law'], type: 'course', color: '#f97316', description: 'Integrated law degree after 12th.' },
                { id: 'law-llb', label: 'LLB', duration: '3 Years', eligibility: 'Any Graduation', type: 'course', color: '#f97316', description: 'Law degree after graduation.' },
                { id: 'law-llm', label: 'LLM', fullForm: 'Master of Laws', duration: '2 Years', type: 'course', color: '#f97316', description: 'Postgraduate law specialization.' },
                { id: 'law-judicial', label: 'Judicial Services', type: 'exam', color: '#eab308', description: 'State judicial service examinations for judges and magistrates.' }
              ]
            },
            {
              id: 'arts-performing',
              label: 'Performing Arts',
              description: 'Music, Dance, Theatre and Drama.',
              type: 'category',
              color: '#f97316',
              children: [
                { id: 'perf-music', label: 'BA Music', duration: '3 Years', type: 'course', color: '#f97316' },
                { id: 'perf-dance', label: 'BA Dance', duration: '3 Years', type: 'course', color: '#f97316' },
                { id: 'perf-theatre', label: 'BA Theatre Arts', duration: '3 Years', type: 'course', color: '#f97316' },
                { id: 'perf-film', label: 'Film Studies / Direction', type: 'course', color: '#f97316' }
              ]
            },
            {
              id: 'arts-library',
              label: 'Library & Information Science',
              fullForm: 'B.Lib.I.Sc.',
              duration: '1 Year (after graduation)',
              type: 'course',
              color: '#f97316',
              description: 'Library management, information science and archival studies.'
            },
            {
              id: 'arts-education',
              label: 'Education (B.Ed.)',
              fullForm: 'Bachelor of Education',
              duration: '2 Years (after graduation)',
              type: 'course',
              color: '#f97316',
              description: 'Teacher training for school education. Eligible for TET after completion.'
            },
            {
              id: 'arts-hotel',
              label: 'Hotel Management',
              fullForm: 'BHM / BHMCT',
              duration: '4 Years',
              eligibility: '12th (any stream)',
              entranceExams: ['NCHM JEE'],
              type: 'course',
              color: '#f97316',
              description: 'Hospitality, hotel operations, culinary arts and tourism management.'
            },
            {
              id: 'arts-other-humanities',
              label: 'Other Humanities Courses',
              type: 'category',
              color: '#f97316',
              children: [
                { id: 'hum-anthro', label: 'BA Anthropology', type: 'course', color: '#f97316' },
                { id: 'hum-public-admin', label: 'BA Public Administration', type: 'course', color: '#f97316' },
                { id: 'hum-home-sci', label: 'B.Sc. Home Science', type: 'course', color: '#f97316' },
                { id: 'hum-languages', label: 'BA Foreign Languages', type: 'course', color: '#f97316', description: 'French, German, Spanish, Japanese and other foreign languages.' }
              ]
            },
            {
              id: 'arts-govt',
              label: 'Government Examinations',
              description: 'UPSC, MPSC, SSC, Banking, Railway and other competitive exams after Arts.',
              type: 'category',
              color: '#eab308',
              children: [
                { id: 'arts-upsc', label: 'UPSC Civil Services', type: 'exam', color: '#eab308', description: 'IAS, IPS, IFS examinations.' },
                { id: 'arts-mpsc', label: 'MPSC', type: 'exam', color: '#eab308', description: 'Maharashtra state administrative services.' },
                { id: 'arts-ssc-exam', label: 'SSC Exams (CGL, CHSL)', type: 'exam', color: '#eab308', description: 'Central government staff selection.' },
                { id: 'arts-banking', label: 'Banking Exams', type: 'exam', color: '#eab308', description: 'IBPS PO, SBI PO, Clerk examinations.' },
                { id: 'arts-police', label: 'Police Services', type: 'exam', color: '#eab308', description: 'State and central police recruitment.' }
              ]
            }
          ]
        },
        {
          id: 'ssc-diploma',
          label: 'Diploma (Polytechnic)',
          fullForm: 'Polytechnic Diploma Courses',
          description: 'Technical diploma after 10th — Engineering diploma, polytechnic courses. Direct second year (DSE) admission to engineering possible after diploma.',
          type: 'category',
          color: '#22c55e',
          children: [
            {
              id: 'dip-branches',
              label: 'Diploma Branches',
              description: 'Various engineering diploma specializations available after 10th.',
              type: 'category',
              color: '#22c55e',
              children: [
                { id: 'dip-cs', label: 'Diploma in Computer Engineering', duration: '3 Years', type: 'course', color: '#22c55e', description: 'Computer hardware, software, programming and networking.' },
                { id: 'dip-mech', label: 'Diploma in Mechanical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-civil', label: 'Diploma in Civil Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-elec', label: 'Diploma in Electrical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-extc', label: 'Diploma in Electronics & Telecom', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-auto', label: 'Diploma in Automobile Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-chemical', label: 'Diploma in Chemical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-printing', label: 'Diploma in Printing Technology', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-textile', label: 'Diploma in Textile Technology', duration: '3 Years', type: 'course', color: '#22c55e' },
                { id: 'dip-prod', label: 'Diploma in Production Engineering', duration: '3 Years', type: 'course', color: '#22c55e' }
              ]
            },
            {
              id: 'dip-lateral',
              label: 'Direct Second Year (DSE)',
              fullForm: 'Lateral Entry to B.E./B.Tech',
              description: 'After completing diploma, students can enter directly into the second year of B.E./B.Tech engineering degree.',
              type: 'course',
              color: '#22c55e',
              children: [
                { id: 'dse-be', label: 'B.E./B.Tech (from 2nd Year)', duration: '3 Years (remaining)', type: 'course', color: '#22c55e', description: 'Complete remaining 3 years of engineering after diploma.' },
                { id: 'dse-eligibility', label: 'Eligibility: Diploma with min 45%', type: 'info', color: '#22c55e' },
                { id: 'dse-exam', label: 'Entrance: MHT-CET / State CET', type: 'exam', color: '#eab308' }
              ]
            },
            {
              id: 'dip-jobs',
              label: 'Jobs After Diploma',
              description: 'Employment opportunities directly after diploma completion.',
              type: 'category',
              color: '#22c55e',
              children: [
                { id: 'dip-govt-jobs', label: 'Government Jobs (PWD, Railways, PSUs)', type: 'career', color: '#eab308', description: 'Technical positions in government departments.' },
                { id: 'dip-private-jobs', label: 'Private Sector Jobs', type: 'career', color: '#22c55e', description: 'Technical roles in private companies.' },
                { id: 'dip-entrepreneur', label: 'Self-Employment / Entrepreneurship', type: 'career', color: '#22c55e', description: 'Start your own technical business or workshop.' }
              ]
            }
          ]
        },
        {
          id: 'ssc-iti',
          label: 'ITI (Skill-Based)',
          fullForm: 'Industrial Training Institute',
          description: 'Skill-based vocational training — Popular trades, hands-on training, quick employment.',
          type: 'category',
          color: '#22c55e',
          children: [
            {
              id: 'iti-trades',
              label: 'Popular ITI Trades',
              type: 'category',
              color: '#22c55e',
              children: [
                { id: 'iti-fitter', label: 'Fitter', duration: '2 Years', type: 'course', color: '#22c55e' },
                { id: 'iti-turner', label: 'Turner', duration: '2 Years', type: 'course', color: '#22c55e' },
                { id: 'iti-electrician', label: 'Electrician', duration: '2 Years', type: 'course', color: '#22c55e' },
                { id: 'iti-welder', label: 'Welder', duration: '1 Year', type: 'course', color: '#22c55e' },
                { id: 'iti-mechanic', label: 'Mechanic (Motor Vehicle)', duration: '2 Years', type: 'course', color: '#22c55e' },
                { id: 'iti-copa', label: 'COPA', fullForm: 'Computer Operator & Programming Assistant', duration: '1 Year', type: 'course', color: '#22c55e' },
                { id: 'iti-plumber', label: 'Plumber', duration: '1 Year', type: 'course', color: '#22c55e' },
                { id: 'iti-carpenter', label: 'Carpenter', duration: '1 Year', type: 'course', color: '#22c55e' },
                { id: 'iti-draughtsman', label: 'Draughtsman (Civil/Mechanical)', duration: '2 Years', type: 'course', color: '#22c55e' },
                { id: 'iti-wireman', label: 'Wireman', duration: '2 Years', type: 'course', color: '#22c55e' }
              ]
            },
            {
              id: 'iti-after',
              label: 'After ITI',
              type: 'category',
              color: '#22c55e',
              children: [
                { id: 'iti-apprentice', label: 'Apprenticeship Training', description: 'On-the-job training in industries and factories.', type: 'course', color: '#22c55e' },
                { id: 'iti-govt-jobs', label: 'Government Jobs (Railways, Defence, PSUs)', type: 'career', color: '#eab308' },
                { id: 'iti-diploma-lateral', label: 'Diploma (Lateral Entry to 2nd Year)', type: 'course', color: '#22c55e', description: 'Lateral entry into diploma after ITI.' },
                { id: 'iti-self-emp', label: 'Self-Employment', type: 'career', color: '#22c55e' }
              ]
            }
          ]
        },
        {
          id: 'ssc-vocational',
          label: 'Vocational Education',
          fullForm: 'Vocational & Skill-Based Courses',
          description: 'Skill + Academics — vocational education courses at school and college level.',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'voc-healthcare', label: 'Healthcare Vocational Courses', type: 'course', color: '#22c55e' },
            { id: 'voc-it', label: 'IT & Computer Courses', type: 'course', color: '#22c55e' },
            { id: 'voc-automobile', label: 'Automobile Technology', type: 'course', color: '#22c55e' },
            { id: 'voc-beauty', label: 'Beauty & Wellness', type: 'course', color: '#22c55e' },
            { id: 'voc-agri', label: 'Agriculture Vocational', type: 'course', color: '#22c55e' },
            { id: 'voc-retail', label: 'Retail Management', type: 'course', color: '#22c55e' }
          ]
        },
        {
          id: 'ssc-open-school',
          label: 'Open Schooling (NIOS)',
          fullForm: 'National Institute of Open Schooling',
          description: 'Alternative education — complete 10th and 12th through open schooling.',
          type: 'course',
          color: '#a855f7'
        },
        {
          id: 'ssc-apprenticeship',
          label: 'Apprenticeship',
          fullForm: 'Apprenticeship Training',
          description: 'On-the-job training with stipend — industry-based learning and skill development.',
          type: 'course',
          color: '#22c55e'
        }
      ]
    },

    // ==========================================
    // 2. 12TH HSC – COMMERCE (Direct from 12th)
    // ==========================================
    {
      id: 'hsc-commerce',
      label: '12th HSC – Commerce',
      fullForm: 'Career Options After 12th Commerce',
      description: 'All career pathways after 12th Commerce — B.Com, BBA, CA, CS, CMA, Banking, Management and more.',
      type: 'category',
      color: '#ec4899',
      children: [
        {
          id: 'hsc-comm-ug',
          label: 'Undergraduate Courses',
          type: 'category',
          color: '#ec4899',
          children: [
            { id: 'hsc-bcom-gen', label: 'B.Com (General)', duration: '3 Years', type: 'course', color: '#ec4899', description: 'General commerce covering accounting, economics and business studies.' },
            { id: 'hsc-bcom-af', label: 'B.Com (A&F)', fullForm: 'Accounting & Finance', duration: '3 Years', type: 'course', color: '#ec4899' },
            { id: 'hsc-bcom-bi', label: 'B.Com (Banking & Insurance)', duration: '3 Years', type: 'course', color: '#ec4899' },
            { id: 'hsc-bba2', label: 'BBA', fullForm: 'Bachelor of Business Administration', duration: '3 Years', type: 'course', color: '#ec4899', description: 'Business management with Finance, Marketing, HR specializations.' },
            { id: 'hsc-bms2', label: 'BMS', fullForm: 'Bachelor of Management Studies', duration: '3 Years', type: 'course', color: '#ec4899' },
            { id: 'hsc-baf', label: 'BAF', fullForm: 'Bachelor of Accounting & Finance', duration: '3 Years', type: 'course', color: '#ec4899' },
            { id: 'hsc-bbi', label: 'BBI', fullForm: 'Bachelor of Banking & Insurance', duration: '3 Years', type: 'course', color: '#ec4899' },
            { id: 'hsc-bfm', label: 'BFM', fullForm: 'Bachelor of Financial Markets', duration: '3 Years', type: 'course', color: '#ec4899' }
          ]
        },
        {
          id: 'hsc-comm-prof',
          label: 'Professional Courses',
          type: 'category',
          color: '#ec4899',
          children: [
            { id: 'hsc-ca', label: 'CA (Chartered Accountancy)', description: 'Foundation → Intermediate → Articleship → Final', type: 'course', color: '#ec4899' },
            { id: 'hsc-cs', label: 'CS (Company Secretary)', description: 'CSEET → Executive → Professional', type: 'course', color: '#ec4899' },
            { id: 'hsc-cma', label: 'CMA (Cost & Management Accountant)', description: 'Foundation → Intermediate → Final', type: 'course', color: '#ec4899' }
          ]
        },
        {
          id: 'hsc-comm-finance',
          label: 'Finance & Banking',
          type: 'category',
          color: '#ec4899',
          children: [
            { id: 'hsc-fin-banking', label: 'Banking Careers (IBPS/SBI)', type: 'career', color: '#eab308' },
            { id: 'hsc-fin-insurance', label: 'Insurance Sector', type: 'career', color: '#ec4899' },
            { id: 'hsc-fin-stock', label: 'Stock Market / Financial Analysis', type: 'career', color: '#ec4899' },
            { id: 'hsc-fin-invest', label: 'Investment Banking', type: 'career', color: '#ec4899' }
          ]
        },
        {
          id: 'hsc-comm-mgmt',
          label: 'Management',
          type: 'category',
          color: '#ec4899',
          children: [
            { id: 'hsc-mba2', label: 'MBA (after graduation)', entranceExams: ['CAT', 'MAT', 'XAT', 'CMAT'], type: 'course', color: '#ec4899' },
            { id: 'hsc-pgdm', label: 'PGDM', fullForm: 'Post Graduate Diploma in Management', duration: '2 Years', type: 'course', color: '#ec4899' }
          ]
        },
        {
          id: 'hsc-comm-govt',
          label: 'Government Examinations',
          type: 'category',
          color: '#eab308',
          children: [
            { id: 'hsc-upsc2', label: 'UPSC (after graduation)', type: 'exam', color: '#eab308' },
            { id: 'hsc-mpsc2', label: 'MPSC', type: 'exam', color: '#eab308' },
            { id: 'hsc-ssc2', label: 'SSC (CGL/CHSL)', type: 'exam', color: '#eab308' },
            { id: 'hsc-bank-exam', label: 'Banking Exams', type: 'exam', color: '#eab308' },
            { id: 'hsc-railway2', label: 'Railway Exams', type: 'exam', color: '#eab308' }
          ]
        },
        {
          id: 'hsc-comm-digital',
          label: 'Digital Marketing & Analytics',
          type: 'category',
          color: '#ec4899',
          children: [
            { id: 'hsc-dm', label: 'Digital Marketing', type: 'course', color: '#ec4899' },
            { id: 'hsc-ba', label: 'Business Analytics', type: 'course', color: '#ec4899' },
            { id: 'hsc-ecomm', label: 'E-Commerce Management', type: 'course', color: '#ec4899' }
          ]
        }
      ]
    },

    // ==========================================
    // 3. 12TH HSC – SCIENCE
    // ==========================================
    {
      id: 'hsc-science',
      label: '12th HSC – Science',
      fullForm: 'Career Options After 12th Science',
      description: 'Engineering, Medical, Pharmacy, B.Sc., Architecture, Aviation, Defence and more.',
      type: 'category',
      color: '#3b82f6',
      children: [
        {
          id: 'hsc-sci-pcm',
          label: 'PCM Stream',
          fullForm: 'Physics, Chemistry, Mathematics',
          type: 'category',
          color: '#3b82f6',
          children: [
            { id: 'hsc-engineering', label: 'Engineering (B.E./B.Tech)', entranceExams: ['JEE Main', 'JEE Advanced', 'MHT-CET'], description: 'All engineering branches and specializations.', type: 'course', color: '#06b6d4' },
            { id: 'hsc-arch', label: 'Architecture (B.Arch)', entranceExams: ['NATA', 'JEE Paper 2'], duration: '5 Years', type: 'course', color: '#3b82f6' },
            { id: 'hsc-bsc-pcm', label: 'B.Sc. (Physics / Maths / CS / IT)', type: 'course', color: '#3b82f6' },
            { id: 'hsc-bca', label: 'BCA', fullForm: 'Bachelor of Computer Applications', duration: '3 Years', type: 'course', color: '#3b82f6' },
            { id: 'hsc-aviation2', label: 'Aviation (Pilot / AME)', type: 'course', color: '#3b82f6' },
            { id: 'hsc-merchant2', label: 'Merchant Navy', type: 'course', color: '#3b82f6' },
            { id: 'hsc-defence2', label: 'Defence (NDA / Army / Navy / Air Force)', type: 'course', color: '#eab308' }
          ]
        },
        {
          id: 'hsc-sci-pcb',
          label: 'PCB Stream',
          fullForm: 'Physics, Chemistry, Biology',
          type: 'category',
          color: '#ef4444',
          children: [
            { id: 'hsc-mbbs', label: 'MBBS', entranceExams: ['NEET-UG'], duration: '5.5 Years', type: 'course', color: '#ef4444' },
            { id: 'hsc-bds', label: 'BDS', entranceExams: ['NEET-UG'], duration: '5 Years', type: 'course', color: '#ef4444' },
            { id: 'hsc-bams', label: 'BAMS (Ayurveda)', entranceExams: ['NEET-UG'], duration: '5.5 Years', type: 'course', color: '#ef4444' },
            { id: 'hsc-bhms', label: 'BHMS (Homeopathy)', entranceExams: ['NEET-UG'], duration: '5.5 Years', type: 'course', color: '#ef4444' },
            { id: 'hsc-pharmacy2', label: 'Pharmacy (B.Pharm / D.Pharm)', entranceExams: ['MHT-CET'], type: 'course', color: '#ef4444' },
            { id: 'hsc-nursing2', label: 'Nursing (B.Sc. / GNM)', type: 'course', color: '#ef4444' },
            { id: 'hsc-para2', label: 'Paramedical (BPT, BOT, Optometry, MLT)', type: 'course', color: '#ef4444' },
            { id: 'hsc-bsc-bio', label: 'B.Sc. (Biotech / Microbio / Zoology)', type: 'course', color: '#ef4444' },
            { id: 'hsc-agri2', label: 'Agriculture (B.Sc. Agri.)', type: 'course', color: '#22c55e' },
            { id: 'hsc-vet', label: 'Veterinary (B.V.Sc.)', type: 'course', color: '#ef4444' }
          ]
        },
        {
          id: 'hsc-sci-pcmb',
          label: 'PCMB Stream',
          fullForm: 'Physics, Chemistry, Maths, Biology',
          description: 'All options from both PCM and PCB streams.',
          type: 'category',
          color: '#f97316',
          children: [
            { id: 'hsc-pcmb-eng', label: 'All Engineering Options', type: 'reference', color: '#06b6d4' },
            { id: 'hsc-pcmb-med', label: 'All Medical Options', type: 'reference', color: '#ef4444' },
            { id: 'hsc-pcmb-pharma', label: 'All Pharmacy Options', type: 'reference', color: '#ef4444' },
            { id: 'hsc-pcmb-both', label: 'Maximum Flexibility', description: 'PCMB students can apply for both JEE and NEET.', type: 'info', color: '#f97316' }
          ]
        }
      ]
    },

    // ==========================================
    // 4. 12TH HSC – ARTS
    // ==========================================
    {
      id: 'hsc-arts',
      label: '12th HSC – Arts',
      fullForm: 'Career Options After 12th Arts',
      description: 'BA, BSW, Law, Design, Fine Arts, Journalism, Mass Communication, Performing Arts, Library Science and more.',
      type: 'category',
      color: '#f97316',
      children: [
        {
          id: 'hsc-arts-ug',
          label: 'Undergraduate Courses',
          type: 'category',
          color: '#f97316',
          children: [
            { id: 'hsc-ba-psych', label: 'BA Psychology', duration: '3 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-ba-pol', label: 'BA Political Science', duration: '3 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-ba-socio', label: 'BA Sociology', duration: '3 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-ba-eco', label: 'BA Economics', duration: '3 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-ba-eng', label: 'BA English', duration: '3 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-ba-history', label: 'BA History', duration: '3 Years', type: 'course', color: '#f97316' }
          ]
        },
        {
          id: 'hsc-arts-prof',
          label: 'Professional Courses',
          type: 'category',
          color: '#f97316',
          children: [
            { id: 'hsc-law2', label: 'BA LLB (Integrated Law)', duration: '5 Years', entranceExams: ['CLAT', 'AILET'], type: 'course', color: '#f97316' },
            { id: 'hsc-hotel2', label: 'Hotel Management (BHM)', entranceExams: ['NCHM JEE'], duration: '4 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-event', label: 'Event Management', type: 'course', color: '#f97316' },
            { id: 'hsc-travel', label: 'Travel & Tourism', type: 'course', color: '#f97316' }
          ]
        },
        {
          id: 'hsc-arts-creative',
          label: 'Creative Careers',
          type: 'category',
          color: '#f97316',
          children: [
            { id: 'hsc-design2', label: 'Design (B.Des.)', entranceExams: ['UCEED', 'NID DAT', 'NIFT'], type: 'course', color: '#f97316' },
            { id: 'hsc-bfa2', label: 'Fine Arts (BFA)', duration: '4 Years', type: 'course', color: '#f97316' },
            { id: 'hsc-animation', label: 'Animation & VFX', type: 'course', color: '#f97316' },
            { id: 'hsc-film', label: 'Film Making / Direction', type: 'course', color: '#f97316' },
            { id: 'hsc-photography', label: 'Photography', type: 'course', color: '#f97316' }
          ]
        },
        {
          id: 'hsc-arts-jmc',
          label: 'Journalism & Mass Comm.',
          fullForm: 'Journalism & Mass Communication',
          duration: '3 Years',
          type: 'course',
          color: '#f97316',
          description: 'Print, digital and broadcast media, advertising and PR.'
        },
        {
          id: 'hsc-arts-bsw',
          label: 'Social Work (BSW)',
          duration: '3 Years',
          type: 'course',
          color: '#f97316',
          description: 'Social work, NGO management and community development.'
        },
        {
          id: 'hsc-arts-lib',
          label: 'Library & Information Science',
          type: 'course',
          color: '#f97316'
        },
        {
          id: 'hsc-arts-perf',
          label: 'Performing Arts',
          type: 'category',
          color: '#f97316',
          children: [
            { id: 'hsc-music', label: 'Music', type: 'course', color: '#f97316' },
            { id: 'hsc-dance', label: 'Dance', type: 'course', color: '#f97316' },
            { id: 'hsc-theatre', label: 'Theatre & Drama', type: 'course', color: '#f97316' }
          ]
        },
        {
          id: 'hsc-arts-govt2',
          label: 'Government Examinations',
          type: 'category',
          color: '#eab308',
          children: [
            { id: 'hsc-art-upsc', label: 'UPSC (after graduation)', type: 'exam', color: '#eab308' },
            { id: 'hsc-art-mpsc', label: 'MPSC', type: 'exam', color: '#eab308' },
            { id: 'hsc-art-ssc', label: 'SSC (CGL/CHSL)', type: 'exam', color: '#eab308' },
            { id: 'hsc-art-bank', label: 'Banking Exams', type: 'exam', color: '#eab308' },
            { id: 'hsc-art-police', label: 'Police / Defence Services', type: 'exam', color: '#eab308' }
          ]
        }
      ]
    },

    // ==========================================
    // 5. DIPLOMA & SKILL-BASED PATHWAYS
    // ==========================================
    {
      id: 'diploma-pathway',
      label: 'Diploma, ITI & Skill Pathways',
      fullForm: 'Diploma, ITI, Vocational & Apprenticeship',
      description: 'Polytechnic diploma, ITI trades, vocational courses and apprenticeship — Skill-based career pathways.',
      type: 'category',
      color: '#22c55e',
      children: [
        {
          id: 'dp-polytechnic',
          label: 'Polytechnic Diploma',
          description: 'Engineering diploma — Branches, Eligibility, Duration, Lateral Entry.',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'dp-cs', label: 'Computer Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-mech', label: 'Mechanical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-civil', label: 'Civil Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-elec', label: 'Electrical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-extc', label: 'Electronics & Telecom', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-auto', label: 'Automobile Engineering', duration: '3 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-chem', label: 'Chemical Engineering', duration: '3 Years', type: 'course', color: '#22c55e' }
          ]
        },
        {
          id: 'dp-iti',
          label: 'ITI Courses',
          fullForm: 'Industrial Training Institute',
          description: 'Skill-based trades — Popular trades, eligibility, job scope.',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'dp-iti-fitter', label: 'Fitter', duration: '2 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-iti-elec', label: 'Electrician', duration: '2 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-iti-turner', label: 'Turner', duration: '2 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-iti-welder', label: 'Welder', duration: '1 Year', type: 'course', color: '#22c55e' },
            { id: 'dp-iti-mechanic', label: 'Mechanic (Motor Vehicle)', duration: '2 Years', type: 'course', color: '#22c55e' },
            { id: 'dp-iti-copa', label: 'COPA', fullForm: 'Computer Operator & Programming Asst.', duration: '1 Year', type: 'course', color: '#22c55e' }
          ]
        },
        {
          id: 'dp-vocational',
          label: 'Vocational Courses',
          description: 'School/College level vocational and skill development courses.',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'dp-voc-health', label: 'Healthcare', type: 'course', color: '#22c55e' },
            { id: 'dp-voc-it', label: 'IT & Computer', type: 'course', color: '#22c55e' },
            { id: 'dp-voc-auto', label: 'Automobile', type: 'course', color: '#22c55e' },
            { id: 'dp-voc-retail', label: 'Retail', type: 'course', color: '#22c55e' },
            { id: 'dp-voc-beauty', label: 'Beauty & Wellness', type: 'course', color: '#22c55e' }
          ]
        },
        {
          id: 'dp-apprentice',
          label: 'Apprenticeship',
          description: 'Industry training with stipend — learn while you earn.',
          type: 'course',
          color: '#22c55e'
        },
        {
          id: 'dp-lateral',
          label: 'Direct Second Year Engineering',
          description: 'Lateral entry into B.E./B.Tech after diploma completion.',
          type: 'course',
          color: '#22c55e'
        },
        {
          id: 'dp-higher',
          label: 'Higher Education After Diploma',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'dp-be', label: 'B.E./B.Tech (Lateral Entry)', type: 'course', color: '#22c55e' },
            { id: 'dp-amie', label: 'AMIE', fullForm: 'Associate Member of Institution of Engineers', type: 'course', color: '#22c55e' },
            { id: 'dp-open-degree', label: 'Open University Degrees', type: 'course', color: '#22c55e' }
          ]
        },
        {
          id: 'dp-govt-jobs',
          label: 'Government Jobs',
          type: 'category',
          color: '#eab308',
          children: [
            { id: 'dp-pwd', label: 'PWD (Public Works Dept.)', type: 'career', color: '#eab308' },
            { id: 'dp-railway-jobs', label: 'Indian Railways', type: 'career', color: '#eab308' },
            { id: 'dp-psu', label: 'PSU Companies', type: 'career', color: '#eab308' },
            { id: 'dp-defence-tech', label: 'Defence (Technical)', type: 'career', color: '#eab308' }
          ]
        },
        {
          id: 'dp-private',
          label: 'Private Sector Opportunities',
          type: 'category',
          color: '#22c55e',
          children: [
            { id: 'dp-manufacturing', label: 'Manufacturing Industry', type: 'career', color: '#22c55e' },
            { id: 'dp-construction', label: 'Construction & Infrastructure', type: 'career', color: '#22c55e' },
            { id: 'dp-it-sector', label: 'IT Sector', type: 'career', color: '#22c55e' },
            { id: 'dp-startup', label: 'Entrepreneurship / Startup', type: 'career', color: '#22c55e' }
          ]
        }
      ]
    },

    // ==========================================
    // 6. ENTRANCE EXAMS
    // ==========================================
    {
      id: 'entrance-exams',
      label: 'Major Entrance Exams',
      fullForm: 'Important Entrance Examinations',
      description: 'All major entrance examinations for various courses and career paths.',
      type: 'category',
      color: '#eab308',
      children: [
        { id: 'exam-mhtcet', label: 'MHT-CET', description: 'Engineering, Pharmacy, Agriculture, etc.', type: 'exam', color: '#eab308' },
        { id: 'exam-jee-main', label: 'JEE Main', description: 'Engineering (National Level)', type: 'exam', color: '#eab308' },
        { id: 'exam-jee-adv', label: 'JEE Advanced', description: 'IIT Admissions', type: 'exam', color: '#eab308' },
        { id: 'exam-neet', label: 'NEET-UG', description: 'MBBS, BDS, BAMS, BHMS, etc.', type: 'exam', color: '#eab308' },
        { id: 'exam-cuet', label: 'CUET-UG', description: 'Central Universities (Various UG Courses)', type: 'exam', color: '#eab308' },
        { id: 'exam-nata', label: 'NATA / JEE (Paper 2)', description: 'Architecture (B.Arch)', type: 'exam', color: '#eab308' },
        { id: 'exam-clat', label: 'CLAT / AILET', description: 'Law (UG Programmes)', type: 'exam', color: '#eab308' },
        { id: 'exam-nchm', label: 'NCHM JEE', description: 'Hotel Management (BHM)', type: 'exam', color: '#eab308' },
        { id: 'exam-nift', label: 'NIFT / UCEED / NID', description: 'Fashion, Design, Creative Courses', type: 'exam', color: '#eab308' },
        { id: 'exam-cat', label: 'CAT / MAT / XAT', description: 'MBA Admissions', type: 'exam', color: '#eab308' },
        { id: 'exam-gate2', label: 'GATE', description: 'M.Tech & PSU Recruitment', type: 'exam', color: '#eab308' },
        { id: 'exam-upsc', label: 'UPSC', description: 'Civil Services (IAS, IPS, IFS)', type: 'exam', color: '#eab308' },
        { id: 'exam-mpsc', label: 'MPSC', description: 'Maharashtra State Services', type: 'exam', color: '#eab308' }
      ]
    },

    // ==========================================
    // 7. EMERGING & FUTURE CAREERS
    // ==========================================
    {
      id: 'emerging-careers',
      label: 'Emerging & Future Careers',
      fullForm: 'Modern & Future-Ready Career Options',
      description: 'AI, Data Science, Cybersecurity, Cloud Computing, Electric Vehicles and other emerging career opportunities.',
      type: 'category',
      color: '#8b5cf6',
      children: [
        { id: 'em-ai', label: 'Artificial Intelligence (AI)', description: 'Machine learning, deep learning, NLP and computer vision.', type: 'career', color: '#8b5cf6' },
        { id: 'em-data-science', label: 'Data Science', description: 'Data analytics, big data, business intelligence and predictive modelling.', type: 'career', color: '#8b5cf6' },
        { id: 'em-cybersecurity', label: 'Cybersecurity', description: 'Network security, ethical hacking, digital forensics and information security.', type: 'career', color: '#8b5cf6' },
        { id: 'em-cloud', label: 'Cloud Computing', description: 'AWS, Azure, Google Cloud — cloud architecture and DevOps.', type: 'career', color: '#8b5cf6' },
        { id: 'em-software', label: 'Software Development', description: 'Web development, mobile apps, full-stack development.', type: 'career', color: '#8b5cf6' },
        { id: 'em-uiux', label: 'UI/UX Design', description: 'User interface and experience design, product design.', type: 'career', color: '#8b5cf6' },
        { id: 'em-animation', label: 'Animation & VFX', description: '3D animation, visual effects, motion graphics and game art.', type: 'career', color: '#8b5cf6' },
        { id: 'em-game-dev', label: 'Game Development', description: 'Video game design, development and programming.', type: 'career', color: '#8b5cf6' },
        { id: 'em-robotics', label: 'Robotics & Automation', description: 'Industrial robots, IoT, embedded systems and automation.', type: 'career', color: '#8b5cf6' },
        { id: 'em-ev', label: 'Electric Vehicles (EV)', description: 'EV technology, battery systems and sustainable transport.', type: 'career', color: '#8b5cf6' },
        { id: 'em-renewable', label: 'Renewable Energy', description: 'Solar, wind, hydrogen and sustainable energy systems.', type: 'career', color: '#8b5cf6' },
        { id: 'em-content', label: 'Content Creation', description: 'YouTube, blogging, podcasting and digital content.', type: 'career', color: '#8b5cf6' },
        { id: 'em-blockchain', label: 'Blockchain & Web3', description: 'Decentralized applications, smart contracts and crypto technology.', type: 'career', color: '#8b5cf6' }
      ]
    }
  ]
};

export default careerData;

// Helper: flatten tree for search
export function flattenTree(node, parent = null, path = []) {
  const currentPath = [...path, { id: node.id, label: node.label }];
  const result = [{
    ...node,
    parentId: parent?.id || null,
    path: currentPath,
    searchText: [
      node.label,
      node.fullForm,
      node.description,
      ...(node.entranceExams || [])
    ].filter(Boolean).join(' ').toLowerCase()
  }];

  if (node.children) {
    for (const child of node.children) {
      result.push(...flattenTree(child, node, currentPath));
    }
  }

  return result;
}

// Get all ancestor IDs for a node
export function getAncestorIds(flatNodes, nodeId) {
  const node = flatNodes.find(n => n.id === nodeId);
  if (!node) return [];
  return node.path.map(p => p.id).filter(id => id !== nodeId);
}

// Find node by ID in tree
export function findNodeById(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
  }
  return null;
}
