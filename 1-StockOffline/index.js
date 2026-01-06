import { CONST_UNIDADES } from "./const/const.js";

export function savelocalstorage(nombrels, objeto){
    let existencia = JSON.parse(localStorage.getItem(nombrels))
    if(!existencia){
        localStorage.setItem(nombrels, JSON.stringify(objeto));
        return;
    }
    let agregado = [existencia, objeto];
    localStorage.setItem(nombrels, JSON.stringify(agregado));
}

export function getlocalstorage(nombrels){
    return JSON.parse(localStorage.getItem(nombrels));
}

//Logica de unidades
const selectUnidades = document.querySelector("#selectUnidadNuevo");
CONST_UNIDADES.forEach( unidad => {
    const unidadDOM = document.createElement("option");
    unidadDOM.value = unidad;
    unidadDOM.textContent = unidad;
    selectUnidades.appendChild(unidadDOM);
})