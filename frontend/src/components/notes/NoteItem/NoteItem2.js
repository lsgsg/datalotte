import React from "react";
import styles from "./NoteItem.scss";
import classNames from "classnames/bind";
import { Series, DataFrame } from 'pandas-js';

const cx = classNames.bind(styles);




// 테이블 만들자!
const NoteItem2 = ({ note }) => {
  return (
    <div className={cx("chart-item")}>

        <div className={cx("chart")}>{note.x}</div>
        <div className={cx("chart")}>{note.y}</div>
    </div>
  );
};

export default NoteItem2;
// CLNT_ID: 4140076
// HITS_SEQ: 13
// PD_ADD_NM: "색상:BLK0_(BLK0)BLACK|사이즈:120 / 2개"
// PD_BRA_NM: "데상트"
// PD_BUY_AM: 39000
// PD_BUY_CT: "2"
// PD_C: 570603
// SESS_ID: 10189797
// index: 1
