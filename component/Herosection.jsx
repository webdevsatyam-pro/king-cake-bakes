import React from "react";
("use client");
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fffcf7] overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
            🥐 Freshly Baked Every Day
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 leading-tight">
            मिठास जो सीधे <br />
            <span className="text-orange-600">दिल में उतर जाए</span>
          </h1>

          <p className="mt-6 text-lg text-stone-600 max-w-lg leading-relaxed">
            हमारे यहाँ आपको मिलेंगे ताज़ा केक, कुकीज़ और ब्रेड जो शुद्धता और
            प्यार से बनाए जाते हैं। आज ही अपनी खुशियों का ऑर्डर दें!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-orange-200 hover:bg-orange-700 transition">
              Order Now <ShoppingBag size={20} />
            </motion.button>

            <button className="flex items-center gap-2 text-stone-800 font-semibold px-8 py-4 hover:underline transition">
              View Menu <ArrowRight size={20} />
            </button>
          </div>

          {/* Mini Stats/Features */}
          <div className="mt-12 flex gap-8 border-t border-stone-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-stone-800">100%</p>
              <p className="text-sm text-stone-500">Eggless Options</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-800">30 Min</p>
              <p className="text-sm text-stone-500">Fast Delivery</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-800">50+</p>
              <p className="text-sm text-stone-500">Items Menu</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center">
          {/* Main Image Wrapper */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Background Circle Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[2px] border-dashed border-orange-200 rounded-full"
            />

            {/* Bakery Image */}
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious Cake"
              className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                ⭐
              </div>
              <div>
                <p className="font-bold text-sm text-stone-800">4.9/5 Rating</p>
                <p className="text-xs text-stone-500">Best in Town</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
