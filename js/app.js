const API_URL = 'https://productos-produceapirest.herokuapp.com/api/v1/productos';

const xhr = new XMLHttpRequest();

function onRequestHandlet(){
    const data = JSON.parse(this.reponse);
    console.log(data);
}

xhr.addEventListener('load', onRequestHandlet);
xhr.open('GET', API_URL);
xhr.send();