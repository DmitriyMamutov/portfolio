import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { gsap } from "gsap";
import Button from "components/Button";
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { FOOTER_LIST } from "config/common";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation("common");

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".questions__wrapper");

    accrodionItem.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          markers: false,
          start: "top+=100 bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.to(item, {
        scale: 0.97,
        y: 10,
        borderRadius: 80,
        overflow: "hidden",
      });
    });
  };

  useEffect(() => {
    slideAnimation();
  }, []);
  return (
    <footer className={cn(styles["footer"], "footer")}>
      <div className="container">
        <div className={styles["footer-content"]}>
          <div className={styles["footer-content__text"]}>
            {t("footer.text")}
          </div>
          <Button className={styles["footer-content__button"]} theme={"footer"}>
            {t("footer.buttonText")}
          </Button>

          <div className={styles["footer-content-list"]}>
            {FOOTER_LIST.map(({ url, id, iconUrl }) => {
              return (
                <div key={id} className={styles["footer-content-list-item"]}>
                  <Link href={url} prefetch={false}>
                    <a target="_blank">
                      <Image src={iconUrl} width={128} height={128} alt={id} />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;