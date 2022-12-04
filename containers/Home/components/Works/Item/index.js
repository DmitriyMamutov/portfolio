import { useRef, useState, useEffect, useCallback } from "react";
import cn from "classnames";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { isDesktop, isMobile } from "react-device-detect";
import dynamic from "next/dynamic";
const Video = dynamic(() => import("./Video"), {
  ssr: false,
});
import styles from "../styles.module.scss";

const Works = (props) => {
  const { t, id, videoUrl, color, width, height, url, imageUrl } = props;
  const [active, setActive] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (showComponent === false && window.pageYOffset > 2) {
      setShowComponent(true);
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, [showComponent])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  const ref = useRef(null);

  const onMouseOver = () => {
    if (isDesktop) {
      setActive(true);
      ref.current.play();
    }
  };

  const onMouseLeave = () => {
    setActive(false);
    ref.current.pause();
  };

  const onVideoClick = () => {
    if (isMobile) {
      setActive(!active);
      if (active) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
    }
  };

  const videoClass = cn(styles["works-list-item__video"], {
    [styles["works-list-item__video--active"]]: active,
    [styles["works-list-item__video--white"]]: color === "white",
    [styles["works-list-item__video--violet"]]: color === "violet",
  });

  const slideAnimation = () => {
    let accrodionItem = gsap.utils.toArray(".works-item");

    let mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
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
    });

    mm.add("(max-width: 800px)", () => {
      accrodionItem.forEach((item) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            markers: false,
            start: "top bottom",
            end: "bottom bottom",
            scrub: false,
          },
        });
        tl.to(item, {
          y: 0,
          opacity: 1,
        });
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
      <div
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onVideoClick}
        className={videoClass}
      >
        <video ref={ref} loop muted>
       {showComponent && <Video videoUrl={videoUrl} />}

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
