"use client";

import { X, Award, Calendar, Image as ImageIcon, Video, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";
import { cvData } from "@/data/cv-data";

interface LeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LeadershipActivity = {
  name: string;
  year: string;
  role?: string;
  description?: string;
  image?: string;
  images?: string[];
  video?: string;
  link?: string;
  tags?: string[];
};

export default function LeadershipModal({
  isOpen,
  onClose,
}: LeadershipModalProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  const leadership = useMemo(
    () => cvData.leadership as unknown as LeadershipActivity[],
    []
  );

  const openGallery = (images: string[], index: number, title: string) => {
    setCurrentImages(images);
    setInitialIndex(index);
    setGalleryTitle(title);
    setGalleryOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen || galleryOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, galleryOpen]);

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
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <Award size={16} /> Extra-curricular
               </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Leadership & Activities</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                 A showcase of my involvement in community building, event organization, and team leadership.
              </p>
            </div>

            <div className="p-8 md:p-10 grid gap-6">
              {leadership.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-start md:items-center transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                    {activity.image ? (
                      <img src={activity.image} alt="" className="w-full h-full object-cover" />
                    ) : activity.video ? (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                        <Video size={22} />
                      </div>
                    ) : (
                      <Award size={22} className="text-blue-600" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{activity.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                       <span className="flex items-center gap-1"><Calendar size={14} /> {activity.year}</span>
                       {activity.role && (
                          <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-medium">
                            {activity.role}
                          </span>
                       )}
                    </div>
                    {activity.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {activity.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <p className="text-slate-600 mb-4">
                      Active participant and contributor, demonstrating teamwork and organizational skills.
                    </p>

                     <div className="flex flex-wrap items-center gap-3">
                       {activity.images?.length || activity.image ? (
                          <button 
                            onClick={() => openGallery(activity.images?.length ? activity.images : [activity.image!], 0, activity.name)}
                            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                          >
                             <ImageIcon size={14} /> Photos
                          </button>
                       ) : null}
                       {activity.video ? (
                          <button 
                            onClick={() => openGallery([activity.video!], 0, activity.name)}
                            className="flex items-center gap-1.5 text-xs font-medium text-red-600 bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors"
                          >
                             <Video size={14} /> Video
                          </button>
                       ) : null}
                        {activity.link ? (
                          <a 
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors"
                          >
                             <ExternalLink size={14} /> Link
                          </a>
                       ) : null}
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <ImageGalleryModal 
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            images={currentImages}
            initialIndex={initialIndex}
            title={galleryTitle}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
