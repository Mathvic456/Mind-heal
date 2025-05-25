import { motion } from "framer-motion";
import { HeartPulse, HandHeart, Shield, Users, Activity } from "lucide-react";
import { Eye } from "lucide-react";
import { Leaf } from "lucide-react";
import { BarChart2 } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <HeartPulse className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-300">
                RESTORING HOPE, REBUILDING LIVES
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 dark:text-white">
              <span className="text-indigo-600 dark:text-indigo-400">Healing</span> Minds, <br />
              Saving <span className="text-indigo-600 dark:text-indigo-400">Lives</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              At MindHeal, we're dedicated to providing compassionate mental health support, 
              addiction recovery programs, and trauma counseling to those in need. 
              Every life matters, and we're here to light the path to recovery.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition shadow-lg"
              >
                Get Help Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-lg transition hover:bg-indigo-50 dark:hover:bg-gray-800"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Users className="w-8 h-8" />, number: "1K+", text: "Lives Impacted" },
              { icon: <Activity className="w-8 h-8" />, number: "85%", text: "Recovery Rate" },
              { icon: <HandHeart className="w-8 h-8" />, number: "50+", text: "Trained Counselors" },
              { icon: <Shield className="w-8 h-8" />, number: "24/7", text: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-1">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Our <span className="text-indigo-600 dark:text-indigo-400">Mission</span>
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Founded in 2015, MindHeal is a non-profit organization dedicated to 
              breaking the stigma around mental health and providing accessible 
              care to underserved communities. We believe every individual deserves 
              compassionate support on their journey to wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Vision",
                content: "A world where mental health care is accessible to all, free from stigma and discrimination.",
                icon: <Eye className="w-6 h-6" />
              },
              {
                title: "Our Approach",
                content: "Holistic, trauma-informed care that addresses mind, body, and community.",
                icon: <Leaf className="w-6 h-6" />
              },
              {
                title: "Our Impact",
                content: "Transforming lives through evidence-based therapies and community programs.",
                icon: <BarChart2 className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}