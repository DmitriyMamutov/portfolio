import { S_PRO_LOGO, ZNTU_LOGO } from "config/index";
import Accordion from "./Accordion";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import styles from "./styles.module.scss";

const Experience = () => {
  const { t } = useTranslation("index");

  return (
    <section className={cn(styles["experience"], "experience")}>
      <div className="container">
        <div className={styles["experience-content"]}>
        <div className={styles["experience-content-block"]}>
        <Accordion key={"e1"} id={"e1"} localeName={"experience"} />

        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
