import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./About.css";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="section section--wash about">
      <span className="eyebrow-number">{about.number}</span>
      <div className="container about__grid">
        <RevealOnScroll className="about__text">
          <h2 className="section-title">{about.title}</h2>
          <p>{about.paragraph}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15} className="about__image-wrap">
          <img src={about.image} alt={about.imageAlt} loading="lazy" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
