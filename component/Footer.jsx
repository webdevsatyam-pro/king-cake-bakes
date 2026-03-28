import React from "react";
("use client");
import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
              Sweet<span className="text-orange-500">Delight</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              हम केवल केक नहीं, खुशियाँ बांटते हैं। शुद्धता और बेहतरीन स्वाद का
              वादा।
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, color: "#f97316" }}
                  className="bg-stone-800 p-2 rounded-full transition-colors">
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Our Menu", "Custom Cakes", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                      <span className="h-[1px] w-0 bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              संपर्क करें
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="text-orange-500 shrink-0" size={20} />
                <span>123, स्वीट स्ट्रीट, चांदनी चौक, दिल्ली - 110006</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <span>hello@bakery.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Newsletter
            </h3>
            <p className="text-stone-400 mb-4 text-sm">
              नई रेसिपीज और डिस्काउंट्स के लिए सब्सक्राइब करें।
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="w-full bg-stone-800 border border-stone-700 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="absolute right-1 top-1 bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition-colors">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:row items-center justify-between gap-4 text-stone-500 text-sm">
          <p>© 2024 Sweet Delight Bakery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
