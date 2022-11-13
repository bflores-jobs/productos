# FrontEnd Productos API Rest

_El objetivo de esta  aplicación es mostrar los stock de productos._ 
_Para esto cree un sitio WEB que consulta una API con los stock de productos, estos pueden ser consultados por categoría, nombre o número de producto. También es posible hacer una consulta combinada entre categoría  y nombre._

## Herramientas 🔧
* _Visual Studio Code_
* _GIT_
* _Github_
* _Heroku_

## Lenguages 🛠️
* _Vanilla JavaScript _
* _HTML_
* _CSS_
* _Bootstrap_

## Metodologías 📋
* _JSON_
* _API Rest_

## Versionado 📌
* _Versión 1_

## Despliegue 📦
* _https://productos-produceapirest.herokuapp.com_

## Ejemplos 📋
### GET Productos
* GET /api/v1/productos                         
  Devuelve todos los productos.

* GET /api/v1/productos?name=tres               
  Devuelve todos los productos que contengan el string “tres” en el nombre.

* GET /api/v1/productos?category=2              
  Devuelve todos los productos que estén en la categoría con id 2.

* GET /api/v1/productos?category=2&name=tres    
  Devuelve todos los productos que estén en la categoría 2 y contengan el string “tres” en el nombre.

* GET /api/v1/productos/5                       
  Devuelve el producto con id=5.

### Estructura JSON Productos
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490.0,
        "discount": 20,
        "category": 1
    },
    {
        "id": 6,
        "name": "ENERGETICA RED BULL",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
        "price": 1490.0,
        "discount": 0,
        "category": 1
    },
    {
        "id": 7,
        "name": "ENERGETICA SCORE",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
        "price": 1290.0,
        "discount": 0,
        "category": 1
    }

### GET Categorias
* GET /api/v1/categorias                         
  Devuelve todas las categorías ordenadas por nombre en forma ascendente.

### Estructura JSON Categorías
    {
        "id": 4,
        "name": "bebida"
    },
    {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 6,
        "name": "cerveza"
    },
    {
        "id": 2,
        "name": "pisco"
    },
    {
        "id": 3,
        "name": "ron"
    },
    {
        "id": 5,
        "name": "snack"
    },
    {
        "id": 7,
        "name": "vodka"
    }
 

## Gracias por la visita 🎁
* Comenta a otros sobre este proyecto 📢

---
(https://github.com/bflores-jobs) 😊
