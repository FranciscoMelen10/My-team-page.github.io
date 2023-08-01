//POO
class Persona{
    constructor(nombre_completo, edad, fecha_nacimiento, lugar, foto_principal){
        this.nombre_completo = nombre_completo
        this.edad = edad
        this.fecha_nacimiento = fecha_nacimiento
        this.lugar = lugar
        this.foto_principal = foto_principal
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
let Francisco = new Persona("Francisco De Jesús Meléndez Simplina", "18 años", "10/11/2004", "Potrerillos - Cortes", "./Resource/Francisco/Principal.jpg");
Francisco.fotos.push( 
    "./Resource/Francisco/Foto1.jpg",
    "./Resource/Francisco/Foto2.jpg",
    "./Resource/Francisco/Foto3.jpg",
    "./Resource/Francisco/Foto4.jpg",
    "./Resource/Francisco/Foto5.jpg"
    ) //Arreglos con la dirección de la imagen de cada persona

//  Rechi Frabelle Meléndez Simplina
let Renchi = new Persona("Rechi Frabelle Meléndez Simplina", "22 años", "18/02/2001", "Potrerillos - Cortes", "./Resource/Renchi/Principal.jpg");
Renchi.fotos.push( 
    "./Resource/Renchi/Foto1.jpg",
    "./Resource/Renchi/Foto2.jpg",
    "./Resource/Renchi/Foto3.jpg",
    "./Resource/Renchi/Foto4.jpg"
    ) //Arreglos con la dirección de la imagen de cada persona
//  Carlos Eduardo Chavarría Centeno
let Carlos = new Persona("Carlos Eduardo Chavarría Centeno", "18 años", "30/03/2005", "Jinotega", "./Resource/Carlos/Principal.jpg");
Carlos.fotos.push(
    "./Resource/Carlos/Foto1.jpg",
    "./Resource/Carlos/Foto2.jpg",
    "./Resource/Carlos/Foto3.jpg", 
    "./Resource/Carlos/Foto4.jpg",
    "./Resource/Carlos/Foto5.jpg"
    ) //Arreglos con la dirección de la imagen de cada persona

//  Isabel Denisse Aguilar Vílchez
let Denisse = new Persona("Isabel Denisse Aguilar Vílchez", "18 años", "15/02/2005", "Managua",  "./Resource/Denisse/Principal.jpg");
Denisse.fotos.push(
    "./Resource/Denisse/Foto1.jpg",
    "./Resource/Denisse/Foto2.jpg", 
    "./Resource/Denisse/Foto3.jpg", 
    "./Resource/Denisse/Foto4.jpg",
    "./Resource/Denisse/Foto5.jpg"
    )//Arreglos con la dirección de la imagen de cada persona

//  René Nicolás Sandoval Lagos
let Rene = new Persona("René Nicolás Sandoval Lagos", "18 años", "", "Leon", "./Resource/Rene/Principal.jpg");
Rene.fotos.push(
    "./Resource/Rene/Foto1.jpg",
    "./Resource/Rene/Foto2.jpg", 
    "./Resource/Rene/Foto3.jpg", 
    "./Resource/Rene/Foto4.jpg",
    "./Resource/Rene/Foto5.jpg"
    )//Arreglos con la dirección de la imagen de cada persona

//  Ana Marbell Zepeda Almendarez
let Ana = new Persona("Ana Marbell Zepeda Almendarez", "18 años", "", "Chinandega","./Resource/Ana/Principal.jpg");
Ana.fotos.push(
    "./Resource/Ana/Foto1.jpg",
    "./Resource/Ana/Foto2.jpg", 
    "./Resource/Ana/Foto3.jpg", 
    "./Resource/Ana/Foto4.jpg",    
    "./Resource/Ana/Foto5.jpg"
    )//Arreglos con la dirección de la imagen de cada persona


// Push a todas las instancias en el arreglo de objetos
perso.push(Francisco, Renchi, Carlos, Denisse, Rene, Ana)

// Acciones con el CSS combinado con el Javascript
const contendor_principal = document.querySelector(".contenedor-principal")
const modal = document.querySelector(".caja-media")
const contenedor_carusel = document.querySelector(".contendor-carusel")
const btn_cerrar = document.querySelector(".boton-cerrar")

// Auxiliar para llenar los contenedores del HTML
let info

function llenar_principal(){
    // Llenar la información y foto principal de la persona
    let contador = 1
    perso.forEach(element => {
        info = `
        <section class="contenedor-${contador}" id="contents${contador}">
            <p class="p-profession">System Engineer</p>
            <div class="div-info">
                <img src="${element.foto_principal}" alt="Foto${contador}">
                <p class="p-name">${element.nombre_completo}</p>
                <p class="p-name">${element.edad}</p>
                <p class="p-name">${element.fecha_nacimiento}</p>
                <p class="p-name">${element.lugar}</p>                
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

// Selecciona y carga los datos de la persona
function abrir_modal(numero) {
    modal.classList.add("visible")
    switch (numero) {
        case 1:
            llenar_carusel(Francisco)
            break;
        case 2:
            llenar_carusel(Renchi)
            break;
        case 3:
            llenar_carusel(Carlos)
            break;
        case 4:
            llenar_carusel(Denisse)
            break;
        case 5:
            llenar_carusel(Rene)
            break;
        case 6:
            llenar_carusel(Ana)
            break;
        
    }
}

function llenar_carusel(Persona){
    /*
    Esta variable de "controlador", nos permitira usar correctamente el carusel de boostrap, 
    ya que este necesita la clase "active" al inicio de la clase del carusel
    para cambiar de imagen según cada "carusel-item" del contendor y luego seleccionara todas las imagenes de la lista
    de cada persona en un periodo de tiempo agregara la etiqueta "active" para mostrar la imagen en pantalla
    */
    let controlador = false
    // // Mostrar todas las imagenes de cada persona en el carusel
    Persona.fotos.forEach(element => {
        if (controlador){ 
            info = `
            <div class="carousel-item" id = "foto_persona" style="height: 450px; justify-content: center; align-items: center;">
                <img src="${element}" class="d-block" alt="..." style="height: 100%; width:100%;">
            </div>
            `
        }else{
            info = `
            <div class="carousel-item active foto_persona" style="height: 450px; justify-content: center; align-items: center;">
                <img src="${Persona.fotos[0]}" class="d-block" alt="..." style="height: 100%; width:100%; justify-content: center; align-items: center;">
            </div>
            `
            controlador = true // Para iniciar con la primer foto de la lista con la etiqueta "active" y no entre en conflito con las demas etiquetas
        }
        contenedor_carusel.innerHTML += info
    });
}

btn_cerrar.addEventListener("click", () => {
    contenedor_carusel.innerHTML = ""
    modal.classList.remove("visible")
})


