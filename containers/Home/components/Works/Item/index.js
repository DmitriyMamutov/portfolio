import { useRef, useState, useEffect } from "react";
import cn from "classnames";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles.module.scss";

const Works = (props) => {
  const { t, id, videoUrl, color, width, height,url, imageUrl } = props;
  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const onMouseOver = () => {
    setActive(true);
    ref.current.play();
  };

  const onMouseLeave = () => {
    setActive(false);
    ref.current.pause();
  };

  const videoClass = cn(styles["works-list-item__video"], {
    [styles["works-list-item__video--active"]]: active,
    [styles["works-list-item__video--white"]]: color === "white",
    [styles["works-list-item__video--violet"]]: color === "violet",
  });

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".works-item");

    accrodionItem.forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top-=100 bottom",
          end: "bottom-=200 bottom",
          scrub: 1,
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
    <div key={id} className={cn(styles["works-list-item"], "works-item")}>
      <div className={styles["works-list-item-text"]}>
        <Link href={url} prefetch={false}>
          <a
            target="_blank"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            className={styles["works-list-item-text__title"]}
          >
            {t(`works.items.${id}.title`)}
          </a>
        </Link>

        <div className={styles["works-list-item-text__description"]}>
          {t(`works.items.${id}.description`)}
        </div>
      </div>
      <div className={videoClass}>
        <video ref={ref} loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className={styles["works-list-item__image"]}>
          <Image
            src={imageUrl}
            width={width}
            height={height}
            alt={t(`works.items.${id}.title`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
