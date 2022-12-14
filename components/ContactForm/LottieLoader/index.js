import buttonAnimation from "static/animations/contact-form";
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
        height={40}
        width={220}
      />
    </div>
  );
};

export default LottieLoader;
