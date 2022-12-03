import Hero from "./components/Hero";
import Header from "components/Header";
import About from "./components/About";
import Questions from "./components/Questions";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Footer from "components/Footer";

import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <Header />
      <Hero />
       <About />
      <Experience />
      <Works />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
