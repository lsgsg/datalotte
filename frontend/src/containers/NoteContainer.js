import React, { Component } from "react";
import { connect } from "react-redux";
import NoteWrapper from "../components/notes/NoteWrapper/NoteWrapper";
import NoteList from "../components/notes/NoteList/NoteList";

import * as noteActions from "../store/modules/notes";

export class NoteContainer extends Component {

  componentDidMount() {
     this.getNotes();
   }

   getNotes = () => {
     const { getNotes } = this.props;
     getNotes();
   };

  render() {
      const { error, monthPay, dayPay,yoilPay,genderPay,agePay,topcustomer,platPay,daePay,soPay,areaPay,sowolPay} = this.props;
      return (
          <div>
           <NoteWrapper>
             <NoteList
                    monthPay={monthPay}
                     dayPay={dayPay}
                     yoilPay={yoilPay}
                     genderPay={genderPay}
                     agePay={agePay}
                     topcustomer={topcustomer}
                     platPay={platPay}
                     daePay={daePay}
                     soPay={soPay}
                     areaPay={areaPay}
                     sowolPay={sowolPay}/>
           </NoteWrapper>
         </div>
      );
    }
}
// notes: state.notes.notes,
// error: state.notes.error

const mapStateToProps = state => ({

  monthPay: state.notes.monthPay,
  dayPay: state.notes.dayPay,
  yoilPay: state.notes.yoilPay,
  genderPay: state.notes.genderPay,
  agePay: state.notes.agePay,
  topcustomer: state.notes.topcustomer,
  platPay: state.notes.platPay,
  daePay: state.notes.daePay,
  soPay: state.notes.soPay,
  areaPay: state.notes.areaPay,
  sowolPay: state.notes.sowolPay,
});

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => {
      dispatch(noteActions.getNotes())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContainer);
