import React from "react";
import MainStructure from "../components/structure/MainStructure";
import LotteContainer from "../containers/LotteContainer";

const Lotte = ({ match }) => {
    const { kind } = match.params;
    console.log(kind) // 해당페이지 url 넘어왔다!
  return (
    <MainStructure>
      <LotteContainer kind={kind}/>
    </MainStructure>
  );
};

export default Lotte;
