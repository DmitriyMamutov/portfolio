import React, { forwardRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useMousePosition from "utils/useMousePosition";
import { distance } from "utils/utils";
import useHover from "utils/useHover";
import { isDesktop } from "react-device-detect";
import cn from "classnames";

import styles from "./styles.module.scss";

// eslint-disable-next-line react/display-name
const Button = forwardRef((props, ref) => {
  const { mouseX, mouseY } = useMousePosition();
  const fillControls = useAnimation();

  const [hoverRef, _isHovered] = useHover();

  useEffect(() => {
    let x = 0;
    let y = 0;
    const node = hoverRef.current;

    if (hoverRef) {
      if (isDesktop) {
        // New values for the translations
        const rect = node.getBoundingClientRect();
        const distanceToTrigger = rect.width * 0.7;
        const distanceMouseButton = distance(
          mouseX + window.scrollX,
          mouseY + window.scrollY,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2,
        );

        // Handle magnetic effect
        if (distanceMouseButton < distanceToTrigger) {
          // Translate button position on hover
          x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
          y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
          node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else {
          // Restore initial position
          node.style.transform = `translate3d(0, 0, 0)`;
        }
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        fillControls.start({
          y: ["80%", "-10%"],
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };

      const handleMouseLeave = () => {
        fillControls.start({
          y: "-80%",
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };

      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          node.removeEventListener("mouseenter", handleMouseEnter);
          node.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [mouseX, mouseY, hoverRef, fillControls]);

  const { children, className, newClass, onClick, id, disabled, type, theme } = props;

  const buttonClass = cn(styles["button"], "button", {
    [styles["button--footer"]]: theme === "footer",
  },
  className
  );

  const fillClass = cn(styles["button__fill"], "fill", {
    [styles["button__fill--footer"]]: theme === "footer",
  });

  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
      id={id}
      type={type}
      role="button"
      aria-pressed="false"
      ref={hoverRef}
    >
      <motion.span data-text={typeof children === "string" ? children : ""}>
        {children}
      </motion.span>
      <motion.div animate={fillControls} className={fillClass} />
    </motion.button>
  );
});

export default Button;
