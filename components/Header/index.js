import { useEffect, useRef } from "react";
import cn from "classnames";
import gsap from "gsap";
import Button from "components/Button";
import useTranslation from "next-translate/useTranslation";
import { HEADER_LIST } from "config/common";

import styles from "./styles.module.scss";

const Header = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    gsap.to(".header", {
      y: 0,
      duration: 0.5,
      opacity: 1,

    });
  }, []);

  return (
    <header className={cn(styles["header"], "header1")}>
      <div className="container">
        <div className={styles["header-content"]}>
          <div className={styles["header-content-list"]}>
            {HEADER_LIST.map(({ id }) => {
              return (
                <div key={id} className={cn(styles["header-content-list__item"], 'header')}>
                  {t(`header.items.${id}.text`)}
                </div>
              );
            })}
          </div>
          <a
            className={cn(styles["header-content__button"], 'header')}
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
