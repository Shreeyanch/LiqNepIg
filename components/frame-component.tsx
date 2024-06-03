import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.demoForm1Inner, className].join(" ")}>
      <div className={styles.poweredByParent}>
        <div className={styles.poweredBy}>powered by</div>
        <img
          className={styles.letterLogo2}
          alt=""
          src="/letter-logo-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
