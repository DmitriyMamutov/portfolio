import styles from "./styles.module.scss";
const Video = () => {
  return (
    <div className={styles["video"]}>
       <video autoPlay loop muted>
              <source src='/static/videos/index.mp4' type='video/mp4' />
            </video>
    </div>
  );
};

export default Video;
