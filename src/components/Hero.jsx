import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteContent } from "../content/siteContent";
import "./Hero.css";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="hero">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="hero__image"
        fetchpriority="high"
      />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.name}
        </motion.h1>
        <motion.p
          className="hero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.title}
        </motion.p>
        <motion.a
          href={hero.ctaTarget}
          className="btn btn--light hero__cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.ctaLabel}
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
