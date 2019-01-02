import React from "react";
import styles from "./NoteItem.scss";
import classNames from "classnames/bind";

import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';

import {Line} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//import {} from "../js/canvasjs.react";
import {BarChart} from 'react-easy-chart'; //  이거 잘나옴
import {AreaChart} from 'react-easy-chart'; // 이거 잘나옴
import {LineChart} from 'react-easy-chart'; // 이거 잘나옴
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'; // 잘나옴
import {PieChartStatic as PieChart } from 'react-easy-chart'; //잘나옴
//import PieChart from 'react-minimal-pie-chart';
import {Legend} from 'react-easy-chart'; // 이거 잘나옴
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);







const ShowChart = ({ monthPay, dayPay, yoilPay,
     genderPay, agePay, topcustomer,
      platPay, daePay, soPay, areaPay,sowolPay }) => {



          var dayPayarrX = new Array();
          const arrxMake1 = dayPay.map((day1, i) => {
              if ( day1.x != null ){
                  dayPayarrX .push(day1.x)
              }
           });

           var dayPayarrY = new Array();
           const arryMake1 = dayPay.map((day1, i) => {
               if ( day1.y != null ){
                   dayPayarrY.push(day1.y)
               }
            });


            var yoilPayarrY = new Array();
            const arryMake2 = yoilPay.map((yoil, i) => {
                if ( yoil.y != null ){
                    yoilPayarrY.push(yoil.y)
                }
             });

             var yoilPayarrX = new Array();
             const arrxMake2 = yoilPay.map((yoil, i) => {
                 if ( yoil.x != null ){
                     yoilPayarrX.push(yoil.x)
                 }
              });


            //genderPay
              var genderPayarrY = new Array();
              const arryMake3 = genderPay.map((gen, i) => {
                  if ( gen.y != null ){
                      genderPayarrY.push(gen.y)
                  }
               });



               //6. 구매액 상위 10명
               var daePayarr = new Array();
               const arrMake8 = daePay.map((dae, i) => {
                   if ( dae.x != null ){
                   daePayarr.push({
                       "label" : dae.x,
                       "value" : dae.y
                   })
                 }
               });



    const myDataSource = {
        "chart": {
            "caption": "대분류별 매출",
            "theme": "fusion"
        },
        "data": daePayarr
    };


    const Linedata = {
      labels: dayPayarrX,
      datasets: [
        {
          label: '매출액',
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
          data: dayPayarrY
        }
      ]
    };

    const Linedata2 = {
      labels: yoilPayarrX,
      datasets: [
        {
          label: '매출액',
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
          data: yoilPayarrY
        }
      ]
    };

    const chartConfigs = {
          type: 'column2d',
          width: 600,
          height: 400,
          dataFormat: 'json',
          dataSource: myDataSource,
    };
    const doughnutData = {
    	labels: [
    		'Red',
    		'Green',
    		'Yellow'
    	],
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };


    // 나이대별 매출액
    var agePayarrY = new Array();
    const arryMake4 = agePay.map((age, i) => {
        if ( age.y != null ){
            agePayarrY.push(age.y)
        }
     });
     console.log(agePayarrY)

     var agePayarrX = new Array();
     const arrxMake4 = agePay.map((age, i) => {
         if ( age.x != null ){
             agePayarrX.push(age.x)
         }
      });
console.log(agePayarrX)
    const hdata = {
      labels:agePayarrX,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: agePayarrY
        }
      ]
    };

      const dataBar = {
        labels: yoilPayarrX,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: yoilPayarrY
          }
        ]
      };
      const piedata = {
      	labels: [
      		'여',
      		'남'
      	],
      	datasets: [{
      		data: genderPayarrY,
      		backgroundColor: [
      		'#FF6384',
      		'#36A2EB',

      		],
      		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		]
      	}]
      };

      var platPayarrY = new Array();
      const arryMake5 = platPay.map((plat, i) => {
          if ( plat.y != null ){
              platPayarrY.push(plat.y)
          }
       });

       var platPayarrX = new Array();
       const arrxMake5 = platPay.map((plat, i) => {
           if ( plat.x != null ){
               platPayarrX.push(plat.x)
           }
        });


console.log(areaPay)

      const piedata2 = {
      	labels: platPayarrX ,
      	datasets: [{
      		data: platPayarrY,
      		backgroundColor:[
            '#36A2EB',
            '#FFCE56',
    		'#FF6384'

    		],
    		hoverBackgroundColor: [
            '#36A2EB',
            '#FFCE56',
    		'#FF6384'

    		]
      	}]
      };


  return (
      <div>




      <div className="listChart">

          <div className="listChart1">
              <a href="#"> 월별 매출액</a>
              <BarChart
                  axisLabels={{x: '월별', y: '매출액'}}
                  axes
                  grid
                  colorBars
                  height={300}
                  width={800}
                  barWidth={10}
                  xType={'linear'}
                  y2Type="linear"
                  xDomainRange={[4,9]}
                  yDomainRange={[0.5,1.3]}
                  lineData={monthPay}
                  data={monthPay}
                  />
            </div>




          <div className="listChart2">
            <a href="#"> 일별 매출액</a>
            <Line data={Linedata}/>
          </div>

          <div className="listChart2">
            <a href="#"> 요일별 매출액</a>
            <Line data={Linedata2}/>
          </div>

          <div className="listChart3">
            <a href="#">성별 매출액</a>
            <div className="innerPie">
                <div className = "doughnut">
                    <Pie data={piedata} width={200}/>
                 </div>
            </div>
          </div>

          <div className="listChart4">
                <a href="#"> 나이대별 매출액</a>
                 <HorizontalBar data={hdata} width={700} height={300}/>
          </div>


    <div className="listChart3">
      <ReactFC {...chartConfigs} />
     </div>
     <div className = "doughnut">
           <a href="#"> 플랫폼별 매출액</a>
         <Pie data={piedata2} width={200}/>
      </div>
     <br/>
        <div className = "listChart3">
            <a href="#"> 접속지역별 매출액</a>
              <BarChart
                  axisLabels={{x: '접속지역', y: '매출액'}}
                  axes
                  grid
                  colorBars
                  height={300}
                  width={1450}
                  barWidth={10}
                  xType={'text'}
                  y2Type="linear"
                  lineData={areaPay}
                  data={areaPay}
                  />
        </div>
      </div>

      </div>
  );
};

export default ShowChart;


// <PieChart
//  size={500}
//  innerHoleSize={300}
//  data={[
//    { key: 'A', value: 100},
//    { key: 'B', value: 200},
//    { key: 'C', value: 50}
//  ]}
// />
// <Legend data={[
//  { key: 'A', value: 100},
//  { key: 'B', value: 200 },
//  { key: 'C', value: 50}
// ]} dataId={'key'} />
