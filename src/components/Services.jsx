import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Brain, Shield, Heart, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Health Therapy",
      summary: "Evidence-based psychological care",
      description: "Customized treatment plans using CBT, DBT, and mindfulness approaches. Individual and group sessions available.",
      stats: "85% success rate • 50+ specialists",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Addiction Recovery",
      summary: "Comprehensive rehabilitation programs",
      description: "Medically supervised detox, outpatient programs, and long-term aftercare support systems.",
      stats: "1,200+ recoveries • 24/7 helpline",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trauma Counseling",
      summary: "Healing deep emotional wounds",
      description: "Specialized EMDR, somatic therapy, and trauma-focused CBT for PTSD and complex trauma.",
      stats: "92% client satisfaction • Certified specialists",
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 px-4 relative isolate overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-blue-50/20 to-purple-50/10 dark:from-gray-900 dark:to-gray-800" />
        <motion.div 
          className="absolute top-1/4 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-indigo-100/20 to-transparent dark:via-indigo-900/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header with animated sparkles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* <Sparkles className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 text-indigo-400/30 dark:text-indigo-600/20" /> */}
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Healing</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our evidence-based interventions combine cutting-edge therapy with compassionate care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="hidden md:block absolute -left-20 top-1/3 w-16 h-16 rounded-full bg-indigo-400/10 blur-xl"
          />

          {services.map((service, index) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            
            const handleMouseMove = (e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - left - width/2);
              mouseY.set(e.clientY - top - height/2);
            };

            const rotateY = useMotionValue(0);
            const rotateX = useMotionValue(0);
            
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
                {/* Gradient glow */}
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
                  className={`relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-white/30 dark:border-gray-700/50 overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'shadow-xl' : 'shadow-md'}`}
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
                        <span className="text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent dark:from-indigo-300 dark:to-purple-400 from-indigo-500 to-purple-600">
                          {service.stats}
                        </span>
                        <motion.div
                          animate={{ 
                            x: hoveredIndex === index ? 5 : 0,
                            opacity: hoveredIndex === index ? 1 : 0.7
                          }}
                          className="text-indigo-500 dark:text-indigo-400"
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
    </section>
  );
}