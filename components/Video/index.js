import cn from "classnames";

import styles from "./styles.module.scss";

const Video = ({ src }) => {
  return (
    <div className={cn(styles["video"], "video")}>
      <video autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
