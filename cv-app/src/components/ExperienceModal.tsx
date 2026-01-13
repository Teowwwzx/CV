"use client";

import { X, Calendar, Building, FileText, Download, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: any;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  experience,
}: ExperienceModalProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  // Prevent scrolling when modal is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!galleryOpen) {
        // Only restore scrolling if gallery is also closed (gallery handles its own body scroll)
        // Actually ImageGalleryModal handles it too. 
        // If ExperienceModal is open, body should be hidden.
        // If Gallery is open (on top of Experience), body should still be hidden.
        // So we can leave this here, but ImageGalleryModal also sets overflow hidden.
        // It's fine.
       document.body.style.overflow = "unset";
    }
  }

  if (!experience) return null;

  const openGallery = (images: string[], index: number) => {
    setCurrentImages(images);
    setInitialIndex(index);
    setGalleryOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto scrollbar-hide"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pr-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{experience.role}</h2>
                  <div className="flex items-center gap-2 text-xl text-blue-600 font-medium">
                    <Building size={20} />
                    {experience.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm shrink-0">
                  <Calendar size={16} />
                  <span className="font-medium">{experience.year} ({experience.duration})</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              {/* Key Responsibilities */}
              <section className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-600 rounded-full block"></span>
                  Key Responsibilities & Achievements
                </h3>
                {experience.details && (
                  <ul className="grid gap-4">
                    {experience.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                        <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Gallery */}
              {experience.images && experience.images.length > 0 && (
                <section className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-blue-600 rounded-full block"></span>
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experience.images.map((img: string, idx: number) => (
                      <div 
                        key={idx} 
                        onClick={() => openGallery(experience.images!, idx)}
                        className="aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-slate-200 relative group"
                      >
                        {img.toLowerCase().endsWith('.mp4') ? (
                           <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white group-hover:bg-slate-700 transition-colors">
                              <Video size={32} />
                           </div>
                        ) : (
                           <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Internship Artifacts */}
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-600 rounded-full block"></span>
                  Internship Artifacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Supervisor Feedback Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer border-2 border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 hover:shadow-lg transition-all bg-white"
                  >
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FileText size={32} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Supervisor Feedback</h4>
                    <p className="text-sm text-slate-500 mb-4">Official performance review PDF</p>
                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Download <Download size={14} />
                    </span>
                  </motion.div>

                   {/* Internship Report Card */}
                   <motion.div 
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer border-2 border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 hover:shadow-lg transition-all bg-white"
                  >
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FileText size={32} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Internship Report</h4>
                    <p className="text-sm text-slate-500 mb-4">Final technical report PDF</p>
                     <span className="text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Download <Download size={14} />
                    </span>
                  </motion.div>
                </div>
              </section>
            </div>
          </motion.div>

          <ImageGalleryModal 
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            images={currentImages}
            initialIndex={initialIndex}
            title={experience.role}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
