import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { HeartPulse } from "lucide-react";


export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-4 px-6 shadow-sm dark:shadow-gray-800 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <span className="font-bold text-xl dark:text-white">MindHeal</span>
        </div>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}