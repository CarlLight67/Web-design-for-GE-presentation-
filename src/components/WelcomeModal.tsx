import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Users, BookOpen, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GROUP_MEMBERS = [
  'Eslao Jefferson Heinrich',
  'Erespe Christian',
  'Lapaz Christoper',
  'Jacob Aljeven',
];

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleGoToAbout = () => {
    onClose();
    navigate('/about');
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="welcome-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-modal-title"
        >
          <motion.div
            key="welcome-modal-card"
            initial={{ opacity: 0, scale: 0.88, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 28 }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--surface-card)] text-[var(--ink)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)] overflow-hidden my-auto"
          >
            {/* Top Decorative Emerald Accent Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[var(--accent-dark)] via-[var(--accent)] to-[var(--accent-bright)]" />

            {/* Header Section with Top-Right "X" Exit Button */}
            <div className="relative px-6 pt-6 pb-5 sm:px-8 sm:pt-7 border-b border-[var(--line)] bg-[var(--paper-subtle)]/70">
              {/* Top-Right Close "X" Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Exit introduction popup"
                title="Close popup"
                className="btn-arch-secondary !absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-[41px] h-[41px] !rounded-[16px] flex items-center justify-center group z-10"
              >
                <X className="w-5 h-5 text-white group-hover:text-white group-hover:rotate-90 transition-all duration-200" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="pr-14 space-y-2.5"
              >
                <div className="inline-flex items-center gap-2 text-sm font-mono-tech uppercase tracking-widest text-[var(--accent)] font-bold">
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  <span>BSIT-1C &nbsp;|&nbsp; GROUP 1</span>
                </div>

                <h2
                  id="welcome-modal-title"
                  className="text-2xl sm:text-3xl font-editorial font-bold text-[var(--ink)] tracking-wider"
                >
                  WELCOME TO ARCHI—PH
                </h2>

                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  Philippine Architecture &amp; Heritage Explorer — An interactive digital archive and academic presentation showcasing the built heritage of the Philippines.
                </p>
              </motion.div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Subject & Instructor Banner */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-xl border-2 border-[var(--line)] bg-[var(--paper)] space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Subject</span>
                  </div>
                  <p className="text-sm sm:text-base font-editorial font-bold text-[var(--ink)]">
                    GE 9 ART APPRECIATION
                  </p>
                </div>

                <div className="p-4 rounded-xl border-2 border-[var(--line)] bg-[var(--paper)] space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Instructor</span>
                  </div>
                  <p className="text-sm sm:text-base font-editorial font-bold text-[var(--ink)]">
                    AVELINA NOBLE
                  </p>
                </div>
              </motion.div>

              {/* Leader & Members Directory */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.35 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)] font-semibold">
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Group 1 Presentation Roster</span>
                  </div>
                  <span className="text-xs font-mono-tech text-[var(--muted)]">
                    BSIT-1C &nbsp;|&nbsp; GROUP 1
                  </span>
                </div>

                {/* Group Leader Card */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-[var(--accent)] bg-[var(--paper-subtle)]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[var(--accent)] font-semibold block">
                      Leader
                    </span>
                    <p className="text-base sm:text-lg font-editorial font-bold text-[var(--ink)]">
                      Dictaan Carl Vincent
                    </p>
                  </div>
                  <span className="text-xs font-mono-tech text-[var(--muted)]">
                    Project Lead · BSIT-1C
                  </span>
                </div>

                {/* Group Members List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--muted)] block">
                    Members
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GROUP_MEMBERS.map((member, idx) => (
                      <motion.div
                        key={member}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.26 + idx * 0.05, duration: 0.3 }}
                        className="p-3.5 rounded-xl border-2 border-[var(--line)] bg-[var(--paper)] hover:border-[var(--accent)] transition-colors duration-200 flex items-center justify-between gap-3"
                      >
                        <span className="text-sm font-medium text-[var(--ink)]">
                          {member}
                        </span>
                        <span className="text-[11px] font-mono-tech text-[var(--accent)] shrink-0">
                          0{idx + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-[var(--line)] bg-[var(--paper-subtle)]/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleGoToAbout}
                className="btn-arch-secondary px-4 py-2.5 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
              >
                <span>View About &amp; Team</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn-arch-primary px-6 py-2.5 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
              >
                <span>Enter Website</span>
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
