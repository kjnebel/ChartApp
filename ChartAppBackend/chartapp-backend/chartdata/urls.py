from django.urls import path
from .api import *

urlpatterns = [
    path('candlestick-data/', CandleStickData.as_view(), name='candlestick-data'),
    path('line-chart-data/', LineChartData.as_view(), name='line-chart-data'),
    path('bar-chart-data/', BarChartData.as_view(), name='bar-chart-data'),
    path('pie-chart-data/', PieChartData.as_view(), name='pie-chart-data'),
]