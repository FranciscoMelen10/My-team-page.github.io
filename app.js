//POO
class Persona{
    constructor(nombre_completo, edad, fecha_nacimiento, lugar){
        this.nombre_completo = nombre_completo
        this.edad = edad
        this.fecha_nacimiento = fecha_nacimiento
        this.lugar = lugar
        this.fotos = []
    }
}

//Arreglos de objetos
let perso = []

// Instancias de las clases

// Francisco De Jesús Meléndez Simplina
let Francisco = new Persona("Francisco De Jesús Meléndez Simplina", "18 años", "10/11/2004", "Potrerillos - Cortes");

//  Rechi Frabelle Meléndez Simplina
let Renchi = new Persona("Rechi Frabelle Meléndez Simplina", "22 años", "", "Potrerillos - Cortes");

//  Carlos Eduardo Chavarría Centeno
let Carlos = new Persona("Carlos Eduardo Chavarría Centeno", "18 años", "", "Jinotega");

//  Isabel Denisse Aguilar Vílchez
let Denisse = new Persona("Isabel Denisse Aguilar Vílchez", "18 años", "", "Leon");

//  René Nicolás Sandoval Lagos
let Rene = new Persona("René Nicolás Sandoval Lagos", "18 años", "", "Leon");

//  Ana Marbell Zepeda Almendarez
let Ana = new Persona("Ana Marbell Zepeda Almendarez", "18 años", "", "Chinandega");


// Push a todas las instancias en el arreglo de objetos
perso.push(Francisco, Renchi, Carlos, Denisse, Rene, Ana)

// Acciones con el CSS combinado con el Javascript

const modal = document.querySelector(".caja-media")

/* Llamada de cada persona*/
const info1 = document.querySelector("#contents1") //Francisco
const info2 = document.querySelector("#contents2") //Renchi
const info3 = document.querySelector("#contents3") //Carlos
const info4 = document.querySelector("#contents4") //Denisse
const info5 = document.querySelector("#contents5") //Rene
const info6 = document.querySelector("#contents6") //Ana

info1.addEventListener("click", () => {
    abrir_modal(1)
})

info2.addEventListener("click", () => {
    abrir_modal(2)
})

info3.addEventListener("click", () => {
    abrir_modal(3)
})

info4.addEventListener("click", () => {
    abrir_modal(4)
})

info5.addEventListener("click", () => {
    abrir_modal(5)
})

info6.addEventListener("click", () => {
    abrir_modal(6)
})


function abrir_modal(numero) {
    modal.classList.add("visible")
    switch (numero) {
        case 1:
            alert(Francisco.nombre_completo)
            break;
        case 2:
            alert(Renchi.nombre_completo)
            break;
        case 3:
            alert(Carlos.nombre_completo)
            break;
        case 4:
            alert(Denisse.nombre_completo)
            break;
        case 5:
            alert(Rene.nombre_completo)
            break;
        case 6:
            alert(Ana.nombre_completo)
            break;
        
    }
}
