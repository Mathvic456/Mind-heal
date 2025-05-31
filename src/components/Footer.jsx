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
      <p className="text-white">Loading</p>
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

const AddictionContent = () => (
  <div className="space-y-4">
    <p>Our addiction recovery program helps individuals overcome substance dependence and build sustainable, healthy lives.</p>
    <p>We provide:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Personalized treatment plans</li>
      <li>Detox and rehabilitation support</li>
      <li>Counseling and behavioral therapy</li>
      <li>Aftercare and relapse prevention</li>
    </ul>
    <p>Recovery is a journey—we’re here every step of the way.</p>
  </div>
);


const TraumaContent = () => (
  <div className="space-y-4">
    <p>Our trauma counseling sessions provide a safe space to process and heal from past emotional or physical traumas.</p>
    <p>We specialize in:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Childhood trauma</li>
      <li>Abuse and neglect</li>
      <li>Loss and grief</li>
      <li>Domestic violence</li>
    </ul>
    <p>You are not alone—let’s walk the path to healing together.</p>
  </div>
);


const FamilyContent = () => (
  <div className="space-y-4">
    <p>Family therapy aims to resolve conflicts and improve communication within families.</p>
    <p>We help families:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Navigate life transitions</li>
      <li>Address behavioral challenges</li>
      <li>Heal from shared trauma</li>
      <li>Build healthy boundaries and understanding</li>
    </ul>
  </div>
);

const GroupContent = () => (
  <div className="space-y-4">
    <p>Group sessions provide a supportive environment where individuals with similar experiences can connect and grow together.</p>
    <p>Topics include:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Managing anxiety and depression</li>
      <li>Grief and loss</li>
      <li>Substance recovery</li>
      <li>Parenting and relationships</li>
    </ul>
    <p>Healing is better together.</p>
  </div>
);


const TeamContent = () => (
  <div className="space-y-4">
    <p>Our multidisciplinary team includes licensed therapists, clinical psychologists, psychiatrists, and wellness coaches.</p>
    <p>Every professional on our team is committed to providing evidence-based, compassionate care.</p>
    <p>Meet the people who make TAR a safe place to heal and grow.</p>
  </div>
);


const StoriesContent = () => (
  <div className="space-y-4">
    <p>Over the years, we’ve helped thousands of individuals reclaim their lives.</p>
    <p>Read inspiring testimonials from clients who overcame trauma, addiction, and mental health challenges through our services.</p>
    <p>Your story of transformation could be next.</p>
  </div>
);


const CareersContent = () => (
  <div className="space-y-4">
    <p>Join a team that’s making a real impact in mental health care across Nigeria.</p>
    <p>We’re hiring compassionate, skilled professionals in various fields:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Therapists and psychologists</li>
      <li>Support staff</li>
      <li>Outreach coordinators</li>
      <li>Marketing and admin roles</li>
    </ul>
    <p>Grow your career while changing lives.</p>
  </div>
);


const PressContent = () => (
  <div className="space-y-4">
    <p>Looking to feature TAR in your publication or media project?</p>
    <p>Our press kit includes logos, photos, press releases, and information about our mission and services.</p>
    <p>Contact us for media inquiries and collaborations.</p>
  </div>
);


const PhoneContent = () => (
  <div className="space-y-4">
    <p>You can reach our support team by phone:</p>
    <p className="font-semibold text-white">+234 812 345 6789</p>
    <p>Available Monday to Friday, 8 AM – 6 PM WAT.</p>
  </div>
);


const EmailContent = () => (
  <div className="space-y-4">
    <p>For general inquiries, appointments, or media requests, email us at:</p>
    <p className="font-semibold text-white">Tar@gmail.com</p>
    <p>We typically respond within 24 hours.</p>
  </div>
);

const LocationContent = () => (
  <div className="space-y-4">
    <p>Visit us at our head office:</p>
    <p className="font-semibold text-white">123 Healing Avenue, Lagos, Nigeria</p>
    <p>Our space is designed to be warm, welcoming, and confidential.</p>
  </div>
);


const TermsContent = () => (
  <div className="space-y-4 text-sm">
    <p>By accessing or using our services, you agree to the following terms:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Services are intended for individuals 18 years or older, or with guardian consent.</li>
      <li>All consultations are confidential, barring situations of imminent harm.</li>
      <li>We reserve the right to update these terms at any time.</li>
    </ul>
    <p>Please read our full Terms of Service for more details.</p>
  </div>
);


const CookiesContent = () => (
  <div className="space-y-4 text-sm">
    <p>We use cookies to improve your browsing experience and analyze site traffic.</p>
    <p>You can choose to accept or decline cookies. Declining may limit some features of the site.</p>
    <p>For more info, review our full Cookies Policy.</p>
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
        { name: "Addiction Recovery", modal: "addiction", content: <AddictionContent /> },
        { name: "Trauma Counseling", modal: "trauma", content: <TraumaContent /> },
        { name: "Family Therapy", modal: "family", content: <FamilyContent /> },
        { name: "Group Sessions", modal: "group", content: <GroupContent /> }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", modal: "about", content: <AboutContent /> },
        { name: "Our Team", modal: "team", content: <TeamContent/> },
        { name: "Success Stories", modal: "stories", content: <StoriesContent/> },
        { name: "Careers", modal: "careers", content: <CareersContent /> },
        { name: "Press Kit", modal: "press", content: <PressContent /> }
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
    { name: "Terms of Service", modal: "terms", content: <TermsContent /> },
    { name: "Cookies", modal: "cookies", content: <CookiesContent /> }
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
            © {new Date().getFullYear()} TAR. All rights reserved.
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