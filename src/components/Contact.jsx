import RevealOnScroll from "./RevealOnScroll";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { siteContent } from "../content/siteContent";
import "./Contact.css";

export default function Contact() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="section contact">
      <span className="eyebrow-number">{contact.number}</span>
      <div className="container">
        <RevealOnScroll as="h2" className="section-title">
          {contact.title}
        </RevealOnScroll>

        <div className="contact__grid">
          <RevealOnScroll delay={0.05} className="contact__block">
            <span className="contact__label">
              <MapPin size={16} /> {contact.addressLabel}
            </span>
            <p className="contact__value">{contact.address}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="contact__block">
            <span className="contact__label">
              <Phone size={16} /> {contact.phoneLabel}
            </span>
            <a className="contact__value contact__link" href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
              {contact.phone}
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25} className="contact__block">
            <span className="contact__label">
              <Mail size={16} /> {contact.emailLabel}
            </span>
            <a className="contact__value contact__link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </RevealOnScroll>
        </div>

        <a href="#top" className="contact__back-to-top" aria-label="Back to top">
          <ArrowUp size={20} />
        </a>
      </div>
    </section>
  );
}
