import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { gsap } from "gsap";
import Button from "components/Button";
import { FOOTER_LIST } from "config/common";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation("common");

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".questions__wrapper");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      accrodionItem.forEach((item) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer",
            markers: false,
            start: "top+=100 bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
        tl.to(item, {
          scale: 0.97,
          y: 10,
          borderRadius: 80,
          overflow: "hidden",
        });
      });
    });

    mm.add("(max-width: 800px)", () => {
      accrodionItem.forEach((item) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer",
            markers: false,
            start: "top+=100 bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
        tl.to(item, {
          scale: 0.97,
          y: 10,
          borderRadius: 40,
          overflow: "hidden",
        });
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
          <div
            className={styles["footer-content__text"]}
            dangerouslySetInnerHTML={{ __html: t("footer.text") }}
          />

          <a
            className={styles["footer-content__button"]}
            href="mailto:dmitriy.mamutov@gmail.com"
          >
            <Button theme={"footer"}>{t("footer.buttonText")}</Button>
          </a>

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
