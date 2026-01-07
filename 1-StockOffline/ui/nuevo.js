import { savelocalstorage, getlocalstorage } from "../index.js";
import { CONST_LS_HISTORIAL, CONST_LS_PRODUCTOS, CONST_MESES } from "../const/const.js";
import { viewTable } from "../ui/table.js"
//DOM Modal
const btn_nuevo = document.querySelector(".btn_nuevo");
const cont_nuevo = document.querySelector(".cont_nuevo");
const card_nuevo = document.querySelector(".card_nuevo");
const btn_close_nuevo = document.querySelector(".btn_close_nuevo");
const btn_save = document.querySelector("#btn_guardar_nuevoproducto")

//Variables DOM Nuevo producto...
const nuevoproducto = document.querySelector("#nuevoproducto")
const categoria = document.querySelector("#categorianuevoproduto")
const unidad = document.querySelector("#selectUnidadNuevo")
const stockactual = document.querySelector("#stockactualnuevoproducto")
const stockminimo = document.querySelector("#stockminimonuevoproducto")


btn_nuevo.addEventListener("click", () => {
    cont_nuevo.style.display = "flex";
})
cont_nuevo.addEventListener("click", () => {
    close_nuevo();
})
card_nuevo.addEventListener("click", (e) => {
    e.stopPropagation();
})
btn_close_nuevo.addEventListener("click", () => {
    close_nuevo();
})


function close_nuevo(){
    cont_nuevo.style.display = "none";
}

//Logica de creacion de nuevo producto.
//Objeto para guardar en ls
const date = new Date();
const nuevoproductoDOM = {
    producto: "",
    categoria: "",
    unidad: "",
    stockactual: 0,
    stockminimo: 0
}
const historialcreado = {
    fecha: `${date.getDate()} ${CONST_MESES[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
    tipo: "Creado",
    producto: "",
    unidad: "",
    observaciones: "",
    cantidad: 0,
}

nuevoproducto.addEventListener("input", e => {
    nuevoproductoDOM.producto = e.target.value;
    historialcreado.producto = e.target.value;
})
categoria.addEventListener("input", e => {
    nuevoproductoDOM.categoria = e.target.value;
})
unidad.addEventListener("input", e => {
    nuevoproductoDOM.unidad = e.target.value;
    historialcreado.unidad = e.target.value;
})
stockactual.addEventListener("input", e => {
    nuevoproductoDOM.stockactual = e.target.value;
    historialcreado.cantidad = e.target.value;
})
stockminimo.addEventListener("input", e => {
    nuevoproductoDOM.stockminimo = e.target.value;
})
//Al presionar el boton de guardar
btn_save.addEventListener("click", () => {
    if(nuevoproductoDOM.producto === "" || nuevoproductoDOM.categoria === "" || nuevoproductoDOM.stockactual <= 0 || nuevoproductoDOM.stockminimo < 0){
        alert("Todos los campos son obligatorios y deben completarse correctamente")
        return;
    }

    savelocalstorage(CONST_LS_PRODUCTOS, nuevoproductoDOM);
    savelocalstorage(CONST_LS_HISTORIAL, historialcreado);
    alert("Producto guardado exitosamente");
    close_nuevo();
    viewTable();
})