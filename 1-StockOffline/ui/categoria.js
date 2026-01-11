import { getlocalstorage } from "../index.js"
import { CONST_LS_PRODUCTOS } from "../const/const.js"
const categoriaDOM = document.querySelector(".categoriaSelect")

export function updateCategorias(){
    while(categoriaDOM.firstChild){
        categoriaDOM.removeChild(categoriaDOM.firstChild);
    }
    let allProductos = getlocalstorage(CONST_LS_PRODUCTOS)
    let categorias = new Set();
    allProductos.forEach( producto => {
    categorias.add(producto.categoria);
    })
    const categoriadefault = document.createElement("option")
    categoriadefault.value = ""
    categoriadefault.textContent = "Seleccionar categoria..."
    categoriaDOM.appendChild(categoriadefault);
    categorias.forEach( categoria => {
        const option = document.createElement("option")
        option.textContent = categoria;
        option.value = categoria;

        categoriaDOM.appendChild(option);
    })
}