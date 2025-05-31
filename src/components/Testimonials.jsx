import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import sarah from '../assets/TraumaOne.jpg';
import micheal from '../assets/TraumaTwo.jpg';
import priya from '../assets/TraumaThree.jpg';
import david from '../assets/TraumaFour.jpg';





export default function Testimonials() {


  
  const stories = [
    {
      quote: "After years of struggling with depression, MindHeal gave me my life back. The therapists understood me in ways no one else did.",
      author: "Peter S.",
      role: "Depression Recovery",
      rating: 5,
      image: sarah,
      fullStory: "I had tried three different therapists before finding MindHeal. Within weeks, their cognitive behavioral therapy approach helped me break negative thought patterns that had plagued me for a decade. Today I'm medication-free and living joyfully."
    },
    {
      quote: "The addiction program saved my marriage and my career. 18 months sober thanks to their incredible support system.",
      author: "Michael T.",
      role: "Addiction Recovery",
      rating: 5,
      image: micheal,
      fullStory: "Their holistic approach addressed not just my alcohol dependency but the underlying trauma that caused it. The aftercare program keeps me connected with counselors and peers who truly understand the journey."
    },
    {
      quote: "As a trauma survivor, I never thought I'd feel safe again. EMDR therapy here changed everything for me.",
      author: "Preye J.",
      role: "Trauma Counseling",
      rating: 4,
      image: priya,
      fullStory: "The somatic experiencing techniques helped me release trauma stored in my body. For the first time since childhood, I can sleep through the night without nightmares. My therapist's patience changed my life."
    },
    {
      quote: "Group therapy helped me realize I wasn't alone. The community here gave me strength when I had none left.",
      author: "David R.",
      role: "Anxiety Treatment",
      rating: 5,
      image: david,
      fullStory: "Social anxiety had me housebound for 2 years. The gradual exposure therapy combined with group sessions rebuilt my confidence. Last month I gave a presentation at work—something I never dreamed possible."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoSlideRef = useRef();
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  // Auto-advance every 8 seconds
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 8000);

    return () => clearInterval(autoSlideRef.current);
  }, [stories.length]);

  const goToSlide = (newIndex) => {
    clearInterval(autoSlideRef.current);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    
    autoSlideRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 8000);
  };

  const variants = {
    enter: (direction) => ({
      y: window.innerWidth < 768 ? (direction > 0 ? 50 : -50) : (direction > 0 ? 100 : -100),
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: window.innerWidth < 768 ? (direction < 0 ? 50 : -50) : (direction < 0 ? 100 : -100),
      opacity: 0
    })
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      // Swipe right to go previous
      goToSlide((currentIndex - 1 + stories.length) % stories.length);
    } else if (info.offset.x < -50) {
      // Swipe left to go next
      goToSlide((currentIndex + 1) % stories.length);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-4">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-600">Hope</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real people, real transformations. Hear from those who've walked the path to healing.
          </p>
        </motion.div>

        <div className="relative h-[600px] md:h-[450px]" ref={constraintsRef}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              dragControls={dragControls}
              className="absolute inset-0 flex flex-col md:flex-row gap-6 md:gap-8 touch-none"
            >
              {/* Story Card */}
              <div className="w-full h-1/2 md:h-full md:w-1/2">
                <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
                  <img 
                    src={stories[currentIndex].image} 
                    alt={stories[currentIndex].author}
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                    <Quote className="w-7 h-7 md:w-8 md:h-8 text-white/70 mb-3 md:mb-4" />
                    <p className="text-white text-lg md:text-xl italic mb-3 md:mb-4">
                      "{stories[currentIndex].quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${i < stories[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-white/30'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Details */}
              <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/50 h-full overflow-y-auto">
                  <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">
                    {stories[currentIndex].author}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-4 md:mb-6">
                    {stories[currentIndex].role}
                  </p>
                  
                  <div className="flex items-start gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400 mt-1">
                      <Heart className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 flex-1">
                      {stories[currentIndex].fullStory}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Story {currentIndex + 1} of {stories.length}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Arrows - Bottom Center */}
          <div className="md:hidden flex justify-center gap-4 absolute bottom-2 left-0 right-0">
            <button 
              onClick={() => goToSlide((currentIndex - 1 + stories.length) % stories.length)}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all z-20"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={() => goToSlide((currentIndex + 1) % stories.length)}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all z-20"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:block">
            <button 
              onClick={() => goToSlide((currentIndex - 1 + stories.length) % stories.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={() => goToSlide((currentIndex + 1) % stories.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all"
              aria-label="Next story"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Dots indicator - smaller on mobile */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-emerald-600 dark:bg-emerald-400 w-4 md:w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}