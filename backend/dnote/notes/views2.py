from django.shortcuts import render
from .models import Product 
from rest_framework import viewsets
import pandas as pd
import numpy as np
from notes import db
import pickle

# data = Product.objects.all()
# data = pd.DataFrame(data);
#import json react json ajax redux
from django.http.response import HttpResponse
from _collections import defaultdict

config = {
    'host':'127.0.0.1',
    'user':'root',
    'password':'123',
    'database':'test',
    'port':3306,
    'charset':'utf8',
    'use_unicode':True
}

product = pd.read_csv('C:/work/backend/dnote/notes/templates/lotte/product_sample.csv')
session = pd.read_csv('C:/work/backend/dnote/notes/templates/lotte/session_sample.csv')
session['SESS_DT'] = pd.to_datetime(session['SESS_DT'].astype(str))
session['day'] = session.SESS_DT.dt.weekday_name
custom = pd.read_csv('C:/work/backend/dnote/notes/templates/lotte/custom_sample.csv')
master = pd.read_csv('C:/work/backend/dnote/notes/templates/lotte/master.csv')

prod1 = pd.merge(product, session, on = ['SESS_ID', 'CLNT_ID'])
prod1['month'] = prod1.SESS_DT.dt.month
prod2 = pd.merge(prod1, master, on = 'PD_C') #prod1 -> product + session



# monthPay
# dayPay
# yoilPay
# genderPay
# agePay
# topcustomer
# platPay
# daePay
# soPay
# areaPay
# sowolPay

# 1. 월별매출 month. columns = ['month', 'month_res']
# monthPay



# 2. 일별 매출 date columns = ['date', 'date_res']
# 3. 요일별매출 yoil. columns = ['yoil', 'yoil_res']
# 4. 성별매출 gender. columns = ['gen', 'gen_res']
# 5. 나이대별 매출 age. columns = ['age', 'age_res']
# 6. 구매액 상위 10명 ttenres. columns = ['tten_id', 'tten_res']
# 7. 플랫폼별 매출 platform. columns = ['plat', 'plat_res']
# 8. 대분류별 매출 dae. columns = ['dae', 'dae_res']
# 9. 상위 10개 소분류별 매출 so. columns = ['so', 'so_res']
# 10. 접속지역별 매출 area. columns = ['area', 'area_res']
# 11. 월별 인기 소분류 sowol. columns = ['sowol_month', 'sowol_so', 'sowol_res']






#1. 월별 매출 res_by_month
rbmonth = prod1.groupby(prod1.month).sum()['result'] / 10**8 #억 단위로 보기
month = rbmonth.reset_index()
month.columns = ['month', 'month_res']
res_by_month = rbmonth.to_json(orient = 'records')

#2. 일별 매출 res_by_date
data2 = prod1.groupby(prod1.SESS_DT).sum()['result'] / 10**4 #만 단위
date = data2.reset_index()
date.SESS_DT = date.SESS_DT.dt.strftime("%d-%b-%y")
date.columns = ['date', 'date_res']
res_by_date = date.to_json(orient='records')

#3. 요일별 매출 res_by_yoil
by_day = prod1.groupby(prod1.day).sum()['result'][[1,5,6,4,0,2,3]] / 10**4
yoil = by_day / by_day.sum() * 100 #비율로 보기
yoil = yoil.reset_index()
yoil.columns = ['yoil', 'yoil_res']
res_by_yoil = yoil.to_json(orient = 'records')

#4. 성별 매출 res_by_gen
cuspro = pd.merge(product, custom, on = 'CLNT_ID')
gender = cuspro.groupby(cuspro.CLNT_GENDER).sum()['result'] / 10**8 #억 단위로 보기
gender = gender.reset_index()
gender.columns = ['gen', 'gen_res']
res_by_gen = gender.to_json(orient = 'records')

#5. 나이대별 매출 res_by_age
age = cuspro.groupby(cuspro.CLNT_AGE).sum()['result'] / 10**8
age = age.reset_index()
age.columns = ['age', 'age_res']
res_by_age = age.reset_index().to_json(orient = 'records')

