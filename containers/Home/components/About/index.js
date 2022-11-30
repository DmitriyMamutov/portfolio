import { useEffect } from "react";
import { ABOUT_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import Title from "components/Title";

import styles from "./styles.module.scss";

const About = () => {
  const { t } = useTranslation("index");

  gsap.registerPlugin(ScrollTrigger);

  const slideAnimation = () => {
    let leftItem = gsap.utils.toArray(".left");
    let background = gsap.utils.toArray(".background");
    let rightItem = gsap.utils.toArray(".right");

    leftItem.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top bottom",
          end: "bottom+=400 bottom",
          scrub: true,
        },
      });
      tl.to(item, {
        xPercent: -50,
      });
    });

    background.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top bottom",
          end: "bottom+=400 bottom",
          scrub: true,
        },
      });
      tl.to(item, {
        // scaleX: 2,
        width: "150%",
      });
    });

    rightItem.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top bottom",
          end: "bottom+=400 bottom",
          scrub: true,
        },
      });
      tl.to(item, {
        xPercent: 0,
      });
    });
  };

  useEffect(() => {
    slideAnimation();
  }, []);

  return (
    <section className={cn(styles["about"], "about")}>
      <div className="container">
        <div className={styles["about-content"]}>
          <Title color="white" size="h2" fontWeight={400}>
            <div
              className={styles["about-content__title"]}
              dangerouslySetInnerHTML={{ __html: t("about.title") }}
            />
          </Title>

          <div className={styles["about-content__description"]}>
            {t("about.description")}
          </div>
          <div className={styles["about-content-list"]}>
            {ABOUT_LIST.map(
              ({ id, isSubtitle, isDescription, isIcons, iconsList }) => {
                return (
                  <div
                    key={id}
                    id="about-container"
                    className={styles["about-content-list-block"]}
                  >
                    <div
                      className={cn(
                        styles["about-content-list-block-left"],
                        "left",
                      )}
                    >
                      <div
                        className={cn(
                          styles["about-content-list-block-left__background"],
                          "background",
                        )}
                      />
                      <Title color="white" size="h5" level={5}>
                        <div
                          className={cn(
                            styles["about-content-list-block-left__title"],
                            {
                              [styles[
                                "about-content-list-block-left__title--center"
                              ]]: isDescription,
                            },
                          )}
                        >
                          {t(`about.items.${id}.title`)}
                        </div>
                      </Title>
                      {isSubtitle && (
                        <div
                          className={
                            styles["about-content-list-block-left__subtitle"]
                          }
                        >
                          {t(`about.items.${id}.subtitle`)}
                        </div>
                      )}
                    </div>
                    <div
                      className={cn(
                        styles["about-content-list-block-right"],
                        "right",
                      )}
                    >
                      {isIcons && (
                        <div
                          className={
                            styles["about-content-list-block-right-sublist"]
                          }
                        >
                          {iconsList.map(({ idx, iconUrl }) => {
                            return (
                              <div
                                key={idx}
                                className={
                                  styles[
                                    "about-content-list-block-right-sublist-item"
                                  ]
                                }
                              >
                                <div
                                  className={
                                    styles[
                                      "about-content-list-block-right-sublist-item__icon"
                                    ]
                                  }
                                >
                                  <Image
                                    src={iconUrl}
                                    alt={idx}
                                    width={256}
                                    height={256}
                                  />
                                </div>
                                {/* <div
                                  className={
                                    styles[
                                      "about-content-list-block-right-sublist-item__text"
                                    ]
                                  }
                                >

                            {t(`about.icons.${idx}.text`)}
                                </div> */}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {isDescription && (
                        <div
                          className={
                            styles[
                              "about-content-list-block-right__description"
                            ]
                          }
                        >
                          {t(`about.items.${id}.description`)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
