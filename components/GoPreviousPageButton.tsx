import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/PreviousButton.module.scss";

const GoPreviousPageButton = () => {
  const router = useRouter();
  return (
    <button
      className={styles.previousButtonStyle}
      onClick={() => router.back()}
    >
      Go back
    </button>
  );
};

export default GoPreviousPageButton;
