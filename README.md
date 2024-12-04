Personal Expense Tracker:
1.Adding an Expense (POST request):

URL: http://localhost:3000/api/expenses
Method: POST
**Body (JSON):**
{
  "category": "Food",
  "amount": 500,
  "date": "2024-12-01"
}

Response:
{
    "status": "success",
    "data": [
        {
            "category": "Food",
            "amount": 600,
            "date": "2024-12-04T00:00:00.000Z"
        },
        {
    "category":"Travel",
    "amount":800,
    "date":"2024-12-04"
        }
           ]
}

2.Get Expenses (GET request):

URL: http://localhost:3000/api/expenses?category=Food
Method: GET
You can filter expenses by category and date range using query parameters.

Response:
{
    "status": "success",
    "data": [
        {
            "category": "Food",
            "amount": 600,
            "date": "2024-12-04T00:00:00.000Z"
        }
        ]
}

3.Analyze Spending (GET request):

URL: http://localhost:3000/api/expenses/analysis
Method: GET

Response:
{
    "status": "success",
    "data": {
        "totalByCategory": [
            {
                "category": "Food",
                "total": 600
            },
            {
                "category": "Travel",
                "total": 800
            }
        ],
        "highestSpendingCategory": {
            "category": "Travel",
            "total": 800
        }
    }
}
