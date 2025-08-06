import Lottie, {type LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import voice from "../../assets/voice.json";
import css from "./LottieMicrophone.module.css"

const LottieMicrophone = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isActive, setIsActive] = useState(false);
  const handlePlay = () => {

setIsActive(!isActive)
if(!isActive){
    lottieRef.current?.play();
}else{
    lottieRef.current?.stop();
}
console.log(isActive)
  }
  return (
    <div className={css.wrap}>
      <button onClick={handlePlay}>
        <Lottie
        lottieRef={lottieRef}
          animationData={voice}
          loop={true}
          autoplay={false}
          style={{ width: 60, height: 60 }}
        />
      </button>
    </div>
  );
};
export default LottieMicrophone;
