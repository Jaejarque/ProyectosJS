import { getlocalstorage } from "../index.js";
import { CONST_LS_PRODUCTOS } from "../const/const.js";

const tbody = document.querySelector(".bodytable")

export function viewTable(){
    let resultadoLS = getlocalstorage(CONST_LS_PRODUCTOS);

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild)
    }

    if(resultadoLS){
        resultadoLS.forEach( (producto, index) => {
            const tr = document.createElement("tr");
            
            const id = document.createElement("td");
            id.textContent = index + 1;

            const product = document.createElement("td");
            product.style.fontWeight = "800";
            product.textContent = producto.producto;

            const categoria = document.createElement("td");
            categoria.textContent = producto.categoria;

            const stock = document.createElement("td");
            stock.textContent = producto.stockactual;

            const unidad = document.createElement("td");
            unidad.textContent = producto.unidad;

            const stockminimo = document.createElement("td");
            stockminimo.textContent = producto.stockminimo;

            const contestado = document.createElement("td");
            const spanestado = document.createElement("span");
            if(Number(producto.stockactual) > Number(producto.stockminimo)){
                spanestado.classList.add("estadoconstock")
                spanestado.textContent = "Con Stock"
            }
            if(Number(producto.stockactual) <= Number(producto.stockminimo) && Number(producto.stockactual) > 0){
                spanestado.classList.add("estadopocostock")
                spanestado.textContent = "Poco Stock"
            }
            if(Number(producto.stockactual) === 0){
                spanestado.classList.add("estadosinstock")
                spanestado.textContent = "Sin Stock"
            }
            contestado.appendChild(spanestado);

            const contbuttonaction = document.createElement("td");
            
            const buttonadd = document.createElement("button");
            buttonadd.classList.add("btn_add");
            const svgagregar = `
            <svg data-slot="icon" width="20px" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
            `

            buttonadd.innerHTML = svgagregar;

            const buttonless = document.createElement("button");
            buttonless.classList.add("btn_less");
            const svgless = `
            <svg data-slot="icon" width="20px" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path>
                </svg>
            `

            buttonless.innerHTML = svgless;

            const buttonedit = document.createElement("button");
            buttonedit.classList.add("btn_edit");
            const svgedit = `
            <svg data-slot="icon" width="20px" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                </svg>
            `

            buttonedit.innerHTML = svgedit;

            const buttondel = document.createElement("button");
            buttondel.classList.add("btn_del");
            const svgdel = `
            <svg data-slot="icon" width="20px" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                </svg>
            `

            buttondel.innerHTML = svgdel;

            contbuttonaction.appendChild(buttonadd)
            contbuttonaction.appendChild(buttonless)
            contbuttonaction.appendChild(buttonedit)
            contbuttonaction.appendChild(buttondel)

            tr.appendChild(id)
            tr.appendChild(product)
            tr.appendChild(categoria)
            tr.appendChild(stock)
            tr.appendChild(unidad)
            tr.appendChild(stockminimo)
            tr.appendChild(contestado)
            tr.appendChild(contbuttonaction)

            tbody.appendChild(tr)
        })
    }
    else{
        const tr = document.createElement("tr");

        const mensaje = document.createElement("td");
        mensaje.colSpan = "8";
        mensaje.textContent = "No hay productos cargados... Carga un producto..."

        tr.appendChild(mensaje);
        tbody.appendChild(tr)
    }
}