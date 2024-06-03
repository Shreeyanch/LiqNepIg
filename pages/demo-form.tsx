import type { NextPage } from "next";
import Form from "../components/form";
import FrameComponent from "../components/frame-component";
import styles from "./demo-form.module.css";

const DemoForm: NextPage = () => {
  return (
    <div className={styles.demoForm1}>
      <div className={styles.shareYourTravelsFormParent}>
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <div className={styles.welcomeToLiquors}>
              Welcome to Liquors Nepal.
            </div>
            <div className={styles.newcallout}>
              <div className={styles.newcalloutChild} />
              <div className={styles.newcalloutItem} />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.completeTheFormContainer}>
                <span>
                  Complete the form to get a code via SMS
                  <span className={styles.span}>{` `}</span>on your phone. Show
                  the code to the staff for a free appetizer.
                </span>
              </div>
            </div>
          </div>
          <Form />
        </div>
        <div className={styles.dRenderingIsometricFdgdf1Wrapper}>
          <img
            className={styles.dRenderingIsometricFdgdf1Icon}
            alt=""
            src="/3drenderingisometricfdgdf-1@2x.png"
          />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default DemoForm;
