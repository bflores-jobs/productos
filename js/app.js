//document.addEventListener('DOMContentLoaded', () => {
//    callOtherDomain()
//})

var invocation = new XMLHttpRequest();
var url = 'https://productos-produceapirest.herokuapp.com/api/v1/productos';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}