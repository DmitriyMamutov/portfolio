import Hero from "./components/Hero";
import Header from "components/Header";
import About from "./components/About";
import Questions from "./components/Questions";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
       <About />
      <Experience />
      <Works />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
