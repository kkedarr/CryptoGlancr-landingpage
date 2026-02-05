import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "CryptoGlancr helped me finally make sense of my on-chain activity. The interface is clean, and the insights are easy to understand without feeling overwhelming.",
    name: "Chris P.",
    location: "Product Designer",
    rating: 5,
  },
  {
    id: 2,
    text: "I like how everything is presented clearly — from portfolio visibility to market movements. It feels built for people who want clarity, not noise.",
    name: "Kevin L.",
    location: "Startup Founder",
    rating: 5,
  },
  {
    id: 3,
    text: "What stood out for me is the balance between simplicity and depth. I can quickly check key metrics without digging through complex dashboards.",
    name: "Shayet H.",
    location: "Crypto Researcher",
    rating: 5,
  },
  {
    id: 4,
    text: "The design feels intentional. Smooth animations, clear hierarchy, and no unnecessary clutter. It’s one of the few crypto platforms that feels calm to use.",
    name: "Kingsley K.",
    location: "Frontend Engineer",
    rating: 5,
  },
  {
    id: 5,
    text: "CryptoGlancr makes tracking trends feel intuitive. I don’t need to jump between multiple tools anymore just to understand what’s happening.",
    name: "Michael A.",
    location: "Market Analyst",
    rating: 5,
  },
  {
    id: 6,
    text: "You can tell this product was designed with users in mind. Everything loads fast, and the layout works beautifully across devices.",
    name: "Charles O.",
    location: "Digital Consultant",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-surface text-textPrimary font-geist">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-medium text-brandSoft uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 tracking-tighter text-brand">
          Trusted by early users
        </h2>
        <p className="text-sm md:text-base text-textSecondary">
          What people think about CryptoGlancr
        </p>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {testimonials.map((review) => (
          <motion.div
            key={review.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-surface border border-borderSoft rounded-2xl p-8 flex flex-col justify-between min-h-[260px] shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6">
              “{review.text}”
            </p>

            <div className="flex items-center justify-between">
              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-sm font-semibold text-brand">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">
                    {review.name}
                  </p>
                  <p className="text-xs text-textSecondary">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="text-brandSoft text-sm">
                {"★".repeat(review.rating)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;

