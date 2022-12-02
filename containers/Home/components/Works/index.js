import { useEffect } from "react";
import { WORKS_LIST } from "config/index";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import Item from "./Item";
import Title from "components/Title";

import styles from "./styles.module.scss";

const Works = () => {
  const { t } = useTranslation("index");

  return (
    <section className={cn(styles["works"], "works", "trigger")}>
      <div className={"container"}>
        <Title color="white" size="h2" level={2}>
          <div className={styles["works__title"]}>{t("works.title")}</div>
        </Title>
        <div className={styles["works-list"]}>
          {WORKS_LIST.map(
            ({ id, color, videoUrl, imageUrl, url, width, height }) => {
              return (
                <Item
                  id={id}
                  key={id}
                  color={color}
                  videoUrl={videoUrl}
                  t={t}
                  imageUrl={imageUrl}
                  width={width}
                  height={height}
                  url={url}
                />
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
