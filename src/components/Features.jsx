import React from "react";
import { motion } from "framer-motion";
import SeamlessP2PImage1 from "../assets/images/seamlessptopimage1.png";
import SeamlessP2PImage2 from "../assets/images/seamlessptopimage2.png";
import SeamlessP2PImage3 from "../assets/images/seamlessptopimage3.png";

import {
  SiBitcoin,
  SiEthereum,
  SiSolana,
  SiBinance,
  SiPolygon,
  SiCardano,
  SiRipple,
  SiDogecoin,
} from "react-icons/si";

import { FaChartLine, FaCoins, FaBolt, FaShieldAlt } from "react-icons/fa";


const Feature = () => {
  // Flag positions for large screens
  const flagLayout = [
  { icon: SiBitcoin, top: "15%", left: "5%", color: "#F7931A" },
  { icon: SiEthereum, top: "15%", left: "28%", color: "#627EEA" },
  { icon: SiSolana, top: "15%", left: "51%", color: "#00FFA3" },
  { icon: SiBinance, top: "15%", left: "74%", color: "#F3BA2F" },

  { icon: SiPolygon, top: "45%", left: "18%", color: "#8247E5" },
  { icon: SiCardano, top: "45%", left: "41%", color: "#0033AD" },
  { icon: SiRipple, top: "45%", left: "64%", color: "#0085C0" },
  { icon: SiDogecoin, top: "45%", left: "87%", color: "#C2A633" },

  { icon: FaChartLine, top: "75%", left: "5%", color: "#16A34A" },
  { icon: FaCoins, top: "75%", left: "28%", color: "#F59E0B" },
  { icon: FaBolt, top: "75%", left: "51%", color: "#EAB308" },
  { icon: FaShieldAlt, top: "75%", left: "74%", color: "#2563EB" },
];


  return (
    <section className="w-full px-4 sm:px-6 md:px-20 py-16 bg-white text-[#04172C] overflow-visible">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[11px] sm:text-sm font-bold text-[#6CB6E8] uppercase tracking-widest mb-2">
            FEATURES
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">
            Everything you need to understand the crypto market.
          </h2>

          <p className="text-[#5B728A] text-xs sm:text-sm max-w-2xl mx-auto">
            Real-time data, powerful analytics, and beautiful visualizations —
            all in one dashboard.
          </p>
        </motion.div>

        {/* Market Coverage Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mt-8 bg-[#04172C] text-white rounded-3xl px-3 sm:px-10 py-6 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
            {/* Left Content */}
            <div className="md:max-w-[55%] text-center md:text-left pt-6 md:pt-10">
              <span className="inline-block bg-[#6CB6E8] text-[#04172C] text-[10px] sm:text-xs px-4 py-2 rounded-full mb-5 font-semibold">
                Global Market Coverage
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-snug">
                Track crypto prices
                <br />
                <span className="text-[#6CB6E8]">Across global markets</span>
              </h3>

              <p className="text-white/80 mt-4 text-[12px] sm:text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                Monitor live prices, volume, market caps, and performance of
                thousands of cryptocurrencies across multiple regions and
                exchanges — all updated in real time.
              </p>
            </div>

            {/* Right Visual */}
            <div className="relative md:w-[45%] w-full h-[360px] sm:h-[420px] md:h-[430px] pt-8">
              {/* Desktop Layout */}
              <div className="hidden sm:block w-full h-full relative">
                {flagLayout.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={i}
                      className="absolute flex items-center justify-center"
                      style={{
                        top: item.top,
                        left: item.left,
                        transform: "translate(-50%, -50%)",
                        width: "90px",
                        height: "90px",
                      }}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon size={42} color={item.color} />
                    </motion.div>
                  );
                })}
              </div>


              {/* Mobile Layout */}
              <div className="sm:hidden grid grid-cols-3 gap-3 place-items-center">
                {flagLayout.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={i}
                      className="w-[70px] h-[70px] flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon size={34} color={item.color} />
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </motion.div>

        {/* Lower Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Charts Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="bg-[#F6FBFF] rounded-3xl p-6 sm:p-8 shadow hover:shadow-lg transition-all duration-300 text-center md:text-left border border-[#E1EEF7]"
          >
            <span className="inline-block bg-[#E0F2FF] text-[#04172C] text-[10px] sm:text-xs px-4 py-1 rounded-full mb-4 font-semibold">
              Interactive Charts
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Visualize <span className="text-[#6CB6E8]">Market Trends</span>
            </h3>

            <p className="text-[#5B728A] text-[12px] sm:text-sm mb-6">
              Explore historical price movements, volume changes, and trend
              indicators with fast, interactive charts powered by Chart.js.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              {[SeamlessP2PImage1, SeamlessP2PImage2, SeamlessP2PImage3].map(
                (src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`chart-preview-${i}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-[90px] sm:w-[110px] md:w-[120px] h-[90px] sm:h-[110px] md:h-[120px] object-cover rounded-lg shadow-sm"
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Alerts & Insights Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow hover:shadow-lg transition-all duration-300 text-center md:text-left border border-[#E1EEF7]"
          >
            <span className="inline-block bg-[#EEF2FF] text-[#04172C] text-[10px] sm:text-xs px-4 py-1 rounded-full mb-4 font-semibold">
              Smart Insights
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Stay ahead of the market
            </h3>

            <p className="text-[#5B728A] text-[12px] sm:text-sm mb-6 max-w-md mx-auto md:mx-0">
              Get curated crypto news, trending assets, and market movements so
              you never miss important opportunities.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {/* Insight Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#F1F7FF] border border-[#E1EEF7] rounded-2xl px-4 py-3 shadow-sm"
              >
                <p className="text-[#04172C] text-sm font-semibold">
                  Bitcoin breaks resistance at $52,300
                </p>
                <p className="text-[11px] text-[#5B728A]">
                  Market momentum increasing
                </p>
              </motion.div>

              {/* Insight Card */}
              <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-[#EEF9FF] border border-[#E1EEF7] rounded-2xl px-4 py-3 shadow-sm"
              >
                <p className="text-[#04172C] text-sm font-semibold">
                  Ethereum volume spikes 18%
                </p>
                <p className="text-[11px] text-[#5B728A]">
                  Traders showing renewed interest
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;