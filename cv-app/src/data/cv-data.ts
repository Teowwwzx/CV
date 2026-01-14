import { image } from "framer-motion/client";

export const cvData = {
  personalInfo: {
    name: "Teow Zhen Xiang",
    role: "IT (Fintech) Student | Aspiring DevOps & Full Stack Developer",
    bio: "Hello, I'm an IT (Fintech) student and a self-motivated person that like to explore different knowledge. Also, passionate in solving problem with teamwork with a track records of organizing successful high-quality!",
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
      { name: "JavaScript", rating: 3.0 },
      { name: "Database Schema", rating: 4.5 },
    ],
    "Full Stack": [
      { name: "Flask, FastAPI (Python)", rating: 3.5 },
      { name: "Laravel (PHP)", rating: 3.5 },
      { name: "Bootstrap & Tailwind", rating: 3.5 },
      { name: "Next.js", rating: 3.5 },
      { name: "Solidity", rating: 3 },
    ],
    DevOps: [
      { name: "AWS, Digital Ocean", rating: 3.5 },
      { name: "Docker, Linux, WSL", rating: 4 },
    ],
    "AI Tools": [
      { name: "Trae, Antigravity, Cur.., Claude.., Wind..", rating: 4.5 },
      { name: "Google AI Ecosystem, N8N", rating: 4 },
    ],
    Others: [
      {
        name: "Figma, Canva",
        rating: 4,
        link: "https://www.figma.com/design/oQZNG9cjgZtgqkTLyzC6vE/POS-LAMBAT-POS-System?node-id=0-1&t=UTdmv2k9At7kPKtJ-1",
      },
      { name: "Microsoft Office", rating: 4 },
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
      details: [
        "Develop a Membership System using Laravel, Bootstrap and Tailwind.",
      ],
      hasDetails: true,
    },
  ],
  projects: [
    {
      title: "FYP - Event Management Platform (I Love AI)",
      year: "2026",
      description: "Almost a production-ready project with Admin Dashboard. Fully handmade database schema.",
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
      title: "Diploma Intern Assessment in 2023 (No AI)",
      year: "2023",
      description: "Fully Handmade with pure HTML & CSS",
      tech: ["HTML5", "CSS3"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/fintech.png",
      link: "https://github.com/teowzx1/Fintech-Landing-Page",
    },
    {
      title: "Simple Membership System",
      year: "202x",
      description: "Production Project Before",
      tech: ["Flask"],
      previewUrl: "https://affiliateloginsystem-production.up.railway.app/admin/dashboard",
      image: "/affiliate.png",
      link: "https://affiliateloginsystem-production.up.railway.app/admin/dashboard",
      credentials: {
        email: " admin@gmail.com or usertest@gmail.com",
        password: "atoz@123 or 123123",
      },
    },
    {
      title: "Payroll Management System",
      year: "2026",
      description: "CLI Only, No GUI",
      tech: ["Java"],
      previewUrl: "https://github.com/Teowwwzx/DCOMToSchool.git",
      image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://github.com/Teowwwzx/DCOMToSchool.git",
    },
    
    {
      title: "Decentralized Supply Chain Marketplaces",
      year: "2026",
      description: "Bad Project",
      tech: ["Next.js", "Solidity"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://github.com/teowzx1/Decentralized-Supply-Chain-Marketplaces",
    },
    {
      title: "Learning Platform",
      year: "2025",
      description: "Bad Project",
      tech: ["ASP.NET", "Bootstrap"],
      previewUrl: "/Fintech/OVERWATCH/index.html",
      image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://github.com/teowzx1/Learning-Platform",
    },
    
  ],
  leadership: [
    {
      name: "AI x Blockchain Panel Discussion",
      year: "2025",
      tags: ["leadership", "marketing"],
      description:
        "Handle Find Speaker & Business & Sponsor People, Collaborate with Clubs, Marketing, All Paperwork like Emails & Speech, Event Flow & Topic",
      // image: "/Fintech/OVERWATCH/img/trading-indices.png",
      link: "https://www.instagram.com/reel/DNDH1mFzKV9/",
      video: "https://www.instagram.com/reel/DNDH1mFzKV9/",
    },
    { name: "MAFC", year: "2023", tags: ["teamwork"] },
    {
      name: "APU Championship",
      year: "2022",
      tags: ["planning team", "media"],
      description:
        "Handle Design & Video Editing, Marketing, Integrate Pick & Ban System (Github), Find Commentator ",
      video: "/obs-stream.mp4",
      link: "https://www.instagram.com/tv/CdC42Rqlz1A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    { 
      name: "Malaysia 24 Festive Drums National Championship",
      year: "2019 & 2024",
      description: "No money, no support, and no path to victory—but we had heart. I led our small team from a Sekolah Kebangsaan to fight against the Chinese Independent High School and win a Silver Medal. Competing against the best schools with nothing but our passion was a struggle, but winning was a miracle we created together.",
      tags: ["leadership", "creative"],
      image: "/24-festive-drum-2022.jpg",
      link: "https://youtu.be/VyPBwZTXmTs?si=LpWeSt0XQtLRK4-d&t=63",
      media: [
        "/24-festive-drum-2022.jpg",
        "https://youtu.be/VyPBwZTXmTs?si=LpWeSt0XQtLRK4-d&t=63",
      ],
    },
    { name: "JB Drums Holiday Camp", 
      year: "2022",
      description:
        "Plan Activities",
      tags: ["creative", "teamwork"] 
    }
  ],
  goals: [
    {
      name: "Web 2 , AI Development Knowledge",
      description: "Advance Web 2 Development and AI: Fine Tuning",
      progress: 55,
    },
    {
      name: "Web 3, Financial, Investment Knowledge",
      description: "Dapp on Public Chain, Quantitative & Scripts of Market",
      progress: 20,
    },
    {
      name: "Mobile Development Knowledge",
      description: "Flutter & Swift",
      progress: 15,
    },
  ],
};
