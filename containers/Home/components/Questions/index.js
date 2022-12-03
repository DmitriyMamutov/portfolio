import Accordion from "components/Accordion";
import Video from "components/Video";
import { QUESTIONS_VIDEO, QUESTIONS_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import Title from "components/Title";

import styles from "./styles.module.scss";

const Questions = () => {
  const { t } = useTranslation("index");

  return (
    <section className={cn(styles["questions"], "questions")}>
      <div className={cn(styles["questions__wrapper"], "questions__wrapper")}>
        <Video src={QUESTIONS_VIDEO} />

        <div className="container">
          <Title size="h3" level={3} color="white">
            <div
              className={styles["questions__title"]}
              dangerouslySetInnerHTML={{ __html: t("questions.title") }}
            />
          </Title>

          <div className={styles["questions-list"]}>
            {QUESTIONS_LIST.map(({ id }) => {
              return <Accordion key={id} id={id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
