const Video = (props) => {
  const { videoUrl } = props;
  return <source src={videoUrl} type="video/mp4" />;
};

export default Video;
