------------------------------README-------------------------------

*** 빅데이터를 활용한 소비자 행동예측

- 고객들의 빅데이터 축적, 모델의 반복학습을 통해 좀 더 정확한 예측과 지속적인 추천 서비스 제공 목적
- 고객군별 맞춤형 서비스를 마케팅에 활용하여 고객 만족도 및 매출 증대효과 기대

- 분석방법은 logistic regression, MLP classifier, DNN classifier
- 정확도가 가장 높은 MLP 채택



*** 리액트 여는 방법

1. node.js 부터 깔아주세요 lts로.... 
2. cmd창에서 전역으로 npm install 하시고 
3. npm install -g yarn  한다음... 
4. 우리조 프로젝트를 알집에서 푼뒤..  (경로 C:\work\frontend ) , 
5. 이클립스에서 open project from .... 해서 C:\work\backend 가져오거나 거기다 복붙! 
6. cmd 창에서 activate test한다음에 

7. pip install djangorestframework 하고 

create database project2 
use project2 


mysql에서 테이블을 만들어주세요 
	1. Product table
create table product (
   CLNT_ID int(50),
   SESS_ID int(50),
   HITS_SEQ int(50),
   PD_C int(50),
   PD_ADD_NM varchar(50),
   PD_BRA_NM varchar(50),
   PD_BUY_AM  int(50) ,
   PD_BUY_CT int(50),
   result int(50)
)charset=utf8;

LOAD DATA LOCAL INFILE "C:/work/danal/lotte/product_sample.csv" INTO  TABLE project2.product FIELDS TERMINATED BY "," IGNORE 1 LINES;
	2. Customcreate table custom (
	CLNT_ID int(50),
	CLNT_GENDER varchar(10),
	CLNT_AGE int(10))charset=utf8;LOAD DATA LOCAL INFILE "C:/work/danal/lotte/custom_sample.csv" INTO  TABLE project2.custom FIELDS TERMINATED BY "," IGNORE 1 LINES;
	3. Masterdrop table master;create table master (PD_C int(50),
	PD_NM varchar(50),
	CLAC1_NM varchar(50),CLAC2_NM varchar(50),CLAC3_NM varchar (50)
	)charset=utf8;LOAD DATA LOCAL INFILE "C:/work/danal/lotte/master_2.csv" INTO  TABLE project2.master FIELDS TERMINATED BY "," IGNORE 1 LINES;
	4. Session
	CLNT_ID    SESS_ID   SESS_SEQ  SESS_DT     TOT_PAG_VIEW_CT TOT_SESS_HR_V  DVC_CTG_NM ZON_NM       CITY_NM   day
	1124907    8942818   1         2018-05-04  18              1917           desktop    Gyeonggi-do  Ansan-si  Friday
	create table session (
	CLNT_ID varchar(50),
	SESS_ID varchar(50),
	SESS_SEQ int(30),
	SESS_DT date,
	TOT_PAG_VIEW_CT int(30),
	TOT_SESS_HR_V int(30),
	DVC_CTG_NM varchar(50),
	ZON_NM varchar(50),
	CITY_NM varchar(50),
	day varchar(20)
	)charset=utf8LOAD DATA LOCAL INFILE "C:/work/danal/lotte/session_sample.csv" INTO  TABLE project2.session FIELDS TERMINATED BY "," IGNORE 1 LINES




8. 장고 run server 해주세요  localhost:8000 번 서버 뜨는지 확인! 
8. 다른 cmd 창에서 cd C:\work\frontend 하고 
9. 그 경로에서 yarn start  하면 짜잔 !  localhost:3000  번 뜨는지 확인! 



