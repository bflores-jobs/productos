//document.addEventListener('DOMContentLoaded', () => {
//    callOtherDomain()
//})

var invocation = new XMLHttpRequest();
var url = 'https://productos-produceapirest.herokuapp.com/api/v1/productos';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body);
    }
    console.log("invocation");
}