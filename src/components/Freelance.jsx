import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Freelance.css";

export default function Freelance() {
  const { freelance } = siteContent;

  return (
    <section className="section section--wash freelance">
      <span className="eyebrow-number">{freelance.number}</span>
      <div className="container">
        <RevealOnScroll as="h2" className="section-title">
          {freelance.title}
        </RevealOnScroll>

        <div className="freelance__grid">
          {freelance.items.map((item, i) => (
            <RevealOnScroll
              key={item.image}
              delay={i * 0.08}
              className="freelance__item"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
