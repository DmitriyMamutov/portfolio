import { useState, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "../styles.module.scss";

const Accordion = (props) => {
  const { id } = props;
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
        <div className={styles["accordion-item__title"]}>
          {t(`questions.items.${id}.title`)}
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
        <div className={styles["accordion-hidden_content__text"]}>
          {t(`questions.items.${id}.text`)}
        </div>
      </div>
    </div>
  );
};
export default Accordion;
