import React, { Component } from "react";
import { connect } from "react-redux";
import LotteWrapper2 from "../components/notes/NoteWrapper/LotteWrapper2";
import LotteList2 from "../components/notes/NoteList/LotteList2";

import * as chartActions2 from "../store/modules/LotteChart2";

export class LotteContainer2 extends Component {

  componentDidMount() {
     this.getlChart2();
   }

   getlChart2 = () => {
     const { getlChart2 } = this.props;
     getlChart2();
   };

  render() {
      const {error, lChart2} = this.props;
      return (
          <div>
           <LotteWrapper2>
             <LotteList2 lChart2={lChart2}/>
           </LotteWrapper2>
         </div>
      );
    }
}

const mapStateToProps = state => ({
  lChart2: state.lChart2.lChart2,
  error: state.lChart2.error
});

const mapDispatchToProps = dispatch => {
  return {
    getlChart2: () => {
      dispatch(chartActions2.getlChart2());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LotteContainer2);
