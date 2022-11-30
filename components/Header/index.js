import { useEffect } from "react";
import cn from "classnames";
import gsap from "gsap";
import Button from "components/Button";
import useTranslation from "next-translate/useTranslation";
import { Link } from "react-scroll";
import { HEADER_LIST } from "config/common";

import styles from "./styles.module.scss";

const Header = () => {
  const { t } = useTranslation("common");

  const headsUp = (el) => {
    let elH = el.clientHeight,
      offset = 0,
      lastScroll = 0;

    const makeOffset = () => {
      let scrollY =
          document.documentElement.scrollTop || document.body.scrollTop,
        diff = scrollY - lastScroll;

      offset = offset + diff > elH ? elH : scrollY < 0 ? 0 : offset + diff;
      offset = offset < 0 ? 0 : offset;

      el.style.top = -offset + "px";

      lastScroll = scrollY;
    };

    makeOffset();

    if (window.addEventListener)
      return window.addEventListener("scroll", makeOffset);
    window.attachEvent("onscroll", makeOffset);
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    headsUp(header);
  }, []);

  useEffect(() => {
    gsap.to(".header", {
      y: 0,
      duration: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <header className={cn(styles["header"], "header")}>
      <div className="container">
        <div className={styles["header-content"]}>
          <div className={styles["header-content-list"]}>
            {HEADER_LIST.map(({ id, to }) => {
              return (
                <Link
                  className={styles["header-content-list-item"]}
                  key={id}
                  to={to}
                  offset={0}
                  smooth={true}
                  duration={800}
                >
                  <div
                    className={styles["header-content-list-item__text"]}
                    data-text={t(`header.items.${id}.text`)}
                  >
                    {t(`header.items.${id}.text`)}
                  </div>
                </Link>
              );
            })}
          </div>
          <a
            className={styles["header-content__button"]}
            href="mailto:dmitriy.mamutov@gmail.com"
          >
            <Button>{t("header.buttonText")}</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
