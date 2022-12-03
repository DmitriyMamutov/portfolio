import { useEffect } from "react";
import { ZNTU_LOGO, WHAT_I_DO_LIST } from "config/index";
import Image from "next/image";
import Accordion from "./Accordion";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import Title from "components/Title";
import { gsap } from "gsap";
import Tilt from "react-parallax-tilt";

import styles from "./styles.module.scss";

const Experience = () => {
  const { t } = useTranslation("index");

  const slideAnimation = () => {
    let item = gsap.utils.toArray(".item");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {

    item.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top bottom",
          end: "bottom+=100 bottom",
          scrub: 1,
        },
      });
      tl.to(item, {
        y: 0,
        opacity: 1,
      });
    });
  })

  mm.add("(max-width: 800px)", () => {

    item.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top bottom",
          end: "bottom bottom",
          scrub: false,
        },
      });
      tl.to(item, {
        y: 0,
        opacity: 1,
      });
    });
  })
  };

  useEffect(() => {
    slideAnimation();
  }, []);
  return (
    <section className={cn(styles["experience"], "experience")}>
      <div className="container">
        <div className={styles["experience-content"]}>
          <div className={styles["experience-content-block"]}>
            <Title size="h4" level={4} color="white">
              <div
                className={cn(
                  styles["experience-content-block__title"],
                  "item",
                )}
              >
                {t(`experience.experienceTitle`)}
              </div>
            </Title>
            <div className={styles["experience-content-block-accordion"]}>
              <Accordion key={"e1"} id={"e1"} localeName={"experience"} />
            </div>

            <Title size="h4" level={4} color="white">
              <div
                className={cn(
                  styles["experience-content-block__title"],
                  "item",
                )}
              >
                {t(`experience.educationTitle`)}
              </div>
            </Title>
            <div
              className={cn(styles["experience-content-block-card"], "item")}
            >
              <div className={styles["experience-content-block-card__image"]}>
                <Image
                  src={ZNTU_LOGO}
                  width={509}
                  height={599}
                  alt={t(`experience.educationTitle`)}
                />
              </div>

              <div className={styles["experience-content-block-card-text"]}>
                <div
                  className={
                    styles["experience-content-block-card-text__position"]
                  }
                >
                  {t(`experience.educationPosition`)}
                </div>

                <div
                  className={
                    styles["experience-content-block-card-text__place"]
                  }
                >
                  {t(`experience.educationPlace`)}
                </div>

                <div
                  className={
                    styles["experience-content-block-card-text__years"]
                  }
                >
                  {t(`experience.educationYears`)}
                </div>
              </div>
            </div>
          </div>

          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className={styles["experience-content-what"]}
          >
            {WHAT_I_DO_LIST.map(({ id }) => {
              return (
                <div
                  key={id}
                  className={styles["experience-content-what-item"]}
                >
                  <div
                    className={styles["experience-content-what-item__title"]}
                  >
                    {t(`experience.whatItems.${id}.title`)}
                  </div>

                  <div
                    className={
                      styles["experience-content-what-item__description"]
                    }
                  >
                    {t(`experience.whatItems.${id}.description`)}
                  </div>
                </div>
              );
            })}
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Experience;
