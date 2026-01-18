"use client";

import { cvData } from "@/data/cv-data";
import Image from "next/image";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Layers,
  Award,
  Briefcase,
  Monitor,
  FileText,
  Instagram,
  Image as ImageIcon,
  MessageCircle
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import WebPreviewModal from "@/components/WebPreviewModal";

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
  credentials?: {
    email: string;
    password: string;
  };
};

type Skill = {
  name: string;
  rating: number;
  link?: string;
  image?: string;
  max?: number;
};

type LeadershipActivity = {
  name: string;
  year: string;
  role?: string;
  description?: string;
  image?: string;
  images?: string[];
  media?: string[];
  video?: string;
  link?: string;
  tags?: string[];
};

type Experience = {
  id: string;
  year: string;
  duration: string;
  company: string;
  role: string;
  images?: string[];
  details?: string[];
  learnedSkills?: string[];
};

type GoalCategory = {
  label: string;
  items: string[];
};

type Goal = {
  name: string;
  description: string;
  categories?: GoalCategory[];
  progress: number;
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

  const expertiseRef = useRef<HTMLElement | null>(null);
  const goalsRef = useRef<HTMLElement | null>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.2 });
  const goalsInView = useInView(goalsRef, { once: true, amount: 0.2 });

  const projects = cvData.projects as unknown as Project[];
  const expertiseEntries = Object.entries(cvData.expertise) as [string, Skill[]][];
  const leadershipEntries = cvData.leadership as unknown as LeadershipActivity[];
  const goals = cvData.goals as unknown as Goal[];
  const experience = cvData.experience as unknown as Experience[];

  const whatsappPhoneDigits = cvData.personalInfo.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappPhoneDigits}?text=${encodeURIComponent(
    "Hi Teow, I found your CV and would like to connect."
  )}`;

  const openWebPreview = (url: string, title: string) => {
    setWebPreviewUrl(url);
    setWebPreviewTitle(title);
    setWebPreviewOpen(true);
    if (url !== webPreviewUrl) {
      setWebPreviewInstance((prev) => prev + 1);
    }
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
           🚧 <span className="font-bold">Website In Progress</span>
        </p>
      </div>
      <ImageGalleryModal
        key={`gallery-${galleryInstance}`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={currentImages}
        initialIndex={initialImageIndex}
        title={modalTitle}
      />
      <WebPreviewModal
        key={`web-${webPreviewInstance}`}
        isOpen={webPreviewOpen}
        onClose={() => setWebPreviewOpen(false)}
        url={webPreviewUrl}
        title={webPreviewTitle}
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
              { <a
                href={`https://www.16personalities.com/ch/intj-人格`}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400 text-white-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
              Personality (INTJ-A)
              </a>
              }
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
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-110 transition-transform" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{exp.year} • {exp.duration}</span>
                    </div>

                    <h4 className="text-lg text-blue-600 font-medium mb-4">{exp.company}</h4>
                    {exp.learnedSkills && exp.learnedSkills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.learnedSkills.map((skill) => (
                          <span
                            key={`${exp.id}-${skill}`}
                            className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

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
                                <Image
                                  src={img}
                                  alt={`${exp.company} work ${idx + 1}`}
                                  fill
                                  sizes="96px"
                                  className="object-cover"
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
                  {projects.map((project, index) => {
                    const isBadProject = project.title.toLowerCase().includes("bad project");
                    return (
                    <div
                      key={index}
                      className={cn(
                        "group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300",
                        isBadProject && "hover:shadow-sm"
                      )}
                    >
                      <div className={cn("flex flex-col md:flex-row h-full", isBadProject && "md:items-center")}>
                        {/* Project Image / Thumbnail */}
                        <div 
                          className={cn(
                            "w-full md:w-2/5 h-48 md:h-auto bg-slate-200 relative cursor-pointer overflow-hidden",
                            isBadProject && "md:w-1/3 h-32 md:h-28"
                          )}
                          onClick={() => openProjectPreview(project.previewUrl, project.title)}
                        >
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-110 transform-gpu"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-slate-400">
                              <Monitor size={48} />
                            </div>
                          )}
                          <div className={cn(
                            "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none",
                            isBadProject && "hidden"
                          )}>
                            <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform transform-gpu">
                              View Live Demo
                            </span>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className={cn("flex-1 p-6 flex flex-col justify-between", isBadProject && "p-4")}>
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className={cn(
                                "font-bold text-slate-800 group-hover:text-blue-600 transition-colors",
                                isBadProject ? "text-lg" : "text-xl"
                              )}>
                                {project.title}
                              </h3>
                              <span className={cn(
                                "text-sm font-medium bg-slate-600 text-white px-2 py-1 rounded-md border border-slate-100 shrink-0",
                                isBadProject && "text-xs"
                              )}>
                                {project.year}
                              </span>
                            </div>
                            {!isBadProject && project.description && (
                              <p className="text-slate-600 mb-4 leading-relaxed">
                                {project.description}
                              </p>
                            )}
                            {project.credentials && (
                              <div className="text-xs text-slate-600 bg-white border border-slate-200 rounded-lg p-3 mb-4">
                                <div className="font-semibold text-slate-800 mb-1">Demo Credentials</div>
                                <div className="font-mono break-all">
                                  {project.credentials.email} / {project.credentials.password}
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="text-xs font-semibold text-slate-100 bg-indigo-600 px-2.5 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                            {isBadProject && (
                              <span className="text-xs font-medium text-slate-600 bg-slate-200 px-2.5 py-1 rounded-full">
                                Bad Project
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              </motion.section>
            )}

            {/* Leadership Section */}
            <motion.section variants={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} /> Problem Solving & Leadership
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {leadershipEntries.slice(0, 4).map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100"
                  >
                    <div className="flex items-start gap-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 text-lg leading-snug">{activity.name}</div>
                            <div className="text-sm text-slate-500 mt-1">{activity.year}</div>
                          </div>
                        </div>
                        {activity.tags?.length ? (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {activity.tags.map((tag) => (
                              <span key={tag} className="text-[12px] font-semibold text-white bg-pink-400 border border-slate-200 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        {activity.description ? (
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                            {activity.description}
                          </p>
                        ) : null}
                        {(() => {
                          const rawMedia = (
                            activity.media?.length
                              ? activity.media
                              : [
                                  ...(activity.images ?? []),
                                  activity.image,
                                  activity.video,
                                  activity.link,
                                ]
                          ).filter(Boolean) as string[];

                          const media = Array.from(new Set(rawMedia));
                          if (!media.length) return null;

                          const items = media.map((url) => {
                            const lower = url.toLowerCase();
                            const isInstagram = lower.includes("instagram.com");
                            const isYoutube = lower.includes("youtu.be") || lower.includes("youtube.com");
                            const isPdf = lower.endsWith(".pdf");
                            const isVideo = lower.endsWith(".mp4");
                            const isExternal = /^https?:\/\//i.test(url);
                            const kind: "instagram" | "youtube" | "pdf" | "video" | "image" | "link" =
                              isInstagram
                                ? "instagram"
                                : isYoutube
                                  ? "youtube"
                                  : isPdf
                                    ? "pdf"
                                    : isVideo
                                      ? "video"
                                      : isExternal
                                        ? "link"
                                        : "image";
                            return { url, kind };
                          });

                          const galleryMedia = items
                            .filter((item) => item.kind === "image" || item.kind === "video")
                            .map((item) => item.url);

                          const instagramThumbUrl = items.find((item) => item.kind === "image")?.url;

                          return (
                            <div className="flex flex-wrap gap-3 mt-4">
                              {items.slice(0, 4).map((item, itemIndex) => {
                                const onClick = () => {
                                  if (item.kind === "instagram" || item.kind === "youtube" || item.kind === "link" || item.kind === "pdf") {
                                    window.open(item.url, "_blank", "noopener,noreferrer");
                                    return;
                                  }
                                  const galleryIndex = galleryMedia.indexOf(item.url);
                                  if (galleryIndex >= 0) openGallery(galleryMedia, galleryIndex, activity.name);
                                };

                                return (
                                  <motion.div
                                    key={`${item.url}-${itemIndex}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClick}
                                    className="cursor-pointer rounded-lg overflow-hidden border border-slate-200 shadow-sm w-24 h-24 relative flex items-center justify-center bg-slate-50"
                                  >
                                    {item.kind === "image" ? (
                                      <Image src={item.url} alt="" fill sizes="96px" className="object-cover" />
                                    ) : item.kind === "video" ? (
                                      <div className="relative w-full h-full">
                                        <video src={item.url} className="w-full h-full object-cover" muted playsInline />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                          <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                                          </div>
                                        </div>
                                      </div>
                                    ) : item.kind === "instagram" ? (
                                      instagramThumbUrl ? (
                                        <div className="relative w-full h-full">
                                          <Image src={instagramThumbUrl} alt="" fill sizes="96px" className="object-cover" />
                                          <div className="absolute inset-0 bg-black/10" />
                                          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white">
                                            <Instagram size={18} />
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white">
                                          <Instagram size={20} />
                                        </div>
                                      )
                                    ) : item.kind === "youtube" ? (
                                      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white">
                                        <div className="flex flex-col items-center gap-1 text-center px-2">
                                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                          </div>
                                          <span className="text-[10px] font-semibold leading-tight">YouTube</span>
                                        </div>
                                      </div>
                                    ) : item.kind === "pdf" ? (
                                      <div className="flex flex-col items-center gap-1 text-slate-500 p-2 text-center">
                                        <FileText size={22} className="text-red-500" />
                                        <span className="text-[10px] leading-tight line-clamp-2">PDF</span>
                                      </div>
                                    ) : (
                                      <div className="flex flex-col items-center gap-1 text-slate-600 p-2 text-center">
                                        <ExternalLink size={18} className="text-slate-500" />
                                        <span className="text-[10px] leading-tight line-clamp-2">Link</span>
                                      </div>
                                    )}
                                  </motion.div>
                                );
                              })}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">


            {/* Expertise */}
            <motion.section ref={expertiseRef} variants={item} className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
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
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: expertiseInView ? skill.rating / 5 : 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-blue-500 rounded-full origin-left"
                                style={{ width: "100%" }}
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

            {/* A Goals Section - Compleness the knowledge of Web 2 Development including Mobile: Flutter, Ios, etc / Web 3: Dapp on public chain, Scripts of Market Marker */}
            {goals && goals.length > 0 && (
              <motion.section ref={goalsRef} variants={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="text-yellow-600" size={20} /> Goals
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {goals.map((goal, idx) => (
                    <div
                      key={`${goal.name}-${idx}`}
                      className="rounded-2xl border border-amber-200 shadow-sm overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-200 p-6">
                        <h3 className="text-lg font-bold text-amber-900 mb-1">{goal.name}</h3>
                        <p className="text-amber-800 text-sm">{goal.description}</p>
                        {goal.categories && goal.categories.length > 0 && (
                          <div className="mt-4 grid gap-3">
                            {goal.categories.map((category) => (
                              <div key={category.label} className="flex flex-col gap-2">
                                <div className="text-[11px] font-bold tracking-wide text-amber-900/70 uppercase">
                                  {category.label}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {category.items.map((text) => (
                                    <span
                                      key={`${category.label}-${text}`}
                                      className="text-xs px-2.5 py-1 rounded-full bg-amber-600 border-amber-200 text-white"
                                    >
                                      {text}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-6 bg-white">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-indigo-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: goalsInView ? goal.progress / 100 : 0 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-indigo-600 rounded-full origin-left"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-indigo-700 min-w-[42px] text-right">
                            {goal.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}



          </div>
        </motion.div>

        <footer className="mt-20 text-center text-slate-400 text-sm pb-8">
          <p>© {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
