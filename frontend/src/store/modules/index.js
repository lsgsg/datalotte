import { notes, notesEpics } from "./notes";
import { lChart, lChartEpics } from "./LotteChart";
import { lChart2, lChartEpics2 } from "./LotteChart2";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({notes,lChart,lChart2});
export const rootEpics = combineEpics(notesEpics.getNotesEpic, lChartEpics.getlChartEpic,lChartEpics2.getlChartEpic2);
