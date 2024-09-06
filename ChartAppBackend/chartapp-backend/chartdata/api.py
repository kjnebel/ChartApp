from rest_framework.response import Response
from rest_framework.views import APIView
import datetime


# Includes a get call to retrieve the candlestick chart's data
class CandleStickData(APIView):
    def get(self, request):

        data = {
            "data": [
                {"x": datetime.datetime(2023, 1, 1).strftime('%Y-%m-%d'), "y": [30, 40, 25, 35]},
                {"x": datetime.datetime(2023, 1, 2).strftime('%Y-%m-%d'), "y": [35, 45, 30, 40]},
                {"x": datetime.datetime(2023, 1, 3).strftime('%Y-%m-%d'), "y": [40, 50, 35, 45]},
                {"x": datetime.datetime(2023, 1, 4).strftime('%Y-%m-%d'), "y": [45, 55, 40, 50]},
            ]
        }

        return Response(data)


# Includes a get call to retrieve the line chart's data
class LineChartData(APIView):
    def get(self, request):

        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }

        return Response(data)


# Includes a get call to retrieve the bar chart's data
class BarChartData(APIView):
    def get(self, request):

        data = {
            "data":[
                {"x": "Product A", "y": 100},
                {"x": "Product B", "y": 150},
                {"x": "Product C", "y": 200},
                {"x": "Product D", "y": 175},
            ]
        }

        return Response(data)


# Includes a get call to retrieve the pie chart's data
class PieChartData(APIView):
    def get(self, request):
        data = {
            "labels": ["Blue", "Green", "Yellow", "Red"],
            "data": [300, 50, 100, 75]
        }

        return Response(data)