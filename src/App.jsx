import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import FilmRolls from "./components/FilmRolls";
import Freelance from "./components/Freelance";
import Wedding from "./components/Wedding";
import SchoolEvents from "./components/SchoolEvents";
import Films from "./components/Films";
import Advertisements from "./components/Advertisements";
import Internship from "./components/Internship";
import Reflection from "./components/Reflection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <FilmRolls />
        <Freelance />
        <Wedding />
        <SchoolEvents />
        <Films />
        <Advertisements />
        <Internship />
        <Reflection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
