import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Series, DataFrame } from 'pandas-js';

const GET_CHART2 = "notes/GET_LOTTE2"; // type의 이름은 폴더가 달라도 겹치면 안된다. api등록해야지~~
const GET_CHART_SUCCESS2 = "notes/GET_LOTTE2_SUCCESS2";
const GET_CHART_FAILURE2 = "notes/GET_LOTTE2_FAILURE2";
// 액션들을 추가해주고,
export const getlChart2 = () => ({
  type: GET_CHART2
});
export const getlChartSuccess2 = ({lChart2}) => ({
  type: GET_CHART_SUCCESS2,
  payload: {
    lChart2
  }
});
export const getlChartFailure2 = error => ({
  type: GET_CHART_FAILURE2,
  payload: {
    error
  }
});

const getlChartEpic2 = (action$, state$) => {
  return action$.pipe(
    ofType(GET_CHART2),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax.get(`/api/lotte2/`)
        .pipe(
          map(response => {
            const lChart2 = response.response;
            console.log(lChart2);
            return getlChartSuccess2({lChart2});
          }),
          catchError(error =>
            of({
              type: GET_CHART_FAILURE2,
              payload: error,
              error: true
            })
          )
        );
    })
  );
};

const initialState2_2 = {
  lChart2: [],
  // 에러 관련 state 등록.
  error: {
    triggered: false,
    message: ""
    },
};

export const lChart2 = (state = initialState2_2, action) => { // lChart라는 이름으로 import할거다.
  switch (action.type) {

    case GET_CHART_SUCCESS2:
        return {
        ...state,
        lChart2: action.payload.lChart2
        };
    case GET_CHART_FAILURE2:
        return {
        ...state,
        error: {
        triggered: true,
        message: "Error! Please Try Again!2"
        }
    };
    default:
      return state;
  }
};

export const lChartEpics2 = {
  getlChartEpic2
};
