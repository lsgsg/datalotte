import React, { Component } from "react";
import { connect } from "react-redux";
import LotteWrapper from "../components/notes/NoteWrapper/LotteWrapper";
import LotteList from "../components/notes/NoteList/LotteList";

import * as chartActions from "../store/modules/LotteChart";

export class LotteContainer extends Component {

  componentDidMount() {
     this.getlChart();
   }

   getlChart = () => {
     const { getlChart } = this.props;
     getlChart();
   };

  render() {
      const {error, lChart} = this.props;
      return (
          <div>
           <LotteWrapper>
             <LotteList lChart={lChart}/>
           </LotteWrapper>
         </div>
      );
    }
}

const mapStateToProps = state => ({
  lChart: state.lChart.lChart,
  error: state.lChart.error
});

const mapDispatchToProps = dispatch => {
  return {
    getlChart: () => {
      dispatch(chartActions.getlChart());
      console.log(dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LotteContainer);
