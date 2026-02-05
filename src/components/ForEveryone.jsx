import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cryptoBeginners from "../assets/images/cryptobeginners.jpg";
import developersBuilders from "../assets/images/developersandbuilders.jpg";
import tradersAnalysts from "../assets/images/tradersandanalysts.jpg";
import investorsFunds from "../assets/images/investors.jpg";

const UsersSection = () => {
  const slides = [
    {
      label: "Crypto Beginners",
      description:
        "Learn the market with simple charts, real-time prices, and beginner-friendly insights that make crypto easy to understand.",
      image: cryptoBeginners,
    },
    {
      label: "Traders & Analysts",
      description:
        "Track trends, analyze price movements, monitor volume, and make smarter trading decisions with live data.",
      image: tradersAnalysts,
    },
    {
      label: "Developers & Builders",
      description:
        "Access reliable market data for dashboards, bots, research tools, and automated trading strategies.",
      image: developersBuilders,
    },
    {
      label: "Investors & Funds",
      description:
        "Monitor portfolios, identify opportunities, and stay ahead of market movements with actionable insights.",
      image: investorsFunds,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeout = useRef(null);

  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [isUserInteracting, slides.length]);

  const handleUserClick = (index) => {
    setActiveIndex(index);
    setIsUserInteracting(true);
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <p className="text-[#6CB6E8] font-semibold text-sm tracking-wide uppercase">
            Who Uses CryptoGlance
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-[#04172C] mt-2 tracking-tight">
            Built for everyone in the crypto ecosystem
          </h2>

          <p className="text-[#5B728A] mt-4 max-w-2xl text-sm md:text-base">
            Whether you're exploring crypto for the first time or building
            advanced tools, CryptoGlance gives you clarity, speed, and reliable
            market intelligence.
          </p>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex flex-col gap-6 md:hidden mb-14">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F6FBFF] border border-[#E1EEF7] rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full h-56 object-cover"
              />

              <div className="px-5 py-5">
                <span className="inline-block bg-[#E0F2FF] text-[#04172C] text-sm px-3 py-1 rounded-full font-semibold mb-3">
                  {slide.label}
                </span>

                <p className="text-xs text-[#5B728A] leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          {/* Filter Buttons */}
          <div className="w-[760px] border border-[#E1EEF7] bg-[#F8FCFF] rounded-full flex flex-wrap py-2 px-2 justify-center gap-3 mb-14 shadow-sm">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleUserClick(index)}
                className={`px-5 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#6CB6E8] text-white scale-105 shadow"
                    : "text-[#5B728A] hover:bg-[#E0F2FF] hover:text-[#04172C]"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden h-[500px] rounded-3xl">
            <motion.div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              animate={{
                x: `-${activeIndex * 50}%`,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {slides.concat(slides).map((slide, i) => (
                <div
                  key={i}
                  className="min-w-[50%] flex-shrink-0 relative rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-[450px] object-cover"
                  />

                  {/* Tag */}
                  <span className="absolute top-4 right-4 bg-[#04172C]/70 backdrop-blur-md text-xs px-3 py-1.5 rounded-full font-semibold text-white tracking-wide">
                    {slide.label}
                  </span>

                  {/* Description */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#04172C]/80  px-6 py-5 text-white">
                    <p className="text-sm md:text-base text-white leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
