import React, { useState } from "react";
import { motion } from "framer-motion";
import WaitlistPhone from "../assets/images/waitlist-phone.png";
import { joinWaitlist } from "../services/waitlistService";

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setMessage(result.message || "You’ve been added to the waitlist.");
      setEmail("");
    } else {
      setMessage(result.message || "Something went wrong. Try again.");
    }

    setLoading(false);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <motion.section
      className="
        w-full h-[330px]
        bg-brand text-white
        rounded-none sm:rounded-3xl md:rounded-[2rem]
        px-4 sm:px-8 md:px-16
        py-12 sm:py-16
        flex flex-col md:flex-row
        justify-between items-center
        gap-10
        max-w-6xl mx-auto
        my-8 sm:my-10
        overflow-hidden
        font-geist
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left */}
      <motion.div
        className="flex-1 w-full text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 tracking-tighter leading-snug">
          Get early access to CryptoGlancr
        </h2>

        <p className="text-textSecondary mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
          Join the waitlist to receive product updates, early previews,
          and launch notifications as CryptoGlancr evolves.
        </p>

        {/* Email Input */}
        <form onSubmit={handleSubmit}>
          <div
            className="
              flex items-center
              bg-surface
              border border-borderSoft
              rounded-lg overflow-hidden
              w-full max-w-full
              mx-auto md:mx-0
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="
                flex-grow
                px-3 py-2
                sm:px-4 sm:py-3
                bg-surface
                text-textPrimary
                placeholder-textSecondary
                text-xs sm:text-sm
                focus:outline-none
                disabled:opacity-50
              "
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-brandSoft text-brand
                px-3 py-2
                sm:px-6 sm:py-3
                text-xs sm:text-sm
                font-semibold
                rounded-lg
                hover:bg-sky
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading ? "Joining..." : "Join waitlist"}
            </motion.button>
          </div>

          {message && (
            <p
              className={`text-xs mt-2 text-center md:text-left ${
                message.toLowerCase().includes("added")
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {message}
            </p>
          )}
        </form>
        <p className="text-[11px] text-textSecondary mt-3">
          CryptoGlancr is a concept product. Features are subject to change.
        </p>

      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hidden md:flex flex-1 justify-center md:justify-end mt-[65px]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <motion.img
          src={WaitlistPhone}
          alt="CryptoGlancr interface preview"
          className="w-[200px] sm:w-[260px] md:w-[340px] object-contain"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default JoinWaitlist;
