export const cvData = {
  personalInfo: {
    name: "Teow Zhen Xiang",
    role: "IT (Fintech) Student | Aspiring DevOps & Full Stack Developer",
    bio: "Welcome to my CV! I like to explore different knowledge in terms of IT or Financial, and also really excited to show the project that I have done below!",
    phone: "+601110662491",
    website: "cv.thedzx.site",
    github: "https://github.com/Teowwwzx",
    email: "teowzx1@gmail.com",
    address: {
      rent: "Bukit Jalil, Kuala Lumpur (Rent House)",
      home: "Iskandar Puteri, Johor (Home)",
    },
    image: "/file.jpg",
  },
  education: [
    {
      institution: "Asia Pacific University",
      period: "2024 - 2026",
      degree: "Degree in IT (Financial Technology)",
    },
    {
      institution: "Asia Pacific University",
      period: "2021 - 2024",
      degree: "Diploma in IT (Software Engineering)",
    },
  ],
  expertise: {
    Foundation: [
      {
        name: "HTML, CSS",
        rating: 4.5,
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      { name: "Database Schema", rating: 4 },
      { name: "JavaScript", rating: 3.0 },
    ],
    "Full Stack": [
      { name: "Bootstrap & Tailwind & SCSS", rating: 4 },
      { name: "Flask, FastAPI (Python)", rating: 3.5 },
      { name: "Laravel (PHP)", rating: 3.5 },
      { name: "Next.js, Vue", rating: 3 },
      { name: "Solidity", rating: 3 },
    ],
    DevOps: [
      { name: "Docker, Linux, WSL", rating: 3.5 },
      { name: "AWS, Digital Ocean", rating: 3 },
      { name: "NGINX, Git", rating: 3 },
    ],
    "AI Tools": [
      { name: "AI IDEs, AI Agent Skills", rating: 4 },
      { name: "N8N", rating: 4 },
    ],
    Others: [
      {
        name: "Figma, Canva, OBS, PR, JianYing",
        rating: 4.5,
        link: "https://www.figma.com/design/oQZNG9cjgZtgqkTLyzC6vE/POS-LAMBAT-POS-System?node-id=0-1&t=UTdmv2k9At7kPKtJ-1",
      },
      { name: "Microsoft Office", rating: 3.5 },
    ],
  },
  experience: [
    {
      id: "alitec-2025",
      year: "2025",
      duration: "4 Months",
      company: "Alitec Solutions Sdn Bhd",
      role: "DevOps Degree Intern",
      images: ["/degree-rating-1.png", "/degree-rating-2.png"],
      learnedSkills: ["Python", "AWS, CloudPepper, Digital Ocean", "Docker", "Linux, WSL", "NGINX", "N8N, CheckMK, EvolutionAPI"],
      details: [
        "Manage Cloud Servers such as AWS, Digital Ocean and Cloudpepper.",
      ],
      hasDetails: true,
    },
    {
      id: "tesla-2024",
      year: "2024",
      duration: "2 Months",
      company: "Mid Valley Southkey",
      role: "Tesla Promoter",
      images: ["/tesla.mp4"],
      learnedSkills: ["Improve English Speaking xD"],
      details: [
        "Promote Tesla and Conducted Customer Surveys (Achieved Full KPI)",
      ],
    },
    {
      id: "techtics-2023",
      year: "2023",
      duration: "2 Months",
      company: "Techtics Solutions Sdn Bhd",
      role: "Full Stack Diploma Intern",
      images: ["/diploma-rating-1.png"],
      learnedSkills: ["Vue & Laravel (MVC)", "Bootstrap, Tailwind CSS", "Email Queue", "OAuth & 2FA", "Git", "Hardhat & Solidity", "Web 3"],
      details: [
        "Develop a Membership System using Laravel, Bootstrap and Tailwind.",
      ],
      hasDetails: true,
    },
  ],
  projects: [
    {
      title: "FYP - Bridge the Gap of Student-Industry Expert",
      year: "2026",
      description: "Nearly a production grade project with Admin Dashboard (I❤️AI) but fully handmade database schema. This is a platform that allows student to book expert speakers efficiently and systematically without cold email and messy flow. This idea was inspired from my AI x BC event xD.",
      tech: [
        "Next.js",
        "FastAPI",
        "AI Integration",
        "GetStream",
        "Cloudinary",
        "Google OAuth",
        "Place API",
      ],
      previewUrl: "https://thedzx.site",
      image: "/atas-fyp.png",
      link: "https://thedzx.site",
      credentials: {
        email: "student@gmail.com or expert@gmail.com or admin@gmail.com",
        password: "123123",
      },
    },
    {
      title: "Simple Membership System",
      year: "2024",
      description: "Production Project Before. This system allow member register with a leader referral code and ranking system based on the number of members they have.",
      tech: ["Flask", "Bootstrap", "Resend"],
      previewUrl: "https://affiliateloginsystem-production.up.railway.app/admin/dashboard",
      image: "/affiliate.png",
      link: "https://affiliateloginsystem-production.up.railway.app/admin/dashboard",
      credentials: {
        email: " admin@gmail.com or usertest@gmail.com",
        password: "atoz@123 or 123123",
      },
    },
    {
      title: "xxx Membership System (Diploma Intern)",
      year: "2023",
      description: "Production Project. Intern?🙂‍↔️ Full Time😏",
      tech: ["Tech Stacks (Web 2) Mentioned Above"],
      previewUrl: "https://cv.thedzx.site",
      // image: "/fintech.png",
      link: "https://thedzx.site",

    },
    {
      title: "Static Page (Diploma Intern Assestment",
      year: "2023",
      description: "Fully Handmade with pure HTML & CSS (0️⃣ AI)",
      tech: ["HTML", "CSS"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/fintech.png",
      link: "https://github.com/teowzx1/Fintech-Landing-Page",
    },
    {
      title: "Payroll Management System",
      year: "2025",
      description: "CLI Only, No GUI. Simple CRUD and payroll calculation.",
      tech: ["Java", "AWS (EC2)", "Neon", "Multithreading, Serialization, Distributed System"],
      previewUrl: "https://github.com/Teowwwzx/DCOMToSchool.git",
      image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://github.com/Teowwwzx/DCOMToSchool.git",
    },
    
    {
      title: "Decentralized Supply Chain Marketplaces",
      year: "2025",
      description: "School-Grade Project (Bad)",
      tech: ["Next.js", "Solidity", "MetaMask"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/bcd-1.png",
      link: "https://github.com/teowzx1/Decentralized-Supply-Chain-Marketplaces",
    },
    {
      title: "Learning Platform & Medical Center System",
      year: "2023",
      description: "School-Grade Project (Bad)",
      tech: ["ASP.NET", "Bootstrap", "PHP", "Stripe Payment"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://github.com/teowzx1/Learning-Platform",
    },
  ],
  leadership: [
    {
      name: "AI x Blockchain Panel Discussion",
      year: "2025",
      tags: ["Marketing to B & C", "Event Flow, Topic, Discussion, Moderator Speech Planning", "Speaker & Sponsor Communication", "Clubs Collaboration", "Mail Merge (YAMM)"],
      description:
        "Secured 1+2 Speakers & 10+ Business peoples & 1 Sponsor with a total of 100+ participants. Collaborated with Blockchain, Ai, Enterprise, SEGI Clubs. Overall very good feedback but ups and downs behind the scene due to the direction conflict between leader and me 😑",
      link: "https://www.instagram.com/reel/DNDH1mFzKV9/",
      video: "/ch.mp4",
    },
    {
      name: "Moon Autumn Festival in APU 2023",
      year: "2023",
      description: "Afternoon open-world murder mystery game with F&B and Entertainment booths with hidden clues, Night stage play to continue the morning's storyline. A super heavy workload but the team managed to make it happen in the historical club event of APU. Love the passion and the creativity of the team ❤️",
      tags: ["Booth Architecture (S23 Ultra)", "Video Editing (JianYing)", "Maps (DUNGEONFOG)"],
      images: ["/Booths/2.jpg","/Booths/3.jpg", "/Booths/map-apu-venue.jpeg", ],
      video: "/mafc.mp4",
    },
    {
      name: "APU Championship 2022",
      year: "2022",
      tags: ["Creative Design (Canva)", "Video Editing (PR)", "Broadcast (OBS + Twitch)", "Marketing", "Commentator Communication", "Integrate Pick & Ban System (Github)"],
      description:
        "A profesisonal online competition with highest quality in term of participants (100+), prize pool, graphic, pick and ban system UI, and commentator from Indonesia compared to same batch even club. Feel proud 😎",
      video: "/obs-stream.mp4",
      link: "https://www.instagram.com/tv/CdC42Rqlz1A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    { 
      name: "Malaysia 24 Festive Drums National Championship",
      year: "2019 & 2024",
      description: "No money, no support, and no path to victory—but we had heart. As one of the senior, led the team from Sekolah Menengah Kebangsaan to fight against the Chinese Independent High School. A miracle, the team created together and won the silver medal with huge support from teacher & coach ❤️",
      tags: ["Leadership", "Creative"],
      image: "/24-festive-drum-2022.jpg",
      link: "https://youtu.be/VyPBwZTXmTs?si=LpWeSt0XQtLRK4-d&t=63",
      media: [
        "/24-festive-drum-2022.jpg",
        "https://youtu.be/VyPBwZTXmTs?si=LpWeSt0XQtLRK4-d&t=63",
      ],
    },
    { 
      name: "JB Drums Holiday Camp & Volunteer 618 Drums", 
      year: "2022 & 2022",
      description:
        "Plan Game Activities",
      tags: ["Teamwork", "Creative"],
      link: "https://youtu.be/QBsrsC2K9cY?si=siToXNh0LLRb8XIo",
      image: "/jbdrums.jpg",
    }
  ],
  other: [
    {
      name: "Night Market & Small Stall",
      year: "2025 & 2025",
      description: "Making dessert is not my strength xD. Great numbers during night market so decided to rent a small stall and hire part-time staff. Morning intern, night go stall, no time to develop new flavour and QC. After 3 months, ended up this business with great experience (At least I can make desssert now)😬",
      tags: ["Dessert (Ice Cream Mochi)", "Mathca Oreo (Damm nice)", "Small Business"],
      images: ["/mochi.png", "/ksl-stall.jpeg", "/ksl.jpeg"],
    },
  ],
  goals: [
    {
      name: "Overhaul FYP with Tool & Community (Q1)",
      description:
        "Learn & Deliver an advance production grade FYP in 1 month with the help of AI Agent.",
      categories: [
        {
          label: "System Design & Architecture",
          items: ["Monorepo", "Redis", "Celery Worker", "RabbitMQ", "EDA", "NGINX"],
        },
        {
          label: "Backend",
          items: ["FastAPI async APIs", "WebSocket"],
        },
        {
          label: "AI",
          items: ["Vector Embedding, RAG"],
        },
        {
          label: "DevOps",
          items: ["Docker", "CI/CD", "DigitalOcean + Vercel hosting"],
        },
        {
          label: "3rd Party",
          items: ["Mailgun / SendGrid"],
        }
      ],
      progress: 45,
    },
    {
      name: "Web 3, Financial & Investment Knowledge (Q2)",
      description: "Dapp on Public Chain, Quantitative Script",
      progress: 20,
    },
    {
      name: "Mobile Development (Q3)",
      description: "Flutter & Swift",
      progress: 20,
    },
  ],
};
