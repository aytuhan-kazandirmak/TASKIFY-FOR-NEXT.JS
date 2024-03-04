import React from "react";
import styles from "./styles.module.css";
type IProps = {
  width: number;
  height: number;
};
const Skeleton: React.FC<IProps> = ({ width, height }) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
};

export default Skeleton;
