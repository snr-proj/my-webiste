import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Internship.css";

function Row({ items, startDelay = 0 }) {
  return (
    <div className="internship__grid">
      {items.map((item, i) => (
        <RevealOnScroll
          key={item.image}
          delay={startDelay + i * 0.1}
          className="internship__item"
        >
          <div className="internship__img">
            <img src={item.image} alt={item.alt} loading="lazy" />
          </div>
          <p className="internship__caption">{item.caption}</p>
        </RevealOnScroll>
      ))}
    </div>
  );
}

export default function Internship() {
  const { internship } = siteContent;

  return (
    <section className="section internship">
      <span className="eyebrow-number">{internship.number}</span>
      <div className="container">
        <RevealOnScroll as="h2" className="section-title">
          {internship.title}
        </RevealOnScroll>

        <Row items={internship.items} />

        <div className="internship__divider">
          <span className="internship__divider-number">{internship.number2}</span>
        </div>
        <Row items={internship.itemsSecondary} startDelay={0.15} />
      </div>
    </section>
  );
}
