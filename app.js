//POO
class Persona{
    constructor(nombre_completo, edad, fecha_nacimiento, lugar){
        this.nombre_completo = nombre_completo
        this.edad = edad
        this.fecha_nacimiento = fecha_nacimiento
        this.lugar = lugar
        this.fotos = []
    }

    // set nombre_completo(nombre_completo){
    //     this.nombre_completo = nombre_completo;
    // }

    // get nombre_completo(){
    //     return this.nombre_completo;
    // }


    // get edad(){
    //     return this.edad;
    // }

    // set edad(edad){
    //     this.edad = edad;
    // }


    // get fecha_nacimiento(){
    //     return this.fecha_nacimiento;
    // }

    // set fecha_nacimiento(fecha_nacimiento){
    //     this.fecha_nacimiento = fecha_nacimiento;
    // }


    // get lugar(){
    //     return this.lugar;
    // }

    // set lugar(lugar){
    //     this.lugar = lugar;
    // }
}

//Arreglos de objetos
let perso = []

// Instancias de las clases

// Francisco De Jesús Meléndez Simplina
let Francisco = new Persona("Francisco De Jesús Meléndez Simplina", "18 años", "10/11/2004", "Potrerillos - Cortes");
Francisco.fotos.push( "./Resource/Francisco/Principal.jpg") //Arreglos con la dirección de la imagen de cada persona

//  Rechi Frabelle Meléndez Simplina
let Renchi = new Persona("Rechi Frabelle Meléndez Simplina", "22 años", "18/02/2001", "Potrerillos - Cortes");
Renchi.fotos.push("./Resource/Renchi/Principal.jpg") //Arreglos con la dirección de la imagen de cada persona

//  Carlos Eduardo Chavarría Centeno
let Carlos = new Persona("Carlos Eduardo Chavarría Centeno", "18 años", "", "Jinotega" );
Carlos.fotos.push("./Resource/Carlos/Principal.jpg", "./Resource/Carlos/Foto1.jpg","./Resource/Carlos/Foto2.jpg", "./Resource/Carlos/Foto3.jpg", "./Resource/Carlos/Foto4.jpg","./Resource/Carlos/Foto5.jpg") //Arreglos con la dirección de la imagen de cada persona

//  Isabel Denisse Aguilar Vílchez
let Denisse = new Persona("Isabel Denisse Aguilar Vílchez", "18 años", "", "Managua" );
Denisse.fotos.push("./Resource/Denisse/Principal.jpg", "./Resource/Denisse/Foto1.jpg","./Resource/Denisse/Foto2.jpg", "./Resource/Denisse/Foto3.jpg", "./Resource/Denisse/Foto4.jpg","./Resource/Denisse/Foto5.jpg")//Arreglos con la dirección de la imagen de cada persona

//  René Nicolás Sandoval Lagos
let Rene = new Persona("René Nicolás Sandoval Lagos", "18 años", "", "Leon" );
Rene.fotos.push("./Resource/Rene/Principal.jpg", "./Resource/Rene/Foto1.jpg","./Resource/Rene/Foto2.jpg", "./Resource/Rene/Foto3.jpg", "./Resource/Rene/Foto4.jpg","./Resource/Rene/Foto5.jpg.jpg")//Arreglos con la dirección de la imagen de cada persona

//  Ana Marbell Zepeda Almendarez
let Ana = new Persona("Ana Marbell Zepeda Almendarez", "18 años", "", "Chinandega", "./Resource/Ana/Foto6.jpg");
Ana.fotos.push("./Resource/Ana/Principal.jpg", "./Resource/Ana/Foto1.jpg","./Resource/Ana/Foto2.jpg", "./Resource/Ana/Foto3.jpg", "./Resource/Ana/Foto4.jpg")//Arreglos con la dirección de la imagen de cada persona


// Push a todas las instancias en el arreglo de objetos
perso.push(Francisco, Renchi, Carlos, Denisse, Rene, Ana)

// Acciones con el CSS combinado con el Javascript
const contendor_principal = document.querySelector(".contenedor-principal")
const modal = document.querySelector(".caja-media")
const contenedor_persona = document.querySelector(".contenedor-persona")

// Auxiliar para llenar los contenedores del HTML
let info

function llenar_principal(){
    let contador = 1
    perso.forEach(element => {
        info = `
        <section class="contenedor-${contador}" id="contents${contador}">
            <p class="p-profession">System Engineer</p>
            <div class="div-info">
                <img src="${element.fotos[0]}" alt="Foto${contador}">
                <p class="p-name">${element.nombre_completo}</p>
            </div>
        </section>
        `
        contendor_principal.innerHTML += info
        contador += 1
    });

}

llenar_principal() //Llenar contenedores

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
            cargar_informacion(Francisco)
            break;
        case 2:
            cargar_informacion(Renchi)
            break;
        case 3:
            cargar_informacion(Carlos)
            break;
        case 4:
            cargar_informacion(Denisse)
            break;
        case 5:
            cargar_informacion(Rene)
            break;
        case 6:
            cargar_informacion(Ana)
            break;
        
    }
}

function cargar_informacion(Persona){
    info = `
    <h1> ${Persona.nombre_completo}</h1>
    <img></img>
    `
    contenedor_persona.innerHTML += info
}
