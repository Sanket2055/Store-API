
# API FOR STORE



[Link](https://store-api-sanket.herokuapp.com/api/v1/products) 

#### example:
```
{
"featured": false,
"rating": 3,
"createdAt": "2022-03-20T11:09:33.933Z",
"_id": "62370b742a64d64a6037bc01",
"name": "leather sofa",
"price": 99,
"company": "caressa",
"__v": 0
} 
```

## Functions:

### Get featured/notfeatured items   

[example](https://store-api-sanket.herokuapp.com/api/v1/products?featured=true)

### Get specified company items  
[example](https://store-api-sanket.herokuapp.com/api/v1/products?company=ikea)

### Sort items   
[example](https://store-api-sanket.herokuapp.com/api/v1/products?sort=price)

### Get specific fields   
[example](https://store-api-sanket.herokuapp.com/api/v1/products?fields=name,price,rating)

### NumericFilters : set range for price and ratings
[example](https://store-api-sanket.herokuapp.com/api/v1/products?numericFilters=price>30&sort=price)

### Skip , limit  ,  Get item by its name etc 
