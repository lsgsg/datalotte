import React from "react";
import styles from "./NoteItem.scss";
import {Line} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
import classNames from "classnames/bind";
import {BarChart} from 'react-easy-chart'; //  이거 잘나옴
import {AreaChart} from 'react-easy-chart'; // 이거 잘나옴
import {LineChart} from 'react-easy-chart'; // 이거 잘나옴
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'; // 잘나옴
import {PieChartStatic as PieChart } from 'react-easy-chart';
//import PieChart from 'react-minimal-pie-chart';
import {Legend} from 'react-easy-chart'; // 이거 잘나옴
const cx = classNames.bind(styles);


const ShowChart_Lotte2 = ({ lChart2 }) => {

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


      var arrx = new Array();
      const rearrx = lChart2.map((chart, i) => {
          arrx.push(chart.y);
      });

      var arrx2 = new Array();
      const rearrx2 = lChart2.map((chart, i) => {
          arrx2.push(chart.x);
      });
      const Linedata = {
        labels: arrx2,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrx
          }
        ]
      };

      const hdata = {
        labels: ['April','May', 'June', 'July' , "August",'September'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: arrx
          }
        ]
      };
      var arr = new Array();
      const rearr = lChart2.map((chart, i) => {
          arr.push({
              x : chart.x,
              y : chart.y,
          });
      });
      console.log(arr) // 70~77번까지 아무렇게나 들어온 dataframe json 컬럼 x,y로 바꾸기

  return (

      <div>
        <div className="hData">
      <HorizontalBar data={hdata} width={700} height={300}/>
        </div>
        <BarChart
          axisLabels={{x: '대분류', y: '판매량'}}
          xType={'time'}
          colorBars
          grid
          width={1050}
          height={500}
          xTickNumber={5}
          yTickNumber={5}
          data={arr}
          />
      <div className="listChart">

          <LineChart
               xType={'time'}
               axes
               grid
               lineColors={['pink','pink']}
               width={1500}
               height={500}
               data={[lChart2,arr]}
             />
             <div className= "linechart_1">

                <Line data={Linedata}/>
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

export default ShowChart_Lotte2;
