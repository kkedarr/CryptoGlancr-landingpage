import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroMockup from "../assets/images/heromockup.png";
import { SiBitcoin, SiEthereum, SiSolana, SiBinance } from "react-icons/si";
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
  {
    top: "18%",
    right: "6%",
    icon: SiBitcoin,
    label: "BTC",
    value: "$68,500",
    change: "+1.25%",
    positive: true,
    color: "#F7931A",
  },
  {
    top: "52%",
    right: "4%",
    icon: SiEthereum,
    label: "ETH",
    value: "$3,800",
    change: "+3.10%",
    positive: true,
    color: "#627EEA",
  },
  {
    top: "48%",
    left: "6%",
    icon: SiSolana,
    label: "SOL",
    value: "$98.42",
    change: "-0.8%",
    positive: false,
    color: "#14F1FF",
  },
  {
    bottom: "8%",
    left: "2%",
    icon: SiBinance,
    label: "BNB",
    value: "$312.60",
    change: "+0.6%",
    positive: true,
    color: "#F3BA2F",
  },
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
    <section ref={ref} className="relative bg-[#CFE9FB] overflow-hidden mt-12">
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
              {loading ? "Joining..." : "Subscribe"}
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
          className="
            relative
            flex
            justify-center
            self-end
            w-full
            mb-12
          "
        >
          <motion.img
            src={heroMockup}
            alt="CryptoGlance trading dashboard"
            className="
              w-[50%]
              max-w-[420px]
              md:max-w-[460px]
              drop-shadow-2xl
              translate-y-[2px]
              mb-5
            "
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Floating Market Cards stay aligned */}
          {floatingBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="
                absolute bg-white border border-[#E1EEF7]
                shadow-md rounded-xl px-3 py-2
                flex items-center gap-3
              "
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
              <div className="w-6 h-6 flex items-center justify-center">
                <box.icon size={22} style={{ color: box.color }} />
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[#04172C]">
                    {box.label}
                  </p>
                  <span
                    className={`text-[10px] font-medium ${
                      box.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {box.change}
                  </span>
                </div>

                <p className="text-[11px] text-[#5B728A]">
                  {box.value}
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
