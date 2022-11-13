
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const url = "https://productos-produceapirest.herokuapp.com/api/v1/productos"
        var headers = {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "hhttp://127.0.0.1:5500",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "application/json"
        }

        const res = await fetch(url, {
            method : "GET",
            mode: 'cors',
            headers: headers
        })
        const data = await res.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}