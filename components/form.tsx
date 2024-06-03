import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./form.module.css";

export type FormType = {
  className?: string;
};

const Form: NextPage<FormType> = ({ className = "" }) => {
  const onInstagram1Click = useCallback(() => {
    window.open("https://www.instagram.com/signaturenepal/");
  }, []);

  const onInstagram2Click = useCallback(() => {
    window.open("https://www.instagram.com/smirnoff.nepal/");
  }, []);

  const onSSOLoginClick = useCallback(() => {
    window.open("https://reviewthis.biz/gbps");
  }, []);

  return (
    <form className={[styles.form, className].join(" ")}>
      <div className={styles.formFields}>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Name"
            label="Name"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="PhoneNumber"
            label="Phone Number"
            size="medium"
            required={true}
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="PhoneNumber"
            label="DOB"
            size="medium"
            required={true}
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="PhoneNumber"
            label="Email"
            size="medium"
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
        </div>
      </div>
      <button className={styles.instagram1} onClick={onInstagram1Click}>
        <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
        <div className={styles.label}>Follow @signaturenepal</div>
      </button>
      <button className={styles.instagram1} onClick={onInstagram2Click}>
        <img className={styles.ssoIcon} alt="" src="/sso-icon1@2x.png" />
        <div className={styles.label}>Follow @smirnoff.nepal</div>
      </button>
      <button className={styles.ssoLogin} onClick={onSSOLoginClick}>
        <img className={styles.ssoIcon2} alt="" src="/sso-icon2.svg" />
        <div className={styles.label2}>{`Review us on Google   `}</div>
      </button>
      <button className={styles.formSubmitButton}>
        <div className={styles.submit}>Submit</div>
      </button>
    </form>
  );
};

export default Form;
