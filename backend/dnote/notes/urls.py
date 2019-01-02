from django.conf.urls import url

from notes import views2




urlpatterns = [

    url("^chart/", views2.showdf),
    url("^lotte1/", views2.showLotte),
    url("^lotte2/", views2.showLotte2),
    url("predict/", views2.predict)
]
