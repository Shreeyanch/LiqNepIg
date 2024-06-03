import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./share-your-travels-form.module.css";

export type ShareYourTravelsFormType = {
  className?: string;
};

const ShareYourTravelsForm: NextPage<ShareYourTravelsFormType> = ({
  className = "",
}) => {
  const onInstagram1Click = useCallback(() => {
    window.open("https://www.instagram.com/signaturenepal/");
  }, []);

  const onInstagram2Click = useCallback(() => {
    window.open("https://www.instagram.com/smirnoff.nepal/");
  }, []);

  return (
    <div className={[styles.shareYourTravelsForm, className].join(" ")}>
      <form className={styles.form}>
        <button className={styles.instagram1} onClick={onInstagram1Click}>
          <img className={styles.ssoIcon} alt="" src="/sso-icon3@2x.png" />
          <div className={styles.label}>Follow @signaturenepal</div>
        </button>
        <button className={styles.instagram1} onClick={onInstagram2Click}>
          <img className={styles.ssoIcon} alt="" src="/sso-icon11@2x.png" />
          <div className={styles.label}>Follow @smirnoff.nepal</div>
        </button>
      </form>
    </div>
  );
};

export default ShareYourTravelsForm;
