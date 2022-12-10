import animation from "static/animations/confetti/4.json";
import Lottie from "react-lottie";

const Confetti = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: animation,
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        height={"100vh"}
        width={"100vw"}
      />
    </div>
  );
};

export default Confetti;
