import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Gallery.css";

export default function Gallery() {
  const { gallery } = siteContent;

  return (
    <section id="work" className="section section--wash gallery">
      <div className="container">
        <div className="gallery__header">
          <RevealOnScroll as="div">
            <span className="section-kicker">{gallery.kicker}</span>
            <h2 className="gallery__title">{gallery.title}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="gallery__subtitle">by {gallery.subtitle}</p>
          </RevealOnScroll>
        </div>

        <div className="gallery__grid">
          {gallery.items.map((item, i) => (
            <RevealOnScroll
              key={item.image}
              delay={i * 0.1}
              className="gallery__item"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
