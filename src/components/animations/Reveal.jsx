import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  y = 30,
  duration = 0.7,
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal
