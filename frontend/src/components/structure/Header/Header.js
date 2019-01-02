import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";

const cx = classNames.bind(styles);

const Header = ({ onLogout }) => (
  <div className={cx("header")}>
    <Link to={"/"} className={cx("logo")}>
     Lotte
    </Link>
    <Link to={"/chart/lotte1"} className={cx("menu")}>
      lotte1
    </Link>
    <Link to={"/chart/lotte2"} className={cx("menu")}>
      lotte2
    </Link>
    <Link to={"/chart/lotte3"} className={cx("menu")}>
      lotte3
    </Link>
    <Link to={"/chart/lotte4"} className={cx("menu")}>
      lotte4
    </Link>
    <Link to={"/chart/lotte5"} className={cx("menu")}>
      lotte5
    </Link>
  </div>
);

export default Header;
