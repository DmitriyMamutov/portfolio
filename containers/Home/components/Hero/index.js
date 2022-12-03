import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import cn from "classnames";
import Video from "components/Video";
import useTranslation from "next-translate/useTranslation";
import Button from "components/Button";
import Title from "components/Title";
import { HERO_VIDEO } from "config/index";

import styles from "./styles.module.scss";

const Hero = () => {
  const { t } = useTranslation("index");

  useEffect(() => {
    const myText = new SplitType(".animation-text");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      gsap.to(".char", {
        y: 0,
        stagger: 0.007,
        delay: 0,
        opacity: 1,
        duration: 0.5,
      });

      gsap.to(".animation-opacity", {
        opacity: 1,
        y: 0,
        delay: 0.45,
        duration: 1,
      });
    });
    mm.add("(max-width: 800px)", () => {
      gsap.to(".char", {
        y: 0,
        stagger: 0,
        delay: 0,
        opacity: 1,
        duration: 1,
      });

      gsap.to(".animation-opacity", {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 1,
      });
    });
  }, []);

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__wrapper"]}>
        <Video src={HERO_VIDEO} />
        <div className="container">
          <div className={styles["hero-content"]}>
            <Title color="white" level={1}>
              <div
                className={cn(
                  styles["hero-content__name"],
                  "animation-text",
                  "char",
                )}
              >
                {t("hero.name")}
              </div>
            </Title>
            <div
              className={cn(
                styles["hero-content__position"],
                "animation-text",
                "char",
              )}
            >
              {t("hero.position")}
            </div>
            <div
              className={cn(
                styles["hero-content__description"],
                "animation-opacity",
              )}
            >
              {t("hero.description")}
            </div>
            <div
              className={cn(
                styles["hero-content__button"],
                "animation-opacity",
              )}
            >
              <a href="mailto:dmitriy.mamutov@gmail.com">
                <Button>{t("hero.buttonText")}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
