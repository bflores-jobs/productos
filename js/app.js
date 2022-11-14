const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const categorys = document.getElementById('categorys')
const buscar = document.getElementById('button-addon2')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const templateCategorys = document.getElementById('template-categorys').content
const fragment = document.createDocumentFragment()
let carrito = {}


// Eventos 
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', e => { fetchData() });
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) });
buscar.addEventListener('click', e => { btnBuscarNombre() });


// Traer productos
const fetchData = async () => {
    const res = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/productos');
    const data = await res.json()
    console.log(data)
    pintarCards(data)
    const res2 = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/categorias');
    const data2 = await res2.json()
    console.log(data2)
    pintarCategorys(data2)
}

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('img').src = item.url_image
        templateCard.querySelector('h5').textContent = item.name
        templateCard.getElementById('precio').textContent = item.price
        templateCard.getElementById('descuento').textContent = item.discount
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// Pintar categorias
const pintarCategorys = data => {
    data.forEach(item => {
        templateCategorys.querySelector('option').value = item.id
        templateCategorys.querySelector('option').textContent = item.name
        const clone = templateCategorys.cloneNode(true)
        fragment.appendChild(clone)
    })
    categorys.appendChild(fragment)
}




// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    // console.log(item)
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        precio: item.querySelectorAll('span')[0].textContent,
        descuento: item.querySelectorAll('span')[1].textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = (producto.precio - producto.descuento) * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio, descuento}) => acc + cantidad * (precio - descuento) ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}


// Por categoria
function handleChange() {
    fetchDataCat();
}

const fetchDataCat = async () => {
    var res = 0;
    const element = document.getElementById("cards");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    
    const category = document.getElementById('categorys').selectedOptions[0].value;
    console.log(category);

    if(category == 0){
        res = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/productos');
    }else{
        res = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/productos?category=' + category);
    }

    const data = await res.json()
    console.log(data)
    pintarCards(data)    
}


// Buscar por nombre
const btnBuscarNombre = async () => {
    var res = 0;
    const name = document.getElementById('name').textContent;
    const category = document.getElementById('categorys').selectedOptions[0].value;
    console.log('buscar nombre');

    if(name != ""){
        console.log('buscar nombre en el if');
        const element = document.getElementById("cards");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        if(category != 0){
            res = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/productos?category=' + category + '&name=' + name);
        }else{
            res = await fetch('https://productos-produceapirest.herokuapp.com/api/v1/productos?name=' + name);
        }
        const data = await res.json()
        console.log(data)
        pintarCards(data)  
    }
}
