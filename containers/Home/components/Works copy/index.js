import { useEffect } from "react";
import { WORKS_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import styles from "./styles.module.scss";

const Works = () => {
  const { t } = useTranslation("index");

  gsap.registerPlugin(ScrollTrigger);


const slideAnimation = ()=>{
  let leftItem = gsap.utils.toArray(".pin");

  leftItem.forEach((item) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        markers: false,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.to(item, {
      xPercent: -50,
    });
  });

}

  useEffect(() => {

slideAnimation()
   
  }, []);
  return (
    <section className={cn(styles["works"], "works","trigger")}>
      <div className={"container"}>
        <div className={styles["works-list"]}>
          {WORKS_LIST.map(({ id, imageUrl }) => {
            return (
              <div key={id} className={styles["works-list-item"]}>
                <div className={cn(styles["works-list-item-text"],'containerRight')}>
                  <div className={styles["works-list-item-text__title"]}>
                    {t(`works.items.${id}.title`)}
                  </div>
                  <div className={styles["works-list-item-text__description"]}>
                    {t(`works.items.${id}.title`)}
                  </div>
                </div>

                <div
                  className={cn(
                    styles["works-list-item__image"],
                    "pin"
                  )}
                >
                  <Image
                    src={imageUrl}
                    alt={t(`works.items.${id}.title`)}
                    width={540}
                    height={560}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
