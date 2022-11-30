import Accordion from "components/Accordion";
import Video from "components/Video";
import { QUESTIONS_VIDEO, QUESTIONS_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";

import styles from "./styles.module.scss";

const Questions = () => {
  const { t } = useTranslation("index");

  return (
    <section className={cn(styles["questions"], "questions")}>
      <Video src={QUESTIONS_VIDEO} />
      <div
        className={styles["questions__title"]}
        dangerouslySetInnerHTML={{ __html: t("questions.title") }}
      />
      <div className="container">
        <div className={styles["questions-list"]}>
          {QUESTIONS_LIST.map(({ id }) => {
            return <Accordion key={id} id={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
