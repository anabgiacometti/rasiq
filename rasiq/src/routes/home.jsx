import AboutUs from "../components/home/aboutUs";
import Services from "../components/home/services";
import SlideShow from "../components/home/slideShow";

export default function Home() {
  return (
    <>
      <section id="home">
        <SlideShow />
      </section>
      <section id="sobre">
        <AboutUs />
      </section>
      <section id="servicos">
        <Services />
      </section>
    </>
  );
}