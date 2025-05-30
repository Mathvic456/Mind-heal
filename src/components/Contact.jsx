import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Calendar, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    date: "",
    time: ""
  });

  const services = [
    "Mental Health Consultation",
    "Addiction Recovery Session",
    "Trauma Counseling",
    "Couples Therapy",
    "Group Therapy"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you, ${formData.name}! Your ${activeTab === "message" ? "message" : "booking"} has been received.`);
    setFormData({
      name: "",
      email: "",
      message: "",
      service: "",
      date: "",
      time: ""
    });
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're here to help. Reach out for support, questions, or to schedule a session.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Email</h4>
                    <a href="mailto:contact@mindheal.org" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                      Tar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Phone</h4>
                    <a href="tel:+2348123456789" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                      +234 812 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Healing Avenue, Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-medium dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://facebook.com/mindheal" 
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com/mindheal" 
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com/mindheal" 
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-64"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.585151689064!2d3.421535415393679!3d6.428952326537159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDQuMiJOIDPCsDI1JzIyLjgiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="dark:grayscale dark:opacity-80"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            {/* Form Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("message")}
                className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 transition ${activeTab === "message" ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                <MessageSquare className="w-5 h-5" />
                Leave a Message
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 transition ${activeTab === "booking" ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                <Calendar className="w-5 h-5" />
                Book a Session
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Name & Email (Common Fields) */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium dark:text-gray-200 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Message Tab Content */}
              {activeTab === "message" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <label htmlFor="message" className="block text-sm font-medium dark:text-gray-200 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </motion.div>
              )}

              {/* Booking Tab Content */}
              {activeTab === "booking" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 mb-6"
                >
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium dark:text-gray-200 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium dark:text-gray-200 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium dark:text-gray-200 mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
              >
                {activeTab === "message" ? (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Book Session
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}