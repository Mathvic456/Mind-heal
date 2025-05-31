import { motion } from "framer-motion";
import { HeartPulse, HandHeart, Shield, Users, Activity, Eye, Leaf, BarChart2, Target, Award, Clock, School, MessageSquare, ShieldAlert, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showProgramsModal, setShowProgramsModal] = useState(false);
  const [selectedHelpType, setSelectedHelpType] = useState("");
  const [message, setMessage] = useState("");

  const helpTypes = [
    { id: "trauma", label: "Trauma Support", icon: <ShieldAlert className="w-5 h-5" /> },
    { id: "addiction", label: "Addiction Recovery", icon: <Activity className="w-5 h-5" /> },
    { id: "mental-health", label: "Mental Health Counseling", icon: <HeartPulse className="w-5 h-5" /> },
    { id: "youth-support", label: "Youth Support", icon: <Users className="w-5 h-5" /> },
    { id: "other", label: "Other Support", icon: <HandHeart className="w-5 h-5" /> }
  ];

  const handleHelpSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend or email service
    console.log({
      helpType: selectedHelpType,
      message: message
    });
    alert("Your request has been submitted. We'll get back to you soon.");
    setShowHelpModal(false);
    setSelectedHelpType("");
    setMessage("");
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6f7ee] to-[#c1f0d9] dark:from-gray-900 dark:to-gray-800 -z-10" />
      
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
              <HeartPulse className="w-10 h-10 text-[#01bf61] dark:text-[#2dde98]" />
              <span className="text-sm font-semibold tracking-wider text-[#01bf61] dark:text-[#2dde98]">
                RESTORING HOPE, REBUILDING LIVES
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 dark:text-white">
              <span className="text-[#01bf61] dark:text-[#2dde98]">Transforming</span> Mental Health <br />
              Across <span className="text-[#01bf61] dark:text-[#2dde98]">Nigeria</span> <br />
              Welcome to <span className="bg-gradient-to-r from-[#01bf61] to-[#2dde98] bg-clip-text text-transparent">TAR Foundation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Founded in January 2025, TAR Foundation is a Nigerian non-profit dedicated to revolutionizing mental health services, 
              trauma recovery, and addiction support through advocacy, education, and community programs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowHelpModal(true)}
                className="bg-gradient-to-r from-[#01bf61] to-[#2dde98] hover:from-[#00a955] hover:to-[#25d18a] text-white px-6 py-3 rounded-lg transition shadow-lg"
              >
                Get Help Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProgramsModal(true)}
                className="border-2 border-[#01bf61] text-[#01bf61] dark:text-[#2dde98] dark:border-[#2dde98] px-6 py-3 rounded-lg transition hover:bg-[#e6f7ee] dark:hover:bg-gray-800"
              >
                Learn About Our Programs
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
              { icon: <Users className="w-8 h-8" />, number: "10K+", text: "Future Counselors to Train" },
              { icon: <School className="w-8 h-8" />, number: "100+", text: "Schools to Partner With" },
              { icon: <HandHeart className="w-8 h-8" />, number: "20K", text: "Young Lives to Impact" },
              { icon: <MessageSquare className="w-8 h-8" />, number: "24/7", text: "Support Channels Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-[#01bf61]/30 dark:hover:border-[#2dde98]/50 transition-all duration-300"
              >
                <div className="text-[#01bf61] dark:text-[#2dde98] mb-3">
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
              Our <span className="text-[#01bf61] dark:text-[#2dde98]">Purpose</span>
            </h2>
            <div className="w-20 h-1 bg-[#01bf61] mx-auto mb-6" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Vision",
                  content: "To transform access to mental health services in Nigeria.",
                  icon: <Eye className="w-6 h-6" />
                },
                {
                  title: "Our Mission",
                  content: "Through advocacy, public awareness, support, intervention and education, TAR ensures individuals get the help they need.",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Our Approach",
                  content: "Holistic, trauma-informed care that addresses mind, body, and community.",
                  icon: <Leaf className="w-6 h-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-[#01bf61]/30 dark:hover:border-[#2dde98]/50"
                >
                  <div className="text-[#01bf61] dark:text-[#2dde98] mb-4 hover:text-[#00a955] dark:hover:text-[#25d18a] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-[#01bf61] dark:group-hover:text-[#2dde98] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-[#e6f7ee] dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Our <span className="text-[#01bf61] dark:text-[#2dde98]">Strategic Goals</span>
            </h2>
            <div className="w-20 h-1 bg-[#01bf61] mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              By 2030, TAR Foundation aims to achieve these transformative objectives across Nigeria:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Stigma Free Nigeria",
                content: "Remove stigma associated with seeking help for trauma and addiction in schools and communities.",
                icon: <ShieldAlert className="w-6 h-6" />
              },
              {
                title: "Counselor Training",
                content: "Educate and equip 10,000 counselors in trauma and addiction detection and recovery services.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Support Networks",
                content: "Establish healing circles and support groups for young men and women across Nigeria.",
                icon: <HandHeart className="w-6 h-6" />
              },
              {
                title: "Help-Seeking Culture",
                content: "Develop campaigns that inspire people to speak up and seek help without shame.",
                icon: <MessageSquare className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#01bf61]/30 dark:hover:border-[#2dde98]/50"
              >
                <div className="text-[#01bf61] dark:text-[#2dde98] mb-4 hover:text-[#00a955] dark:hover:text-[#25d18a] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-[#01bf61] dark:group-hover:text-[#2dde98] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
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
              Our <span className="text-[#01bf61] dark:text-[#2dde98]">Key Programs</span>
            </h2>
            <div className="w-20 h-1 bg-[#01bf61] mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to address trauma and addiction at every level of Nigerian society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "StigmaFree Initiatives",
                content: "Grassroots programs eradicating stigma in communities, colleges, and families across Nigeria.",
                icon: <Shield className="w-6 h-6" />,
                initiatives: [
                  "Community awareness campaigns",
                  "School-based education programs",
                  "Family support classes"
                ]
              },
              {
                title: "Goodbye2Silence",
                content: "Focused on young adults 14-25, opening conversations about trauma in secondary schools.",
                icon: <MessageSquare className="w-6 h-6" />,
                initiatives: [
                  "School chapters nationwide",
                  "Peer-to-peer support networks",
                  "Early intervention strategies"
                ]
              },
              {
                title: "SeekHelp Resources",
                content: "Comprehensive support through multiple accessible channels.",
                icon: <HandHeart className="w-6 h-6" />,
                initiatives: [
                  "24/7 WhatsApp chat lines",
                  "Social media support platforms",
                  "Nationwide treatment directory",
                  "Financial assistance programs"
                ]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-[#01bf61]/30 dark:hover:border-[#2dde98]/50"
              >
                <div className="text-[#01bf61] dark:text-[#2dde98] mb-4 hover:text-[#00a955] dark:hover:text-[#25d18a] transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-[#01bf61] dark:group-hover:text-[#2dde98] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {program.content}
                </p>
                <ul className="space-y-2">
                  {program.initiatives.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#01bf61] dark:text-[#2dde98] mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Our <span className="text-[#01bf61] dark:text-[#2dde98]">Core Policies</span>
            </h2>
            <div className="w-20 h-1 bg-[#01bf61] mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fundamental principles that guide our operations and ensure ethical practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Child Protection",
                content: "Zero tolerance for child abuse with comprehensive safeguarding measures and reporting protocols.",
                icon: <ShieldAlert className="w-6 h-6" />
              },
              {
                title: "Anti-Trafficking",
                content: "Strict prohibition against human trafficking, forced labor, and unlawful child employment.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Substance-Free Workplace",
                content: "Drug-free environment policy with support systems and disciplinary measures.",
                icon: <HeartPulse className="w-6 h-6" />
              }
            ].map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#01bf61]/30 dark:hover:border-[#2dde98]/50"
              >
                <div className="text-[#01bf61] dark:text-[#2dde98] mb-4 hover:text-[#00a955] dark:hover:text-[#25d18a] transition-colors">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-[#01bf61] dark:group-hover:text-[#2dde98] transition-colors">
                  {policy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold dark:text-white">Get Help</h3>
                <button 
                  onClick={() => setShowHelpModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleHelpSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    What type of help do you need?
                  </label>
                  <div className="space-y-2">
                    {helpTypes.map((type) => (
                      <div 
                        key={type.id}
                        onClick={() => setSelectedHelpType(type.id)}
                        className={`flex items-center p-3 rounded-lg cursor-pointer border transition-colors ${
                          selectedHelpType === type.id 
                            ? 'border-[#01bf61] bg-[#e6f7ee] dark:bg-gray-700' 
                            : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="text-[#01bf61] dark:text-[#2dde98] mr-3">
                          {type.icon}
                        </span>
                        <span className="dark:text-gray-200">{type.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Tell us more about what you need
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01bf61] dark:bg-gray-700 dark:text-white"
                    placeholder="Please describe your situation and how we can help..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowHelpModal(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-[#01bf61] to-[#2dde98] hover:from-[#00a955] hover:to-[#25d18a] text-white rounded-lg transition-colors"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Programs Modal */}
      {showProgramsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-white-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold dark:text-white">Our Programs</h3>
                <button 
                  onClick={() => setShowProgramsModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-semibold dark:text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-[#01bf61] dark:text-[#2dde98] mr-2" />
                    StigmaFree Initiatives
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Grassroots programs eradicating stigma in communities, colleges, and families across Nigeria.
                  </p>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-600 dark:text-gray-300">• Community awareness campaigns</li>
                    <li className="text-gray-600 dark:text-gray-300">• School-based education programs</li>
                    <li className="text-gray-600 dark:text-gray-300">• Family support classes</li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-semibold dark:text-white mb-3 flex items-center">
                    <MessageSquare className="w-5 h-5 text-[#01bf61] dark:text-[#2dde98] mr-2" />
                    Goodbye2Silence
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Focused on young adults 14-25, opening conversations about trauma in secondary schools.
                  </p>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-600 dark:text-gray-300">• School chapters nationwide</li>
                    <li className="text-gray-600 dark:text-gray-300">• Peer-to-peer support networks</li>
                    <li className="text-gray-600 dark:text-gray-300">• Early intervention strategies</li>
                  </ul>
                </div>
                
                <div className="pb-2">
                  <h4 className="text-xl font-semibold dark:text-white mb-3 flex items-center">
                    <HandHeart className="w-5 h-5 text-[#01bf61] dark:text-[#2dde98] mr-2" />
                    SeekHelp Resources
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Comprehensive support through multiple accessible channels.
                  </p>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-600 dark:text-gray-300">• 24/7 WhatsApp chat lines</li>
                    <li className="text-gray-600 dark:text-gray-300">• Social media support platforms</li>
                    <li className="text-gray-600 dark:text-gray-300">• Nationwide treatment directory</li>
                    <li className="text-gray-600 dark:text-gray-300">• Financial assistance programs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowProgramsModal(false)}
                  className="px-4 py-2 bg-gradient-to-r from-[#01bf61] to-[#2dde98] hover:from-[#00a955] hover:to-[#25d18a] text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}