import buttonAnimation from "static/animations/error/1.json";
import Lottie from "react-lottie";

const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: buttonAnimation,
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        height="auto"
        width="100%"
      />
    </div>
  );
};

export default LottieLoader;
