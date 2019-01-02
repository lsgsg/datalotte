import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";

const GET_NOTES = "notes/GET_NOTES";

const GET_NOTES_SUCCESS = "notes/GET_NOTES_SUCCESS";

const GET_NOTES_FAILURE = "notes/GET_NOTES_FAILURE";
// 액션들을 추가해주고,



export const getNotes = () => ({
  type: GET_NOTES
});




export const getNotesSuccess = ({monthPay,dayPay,yoilPay,genderPay,agePay,topcustomer,platPay,daePay,soPay,areaPay,sowolPay}) => ({
  type: GET_NOTES_SUCCESS,
  payload: {
    monthPay,dayPay,yoilPay,genderPay,agePay,topcustomer,platPay,daePay,soPay,areaPay,sowolPay
  }
});


export const getNotesFailure = error => ({
  type: GET_NOTES_FAILURE,
  payload: {
    error
  }
});

const getNotesEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_NOTES),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax.get(`/api/chart/`)
        .pipe(
          map(response => {
            const notes = response.response;


            //1.월별매출 컬럼 나누기
            var monthPay = new Array();
            const arrMake1 = notes.map((note, i) => {
                if ( note.month != null ){
                monthPay.push({
                     "x" : note.month,
                     "y" : note.month_res
                 })
                }
             });
            //2. 일별매출 컬럼나누기
            var dayPay = new Array();
            const arrMake2 = notes.map((note, i) => {
                if ( note.date != null ){
                dayPay.push({
                    "x" : note.date,
                    "y" : note.date_res
                })
                  }
            });

            //3. 요일별매출 컬럼나누기
            var yoilPay = new Array();
            const arrMake3 = notes.map((note, i) => {
                if ( note.yoil != null ){
                yoilPay.push({
                    "x" : note.yoil,
                    "y" : note.yoil_res
                })
              }
            });

            //4. 성별
            var genderPay = new Array();
            const arrMake4 = notes.map((note, i) => {
                if ( note.gen != null ){
                genderPay.push({
                    "x" : note.gen,
                    "y" : note.gen_res
                });
              }
            });

            //5. 나이대
            var agePay = new Array();
            const arrMake5 = notes.map((note, i) => {
                if ( note.age != null ){
                agePay.push({
                    "x" : note.age,
                    "y" : note.age_res
                })
              }
            });
            //6. 구매액 상위 10명
            var topcustomer = new Array();
            const arrMake6 = notes.map((note, i) => {
                if ( note.tten_id != null ){
                topcustomer.push({
                    "x" : note.tten_id,
                    "y" : note.tten_res
                })
              }
            });

            //7. 플랫폼별 매출
            var platPay = new Array();
            const arrMake7 = notes.map((note, i) => {
                if ( note.plat != null ){
                platPay.push({
                    "x" : note.plat,
                    "y" : note.plat_res
                })
              }
            });

            //8. 대분류별 매출
            var daePay = new Array();
            const arrMake8 = notes.map((note, i) => {
                if ( note.dae != null ){
                daePay.push({
                    "x" : note.dae,
                    "y" : note.dae_res
                })
              }
            });

            //9. 소분류
            var soPay = new Array();
            const arrMake9 = notes.map((note, i) => {
                if ( note.so != null ){
                soPay.push({
                    "x" : note.so,
                    "y" : note.so_res
                })
              }
            });

            //10. 접속지역별 매출
            var areaPay = new Array();
            const arrMake10 = notes.map((note, i) => {
                if ( note.area != null ){
                areaPay.push({
                    "x" : note.area,
                    "y" : note.area_res
                })
              }
            });

            //11. 월별 인기 소분류
            var sowolPay = new Array();
            const arrMake11 = notes.map((note, i) => {
                if ( note.sowol_month != null ){
                sowolPay.push({
                    "x" : note.sowol_month,
                    "y" : note.sowol_so,
                    "z" : note.sowol_res
                  })
              }
            });



            return getNotesSuccess({monthPay,dayPay,yoilPay,genderPay,agePay,topcustomer,platPay,daePay,soPay,areaPay,sowolPay});
          }),
          catchError(error =>
            of({
              type: GET_NOTES_FAILURE,
              payload: error,
              error: true
            })
          )
        );
    })
  );
};

const initialState = {
    monthPay:[],
    dayPay:[],
    yoilPay:[],
    genderPay:[],
    agePay:[],
    topcustomer:[],
    platPay:[],
    daePay:[],
    soPay:[],
    areaPay:[],
    sowolPay:[],

  // 에러 관련 state 등록.
  error: {
    triggered: false,
    message: ""
    },
};

export const notes = (state = initialState, action) => { // notes라는 이름으로 import할거다.
  switch (action.type) {

    case GET_NOTES_SUCCESS:
        return {
        ...state,
        monthPay: action.payload.monthPay,
        dayPay: action.payload.dayPay,
        yoilPay: action.payload.yoilPay,
        genderPay: action.payload.genderPay,
        agePay: action.payload.agePay,
        topcustomer: action.payload.topcustomer,
        platPay: action.payload.platPay,
        daePay: action.payload.daePay,
        soPay: action.payload.soPay,
        areaPay: action.payload.areaPay,
        sowolPay: action.payload.sowolPay,
        };
    case GET_NOTES_FAILURE:
        return {
        ...state,
        error: {
        triggered: true,
        message: "Error! Please Try Again!"
        }
    };
    default:
      return state;
  }
};

export const notesEpics = {
  getNotesEpic
};
