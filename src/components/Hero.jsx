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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const floatingBoxes = [
    { top: "18%", right: "6%", flag: flagNG, amount: "₦1,250,000" },
    { top: "52%", right: "4%", flag: flagNA, amount: "NAD 82,000" },
    { top: "48%", left: "6%", flag: flagRU, amount: "₽410,000" },
    { bottom: "8%", left: "2%", flag: flagZA, amount: "ZAR 320,000" },
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

    setMessage(result.message);
    if (result.success) setEmail("");

    setLoading(false);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section ref={ref} className="relative bg-[#CFE9FB] overflow-hidden">
      {/* Background Pattern */}
      <img
        src={centerPattern}
        alt=""
        aria-hidden
        className="absolute inset-0 m-auto w-[900px] h-[1000px] opacity-45 object-contain pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-0 grid md:grid-cols-2 gap-16 items-start z-10">

        {/* LEFT — CONTENT */}
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-[#04172C] mb-5"
          >
            Professional Insight Into
            <br />
            <span className=" text-[#6CB6E8]">Global Crypto Markets</span>
          </motion.h1>

          {/* Primary Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textPrimary text-sm sm:text-base md:text-md leading-relaxed mb-5"
          >
            CryptoGlance is a real-time crypto intelligence platform built for
            traders and investors who need accurate prices, interactive charts,
            and clear market context — all in one focused dashboard.
          </motion.p>

          {/* Secondary Explanation */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#04172C] text-sm md:text-base leading-relaxed mb-8"
          >
            Track live assets, monitor trends as they form, and stay informed
            with curated global crypto news that explains market movement
            without noise or speculation.
          </motion.p>

          {/* WAITLIST FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex items-stretch bg-white rounded-xl overflow-hidden w-full max-w-md mx-auto md:mx-0 shadow-lg"
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
              className="bg-[#04172C] text-white px-6 py-3 text-sm font-semibold hover:bg-[#06234A] transition disabled:opacity-50"
            >
              {loading ? "Joining..." : "Get Early Access"}
            </button>
          </form>

          {message && (
            <p
              className={`text-xs mt-3 ${
                message.toLowerCase().includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-[#5B728A] text-xs mt-4">
            Launching soon · Real-time global markets · Free early access
          </p>
        </div>

        {/* RIGHT — VISUAL (BOTTOM-ALIGNED) */}
        <motion.div
          style={{ scale }}
          className="relative flex justify-center md:justify-end self-end"
        >
          <motion.img
            src={heroMockup}
            alt="CryptoGlance trading dashboard"
            className="w-full max-w-[420px] md:max-w-[460px] drop-shadow-2xl translate-y-[2px]"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />

          {/* Floating Market Cards */}
          {floatingBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="absolute bg-white border border-[#E1EEF7] shadow-md rounded-xl px-3 py-2 flex items-center gap-2"
              style={{
                top: box.top,
                right: box.right,
                left: box.left,
                bottom: box.bottom,
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.3,
              }}
            >
              <img
                src={box.flag}
                alt=""
                aria-hidden
                className="w-6 h-6 rounded-full"
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
