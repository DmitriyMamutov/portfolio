import cn from "classnames";

import styles from "./styles.module.scss";

const Title = (props) => {
  const { size, children, className, color, level, fontWeight, defaultFont } =
    props;

  const titleClass = cn(
    styles["title"],
    {
      [styles["title--hellix"]]: defaultFont === "Hellix",
      [styles["title--h1"]]: size === "h1",
      [styles["title--h2"]]: size === "h2",
      [styles["title--h3"]]: size === "h3",
      [styles["title--h4"]]: size === "h4",
      [styles["title--h5"]]: size === "h5",
      [styles["title--h6"]]: size === "h6",
      [styles["title--footer"]]: size === "footer",
      [styles["title--300"]]: fontWeight === 300,
      [styles["title--400"]]: fontWeight === 400,
      [styles["title--500"]]: fontWeight === 500,
      [styles["title--600"]]: fontWeight === 600,
      [styles["title--700"]]: fontWeight === 700,
      [styles["title--800"]]: fontWeight === 800,
      [styles["title--black"]]: color === "black",
      [styles["title--white"]]: color === "white",
    },
    className,
  );

  const CustomTag = `h${level}`;

  return <CustomTag className={titleClass}>{children}</CustomTag>;
};

Title.defaultProps = {
  size: "h1",
  color: "white",
  fontWeight: 700,
  level: 2,
  defaultFont: "Hellix",
};

export default Title;
