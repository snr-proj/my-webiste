import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Films.css";

export default function Films() {
  const { films } = siteContent;

  return (
    <section id="films" className="section films">
      <div className="container">
        <RevealOnScroll as="h2" className="section-title films__heading">
          {films.sectionTitle}
        </RevealOnScroll>

        {films.items.map((item, i) => (
          <article className="films__row" key={item.number}>
            <span className="eyebrow-number films__number">{item.number}</span>
            <div
              className={`films__layout ${
                i % 2 === 1 ? "films__layout--reverse" : ""
              }`}
            >
              <RevealOnScroll className="films__image-wrap">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </RevealOnScroll>
              <RevealOnScroll delay={0.12} className="films__copy">
                <h3 className="films__title">{item.title}</h3>
                {item.subtitle && (
                  <p className="films__subtitle">{item.subtitle}</p>
                )}
                <p className="films__description">{item.description}</p>
              </RevealOnScroll>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
