APPLICATION NAME : PETSTORE

1.Base URL - https://petstore.swagger.io/v2
2.End point -/pet/{findById}
3.Method -GET
4.Header -None
5.Parameters -id:3
6.Response -200 ok
{
    "id": 3,
    "name": "CUPID",
    "photoUrls": [],
    "tags": []
}
7.Meaning -
1.Base URL: https://petstore.swagger.io/v2
2.End point -/pet/store/inventory
3.Method -GET
4.Header -Content type-application/json
5.Parameters -None
6.Response-200 OK
{
{
    "sold": 64,
    "ordered": 1,
    "string": 300,
    "unavailable": 1,
    "Busy": 1,
    "pending": 98,
    "available": 364,
    "active": 63,
    "Not Available": 1,
    "brownie": 4,
    "peric": 5,
    "freaky": 3,
    "inactive": 62,
    "avaliable": 1,
    "not available": 1,
    "Available": 1,
    "Pending": 4
}
    }
7.Meaning -The server has responded as required

1.Base URL - https://petstore.swagger.io/v2
2.End point - /pet /{findByStatus}
3.Method - GET
4.Header - No
5.Parameters - Status -available
6.Response - 200 OK
{
   "id":1,
    "name": "Cookie",
    "photoUrls": [],
    "tags": []
}


7.Meaning -The server has responded as required


1.Base URL - https://petstore.swagger.io/v2
2.End point -/pet
3.Method -POST
4.Header -None
5.Parameters -None
6.Response -200 OK
{
    "id": 3,
    "name": "CUPID",
    "photoUrls": [],
    "tags": []
}
7.Meaning -The server has responded as required



1.Base URL - https://petstore.swagger.io/v2
2.End point -/pet
3.Method -POST
4.Header -Content type-application/json
5.Parameters - id :3
6.Response -200 OK

{
    "id": 3,
    "name": "CUPID",
    "photoUrls": [],
    "tags": []
}

7.Meaning -The server has responded as required


1.Base URL: https://petstore.swagger.io/v2
2.End point -/pet
3.Method -PUT
4.Header -Content type-application/json
5.Parameters -None
6.Response-200 OK
{
    "id": 4,
    "name": "CIE",
    "photoUrls": [],
    "tags": []
}
7.Meaning -The server has responded as required


ENDPOINT LIST
=============

NO	 ENDPOINT	           METHOD	PURPOSE
1	 /pet/{petId}	        GET 	Get the pet by its id
2	 /pet/findByStatus      GET	    Get by the pet status
3	 /pet/store/inventory	GET	    To get all the pet details
3	 /pet	                POST	To create a new pet data
4	/pet/{petId}        	POST	To create a id for the pet
5	/pet	                 PUT	To Update all the details for the pet




