import React from "react";
import styles from "./NoteItem.scss";
import classNames from "classnames/bind";
import {BarChart} from 'react-easy-chart'; //  이거 잘나옴
import {AreaChart} from 'react-easy-chart'; // 이거 잘나옴
import {LineChart} from 'react-easy-chart'; // 이거 잘나옴
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'; // 잘나옴
import {PieChartStatic as PieChart } from 'react-easy-chart';
//import PieChart from 'react-minimal-pie-chart';
import {Legend} from 'react-easy-chart'; // 이거 잘나옴
const cx = classNames.bind(styles);


const ShowChart_Lotte = ({ lChart }) => {

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


      var arr = new Array();
      const rearr = lChart.map((chart, i) => {
          arr.push({
              x : chart.x,
              y : chart.y,
          });
      });
      console.log(arr) // 70~77번까지 아무렇게나 들어온 dataframe json 컬럼 x,y로 바꾸기

  return (

      <div>
      <div className="listChart">
          <div className="listChart1">
          <BarChart
            axisLabels={{x: '대분류', y: '판매량'}}
            axes={500}
            colorBars
            grid
            width={1050}
            height={500}
            xTickNumber={5}
            yTickNumber={5}
            data={arr}
            />
          </div>
          <div className="listChart2">
          <AreaChart
               xType={'text'}
               axes
               dataPoints
               grid
               areaColors={['green', 'pink']}
               interpolate={'cardinal'}
               width={680}
               height={500}
               data={[lChart,arr]}
             />
             </div>
          <div className="listChart3">
            <div className="innerPie">
              <PieChart
               size={500}
               innerHoleSize={300}
               data={[
                 { key: 'A', value: 100},
                 { key: 'B', value: 200},
                 { key: 'C', value: 50}
               ]}
             />
             <Legend data={[
               { key: 'A', value: 100},
               { key: 'B', value: 200 },
               { key: 'C', value: 50}
             ]} dataId={'key'} />
            </div>
          </div>
          <div className="listChart4">
          <ScatterplotChart
          data={data}
          axes
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
          width={1050}
          height={500}
          />
          </div>
      </div>
      </div>
  );
};

export default ShowChart_Lotte;