#6. 구매액 상위 10명 res_by_id
result_by_id = product.groupby(by = 'CLNT_ID').sum()['result'] #181310개
ttenres = result_by_id.sort_values(ascending=False).head(10) / 10**4
ttenres = ttenres.reset_index()
ttenres.columns = ['tten_id', 'tten_res']
res_by_id = ttenres.to_json(orient = 'records')

#7. 플랫폼별 매출 res_by_form
platform = prod1[['DVC_CTG_NM', 'result']].groupby(by = 'DVC_CTG_NM').sum() / 10**8
platform = platform.reset_index()
platform.columns = ['plat', 'plat_res']
res_by_form = platform.to_json(orient = 'records')

#8. 접속지역별 매출 res_by_area
area = prod1.groupby(by=prod1.ZON_NM).sum()['result'] / 10**8
area = area.sort_values(ascending=False)
area = area.reset_index()
area.columns = ['area', 'area_res']
res_by_area = area.reset_index().to_json(orient = 'records')

#9. 대분류별 매출 res_by_dae
maspro = pd.merge(product, master, on = 'PD_C')
data_class = maspro.groupby('CLAC1_NM').sum()['result'] / 10**8
dae = data_class.sort_values(ascending = False).reset_index().head(10)
dae.columns = ['dae', 'dae_res']
res_by_dae = dae.to_json(orient = 'records')

#10. 상위 10개 소분류 res_by_so
so = maspro.groupby(by = 'CLAC3_NM').sum()['result'] / 10**8
so = so.sort_values(ascending=False).head(10)
so = so.reset_index()
so.columns = ['so', 'so_res']
res_by_so = so.to_json(orient = 'records')

#11. 월별 인기 소분류 res_by_sowol
prod2 = pd.merge(prod1, master, on = 'PD_C') #prod1 -> product + session
sowol = prod2.groupby(by = ['month', 'CLAC3_NM']).sum()['result'] / 10**4
sowol = sowol.reset_index()
sowol.columns = ['sowol_month', 'sowol_so', 'sowol_res']
sowol = sowol.groupby('sowol_month').apply(lambda x:x.nlargest(10, 'sowol_res'))
sowol.index = np.arange(len(sowol))
res_by_sowol = sowol.to_json(orient = 'records')

#maspro = pd.merge(master, product, on = 'PD_C')
#data_L = maspro['PD_C'].groupby(by = data['CLAC1_NM']).count()
#data_L = data_L.reset_index()
#data_L.columns = ["x","y"]

# data2 = imsi2.head(10)
# data2_2 = imsi2.head(30)
# #data_L = data_L.to_json(orient='records')
# data2 = data2.to_json(orient='records')
# data2_2 = data2_2.to_json(orient='records')


final_data = pd.concat([month, date, yoil, gender, age, ttenres, platform,
          dae, so, area, sowol], axis=1)
final_json = final_data.to_json(orient='records')
print(final_json)


def showdf(request) :
    return HttpResponse( final_json, content_type = "showdf.json")

def showLotte(request) :
    return HttpResponse( res_by_so, content_type = "showdf1.json")

def showLotte2(request) :
    return HttpResponse( res_by_area, content_type = "showdf2.json")

def predict(request):
    gen = request.POST.get("gen")
    age = request.POST.get("age")
    area = request.POST.get("area")
    date = request.POST.get("date")
    day = request.POST.get("day")
    
    ml = pickle.load(open("C:/work/backend/dnote/notes/lotte_model.sav", 'rb'))
    
    if date == None:
        return render(request, "predict.html")
    else:
        print(date, type(date))
        #예측용
        
        y_pred = ml.predict([[int(gen), int(age), int(area), int(date), int(day)]])[0]
        print(so['so'])
        print(y_pred)
        print(so['so'][y_pred])
        return render(request, "predict.html", {"result":so['so'][y_pred]})