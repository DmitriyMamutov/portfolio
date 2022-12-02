import { useEffect, useRef } from "react";
import { WORKS_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import styles from "./styles.module.scss";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const { t } = useTranslation("index");
  const box = useRef();

  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   ScrollTrigger.create({
    //     trigger: ".trigger",
    //     pin: ".pin",
    //     markers: true,
    //     start: "top top",
    //     end: "bottom bottom",
    //   });
    // });
    // return () => ctx.revert();

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "translateX", "%"), // fast
      clamp = gsap.utils.clamp(-200, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power2",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  return (
    <section className={cn(styles["works"], "works", "trigger")}>
      <div className={"container"}>
        <div className={cn(styles["works-content"])}>
          <div className={styles["works-content-list"]}>
            {WORKS_LIST.map(({ id, imageUrl }, idx) => {
              return (
                <div key={id} className={styles["works-content-list-item"]}>
                  <div
                    className={cn(
                      styles["works-content-list-item-text"],
                      "containerRight",
                    )}
                  >
                    <div
                      className={styles["works-content-list-item-text__title"]}
                    >
                      {t(`works.items.${id}.title`)}
                    </div>
                    <div
                      className={
                        styles["works-content-list-item-text__description"]
                      }
                    >
                      {t(`works.items.${id}.title`)}
                    </div>
                  </div>
                  <div
                    className={cn(styles["works-content-list-item__image"], "skewElem")}
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
      </div>
    </section>
  );
};

export default Works;
