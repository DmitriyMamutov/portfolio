import { useEffect, useState } from "react";
import cn from "classnames";
import gsap from "gsap";
import useMediaQuery from "hooks/UseMediaQuery";
import { isDesktop, isMobile } from "react-device-detect";

import dynamic from "next/dynamic";
const HeaderContent = dynamic(() => import("./HeaderContent"), {
  ssr: false,
});
const Menu = dynamic(() => import("components/Menu"), {
  ssr: false,
});

import styles from "./styles.module.scss";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(2);
  const [once, setOnce] = useState(false);

  const isBreakpoint = useMediaQuery(800);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const hideMenu = () => {
    setMenuIsOpen(false);
  };

  const headsUp = (el) => {
    let elH = el.clientHeight,
      offset = 0,
      lastScroll = 0;

    const makeOffset = () => {
      let scrollY =
          document.documentElement.scrollTop || document.body.scrollTop,
        diff = scrollY - lastScroll;

      offset = offset + diff > elH ? elH : scrollY < 0 ? 0 : offset + diff;
      offset = offset < 0 ? 0 : offset;

      el.style.top = -offset + "px";

      lastScroll = scrollY;
    };

    makeOffset();

    if (window.addEventListener)
      return window.addEventListener("scroll", makeOffset);
    window.attachEvent("onscroll", makeOffset);
  };

  useEffect(() => {
    if (menuIsOpen && !once && window.pageYOffset < 2) {
      setOnce(true);
      setTimeout(() => {
        window.scroll(0, 2);
      }, 301);
    }
  }, [menuIsOpen, once]);

  useEffect(() => {
    if (isDesktop) {
      const header = document.querySelector(".header");
      headsUp(header);
    }
  }, []);

  useEffect(() => {
    if (menuIsOpen && isBreakpoint) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";

      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [menuIsOpen, isBreakpoint]);

  useEffect(() => {
    gsap.to(".header", {
      y: 0,
      duration: 1,
      opacity: 1,
    });
  }, []);

  const menuWrapperClass = cn(styles["header__menu-wrapper"], {
    [styles["header__menu-wrapper--open"]]: menuIsOpen,
  });
  const headerMobileButton = cn(styles["header-button"], {
    [styles["header-button--active"]]: menuIsOpen,
  });

  const headerMobileButtonTop = cn(
    styles["header-button__top"],
    styles["header-button__line"],
    {
      [styles["header-button__top--active"]]: menuIsOpen,
    },
  );

  const headerMobileButtonMiddle = cn(
    styles["header-button__middle"],
    styles["header-button__line"],
    {
      [styles["header-button__middle--active"]]: menuIsOpen,
    },
  );

  const headerMobileButtonBottom = cn(
    styles["header-button__bottom"],
    styles["header-button__line"],
    {
      [styles["header-button__bottom--active"]]: menuIsOpen,
    },
  );

  return (
    <>
      <header className={cn(styles["header"], "header")}>
        <div className="container">
          {isBreakpoint ? (
            <>
              <div className={styles["header-content"]}>
                <div onClick={toggleMenu} className={headerMobileButton}>
                  <div className={headerMobileButtonTop} />
                  <div className={headerMobileButtonMiddle} />
                  <div className={headerMobileButtonBottom} />
                </div>
              </div>

              <div className={menuWrapperClass}>
                <Menu onClick={hideMenu} />
              </div>
            </>
          ) : (
            <HeaderContent />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
