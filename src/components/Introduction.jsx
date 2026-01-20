import { motion } from "framer-motion";
import foregroundImg from "../assets/images/mockupimageforsecondsection.png";
import brandLogo from "../assets/images/cryptoglancrlogo.png";
import ellipse1 from "../assets/images/eclipse1intro.png";

const Intro = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* Left Visual */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full h-full relative flex justify-center items-center bg-[#CFE9FB] rounded-3xl overflow-hidden"
        >
          {/* Ellipse Background */}
          <img
            src={ellipse1}
            alt="Decorative background"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-70"
          />

          {/* Floating Mockup */}
          <motion.img
            src={foregroundImg}
            alt="CryptoGlance dashboard preview"
            className="relative z-10 w-full max-w-[420px] mx-auto sm:mr-52 mr-0"
            animate={{ y: [180, 40, 180] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img
              src={brandLogo}
              alt="CryptoGlance Logo"
              className="w-10 h-10 mr-3 object-contain"
            />
            <span className="font-bold text-[16px] sm:text-[18px] md:text-[20px] tracking-tight text-[#04172C] leading-none">
              Crypto<span className="text-[#6CB6E8]">Glancr</span>
            </span>
          </div>

          {/* Headings */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#04172C] mb-4 leading-tight">
            Your Window Into the Crypto Market
          </h2>

          <h4 className="text-base md:text-lg text-[#5B728A] mb-6 leading-relaxed">
            Real-time prices, deep analytics, and trusted crypto news — built for
            traders, investors, and curious beginners.
          </h4>

          {/* Description */}
          <p className="text-[#0B1F33] text-sm sm:text-base leading-relaxed mb-4">
            CryptoGlance brings together live market data, interactive charts,
            trending assets, and global crypto news into one powerful dashboard.
            No noise. No clutter. Just clarity.
          </p>

          <p className="text-[#0B1F33] text-sm sm:text-base leading-relaxed mb-4">
            Whether you’re tracking Bitcoin, exploring altcoins, or analyzing
            long-term trends, CryptoGlance helps you make informed decisions
            faster and with confidence.
          </p>

          <p className="text-[#0B1F33] text-sm sm:text-base leading-relaxed mb-6">
            Built with speed, accessibility, and beautiful design in mind, the
            platform works seamlessly across desktop and mobile devices.
          </p>

          <p className="text-[#04172C] font-semibold text-sm sm:text-base">
            Launching soon — join the early access waitlist 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;

