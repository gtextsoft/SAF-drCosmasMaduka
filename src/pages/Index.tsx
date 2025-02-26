import { Calendar, Mail, MapPin, Phone, ChevronDown, Star, Book, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Index = () => {
  const timelineEvents = [
    {
      year: "1958",
      title: "Early Life",
      description: "Born in Nnewi, Anambra State"
    },
    {
      year: "1965",
      title: "Working Life Begins",
      description: "Started working at age 7 to support family"
    },
    {
      year: "1975",
      title: "Business Journey",
      description: "Started business with 200 Naira"
    },
    {
      year: "Present",
      title: "Global Impact",
      description: "Leading a multi-billion dollar conglomerate"
    }
  ];

  const featuredEvents = [
    {
      date: "January 2025",
      title: "Holy Ghost Fire Conference",
      theme: "Evangelism: Solution to World Challenges",
      type: "Keynote Address"
    },
    {
      date: "March 2025",
      title: "Global Entrepreneurship Conference",
      theme: "Faith in Business: Lessons from Africa",
      type: "Speaking Engagement"
    },
    {
      date: "April 2025",
      title: "Coscharis Anniversary Gala",
      theme: "A celebration of innovation and impact",
      type: "Corporate Event"
    },
    {
      date: "Monthly",
      title: "Leadership Masterclass Series",
      theme: "Exclusive mentorship for the next generation",
      type: "Educational"
    }
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#F1F0FB]/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-warm-gray hover:text-rich-black transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F1F0FB] to-[#E5DEFF] overflow-hidden pt-16">
        <div className="container mx-auto px-4 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h6 className="text-warm-gray mb-4 tracking-wide">WELCOME TO</h6>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-rich-black mb-6">
              Dr. Cosmas Maduka's Official Website
            </h1>
            <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Discover the inspiring story, impactful vision, and entrepreneurial journey of a man who turned ₦200 into a billion-dollar conglomerate. Through passion, resilience, and unwavering faith, he has created global business success while uplifting lives across communities.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
                <Button variant="outline" className="group">
                  Learn More
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-black mb-8 text-center">
              About Me
            </h2>
            <div className="prose prose-lg mx-auto space-y-6">
              <p className="text-warm-gray leading-relaxed">
                Dr. Cosmas Maduka, founder and chairman of Coscharis Group, is a leading figure in African business. Born on December 24, 1958, in Nnewi, Anambra State, he overcame significant hardships to create a diversified conglomerate operating in sectors such as automotive, agriculture, technology, and manufacturing.
              </p>
              <p className="text-warm-gray leading-relaxed">
                With little formal education, Dr. Maduka began working at age 7 to support his family and later leveraged his apprenticeship in the automotive industry to start his business journey with just 200 Naira. Today, Coscharis Group is a multi-billion-dollar enterprise, symbolizing innovation, perseverance, and faith.
              </p>
              <p className="text-warm-gray leading-relaxed">
                An alumnus of Harvard Business School's Executive Education Program, Dr. Maduka is also a mentor, philanthropist, and public speaker. His commitment to youth empowerment and education reflects his belief in building a better future through shared opportunities.
              </p>
              <blockquote className="border-l-4 border-rich-gold pl-4 italic my-8">
                "In life, we don't get promoted until we qualify for the position."
                <footer className="text-warm-gray mt-2">- Dr. Cosmas Maduka</footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20 bg-[#E5DEFF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-black mb-12 text-center">
              The Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-rich-gold/20" />
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-1/2 px-6">
                      <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? 'text-right' : ''}`}>
                        <h3 className="font-playfair text-xl font-semibold text-rich-black">{event.title}</h3>
                        <p className="text-warm-gray mt-2">{event.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rich-gold rounded-full" />
                    <div className="w-1/2 px-6">
                      <div className={`text-rich-gold font-bold ${index % 2 === 0 ? '' : 'text-right'}`}>
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

      {/* Events Section */}
      <section id="events" className="py-20 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-black mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-rich-gold mr-2" />
                    <span className="text-warm-gray">{event.date}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-warm-gray mb-4">
                    {event.theme}
                  </p>
                  <Button variant="outline" className="w-full">
                    Register Interest
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-warm-gray mb-4">
                Stay tuned for monthly IG Live sessions on the 10th of every month, where Dr. Maduka shares exclusive lessons on entrepreneurship, leadership, and creating wealth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#E5DEFF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-black mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <Mail className="w-5 h-5 text-rich-gold mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:officialcosmasmaduka@gmail.com" className="text-warm-gray hover:text-rich-black transition-colors">
                      officialcosmasmaduka@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <Phone className="w-5 h-5 text-rich-gold mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-warm-gray">+234 803 322 2770</p>
                    <p className="text-warm-gray">+1 (909) 706-5306</p>
                  </div>
                </div>
                <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-rich-gold mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-warm-gray">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="font-playfair text-xl font-semibold mb-4">
                  Social Media
                </h3>
                <div className="space-y-3">
                  <a href="https://twitter.com/drcosmasmaduka" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">Twitter</a>
                  <a href="https://instagram.com/cosmasmadukaofficial" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">Instagram</a>
                  <a href="https://linkedin.com/in/dr-cosmas-maduka" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">LinkedIn</a>
                  <a href="https://facebook.com/cosmasmaduka" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">Facebook</a>
                  <a href="https://youtube.com/@cosmasmadukaofficial" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">YouTube</a>
                  <a href="https://tiktok.com/@drcosmasmaduka" className="block text-warm-gray hover:text-rich-black transition-colors p-2 hover:bg-gray-50 rounded-md">TikTok</a>
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
