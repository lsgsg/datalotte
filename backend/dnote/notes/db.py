'''
DB 파일
'''
import MySQLdb
import pandas as pd
import csv

config = {
    'host':'127.0.0.1',
    'user':'root',
    'password':'123',
    'database':'project2',
    'port':3306,
    'charset':'utf8',
    'use_unicode':True
}

try:
    conn = MySQLdb.connect(**config)
    cursor = conn.cursor()
    
    #sql = "select code, sang, su, dan from sangdata"
    #cursor.execute(sql)
    
    product = pd.read_sql('select * from product', conn)
    session = pd.read_sql('select * from session', conn)
    custom = pd.read_sql('select * from custom', conn)
    master = pd.read_sql('select * from master', conn)
    
    #print(product.head())
    
    data = pd.merge(master,product)
    data_L = data['PD_C'].groupby(by = data['CLAC1_NM']).count()
      
    data_L = data_L.reset_index()
    data_L.columns = ["x","y"]
    data2 = data_L.head(10)
    data2_2 = data_L.head(30)
    def datal():
        data_L = data_L.to_json(orient='records')
        return data_L
    def dat2():
        data2 = data2.to_json(orient='records')
        return data2
    def data22():
        data2_2 = data2_2.to_json(orient='records')
        return data2_2
     
  
except Exception as err:
    print("err!!:", err)
finally:
    cursor.close()
    conn.close()