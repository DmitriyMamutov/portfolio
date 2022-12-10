import { useEffect, useState, useCallback } from "react";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { gsap } from "gsap";
import { FOOTER_LIST } from "config/common";
import Link from "next/link";
import Image from "next/image";
import Title from "components/Title";
import { isDesktop } from "react-device-detect";

import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("components/ContactForm"), {
  ssr: false,
});

import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation("common");

  const [showComponent, setShowComponent] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (!isDesktop && showComponent === false && window.pageYOffset >= 1) {
      setShowComponent(true);
      window.removeEventListener("scroll", toggleVisibility);
    }else{
      setShowComponent(true);
    }
  }, [showComponent]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".questions__wrapper");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      accrodionItem.forEach((item) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer",
            markers: false,
            start: "top+=150 bottom",
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
            start: "top+=150 bottom",
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
          <div className={styles["footer-content-block"]}>
            <Title level={4} size="footer" color="white">
              <div className={styles["footer-content-block__title"]}>
                {t("footer.title")}
              </div>
            </Title>
            <div className={styles["footer-content-block__description"]}>
              {t("footer.description")}
            </div>
            <div className={styles["footer-content-block-list"]}>
              {FOOTER_LIST.map(({ url, id, iconUrl }) => {
                return (
                  <div
                    key={id}
                    className={styles["footer-content-block-list-item"]}
                  >
                    <Link href={url} prefetch={false}>
                      <a
                        role="link"
                        aria-label={`${t("footer.buttonText")} ${id}`}
                        target="_blank"
                      >
                        <Image
                          src={iconUrl}
                          width={128}
                          height={128}
                          alt={id}
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles["footer-content-form"]}>
            {showComponent && <ContactForm />}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
