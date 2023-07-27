const modal = document.querySelector(".caja-media") 

/* Llamada de cada persona*/
const info1 = document.querySelector("#contents1")
const info2 = document.querySelector("#contents2")
const info3 = document.querySelector("#contents3")
const info4 = document.querySelector("#contents4")
const info5 = document.querySelector("#contents5")
const info6 = document.querySelector("#contents6")

info1.addEventListener("click",() =>{
    abrir_modal()
})

info2.addEventListener("click",() =>{
    abrir_modal()
})

info3.addEventListener("click",() =>{
    abrir_modal()
})

info4.addEventListener("click",() =>{
    abrir_modal()
})

info5.addEventListener("click",() =>{
    abrir_modal()
})

info6.addEventListener("click",() =>{
    abrir_modal()
})


function abrir_modal(){
    alert("Prueba")
    modal.classList.add("visible")
}
