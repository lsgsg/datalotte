import React from "react";
import styles from "./NoteWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LotteWrapper = ({children,children2}) => (
  <div className={cx("wrapper")}>
    {children}
    {children2}
  </div>

);

export default LotteWrapper;
