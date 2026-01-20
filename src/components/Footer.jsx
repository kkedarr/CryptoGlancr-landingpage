import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import Logo from "../assets/images/cryptoglancrlogo.png";
import FooterLogo from "../assets/images/cryptoglancrlogo.png";
import { joinWaitlist } from "../services/waitlistService";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
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
    <footer className="w-full bg-[#CFE9FB] text-[#0B1F33] py-14 px-6 md:px-20 font-geist">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

        {/* LEFT */}
        <div className="w-full md:w-1/3 flex flex-col items-start text-left">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="CryptoGlancr Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="font-bold text-[15px] sm:text-[17px] md:text-[19px] tracking-tight text-[#04172C] leading-none">
              Crypto<span className="text-[#6CB6E8]">Glancr</span>
            </span>
          </Link>

          <p className="text-xs md:text-base text-[#5B728A] leading-relaxed mb-6 max-w-sm">
            A secure multi-currency wallet that lets you deposit, withdraw, and
            transfer both fiat and crypto across Africa and global markets.
          </p>

          <p className="text-xs md:text-base text-[#5B728A]">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>

        {/* MIDDLE */}
        <div className="w-full md:w-auto flex flex-col gap-2 md:gap-3 text-left items-start">
          <h4 className="font-semibold text-sm md:text-base text-[#04172C] mb-2">
            Quick links
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-2 text-xs md:text-base">
            <Link to="/privacy" className="hover:underline">
              Privacy policy
            </Link>

            <Link to="/terms" className="hover:underline">
              Terms of service
            </Link>

            <a
              href="mailto:dausabstephanie3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contact us
            </a>

            <a
              href="https://chat.whatsapp.com/HjsKmLrb3bA9Y9zevC0HeT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp Community
            </a>
          </div>

          <img
            src={FooterLogo}
            alt="CryptoGlancr"
            className="w-[50px] mt-0 sm:mt-6 object-contain"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-auto">
          <form onSubmit={handleSubmit} className="w-full">

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex items-center bg-[#04172C] rounded-lg overflow-hidden w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="flex-grow px-4 py-3 bg-[#04172C] text-white placeholder-gray-300 text-sm focus:outline-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6CB6E8] text-[#04172C] px-6 py-3 text-sm font-semibold border-l border-[#CFE9FB] hover:bg-white transition"
              >
                {loading ? "Joining..." : "Join waitlist"}
              </motion.button>
            </motion.div>

            {message && (
              <p
                className={`text-xs mt-2 ${
                  message.includes("added") ? "text-[#16A34A]" : "text-[#DC2626]"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
