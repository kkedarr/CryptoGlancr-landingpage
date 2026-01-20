import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroMockup from "../assets/images/heromockup.png";
import flagNG from "../assets/images/ngflag.png";
import flagNA from "../assets/images/naflag.png";
import flagRU from "../assets/images/ruflag.png";
import flagZA from "../assets/images/zaflag.png";
import centerPattern from "../assets/images/herobgpattern.png";
import { joinWaitlist } from "../services/waitlistService";

const Hero = () => {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const floatingBoxes = [
    { top: "20%", right: "5%", flag: flagNG, amount: "₦1,250,000" },
    { top: "55%", right: "5%", flag: flagNA, amount: "NAD 82,000" },
    { top: "50%", left: "5%", flag: flagRU, amount: "₽410,000" },
    { bottom: "10%", left: "0%", flag: flagZA, amount: "ZAR 320,000" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setMessage(result.message);
      setEmail("");
    } else {
      setMessage(result.message);
    }

    setLoading(false);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#CFE9FB] py-20 md:py-28 overflow-hidden"
    >
      {/* Center Background Pattern */}
      <img
        src={centerPattern}
        alt="Background pattern"
        className="absolute inset-0 m-auto opacity-60 w-[900px] h-[1000px] object-contain z-0 pointer-events-none"
        style={{ transform: "translateY(10%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12 z-10">
        {/* Left Content */}
        <div className="text-left max-w-md md:max-w-lg mx-auto md:mx-0 order-2 md:order-1">
          <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold mb-4 leading-tight text-[#04172C] text-center md:text-left">
            Track Crypto Markets.
            <br />
            <span className="text-[#6CB6E8]">Analyze Smarter.</span>
          </h1>

          <p className="text-[#5B728A] text-sm md:text-base max-w-md mb-8 text-center md:text-left">
            CryptoGlance gives you real-time prices, historical charts, trending
            assets, and curated crypto news — all in one fast, beautiful
            dashboard.
          </p>

          {/* Waitlist Form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-stretch bg-white rounded-xl overflow-hidden w-full max-w-sm mx-auto md:mx-0 shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="flex-grow px-4 py-3 text-sm text-[#04172C] placeholder:text-[#5B728A] focus:outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#04172C] text-white px-5 py-3 text-sm font-semibold whitespace-nowrap hover:bg-[#06234A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {message && (
            <p
              className={`text-xs mt-2 text-center md:text-left ${
                message.toLowerCase().includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-[#5B728A] text-xs mt-3 text-center md:text-left">
            Launching soon · Global market coverage · Free access
          </p>
        </div>

        {/* Right Visual */}
        <motion.div
          style={{ scale }}
          className="relative flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2"
        >
          <motion.img
            src={heroMockup}
            alt="Crypto dashboard preview"
            className="w-full sm:w-[70%] max-w-[420px] md:w-[440px] drop-shadow-2xl relative md:left-[10px] md:top-[86px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Info Cards */}
          {floatingBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="absolute bg-white border border-[#E1EEF7] shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 scale-90 sm:scale-100"
              style={{
                top: box.top,
                right: box.right,
                left: box.left,
                bottom: box.bottom,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.2,
              }}
            >
              <motion.img
                src={box.flag}
                alt="flag"
                className="w-7 h-7 rounded-full"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <div>
                <p className="text-sm font-semibold text-[#04172C]">
                  {box.amount}
                </p>
                <p className="text-[10px] text-[#5B728A]">
                  Live market price
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
