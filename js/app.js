//document.addEventListener('DOMContentLoaded', () => {
//    callOtherDomain()
//})

fetch("https://victim.example/naïve-endpoint", {
  method: "POST",
  headers: [
    ["Content-Type", "application/json"],
    ["Content-Type", "text/plain"]
  ],
  credentials: "include",
  body: JSON.stringify(exerciseForTheReader)
});