import { getlocalstorage } from "../index.js";
import { CONST_LS_HISTORIAL } from "../const/const.js";
const btn_historial = document.querySelector("#btn_historial");
const cont_historial = document.querySelector(".cont_historial");
const historial = document.querySelector(".historial");
const btn_close = document.querySelector(".btn_closed_historial");

const contenedorhistorial = document.querySelector(".cont_historial_res");

btn_historial.addEventListener("click", () => {
    cont_historial.style.display = "block"
})
cont_historial.addEventListener("click", () => {
    close_historial();
})
historial.addEventListener("click", (e) => {
    e.stopPropagation();
})
btn_close.addEventListener("click", () => {
    close_historial();
})

function close_historial(){
    cont_historial.style.display = "none"
}

export function viewHistorial(){
    let historial = getlocalstorage(CONST_LS_HISTORIAL);
    if(historial){
        historial.forEach( historia => {
            const contenedor = document.createElement("div");
            contenedor.classList.add("cont_his")

            const contenedoricono = document.createElement("div");
            contenedoricono.classList.add("cont_icon")
            
            let icono = "";


            const contenedortitlehistorial = document.createElement("div")
            contenedortitlehistorial.classList.add("cont_content_historial")

            const titlecontenedor = document.createElement("div");
            titlecontenedor.classList.add("cont_title")

            const texttitle = document.createElement("p")
            const textspan = document.createElement("span")
            textspan.textContent = historia.fecha

            const contdetailshis = document.createElement("div")
            contdetailshis.classList.add("cont_details_his");

            const detailtext = document.createElement("p");
            detailtext.classList.add("detail")
            const detailtextobs = document.createElement("p")
            detailtextobs.classList.add("detailobs")
            if(historia.tipo === "Ingreso" || historia.tipo === "Creado"){
                detailtext.textContent = "+ " + historia.cantidad + " " + historia.unidad + " de " + historia.producto
            }
            if(historia.tipo === "Egreso" || historia.tipo === "Eliminado"){
                detailtext.textContent = "- " + historia.cantidad + " " + historia.unidad + " de " + historia.producto
            }
            detailtextobs.textContent = historia.observaciones

            if(historia.tipo === "Ingreso"){
                contenedor.classList.add("hisingreso")
                contenedoricono.classList.add("titlehisingreso")
                icono = `
                <svg data-slot="icon" fill="none" width="20px" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>
                `
            texttitle.textContent = historia.tipo
            texttitle.classList.add("titlehisingreso")
            }
            if(historia.tipo === "Egreso"){
                contenedor.classList.add("hisegreso")
                contenedoricono.classList.add("titlehisegreso")
                icono = `
                <svg data-slot="icon" fill="none" width="20px" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>
                `
            texttitle.textContent = historia.tipo
            texttitle.classList.add("titlehisegreso")
            }
            if(historia.tipo === "Creado"){
                contenedor.classList.add("hiscreate")
                contenedoricono.classList.add("titlehiscreate")
                icono = `
                <svg data-slot="icon" fill="none" width="20px" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>
                `
            texttitle.textContent = historia.tipo
            texttitle.classList.add("titlehiscreate")
            }
            if(historia.tipo === "Eliminado"){
                contenedor.classList.add("hisdelete")
                contenedoricono.classList.add("titlehisdelete")
                icono = `
                <svg data-slot="icon" fill="none" width="20px" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>
                `
            texttitle.textContent = historia.tipo
            texttitle.classList.add("titlehisdelete")
            }



            contenedoricono.innerHTML = icono;
            titlecontenedor.appendChild(texttitle)
            titlecontenedor.appendChild(textspan)
            contdetailshis.appendChild(detailtext)
            contdetailshis.appendChild(detailtextobs)
            contenedortitlehistorial.appendChild(titlecontenedor)
            contenedortitlehistorial.appendChild(contdetailshis)

            contenedor.appendChild(contenedoricono)
            contenedor.appendChild(contenedortitlehistorial)

            contenedorhistorial.appendChild(contenedor)

        })
    }else{
        contenedorhistorial.textContent = "No hay registros en la base de datos"
    }
}