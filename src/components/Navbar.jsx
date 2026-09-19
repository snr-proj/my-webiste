import { useEffect, useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../content/siteContent";
import "./Navbar.css";

const links = [
  { href: "#about", label: siteContent.meta.navLabels.about },
  { href: "#work", label: siteContent.meta.navLabels.work },
  { href: "#films", label: siteContent.meta.navLabels.films },
  { href: "#experience", label: siteContent.meta.navLabels.experience },
  { href: "#contact", label: siteContent.meta.navLabels.contact },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <Camera size={18} strokeWidth={2.4} />
          <span>{siteContent.meta.siteName}</span>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
