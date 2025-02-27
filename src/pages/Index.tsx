<<<<<<< HEAD
=======

import { Calendar, Mail, MapPin, Phone, ChevronDown, Star, Book, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> 962fc9a22e8ccb02ff0e473397c25443e30a287b
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-scroll";
import Navbar from "@/components/Navbar";

const Index = () => {
  const timelineEvents = [
    {
      year: "1958",
      title: "Early Life",
      description: "Born in Nnewi, Anambra State",
    },
    {
      year: "1965",
      title: "Working Life Begins",
      description: "Started working at age 7 to support family",
    },
    {
      year: "1975",
      title: "Business Journey",
      description: "Started business with 200 Naira",
    },
    {
      year: "Present",
      title: "Global Impact",
      description: "Leading a multi-billion dollar conglomerate",
    },
  ];

  const featuredEvents = [
    {
      date: "January 2025",
      title: "Holy Ghost Fire Conference",
      theme: "Evangelism: Solution to World Challenges",
      type: "Keynote Address",
    },
    {
      date: "March 2025",
      title: "Global Entrepreneurship Conference",
      theme: "Faith in Business: Lessons from Africa",
      type: "Speaking Engagement",
    },
    {
      date: "April 2025",
      title: "Coscharis Anniversary Gala",
      theme: "A celebration of innovation and impact",
      type: "Corporate Event",
    },
    {
      date: "Monthly",
      title: "Leadership Masterclass Series",
      theme: "Exclusive mentorship for the next generation",
      type: "Educational",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FF0000]/10">
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FF0000]/20 to-[#FF0000]/10 overflow-hidden pt-16 border-b-2 border-[#000080]/30 rounded-lg object-cover"
      >
        <img
          src="/DrCo.jpg"
          alt="Dr. Cosmas Maduka"
          className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-300 hover:opacity-50 shadow-2xl filter brightness-90 contrast-110 object-contain object-buttom object-fill"
        />

<<<<<<< HEAD
        <div className="container mx-auto px-4 pt-20 pb-16">
=======
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1F0FB]/95 to-[#E5DEFF]/95 z-1" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
>>>>>>> 962fc9a22e8ccb02ff0e473397c25443e30a287b
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h6 className="text-[#000080] mb-4 tracking-wide">WELCOME TO</h6>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
              Dr. Cosmas Maduka's Official Website
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Discover the inspiring story, impactful vision, and
              entrepreneurial journey of a man who turned ₦200 into a
              billion-dollar conglomerate. Through passion, resilience, and
              unwavering faith, he has created global business success while
              uplifting lives across communities.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                <Button variant="outline" className="group hover:bg-[#000080] text-white hover:text-white border-[#000080]">
                  Learn More
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform text-white" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      <section id="about" className="py-20 bg-[#FF0000]/20 border-b-2 border-[#000080]/30 rounded-lg">
        <div className="container mx-auto px-4 rounded-lg border border-[#000080]/20">
=======
      {/* About Section */}
      <section id="about" className="py-20 bg-[#F1F0FB] relative">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05
          }}
        />
        <div className="absolute inset-0 bg-[#F1F0FB]/95 z-1" />
        <div className="container mx-auto px-4 relative z-10">
>>>>>>> 962fc9a22e8ccb02ff0e473397c25443e30a287b
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-8 mx-auto">
              <motion.img
                src="/Maduka.jpg"
                alt="Dr. Cosmas Maduka"
                className="rounded-xl shadow-lg hover:shadow-xl w-full md:w-1/2 mb-4 md:mb-0 order-1 transition-all duration-300 hover:scale-[1.02] object-cover object-center"
                style={{ maxHeight: "400px", minHeight: "300px" }}
                whileHover={{ filter: "brightness(1.1)" }}
              />

              <div className="order-2">
                <div className="prose prose-lg space-y-6">
                  <p className="text-white leading-relaxed">
                    Dr. Cosmas Maduka, founder and chairman of Coscharis Group,
                    is a leading figure in African business. Born on December
                    24, 1958, in Nnewi, Anambra State, he overcame significant
                    hardships to create a diversified conglomerate operating in
                    sectors such as automotive, agriculture, technology, and
                    manufacturing.
                  </p>
                  <p className="text-white leading-relaxed">
                    With little formal education, Dr. Maduka began working at
                    age 7 to support his family and later leveraged his
                    apprenticeship in the automotive industry to start his
                    business journey with just 200 Naira. Today, Coscharis Group
                    is a multi-billion-dollar enterprise, symbolizing
                    innovation, perseverance, and faith.
                  </p>
                  <p className="text-white leading-relaxed">
                    An alumnus of Harvard Business School's Executive Education
                    Program, Dr. Maduka is also a mentor, philanthropist, and
                    public speaker. His commitment to youth empowerment and
                    education reflects his belief in building a better future
                    through shared opportunities.
                  </p>
                  <blockquote className="border-l-4 border-white pl-4 italic my-8">
                    "In life, we don't get promoted until we qualify for the
                    position."
                    <footer className="text-white mt-2">
                      - Dr. Cosmas Maduka
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="py-20 bg-[#FF0000]/5 border-b-2 border-[#000080]/30 rounded-lg">
        <div className="container mx-auto px-4 rounded-lg border border-[#000080]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              The Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#000080]/40" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-1/2 px-6">
                      <div
                        className={`bg-white/90 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? "text-right" : ""}`}
                      >
                        <h3 className="font-playfair text-xl font-semibold text-[#000080]">
                          {event.title}
                        </h3>
                        <p className="text-[#000080] mt-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF0000] rounded-full shadow-md" />

                    <div className="w-1/2 px-6">
                      <div
                        className={`text-white font-bold text-lg ${index % 2 === 0 ? "" : "text-right"}`}
                      >
                        {event.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="events" className="py-20 bg-[#FF0000]/20 border-b-2 border-[#000080]/30 rounded-lg">
        <div className="container mx-auto px-4 rounded-lg border border-[#000080]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#000080]/20"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-[#000080] mr-2" />
                    <span className="text-[#000080]">{event.date}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2 text-[#000080]">
                    {event.title}
                  </h3>
                  <p className="text-[#000080] mb-4">{event.theme}</p>
                  <Button variant="outline" className="w-full hover:bg-[#000080] text-[#000080] hover:text-white border-[#000080]">
                    Register Interest
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-white mb-4">
                Stay tuned for monthly IG Live sessions on the 10th of every
                month, where Dr. Maduka shares exclusive lessons on
                entrepreneurship, leadership, and creating wealth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#FF0000]/20 border-2 border-[#000080]/30 rounded-lg">
        <div className="container mx-auto px-4 rounded-lg border border-[#000080]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#FF0000] mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <a
                      href="mailto:officialcosmasmaduka@gmail.com"
                      className="text-white/80 hover:text-[#000080] transition-colors"
                    >
                      officialcosmasmaduka@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#FF0000] mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone</h4>
                    <p className="text-white/80">+234 803 322 2770</p>
                    <p className="text-white/80">+1 (909) 706-5306</p>
                  </div>
                </div>
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#FF0000] mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Location</h4>
                    <p className="text-white/80">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300 border border-[#000080]/20">
                <h3 className="font-playfair text-xl font-semibold mb-4 text-[#000080]">
                  Social Media
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://twitter.com/drcosmasmaduka"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://instagram.com/cosmasmadukaofficial"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com/in/dr-cosmas-maduka"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://facebook.com/cosmasmaduka"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://youtube.com/@cosmasmadukaofficial"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://tiktok.com/@drcosmasmaduka"
                    className="block text-[#000080] hover:text-[#000080] transition-colors p-2 hover:bg-gray-50 rounded-md"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
