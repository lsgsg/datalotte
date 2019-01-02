import React from "react";
import styles from "./MainStructure.scss";
import classNames from "classnames/bind";
import Header from "./Header";

const cx = classNames.bind(styles);

const MainStructure = ({ children,children2 }) => (
  <div>
    <Header />
    <main>{children2}</main>
    <main>{children}</main>

  </div>
);

export default MainStructure;
