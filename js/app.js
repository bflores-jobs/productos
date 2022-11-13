//document.addEventListener('DOMContentLoaded', () => {
//    callOtherDomain()
//})

fetch("https://productos-produceapirest.herokuapp.com/api/v1/productos", {
  method: "GET",
  headers: [
    ["Content-Type", "application/json"],
    ["Content-Type", "text/plain"]
  ],
  credentials: "include",
  body: JSON.stringify(exerciseForTheReader)
});