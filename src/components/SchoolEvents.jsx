import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./SchoolEvents.css";

export default function SchoolEvents() {
  const { schoolEvents } = siteContent;

  return (
    <section className="section section--wash school-events">
      <span className="eyebrow-number">{schoolEvents.number}</span>
      <div className="container">
        <RevealOnScroll as="h2" className="section-title">
          {schoolEvents.title}
        </RevealOnScroll>

        <div className="school-events__grid">
          {schoolEvents.items.map((item, i) => (
            <RevealOnScroll
              key={item.image}
              delay={i * 0.1}
              className={`school-events__card school-events__card--${i}`}
            >
              <div className="school-events__img">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <p className="school-events__caption">{item.caption}</p>
              <p className="school-events__location">{item.location}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
