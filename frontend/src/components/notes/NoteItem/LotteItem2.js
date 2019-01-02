import React from "react";
import styles from "./NoteItem.scss";
import classNames from "classnames/bind";
import { Series, DataFrame } from 'pandas-js';

const cx = classNames.bind(styles);

// 테이블 만들자!
const LotteItem2 = ({ lChart1 }) => { // 넘겨받은 매개변수이름과 같아야한다.
    console.log(lChart1)
  return (
    <div className={cx("chart-item")}>
        <div className={cx("chart")}>{lChart1.x}</div> &nbsp;
        <div className={cx("chart")}>{lChart1.y}</div> &nbsp;
    </div>
  );
};

export default LotteItem2;
