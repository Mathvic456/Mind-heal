import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Brain, Shield, Heart, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Health Therapy",
      summary: "Evidence-based psychological care",
      description: "Customized treatment plans using CBT, DBT, and mindfulness approaches. Individual and group sessions available.",
      stats: "85% success rate • 50+ specialists",
      color: "from-[#01bf61] to-[#01bf61]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Addiction Recovery",
      summary: "Comprehensive rehabilitation programs",
      description: "Medically supervised detox, outpatient programs, and long-term aftercare support systems.",
      stats: "1,200+ recoveries • 24/7 helpline",
      color: "from-[#01bf61] to-[#01bf61]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trauma Counseling",
      summary: "Healing deep emotional wounds",
      description: "Specialized EMDR, somatic therapy, and trauma-focused CBT for PTSD and complex trauma.",
      stats: "92% client satisfaction • Certified specialists",
      color: "from-[#01bf61] to-[#01bf61]"
    }
  ];

  return (
    <section className="py-24 px-4 relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01bf61]/10 via-[#01bf61]/5 to-white dark:from-gray-900 dark:to-gray-800" />
        <motion.div
          className="absolute top-1/4 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-[#01bf61]/10 to-transparent dark:via-[#01bf61]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01bf61] to-[#01bf61]">Healing</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our evidence-based interventions combine cutting-edge therapy with compassionate care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            const rotateY = useMotionValue(0);
            const rotateX = useMotionValue(0);

            const handleMouseMove = (e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - left - width / 2);
              mouseY.set(e.clientY - top - height / 2);
            };

            useEffect(() => {
              if (hoveredIndex === index) {
                animate(rotateY, mouseX.get() / 20, { duration: 0.5 });
                animate(rotateX, -mouseY.get() / 20, { duration: 0.5 });
              } else {
                animate(rotateY, 0, { duration: 0.5 });
                animate(rotateX, 0, { duration: 0.5 });
              }
            }, [hoveredIndex, mouseX, mouseY]);

            const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hoveredIndex === index ? 1.03 : 1})`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-br ${service.color} blur-md transition-opacity duration-300`}
                />

                <motion.div
                  style={{ transform }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-white/30 dark:border-gray-700/50 overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'shadow-xl' : 'shadow-md'}`}
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${service.color} w-max text-white`}>
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.summary}</p>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredIndex === index ? 'auto' : 0,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-4 pt-2">{service.description}</p>
                    </motion.div>

                    <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent from-[#01bf61] to-[#01bf61]">
                          {service.stats}
                        </span>
                        <motion.div
                          animate={{
                            x: hoveredIndex === index ? 5 : 0,
                            opacity: hoveredIndex === index ? 1 : 0.7
                          }}
                          className="text-[#01bf61]"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4" onClick={() => setSelectedService(null)}>
          <div onClick={e => e.stopPropagation()} className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-md bg-[#01bf61] text-white">
                {selectedService.icon}
              </div>
              <h3 className="text-xl font-bold dark:text-white">{selectedService.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{selectedService.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{selectedService.stats}</p>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 w-full text-center bg-[#01bf61] text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
