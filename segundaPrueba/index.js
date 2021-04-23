const id = document.getElementById("id_number")
const fullName = document.getElementById("fullName")
const cel = document.getElementById("cel_number")
const email = document.getElementById("email")
const areaOp = document.getElementById("areaOp")
const cargo = document.getElementById("Cargo")
const contacto = document.getElementById("contacto")
const horario = document.getElementById("horario")
const submitButtom = document.getElementById("submit")
var comments = document.getElementById("cajitaComentarios")

function Validacion(){

    var correo = String(email.value)
    console.log("correo", correo.includes("@"))
    
    var mensajeError = []

    if(id.value === null || id.value === ""){
        mensajeError.push("Ingresa Tu Numero de ID")
    }
   
    if(fullName.value === null || fullName.value === ""){
        mensajeError.push("Ingresa Tu Nombre Completo")
    }
    if(cel.value === null || cel.value === ""){
        mensajeError.push("Ingresa Tu Celular")
    }
    if(email.value === null || email.value === ""){
        mensajeError.push("Ingresa Tu Email")
    }
    if(correo.includes("@") == false){
        mensajeError.push("Recuerde formato de email, debe ingresar @...")
    }
    if(areaOp.value === null || areaOp.value === ""){
        mensajeError.push("Ingresa El Area de Operación")
    }
    if(cargo.value === null || cargo.value === ""){
        mensajeError.push("Ingresa El cargo")
    }
    if(contacto.value === null || contacto.value === ""){
        mensajeError.push("Ingresa la Opción de Contacto")
    }
    if(horario.value === null || horario.value === ""){
        mensajeError.push("Ingresa el Horaio")
    }
    if(mensajeError.length == 0){
        comments.innerHTML = "Enviando Correctamente!"
    }else{
        var listaComentarios = mensajeError.join(', ')
        comments.innerHTML = listaComentarios
    }



    return false
    
}

submitButtom.onclick = Validacion
console.log("Enviando formulario")

   