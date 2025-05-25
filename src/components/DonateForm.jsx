import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, Loader2, CheckCircle, X } from "lucide-react";
import { useState } from "react";

// Custom Naira Icon Component
const NairaIcon = ({ className }) => (
  <svg 
    className={className}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

export default function DonateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    frequency: "one-time"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const presetAmounts = [5000, 10000, 20000, 50000];
  const frequencies = [
    { value: "one-time", label: "One-time" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = "Amount must be positive";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", amount: "", frequency: "one-time" });
    }, 1500);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated floating elements */}
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
        className="absolute -left-20 top-1/4 w-32 h-32 rounded-full bg-indigo-400/10 blur-xl -z-10"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-purple-400/10 blur-xl -z-10"
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Glowing card effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 blur-lg opacity-20 -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-xl border border-white/30 dark:border-gray-700/50 overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-4"
              >
                <HeartHandshake className="w-10 h-10" />
              </motion.div>
              <h2 className="text-3xl font-bold dark:text-white mb-2">
                Support Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your donation helps provide mental health services in Nigeria
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Frequency */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-2"
              >
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    type="button"
                    onClick={() => setFormData({...formData, frequency: freq.value})}
                    className={`py-2 px-4 rounded-lg border transition-all ${formData.frequency === freq.value ? 'bg-indigo-100 dark:bg-indigo-900/50 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-300' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                  >
                    {freq.label}
                  </button>
                ))}
              </motion.div>

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium dark:text-gray-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 dark:bg-gray-700/50 dark:text-white`}
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 dark:bg-gray-700/50 dark:text-white`}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </motion.div>

              {/* Amount Field with Custom Naira Icon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium dark:text-gray-200 mb-2">
                  Amount (₦)
                </label>
                
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {presetAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({...formData, amount: amount.toString()})}
                      className={`py-2 px-4 rounded-lg border transition-all flex items-center justify-center gap-1 ${formData.amount === amount.toString() ? 'bg-indigo-100 dark:bg-indigo-900/50 border-indigo-500 dark:border-indigo-400' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                    >
                      <NairaIcon className="w-4 h-4" />
                      {amount.toLocaleString()}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <NairaIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="number"
                    min="100"
                    step="100"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    placeholder="Other amount"
                    className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700/50 dark:text-white"
                  />
                </div>
                {errors.amount && <p className="mt-1 text-sm text-red-500">{errors.amount}</p>}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <HeartHandshake className="w-5 h-5" />
                    Donate Now
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex p-3 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-4"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold dark:text-white mb-2">Donation Received!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for your generous support of ₦{formData.amount ? Number(formData.amount).toLocaleString() : '0'}. 
                  Your contribution will help transform lives.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSuccess(false)}
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition inline-flex items-center gap-2"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}