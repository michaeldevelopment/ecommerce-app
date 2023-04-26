import React from "react";
import { titleTextProps } from "../types/componentTypes";
import styles from "../styles/NavPages.module.scss";

export default function PageTitle({ titleText }: titleTextProps) {
  return (
    <div className={styles.textTitleContainer}>
      <h1> {titleText} </h1>
    </div>
  );
}
