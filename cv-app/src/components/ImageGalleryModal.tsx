"use client";

import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
  pdfUrl?: string; // Optional PDF download URL
}

export default function ImageGalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
  pdfUrl,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          {/* Controls Header */}
          <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
             {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Download PDF"
              >
                <Download size={24} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

           {title && (
            <div className="absolute top-6 left-6 z-50">
               <h3 className="text-white text-xl font-bold drop-shadow-md">{title}</h3>
               <p className="text-white/70 text-sm">{currentIndex + 1} / {images.length}</p>
            </div>
           )}

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 z-50"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 z-50"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Image/Video Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
          >
             {/* Render Image or Video based on file extension */}
            {images[currentIndex]?.toLowerCase().endsWith('.mp4') ? (
               <video
                 src={images[currentIndex]}
                 controls
                 autoPlay
                 className="max-w-full max-h-full rounded-lg shadow-2xl"
               />
            ) : (
               <img
                 src={images[currentIndex]}
                 alt={`Gallery media ${currentIndex + 1}`}
                 className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
               />
            )}
            
            {/* Thumbnails */}
             <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full p-2">
                {images.map((img, idx) => (
                   <button
                     key={idx}
                     onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                     }}
                     className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-blue-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                   >
                      {img?.toLowerCase().endsWith('.mp4') ? (
                         <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white text-[8px]">Video</div>
                      ) : (
                         <img src={img} alt="" className="w-full h-full object-cover" />
                      )}
                   </button>
                ))}
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
