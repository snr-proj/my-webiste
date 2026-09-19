import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Wedding.css";

export default function Wedding() {
  const { wedding } = siteContent;
  const [tall, ...rest] = wedding.items;

  return (
    <section className="section wedding">
      <span className="eyebrow-number">{wedding.number}</span>
      <div className="container wedding__grid">
        <RevealOnScroll className="wedding__tall">
          <img src={tall.image} alt={tall.alt} loading="lazy" />
        </RevealOnScroll>

        <div className="wedding__right">
          <div className="wedding__pair">
            {rest.map((item, i) => (
              <RevealOnScroll key={item.image} delay={i * 0.1} className="wedding__small">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={0.25} className="wedding__quote-wrap">
            <p className="wedding__quote">{wedding.quote}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
