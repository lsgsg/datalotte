import React from "react";
import styles from "./NoteWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles); // NoteWrapper.js에 사용할 scss , 데코레이션 등록

const NoteWrapper = ({children,children2,children3,children4}) => (
  <div className={cx("wrapper")}>
    {children}
    {children2}
    {children3}
    {children4}
  </div>

);
// NoteWrapper 객체는 childern을 매개변수로 가지는 객체이다. 자식객체를 꼭가져야하는거지...


export default NoteWrapper;
