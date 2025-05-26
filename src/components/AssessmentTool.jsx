import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, HeartPulse, ArrowRight } from 'lucide-react';

export default function AssessmentTool() {
  // PHQ-9 Questions (Standard Depression Screening)
  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling/staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself - or that you're a failure",
    "Trouble concentrating on things",
    "Moving/speaking slowly or being fidgety/restless",
    "Thoughts of self-harm"
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const total = answers.reduce((sum, val) => sum + val, 0);
    setShowResult(true);
    // You can add more sophisticated analysis here
  };

  // Reset assessment
  const restartAssessment = () => {
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(0));
    setShowResult(false);
  };

  return (
    <section className="py-16 px-4 bg-indigo-50 dark:bg-gray-800/50" id="assessment">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
            <ClipboardCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold dark:text-white mb-2">
            Mental Health Check-In
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Take this quick screening to reflect on your mental wellbeing
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div 
            key="questions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8"
          >
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round(((currentQ + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-xl font-medium dark:text-white mb-6">
              {questions[currentQ]}
            </h3>

            <div className="grid gap-3">
              {[0, 1, 2, 3].map((value) => (
                <motion.button
                  key={value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(value)}
                  className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-500 mr-3 flex-shrink-0"></div>
                    <span className="dark:text-gray-200">
                      {[
                        "Not at all",
                        "Several days",
                        "More than half the days",
                        "Nearly every day"
                      ][value]}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8 text-center"
          >
            <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-4">
              <HeartPulse className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">
              Your Assessment Results
            </h3>
            
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-6">
            <div 
  className="bg-indigo-600 h-3 rounded-full" 
  style={{ width: `${(answers.reduce((a, b) => a + b, 0) / 27) * 100}%` }}
></div>

            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Score: {answers.reduce((a,b) => a + b, 0)}/27 - {
                answers.reduce((a,b) => a + b, 0) < 5 ? "Minimal depression" :
                answers.reduce((a,b) => a + b, 0) < 10 ? "Mild depression" :
                answers.reduce((a,b) => a + b, 0) < 15 ? "Moderate depression" :
                answers.reduce((a,b) => a + b, 0) < 20 ? "Moderately severe depression" :
                "Severe depression"
              }
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {answers.reduce((a,b) => a + b, 0) > 9 ? (
                "Consider reaching out to a mental health professional"
              ) : (
                "Continue practicing self-care habits"
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={restartAssessment}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
              >
                Retake Assessment
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                Contact Counselor <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}