const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input") 


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarFormulario = (event) => {
    switch (event.target.name){
        case "usuario":
        if(expresiones.usuario.test(event.target.value)){
            document.getElementById("grupo__usuario").classList.remove("formulario__grupo-incorrecto")
            document.getElementById("grupo__usuario").classList.add("formulario__grupo-correcto")
            document.querySelector("grupo__usuario i").classList.remove("icon-cancel-circle")
            document.querySelector("grupo__usuario i").classList.add("icon-checkmark")

        } else{
            document.getElementById("grupo__usuario").classList.add("formulario__grupo-incorrecto")
        }
       
        break

        case "nombre":

        break

        case "password":

        break

        case "pasword2":

        break

        case "email":

        break

        case "telefono":

        break

    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur", validarFormulario)
})

formulario-addEventListener("submit", (event) =>{
    event.preventDefault() //si el formulario esta vacio que no cargue la pagina
})