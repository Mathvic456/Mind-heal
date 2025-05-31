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

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      setModalMessage(`Thank you, ${formData.name}! Your ${activeTab === "message" ? "message" : "booking"} has been received.`);

      setFormData({
        name: "",
        email: "",
        message: "",
        service: "",
        date: "",
        time: ""
      });
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full text-center"
            >
              <h2 className="text-xl font-semibold dark:text-white mb-4">Message Sent</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Get in <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
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
            {/* Contact Info */}
            <div className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo icon={<Mail />} label="Email" value="Tar@gmail.com" link="mailto:Tar@gmail.com" />
                <ContactInfo icon={<Phone />} label="Phone" value="+234 812 345 6789" link="tel:+2348123456789" />
                <ContactInfo icon={<MapPin />} label="Address" value="123 Healing Avenue, Victoria Island, Lagos, Nigeria" />
              </div>

              <div className="mt-8">
                <h4 className="font-medium dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <SocialLink icon={<Facebook />} href="https://facebook.com/mindheal" />
                  <SocialLink icon={<Twitter />} href="https://twitter.com/mindheal" />
                  <SocialLink icon={<Instagram />} href="https://instagram.com/mindheal" />
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
            <div className="flex border-b border-gray-100 dark:border-gray-700">
              <TabButton label="Leave a Message" active={activeTab === "message"} onClick={() => setActiveTab("message")} icon={<MessageSquare />} />
              <TabButton label="Book a Session" active={activeTab === "booking"} onClick={() => setActiveTab("booking")} icon={<Calendar />} />
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <Input name="name" label="Full Name" value={formData.name} onChange={handleChange} required />
              <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
              
              {activeTab === "message" ? (
                <Textarea name="message" label="Message" value={formData.message} onChange={handleChange} required />
              ) : (
                <>
                  <Select name="service" label="Select Service" value={formData.service} onChange={handleChange} options={services} required />
                  <Input name="date" label="Preferred Date" type="date" value={formData.date} onChange={handleChange} required />
                  <Input name="time" label="Preferred Time" type="time" value={formData.time} onChange={handleChange} required />
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition"
              >
                {loading ? "Sending..." : activeTab === "message" ? "Send Message" : "Book Now"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========== Reusable Subcomponents ==========

function ContactInfo({ icon, label, value, link }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg text-emerald-600 dark:text-emerald-400">
        {icon}
      </div>
      <div>
        <h4 className="font-medium dark:text-white">{label}</h4>
        {link ? (
          <a href={link} className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            {value}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -3 }}
      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
    >
      {icon}
    </motion.a>
  );
}

function TabButton({ label, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 transition ${
        active
          ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Input({ name, label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium dark:text-gray-200 mb-1">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
        required={required}
      />
    </div>
  );
}

function Textarea({ name, label, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium dark:text-gray-200 mb-1">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
        required={required}
      />
    </div>
  );
}

function Select({ name, label, value, onChange, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium dark:text-gray-200 mb-1">{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 dark:bg-gray-700 dark:text-white"
        required={required}
      >
        <option value="">Select an option</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
