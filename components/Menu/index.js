import useTranslation from "next-translate/useTranslation";
import { Link } from "react-scroll";
import { HEADER_LIST } from "config/common";
import cn from "classnames";
import {isMobile} from 'react-device-detect';

import styles from "./styles.module.scss";

const Menu = ({ onClick }) => {
  const { t } = useTranslation("common");

  return (
    <div className={cn(styles["menu"], "menu")}>
      <div className="container">
        <div className={styles["menu-list"]}>
          {HEADER_LIST.map(({ id, to, offset,offsetMobile }) => {
            return (
              <Link
                className={styles["menu-list-item"]}
                key={id}
                to={to}
                delay={300}
                offset={isMobile ? offsetMobile :offset}
                smooth="easeInOutQuint"
                duration={1200}
                onClick={onClick}
              >
                <div className={styles["menu-list__text"]}>
                  {t(`header.items.${id}.text`)}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
