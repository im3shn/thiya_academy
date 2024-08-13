import React from "react";
import check from '../../../assets/check/checkIcon.png';
import styles from "./Check.module.css";
export const Check = () => {
    return (
        <img className={styles.check} src={check} />
    );
}