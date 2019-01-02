import React from "react";
import styles from "./NoteList.scss";
import classNames from "classnames/bind";
import LotteItem2 from "../NoteItem/LotteItem2";
import ShowChart_Lotte2 from "../NoteItem/ShowChart_Lotte2"
import { Link } from "react-router-dom";
import {BarChart} from 'react-easy-chart'; //  이거 잘나옴
import {AreaChart} from 'react-easy-chart'; // 이거 잘나옴
import {LineChart} from 'react-easy-chart'; // 이거 잘나옴
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'; // 잘나옴
import {PieChartStatic as PieChart } from 'react-easy-chart'; //잘나옴
//import PieChart from 'react-minimal-pie-chart';
import {Legend} from 'react-easy-chart'; // 이거 잘나옴
const cx = classNames.bind(styles);

const LotteList2 = ({ lChart2 }) => {

  const tableList2 = lChart2.map((lChart1, i) => {
      console.log(lChart1.x + '여기는 LotteItem 전, LotteList')
      return <LotteItem2 lChart1={lChart1} key={lChart1.x} />;
  });
  const data = [
   {
     type: 'One',
     x: 1,
     y: 5
   },
   {
     type: 'Two',
     x: 3,
     y: 1
   },
   {
     type: 'Three',
     x: 0,
     y: 6
   },
   {
     type: 'Four',
     x: 5,
     y: 2
   },
   {
     type: 'Five',
     x: 4,
     y: 4
   },
   {
     type: 'Six',
     x: 5,
     y: 9
   },
   {
     type: 'Seven',
     x: 9,
     y: 1
   },
   {
     type: 'Eight',
     x: 5,
     y: 6
   },
   {
     type: 'Nine',
     x: 3,
     y: 9
   },
   {
     type: 'Ten',
     x: 7,
     y: 9
   }
 ];
  return (

    <div className = "noteChartAll">

        <div className = "note_chart">
           <div className="titleName">이거랑 이거랑</div>
           <div className = {cx("ShowChart")}>
               <ShowChart_Lotte2 lChart2 = { lChart2 } />
           </div>
           <div className={cx("table")}>
               <div className="titleName">이거랑 이거랑해서 나온 결과 </div>
               <div className="title">제목1</div>
               <div className="title">제목2</div>
               <div className="title">제목3</div>
               <div className="title">제목4</div>
               <div className="tableIn">
                   <div className="content">{tableList2}</div>
               </div>

           </div>
           <div className="tableNext">
               <div className="title2">이거 이거 비교차트 </div>
               <BarChart
                   axisLabels={{x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis'}}
                   axes
                   grid
                   colorBars
                   height={450}
                   width={650}
                   interpolate={'cardinal'}
                   y2Type="linear"
                   lineData={lChart2}
                   data={lChart2}
                   />
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
                   data={data}
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
                   lineData={lChart2}
                   data={lChart2}
                   />
               </div>
               <div className="lotteChart">
               <Link to={"/chart/lotte4"} className={cx("lotteList")}>
                 lotte4
               </Link>
               <ScatterplotChart
                   data={data}
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

export default LotteList2;
