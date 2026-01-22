import React from "react";
import { motion } from "framer-motion";
import Step1left from "../assets/images/step1left.png";
import Step2right from "../assets/images/step2right.png";
import Step3left from "../assets/images/step3left.png";

const GettingStarted = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-[#04172C] font-geist overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Get started with CryptoGlance in minutes
        </h2>
        <p className="text-[#5B728A] text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
          A simple workflow designed for traders and investors who want clarity,
          speed, and accurate crypto market intelligence.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-6 items-center md:items-stretch">
        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center w-full md:w-[35%]"
        >
          <div className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img
              src={Step1left}
              alt="Create your workspace"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-white/100 backdrop-blur-sm px-8 py-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                1. Create your workspace
              </h3>
              <p className="text-[#5B728A] text-sm md:text-base leading-relaxed">
                Set up your personalized dashboard to track the assets, markets,
                and metrics that align with your trading or investment strategy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="flex justify-center w-full md:w-[35%]"
        >
          <div className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img
              src={Step2right}
              alt="Monitor crypto markets"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-white/100 backdrop-blur-sm px-8 py-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                2. Monitor markets in real time
              </h3>
              <p className="text-[#5B728A] text-sm md:text-base leading-relaxed">
                View live prices, charts, volume, and trends across major crypto
                assets — updated instantly as markets move.
              </p>
            </div>
          </div>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center w-full md:w-[35%]"
        >
          <div className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img
              src={Step3left}
              alt="Act on insights"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-white/100 backdrop-blur-sm px-8 py-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                3. Act on clear insights
              </h3>
              <p className="text-[#5B728A] text-sm md:text-base leading-relaxed">
                Identify trends, follow key signals, and make confident decisions
                backed by reliable data and curated crypto news.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;
