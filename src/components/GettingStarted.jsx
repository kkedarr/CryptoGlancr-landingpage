import React from "react";
import { motion } from "framer-motion";
import Step1left from "../assets/images/step1left.png";
import Step1right from "../assets/images/step1right.png";
import Step2left from "../assets/images/step2left.png";
import Step2right from "../assets/images/step2right.png";
import Step3left from "../assets/images/step3left.png";
import Step3right from "../assets/images/step3right.png";

const GettingStarted = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-[#04172C] font-geist overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Get started with CryptoGlance in minutes
        </h2>
        <p className="text-[#5B728A] text-sm md:text-base mt-3 max-w-xl mx-auto">
          No complex setup. Just powerful crypto insights at your fingertips.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col items-center gap-12">
        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Visual */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step1left}
              alt="Create account"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#EAF6FF] flex flex-col justify-center px-8 text-center">
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#04172C]">
                1. Create your workspace
              </h3>
              <p className="text-[#5B728A] text-sm leading-relaxed">
                Sign up and personalize your dashboard to track the coins,
                markets, and metrics that matter most to you.
              </p>
            </div>
          </div>

          {/* Supporting Visual */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-3xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step1right}
              alt="Dashboard preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Supporting Visual */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-3xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step2left}
              alt="Live market tracking"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Visual */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step2right}
              alt="Market analytics"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F0FAFF] flex flex-col justify-center px-8 text-center">
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#04172C]">
                2. Monitor the market in real time
              </h3>
              <p className="text-[#5B728A] text-sm leading-relaxed">
                View live prices, charts, volume, and trends across major crypto
                assets — all updated instantly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Visual */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step3left}
              alt="Insights and alerts"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#EEF3FF] flex flex-col justify-center px-8 text-center">
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#04172C]">
                3. Act on powerful insights
              </h3>
              <p className="text-[#5B728A] text-sm leading-relaxed">
                Discover trends, set alerts, export data, and make confident
                decisions backed by accurate market intelligence.
              </p>
            </div>
          </div>

          {/* Supporting Visual */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-3xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step3right}
              alt="Analytics dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;
