const btn_nuevo = document.querySelector(".btn_nuevo");
const cont_nuevo = document.querySelector(".cont_nuevo");
const card_nuevo = document.querySelector(".card_nuevo");
const btn_close_nuevo = document.querySelector(".btn_close_nuevo");

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