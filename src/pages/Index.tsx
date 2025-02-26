
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
              Discover the inspiring story of a visionary who turned ₦200 into a billion-dollar conglomerate through passion, resilience, and unwavering faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
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
            <div className="prose prose-lg mx-auto">
              <p className="text-warm-gray leading-relaxed mb-6">
                Dr. Cosmas Maduka, founder and chairman of Coscharis Group, is a leading figure in African business. Born on December 24, 1958, in Nnewi, Anambra State, he overcame significant hardships to create a diversified conglomerate operating in sectors such as automotive, agriculture, technology, and manufacturing.
              </p>
              <blockquote className="border-l-4 border-rich-gold pl-4 italic my-8">
                "In life, we don't get promoted until we qualify for the position."
                <footer className="text-warm-gray mt-2">- Dr. Cosmas Maduka</footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
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
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-rich-gold mr-2" />
                  <span className="text-warm-gray">January 2025</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  Holy Ghost Fire Conference
                </h3>
                <p className="text-warm-gray">
                  Keynote Address on "Evangelism: Solution to World Challenges"
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-rich-gold mr-2" />
                  <span className="text-warm-gray">Monthly</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  IG Live Sessions
                </h3>
                <p className="text-warm-gray">
                  Join our monthly sessions on entrepreneurship and leadership
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
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
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-rich-gold mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:officialcosmasmaduka@gmail.com" className="text-warm-gray hover:text-rich-black transition-colors">
                      officialcosmasmaduka@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-rich-gold mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-warm-gray">+234 803 322 2770</p>
                    <p className="text-warm-gray">+1 (909) 706-5306</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-rich-gold mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-warm-gray">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold mb-4">
                  Social Media
                </h3>
                <div className="space-y-3">
                  <a href="https://twitter.com/drcosmasmaduka" className="block text-warm-gray hover:text-rich-black transition-colors">Twitter</a>
                  <a href="https://instagram.com/cosmasmadukaofficial" className="block text-warm-gray hover:text-rich-black transition-colors">Instagram</a>
                  <a href="https://linkedin.com/in/dr-cosmas-maduka" className="block text-warm-gray hover:text-rich-black transition-colors">LinkedIn</a>
                  <a href="https://facebook.com/cosmasmaduka" className="block text-warm-gray hover:text-rich-black transition-colors">Facebook</a>
                  <a href="https://youtube.com/@cosmasmadukaofficial" className="block text-warm-gray hover:text-rich-black transition-colors">YouTube</a>
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
