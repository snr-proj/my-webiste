import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Reflection.css";

export default function Reflection() {
  const { reflection } = siteContent;

  return (
    <section className="section section--wash reflection">
      <span className="eyebrow-number">{reflection.number}</span>
      <div className="container reflection__inner">
        <RevealOnScroll as="h2" className="reflection__title">
          {reflection.title}
        </RevealOnScroll>
        {reflection.paragraphs.map((p, i) => (
          <RevealOnScroll as="p" key={i} delay={0.1 + i * 0.1} className="reflection__paragraph">
            {p}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
