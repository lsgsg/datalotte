import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Series, DataFrame } from 'pandas-js';

const GET_CHART = "notes/GET_CHART"; // type의 이름은 폴더가 달라도 겹치면 안된다. api등록해야지~~
const GET_CHART_SUCCESS = "notes/GET_CHART_SUCCESS";
const GET_CHART_FAILURE = "notes/GET_CHART_FAILURE";
// 액션들을 추가해주고,
export const getlChart = () => ({
  type: GET_CHART
});
export const getlChartSuccess = ({lChart}) => ({
  type: GET_CHART_SUCCESS,
  payload: {
    lChart
  }
});
export const getlChartFailure = error => ({
  type: GET_CHART_FAILURE,
  payload: {
    error
  }
});

const getlChartEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_CHART),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax.get(`/api/lotte1/`)
        .pipe(
          map(response => {
            const lChart = response.response;
            console.log(lChart);
            return getlChartSuccess({lChart});
          }),
          catchError(error =>
            of({
              type: GET_CHART_FAILURE,
              payload: error,
              error: true
            })
          )
        );
    })
  );
};

const initialState2 = {
  lChart: [],
  // 에러 관련 state 등록.
  error: {
    triggered: false,
    message: ""
    },
};

export const lChart = (state = initialState2, action) => { // lChart라는 이름으로 import할거다.
  switch (action.type) {

    case GET_CHART_SUCCESS:
        return {
        ...state,
        lChart: action.payload.lChart
        };
    case GET_CHART_FAILURE:
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

export const lChartEpics = {
  getlChartEpic
};
