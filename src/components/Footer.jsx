import { motion } from "framer-motion";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

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

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Mental Health Therapy", url: "#" },
        { name: "Addiction Recovery", url: "#" },
        { name: "Trauma Counseling", url: "#" },
        { name: "Family Therapy", url: "#" },
        { name: "Group Sessions", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Team", url: "#" },
        { name: "Success Stories", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Press Kit", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Help Center", url: "#" },
        { name: "Guides", url: "#" },
        { name: "Webinars", url: "#" },
        { name: "Research", url: "#" }
      ]
    }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+234 812 345 6789" },
    { icon: <Mail className="w-5 h-5" />, text: "help@mindheal.org" },
    { icon: <MapPin className="w-5 h-5" />, text: "123 Healing Avenue, Lagos, Nigeria" },
    { icon: <Clock className="w-5 h-5" />, text: "Mon-Fri: 8AM - 6PM WAT" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12 px-4">
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
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-indigo-900/20 blur-xl"
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
              <Logo className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">MindHeal</span>
            </div>
            <p className="text-gray-400">
              Transforming lives through compassionate mental health care since 2015.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-medium">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition"
                >
                  Join
                </motion.button>
              </div>
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
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.url}
                      className="text-gray-400 hover:text-indigo-400 transition flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition" />
                      {link.name}
                    </motion.a>
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
                  <div className="text-indigo-400 mt-0.5">{item.icon}</div>
                  <span className="text-gray-400">{item.text}</span>
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
                    className="bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white p-2 rounded-full transition"
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

          <div className="flex items-center gap-1 text-gray-500">
            
          </div>

          <div className="flex gap-6">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 hover:text-indigo-400 text-sm transition"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 hover:text-indigo-400 text-sm transition"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 hover:text-indigo-400 text-sm transition"
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}