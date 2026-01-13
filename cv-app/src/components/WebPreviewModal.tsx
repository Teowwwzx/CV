"use client";

import { X, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface WebPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export default function WebPreviewModal({
  isOpen,
  onClose,
  url,
  title,
}: WebPreviewModalProps) {
  const [isMaximized, setIsMaximized] = useState(false);

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

  const toggleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              width: isMaximized ? "100%" : "90%",
              height: isMaximized ? "100%" : "85%",
            }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col w-full max-w-6xl h-[85vh] relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white shrink-0">
              <h3 className="font-semibold text-lg truncate flex items-center gap-2">
                {title || "Project Preview"}
                <span className="text-xs font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  Live Preview
                </span>
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
                  title="Open in New Tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  onClick={toggleMaximize}
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white hidden sm:block"
                  title={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors text-slate-300 ml-2"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 bg-slate-100 relative w-full h-full">
              <iframe
                src={url}
                className="w-full h-full border-0"
                title={title || "Project Preview"}
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
