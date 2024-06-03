import type { NextPage } from "next";
import ShareYourTravelsForm from "../components/share-your-travels-form";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const DemoForm1: NextPage = () => {
  return (
    <div className={styles.demoForm2}>
      <div className={styles.dRenderingIsometricFdgdf2Parent}>
        <img
          className={styles.dRenderingIsometricFdgdf2Icon}
          alt=""
          src="/3drenderingisometricfdgdf-2@2x.png"
        />
        <ShareYourTravelsForm />
        <div className={styles.dRenderingIsometricFdgdf1Parent}>
          <img
            className={styles.dRenderingIsometricFdgdf1Icon}
            alt=""
            src="/3drenderingisometricfdgdf-11@2x.png"
          />
          <img
            className={styles.dRenderingIsometricFdgdf2Icon1}
            alt=""
            src="/3drenderingisometricfdgdf-21@2x.png"
          />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default DemoForm1;
