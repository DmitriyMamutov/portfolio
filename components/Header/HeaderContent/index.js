import Button from "components/Button";
import useTranslation from "next-translate/useTranslation";
import { Link } from "react-scroll";
import { HEADER_LIST } from "config/common";

import styles from "../styles.module.scss";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["header-content"]}>
      <div className={styles["header-content-list"]}>
        {HEADER_LIST.map(({ id, to, offset }) => {
          return (
            <Link
              className={styles["header-content-list-item"]}
              key={id}
              to={to}
              offset={offset}
              smooth="easeOut"
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
  );
};

export default Header;
