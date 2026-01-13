"use client";

import { cvData } from "@/data/cv-data";
import { Mail, Phone, Globe, MapPin, ExternalLink, ChevronRight, Award, Briefcase, Code, Image as ImageIcon, FileText, Github, MessageCircle, Layers, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import WebPreviewModal from "@/components/WebPreviewModal";
import LeadershipModal from "@/components/LeadershipModal";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  previewUrl: string;
  image?: string;
  link?: string;
};

type Skill = {
  name: string;
  rating: number;
  link?: string;
  image?: string;
  max?: number;
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  const [galleryInstance, setGalleryInstance] = useState(0);

  const [webPreviewOpen, setWebPreviewOpen] = useState(false);
  const [webPreviewUrl, setWebPreviewUrl] = useState("");
  const [webPreviewTitle, setWebPreviewTitle] = useState("");
  const [webPreviewInstance, setWebPreviewInstance] = useState(0);

  const [leadershipModalOpen, setLeadershipModalOpen] = useState(false);

  const projects = cvData.projects as unknown as Project[];
  const expertiseEntries = Object.entries(cvData.expertise) as [string, Skill[]][];

  const whatsappPhoneDigits = cvData.personalInfo.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappPhoneDigits}?text=${encodeURIComponent(
    "Hi Teow, I found your CV and would like to connect."
  )}`;

  const openWebPreview = (url: string, title: string) => {
    setWebPreviewUrl(url);
    setWebPreviewTitle(title);
    setWebPreviewOpen(true);
    setWebPreviewInstance((prev) => prev + 1);
  };

  const openGallery = (images: string[], index: number = 0, title: string = "") => {
    if (!images || images.length === 0) return;
    setCurrentImages(images);
    setInitialImageIndex(index);
    setModalTitle(title);
    setModalOpen(true);
    setGalleryInstance((prev) => prev + 1);
  };

  const openProjectPreview = (url: string, title: string) => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes("github.com")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    openWebPreview(url, title);
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-dot-pattern text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="bg-yellow-100 border-b border-yellow-200 text-yellow-800 px-4 py-3 text-center sticky top-0 z-50 shadow-sm">
        <p className="text-sm md:text-base font-medium flex items-center justify-center gap-2">
           🚧 <span className="font-bold">Work in Progress:</span> This CV is currently being updated.
        </p>
      </div>
      <ImageGalleryModal
        key={galleryInstance}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={currentImages}
        initialIndex={initialImageIndex}
        title={modalTitle}
      />
      <WebPreviewModal
        key={webPreviewInstance}
        isOpen={webPreviewOpen}
        onClose={() => setWebPreviewOpen(false)}
        url={webPreviewUrl}
        title={webPreviewTitle}
      />
      <LeadershipModal
        isOpen={leadershipModalOpen}
        onClose={() => setLeadershipModalOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header / Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 items-start justify-between mb-16"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
              {cvData.personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
              {cvData.personalInfo.role}
            </p>
            <p className="text-slate-600 leading-relaxed max-w-2xl text-lg">
              {cvData.personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors shadow-sm"
              >
                <MessageCircle size={16} /> WhatsApp Me
              </a>
              <a
                href={`https://${cvData.personalInfo.website}`}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Globe size={16} /> Portfolio
              </a>
              <a
                href={cvData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-3 text-sm text-slate-500 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              <span>{cvData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              <span>{cvData.personalInfo.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-500 mt-1" />
              <div className="flex flex-col">
                <span>{cvData.personalInfo.address.rent}</span>
                <span className="text-xs text-slate-400">Current</span>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Experience Section */}
            <motion.section variants={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Briefcase size={120} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Briefcase className="text-blue-600" size={24} /> Experience
              </h2>

              <div className="relative border-l-2 border-slate-100 ml-3 space-y-12">
                {cvData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-110 transition-transform" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{exp.year} • {exp.duration}</span>
                    </div>

                    <h4 className="text-lg text-blue-600 font-medium mb-4">{exp.company}</h4>

                    {/* Replaced Bullet Points with Images */}
                    {exp.images && exp.images.length > 0 ? (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {exp.images.slice(0, 4).map((img, idx) => {
                          if (!img) return null;
                          const isPdf = img.toLowerCase().endsWith('.pdf');
                          const isVideo = img.toLowerCase().endsWith('.mp4');
                          return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer rounded-lg overflow-hidden border border-slate-200 shadow-sm w-24 h-24 relative flex items-center justify-center bg-slate-50"
                            onClick={() => {
                              if (isPdf) {
                                window.open(img, '_blank');
                              } else {
                                openGallery(exp.images!, idx, exp.role);
                              }
                            }}
                          >
                            {isPdf ? (
                                <div className="flex flex-col items-center gap-1 text-slate-500 p-2 text-center">
                                  <FileText size={24} className="text-red-500" />
                                  <span className="text-[10px] leading-tight line-clamp-2">PDF Document</span>
                                </div>
                            ) : isVideo ? (
                                <div className="relative w-full h-full">
                                  <video 
                                    src={img} 
                                    className="w-full h-full object-cover"
                                    muted
                                    playsInline
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                                    </div>
                                  </div>
                                </div>
                            ) : (
                                <img 
                                    src={img} 
                                    alt={`${exp.company} work ${idx + 1}`} 
                                    className="w-full h-full object-cover"
                                />
                            )}
                          </motion.div>
                        )})}
                      </div>
                    ) : (
                       // Fallback to details if no images (though requirement said remove bullet points, kept for legacy items without images)
                       exp.details && (
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((detail, idx) => (
                            <li key={idx} className="text-slate-600 leading-relaxed flex items-start gap-2">
                              <span className="mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            {cvData.projects && cvData.projects.length > 0 && (
              <motion.section variants={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Monitor size={120} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <Layers className="text-blue-600" size={24} /> Featured Projects
                </h2>

                <div className="grid grid-cols-1 gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Project Image / Thumbnail */}
                        <div 
                          className="w-full md:w-2/5 h-48 md:h-auto bg-slate-200 relative cursor-pointer overflow-hidden"
                          onClick={() => openProjectPreview(project.previewUrl, project.title)}
                        >
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-slate-400">
                              <Monitor size={48} />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                              View Live Demo
                            </span>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </h3>
                              <span className="text-sm font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-100">
                                {project.year}
                              </span>
                            </div>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Leadership Section */}
            <motion.section variants={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} /> Leadership & Activities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cvData.leadership.slice(0, 4).map((activity, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100">
                    <div className="font-semibold text-slate-800">{activity.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{activity.year}</div>
                    {activity.role && <div className="text-xs font-medium text-blue-600 mt-2 uppercase tracking-wide">{activity.role}</div>}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={() => setLeadershipModalOpen(true)}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View All Activities <ChevronRight size={16} />
                </button>
              </div>
            </motion.section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">


            {/* Expertise */}
            <motion.section variants={item} className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Code size={100} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                <Code className="text-blue-400" size={20} /> Technical Expertise
              </h2>
              <p className="text-sm text-slate-300 mb-6 relative z-10">With AI nothing is impossible</p>

              <div className="space-y-8 relative z-10">
                {expertiseEntries.map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[...skills].sort((a, b) => b.rating - a.rating).map((skill) => (
                        <div
                          key={skill.name}
                          onClick={() => {
                            if (skill.link) {
                                window.open(skill.link, '_blank');
                            } else if (skill.image) {
                                openGallery([skill.image], 0, skill.name);
                            }
                          }}
                          className={cn(
                            "flex flex-col gap-2 p-3 bg-slate-800 rounded-xl border border-slate-700 transition-all",
                            (skill.image || skill.link) ? "cursor-pointer hover:border-blue-500 hover:bg-slate-750 hover:shadow-lg hover:shadow-blue-900/20" : "cursor-default"
                          )}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <span className="text-sm font-medium text-slate-200 leading-tight">{skill.name}</span>
                            {skill.image && <ImageIcon size={14} className="text-blue-400 shrink-0 mt-0.5" />}
                            {skill.link && <ExternalLink size={14} className="text-blue-400 shrink-0 mt-0.5" />}
                          </div>
                          
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(skill.rating / 5) * 100}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-blue-500 rounded-full"
                              />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 min-w-[24px] text-right">{skill.rating}/5</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
            

          </div>
        </motion.div>

        <footer className="mt-20 text-center text-slate-400 text-sm pb-8">
          <p>© {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
