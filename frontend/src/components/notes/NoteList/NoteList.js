import React from "react";
import styles from "./NoteList.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import NoteItem from "../NoteItem/NoteItem";
import NoteItem2 from "../NoteItem/NoteItem2";
import NoteItem3 from "../NoteItem/NoteItem3";
import ShowChart from "../NoteItem/ShowChart"
import {BarChart} from 'react-easy-chart'; //  이거 잘나옴
import {AreaChart} from 'react-easy-chart'; // 이거 잘나옴
import {LineChart} from 'react-easy-chart'; // 이거 잘나옴
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'; // 잘나옴
import {PieChartStatic as PieChart } from 'react-easy-chart'; //잘나옴
//import PieChart from 'react-minimal-pie-chart';
import {Legend} from 'react-easy-chart'; // 이거 잘나옴



const cx = classNames.bind(styles);

const NoteList = ({ monthPay, dayPay,yoilPay,genderPay,agePay,topcustomer,platPay,daePay,soPay,areaPay,sowolPay }) => {
  const noteList = topcustomer.map((top, i) => {
      console.log(i)
      return <NoteItem note={top} i= {i+1}/>
  })
console.log(soPay)
  const noteList2 = soPay.map((so, i) => {
      return <NoteItem2 note={so}/>;
  });

  const noteList3 = sowolPay.map((sowol, i) => {
      return <NoteItem3 note={sowol}/>;
  });





  return (
     <div className = "noteChartAll">

         <div className = "note_chart">
            <div className="titleName">롯데 데이터 요약&nbsp;&nbsp;&nbsp; <a className="atag" href="http://127.0.0.1:8000/api/predict/">소분류 예측하기</a></div>
            <div className = {cx("ShowChart")}>
                <ShowChart
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
                    sowolPay={sowolPay}
                      />
            </div>
            <div className={cx("table")}>
                <div className="titleName">구매액 상위 10명 </div>
                <div className="title">랭킹</div>
                <div className="title">ID</div>
                <div className="title">구매액</div>
                <div className="tableIn">
                    <div className="content">{noteList}</div>
                </div>

            </div>

            <div className={cx("table")}>
                <div className="titleName">상위 10개 소분류별 매출 </div>

                <div className="title">소분류</div>
                <div className="title">매출액</div>
                <div className="tableIn">
                    <div className="content">{noteList2}</div>
                </div>

            </div>


            <div className={cx("table")}>
                <div className="titleName">월별 인기 소분류 </div>

                <div className="title">월</div>
                <div className="title">소분류</div>
                <div className="title">매출액</div>



                <div className="tableIn">
                    <div className="content">{noteList3}</div>
                </div>

            </div>



            <div className="lotte">
                <div className="lotteChart">
                <Link to={"/chart/lotte1"} className={cx("lotteList")}>
                  lotte1
                </Link>
                    <LineChart
                    xType={'time'}
                    axes
                    interpolate={'cardinal'}
                    width={1200}
                    height={400}
                    data={[
                    [
                      { x: '1-Jan-15', y: 20 },
                      { x: '1-Feb-15', y: 10 },
                      { x: '1-Mar-15', y: 33 },
                      { x: '1-Apr-15', y: 45 },
                      { x: '1-May-15', y: 15 }
                    ], [
                      { x: '1-Jan-15', y: 10 },
                      { x: '1-Feb-15', y: 15 },
                      { x: '1-Mar-15', y: 13 },
                      { x: '1-Apr-15', y: 15 },
                      { x: '1-May-15', y: 10 }
                    ]
                    ]}
                    />
                </div>
                <div className="lotteChart">
                <Link to={"/chart/lotte2"} className={cx("lotteList")}>
                  lotte2
                </Link>
                <ScatterplotChart
                    data={monthPay}
                    axes
                    verticalGrid
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    dotRadius={10}
                    width={1200}
                    height={400}
                    grid
                    />
                </div>
                <div className="lotteChart">
                <Link to={"/chart/lotte3"} className={cx("lotteList")}>
                  lotte3
                </Link>
                <BarChart
                    axisLabels={{x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis'}}
                    axes
                    grid
                    colorBars
                    height={400}
                    width={1200}
                    interpolate={'cardinal'}
                    y2Type="linear"
                    lineData={monthPay}
                    data={monthPay}
                    />
                </div>
                <div className="lotteChart">
                <Link to={"/chart/lotte4"} className={cx("lotteList")}>
                  lotte4
                </Link>
                <ScatterplotChart
                    data={monthPay}
                    axes
                    verticalGrid
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    dotRadius={10}
                    width={1200}
                    height={400}
                    grid
                    />
                </div>
                <div className="lotteChart">
                <Link to={"/chart/lotte5"} className={cx("lotteList")}>
                  lotte5
                </Link>
                <LineChart
                xType={'time'}
                axes
                interpolate={'cardinal'}
                width={1200}
                height={400}
                data={[
                [
                  { x: '1-Jan-15', y: 20 },
                  { x: '1-Feb-15', y: 10 },
                  { x: '1-Mar-15', y: 33 },
                  { x: '1-Apr-15', y: 45 },
                  { x: '1-May-15', y: 15 }
                ], [
                  { x: '1-Jan-15', y: 10 },
                  { x: '1-Feb-15', y: 15 },
                  { x: '1-Mar-15', y: 13 },
                  { x: '1-Apr-15', y: 15 },
                  { x: '1-May-15', y: 10 }
                ]
                ]}
                />
                </div>
            </div>

        </div>
    </div>
  );
};



export default NoteList;
// <div className="title">5월</div>
// <div className="title">상품명</div>
// <div className="title">매출액</div>
//
// <div className="title">6월</div>
// <div className="title">상품명</div>
// <div className="title">매출액</div>
//
// <div className="title">7월</div>
// <div className="title">상품명</div>
// <div className="title">매출액</div>
//
// <div className="title">8월</div>
// <div className="title">상품명</div>
// <div className="title">매출액</div>
//
// <div className="title">9월</div>
// <div className="title">상품명</div>
// <div className="title">매출액</div>
