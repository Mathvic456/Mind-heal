import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock, Loader2, X } from "lucide-react";

// Custom Logo Component
const Logo = ({ className }) => (
  <svg 
    className={className}
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M16 10L19 16L25 19L19 22L16 28L13 22L7 19L13 16L16 10Z" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M16 6L19 12L25 15L19 18L16 24L13 18L7 15L13 12L16 6Z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Modal Components
const GenericModal = ({ title, children, onClose }) => (
  <motion.div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div 
      className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="text-gray-300">
        {children}
      </div>
    </motion.div>
  </motion.div>
);

const LoadingModal = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-gray-800 rounded-xl p-8 max-w-xs w-full mx-4 flex flex-col items-center">
      <Loader2 className="h-8 w-8 text-emerald-400 animate-spin mb-4" />
      <p className="text-white">Loading content...</p>
    </div>
  </div>
);

const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-gray-800 rounded-xl p-8 max-w-xs w-full mx-4 flex flex-col items-center">
      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-white text-center mb-6">{message}</p>
      <button 
        onClick={onClose}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition"
      >
        Close
      </button>
    </div>
  </div>
);

// Modal content components
const TherapyContent = () => (
  <div className="space-y-4">
    <p>Our mental health therapy services provide professional support for various conditions including:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Anxiety disorders</li>
      <li>Depression</li>
      <li>Bipolar disorder</li>
      <li>PTSD</li>
      <li>OCD</li>
    </ul>
    <p>All sessions are confidential and tailored to your individual needs.</p>
  </div>
);

const AboutContent = () => (
  <div className="space-y-4">
    <p>Founded in 2015, TAR has been at the forefront of mental health care in Nigeria.</p>
    <p>Our mission is to provide accessible, compassionate, and professional mental health services to all who need them.</p>
    <p>We've helped over 5,000 clients achieve better mental wellbeing through our various programs and therapies.</p>
  </div>
);

const PrivacyContent = () => (
  <div className="space-y-4 text-sm">
    <p>We take your privacy seriously. This policy explains how we collect, use, and protect your personal information.</p>
    <h4 className="font-semibold text-white mt-4">Information Collection</h4>
    <p>We collect information you provide when using our services, including contact details and health information necessary for treatment.</p>
    <h4 className="font-semibold text-white mt-4">Data Security</h4>
    <p>All client data is encrypted and stored securely in compliance with healthcare regulations.</p>
  </div>
);

// Add more content components as needed

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    setEmail("");
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Mental Health Therapy", modal: "therapy", content: <TherapyContent /> },
        { name: "Addiction Recovery", modal: "addiction", content: <div>Addiction recovery content...</div> },
        { name: "Trauma Counseling", modal: "trauma", content: <div>Trauma counseling content...</div> },
        { name: "Family Therapy", modal: "family", content: <div>Family therapy content...</div> },
        { name: "Group Sessions", modal: "group", content: <div>Group sessions content...</div> }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", modal: "about", content: <AboutContent /> },
        { name: "Our Team", modal: "team", content: <div>Our team content...</div> },
        { name: "Success Stories", modal: "stories", content: <div>Success stories content...</div> },
        { name: "Careers", modal: "careers", content: <div>Careers content...</div> },
        { name: "Press Kit", modal: "press", content: <div>Press kit content...</div> }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", modal: "blog", content: <div>Blog content...</div> },
        { name: "Help Center", modal: "help", content: <div>Help center content...</div> },
        { name: "Guides", modal: "guides", content: <div>Guides content...</div> },
        { name: "Webinars", modal: "webinars", content: <div>Webinars content...</div> },
        { name: "Research", modal: "research", content: <div>Research content...</div> }
      ]
    }
  ];

  const contactInfo = [
    { 
      icon: <Phone className="w-5 h-5" />, 
      text: "+234 812 345 6789", 
      modal: "phone", 
      content: <div>Phone contact content...</div> 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      text: "Tar@gmail.com", 
      modal: "email", 
      content: <div>Email contact content...</div> 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      text: "123 Healing Avenue, Lagos, Nigeria", 
      modal: "location", 
      content: <div>Location content...</div> 
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      text: "Mon-Fri: 8AM - 6PM WAT", 
      modal: "hours", 
      content: <div>Business hours content...</div> 
    }
  ];

  const legalLinks = [
    { name: "Privacy Policy", modal: "privacy", content: <PrivacyContent /> },
    { name: "Terms of Service", modal: "terms", content: <div>Terms of service content...</div> },
    { name: "Cookies", modal: "cookies", content: <div>Cookies policy content...</div> }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", name: "YouTube" }
  ];

  // Get modal content based on active modal
  const getModalContent = () => {
    // Check footer links
    for (const column of footerLinks) {
      const link = column.links.find(link => link.modal === activeModal);
      if (link) return link.content;
    }
    
    // Check contact info
    const contact = contactInfo.find(item => item.modal === activeModal);
    if (contact) return contact.content;
    
    // Check legal links
    const legal = legalLinks.find(item => item.modal === activeModal);
    if (legal) return legal.content;
    
    return <div>Content not found</div>;
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12 px-4 relative">
      {/* Loading Modal */}
      {isLoading && <LoadingModal />}
      
      {/* Success Modal */}
      {isSuccess && (
        <SuccessModal 
          message="Thank you for subscribing to our newsletter!" 
          onClose={() => setIsSuccess(false)} 
        />
      )}

      {/* Content Modal */}
      {activeModal && (
        <GenericModal 
          title={activeModal.charAt(0).toUpperCase() + activeModal.slice(1).replace(/([A-Z])/g, ' $1')} 
          onClose={closeModal}
        >
          {getModalContent()}
        </GenericModal>
      )}

      {/* Floating decorative elements */}
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
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-emerald-900/20 blur-xl"
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">TAR</span>
            </div>
            <p className="text-gray-400">
              Transforming lives through compassionate mental health care since 2015.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-medium">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition flex items-center justify-center min-w-[80px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Join'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white text-lg font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => openModal(link.modal)}
                      className="text-gray-400 hover:text-emerald-400 transition flex items-center gap-2 w-full text-left"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition" />
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-emerald-400 mt-0.5">{item.icon}</div>
                  <button 
                    onClick={() => openModal(item.modal)}
                    className="text-gray-400 hover:text-emerald-400 text-left"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white p-2 rounded-full transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gray-800 w-full my-8 origin-left"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} MindHeal. All rights reserved.
          </motion.p>

          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => openModal(link.modal)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="text-gray-500 hover:text-emerald-400 text-sm transition"
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}