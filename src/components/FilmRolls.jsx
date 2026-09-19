import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./FilmRolls.css";

export default function FilmRolls() {
  const { filmRolls } = siteContent;

  return (
    <section className="section filmrolls">
      <span className="eyebrow-number">{filmRolls.number}</span>
      <div className="container">
        <RevealOnScroll as="h2" className="section-title">
          {filmRolls.title}
        </RevealOnScroll>

        <div className="filmrolls__layout">
          <RevealOnScroll className="filmrolls__img filmrolls__img--tall">
            <img src={filmRolls.items[0].image} alt={filmRolls.items[0].alt} loading="lazy" />
          </RevealOnScroll>

          <div className="filmrolls__center">
            <RevealOnScroll delay={0.1}>
              <p className="filmrolls__text">{filmRolls.intro}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} className="filmrolls__img">
              <img src={filmRolls.items[1].image} alt={filmRolls.items[1].alt} loading="lazy" />
            </RevealOnScroll>
          </div>

          <div className="filmrolls__right">
            <RevealOnScroll delay={0.15} className="filmrolls__img">
              <img src={filmRolls.items[2].image} alt={filmRolls.items[2].alt} loading="lazy" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.25}>
              <p className="filmrolls__text">{filmRolls.outro}</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
