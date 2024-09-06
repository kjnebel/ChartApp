from rest_framework.response import Response
from rest_framework.views import APIView


# Includes a get call to retrieve the candlestick chart's data
class CandleStickData(APIView):
    def get(self, request):

        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
                {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
                {"x": "2023-01-04", "open": 45, "high": 55, "low": 40, "close": 50},
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
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }

        return Response(data)


# Includes a get call to retrieve the pie chart's data
class PieChartData(APIView):
    def get(self, request):
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }

        return Response(data)