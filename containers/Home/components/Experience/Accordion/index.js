import { useState, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { gsap } from "gsap";
import Image from "next/image";
import { S_PRO_LOGO, EXPERIENCE_SUBLIST } from "config/index";

import styles from "./styles.module.scss";

const Accordion = (props) => {
  const { id, localeName } = props;
  const { t } = useTranslation("index");

  const [listName, setListName] = useState("");
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const handleOpenList = (name) => () => {
    if (listName === name) {
      setListName("");
      setHeight("0px");
    } else {
      setListName(name);
      setHeight(`${content.current.scrollHeight}px`);
    }
  };

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".accordion");

    accrodionItem.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "bottom bottom",
          end: "bottom+=400 bottom",
          scrub: true,
        },
      });
      tl.to(item, {
        y: 0,
        opacity: 1,
      });
    });
  };

  useEffect(() => {
    slideAnimation();
  }, []);

  return (
    <div className={cn(styles["accordion"], "accordion")} key={id}>
      <div
        onClick={handleOpenList(id)}
        className={cn(styles["accordion-item"], {
          [styles["accordion-item--active"]]: listName === id,
        })}
      >
        <div className={styles["accordion-item-content"]}>
          <div className={styles["accordion-item-content__image"]}>
            <Image
              src={S_PRO_LOGO}
              alt={t(`${localeName}.items.${id}.position`)}
              width={240}
              height={90}
            />
          </div>

          <div className={styles["accordion-item-content-text"]}>
            <div className={styles["accordion-item-content-text__position"]}>
              {t(`${localeName}.items.${id}.position`)}
            </div>
            <div
              className={styles["accordion-item-content-text__company"]}
              dangerouslySetInnerHTML={{
                __html: t(`${localeName}.items.${id}.company`),
              }}
            />
            <div className={styles["accordion-item-content-text__time"]}>
              {t(`${localeName}.items.${id}.time`)}
            </div>
            <div className={styles["accordion-item-content-text__tooling"]}>
              {t(`${localeName}.items.${id}.toolingLess`)}
            </div>
          </div>
        </div>

        <div
          className={cn(styles["accordion-item__icon"], {
            [styles["accordion-item__icon--active"]]: listName === id,
          })}
        />
      </div>
      <div
        style={{ height: `${height}` }}
        ref={content}
        key={id}
        className={cn(styles["accordion-hidden_content"], {
          [styles["accordion-hidden_content--active"]]: listName === id,
        })}
      >
        <div className={styles["accordion-hidden_content__title"]}>
          {t(`${localeName}.items.${id}.toolingTitle`)}
        </div>
        <div className={styles["accordion-hidden_content__text"]}>
          {t(`${localeName}.items.${id}.toolingMore`)}
        </div>
        <ul>
          {EXPERIENCE_SUBLIST.map(({ idx }) => (
            <li key={idx}>
              {t(`${localeName}.items.${id}.workItems.${idx}.text`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
