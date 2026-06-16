import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 30, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionLabel = ({ children }) => (
  <span className="inline-block text-sm uppercase tracking-[0.25em] text-[#00E5FF] font-semibold mb-4">
    {children}
  </span>
);
