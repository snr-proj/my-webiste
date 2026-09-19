import RevealOnScroll from "./RevealOnScroll";
import { siteContent } from "../content/siteContent";
import "./Experience.css";

export default function Experience() {
  const { experience } = siteContent;

  return (
    <section id="experience" className="section experience">
      <img
        src={experience.backgroundImage}
        alt={experience.backgroundImageAlt}
        className="experience__bg"
        loading="lazy"
      />
      <div className="experience__scrim" />
      <span className="eyebrow-number experience__number">{experience.number}</span>

      <div className="container experience__grid">
        <RevealOnScroll className="experience__col">
          <h2 className="experience__heading">{experience.experienceTitle}</h2>
          <ul className="experience__list">
            {experience.experienceItems.map((item) => (
              <li key={item.role}>
                <p className="experience__role">{item.role}</p>
                {item.detail && <p className="experience__detail">{item.detail}</p>}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="experience__col">
          <h2 className="experience__heading">{experience.educationTitle}</h2>
          {experience.educationItems.map((edu) => (
            <div key={edu.degree} className="experience__edu">
              <p className="experience__role">{edu.degree}</p>
              <p className="experience__detail">{edu.school}</p>
              <p className="experience__detail">{edu.location}</p>
              <p className="experience__detail">{edu.years}</p>
            </div>
          ))}

          <h2 className="experience__heading experience__heading--software">
            {experience.softwareTitle}
          </h2>
          <ul className="experience__software">
            {experience.software.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
