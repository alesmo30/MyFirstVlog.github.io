var resultado = document.getElementById("resultado")
var uno = document.getElementById("uno")
var  dos = document.getElementById("dos")
var tres = document.getElementById("tres")
var cuatro = document.getElementById("cuatro")
var  cinco = document.getElementById("cinco")
var  seis = document.getElementById("seis")
var  siete = document.getElementById("siete")
var ocho = document.getElementById("ocho")
var nueve = document.getElementById("nueve")
var cero = document.getElementById("cero")
var resta = document.getElementById("resta")
var suma = document.getElementById("suma")
var  division = document.getElementById("division")
var multiplicacion = document.getElementById("multiplicacion")
var reset = document.getElementById("reset")
var sumando1 
var sumando2
var operando

function unoF(e){
    resultado.textContent = resultado.textContent + "1"
}
function dosF(e){
    resultado.textContent = resultado.textContent + "2"
}
function tresF(e){
    resultado.textContent = resultado.textContent + "3"
}
function cuatroF(e){
    resultado.textContent = resultado.textContent + "4"
}
function cincoF(e){
    resultado.textContent = resultado.textContent + "5"
}
function seisF(e){
    resultado.textContent = resultado.textContent + "6"
}
function sieteF(e){
    resultado.textContent = resultado.textContent + "7"
}
function ochoF(e){
    resultado.textContent = resultado.textContent + "8"
}
function nueveF(e){
    resultado.textContent = resultado.textContent + "9"
}
function ceroF(e){
    resultado.textContent = resultado.textContent + "0"
}
 
uno.onclick = unoF
dos.onclick = dosF
tres.onclick = tresF
cuatro.onclick = cuatroF
cinco.onclick = cincoF
seis.onclick = seisF
siete.onclick = sieteF
ocho.onclick = ochoF
nueve.onclick = nueveF
cero.onclick = ceroF

function clean(e){
    resultado.textContent = ""
}

function resetF(e){
    resultado.textContent = ""
}

reset.onclick = resetF


function sumaF(e){
    sumando1 = resultado.textContent
    operacion = "+"
    clean()
}
function restaF(e){
    sumando1 = resultado.textContent
    operacion = "-"
    clean()
}
function multiplicacionF(e){
    sumando1 = resultado.textContent
    operacion = "*"
    clean()
}
function divisionF(e){
    sumando1 = resultado.textContent
    operacion = "/"
    clean()
}
function igualF(e){
    sumando2 = resultado.textContent
    clean()
    if(operacion == "+"){
        var op = parseInt(sumando1) + parseInt(sumando2)
        resultado.textContent = op.toString()
    }else if(operacion == "-"){
        var op = parseInt(sumando1) - parseInt(sumando2)
        resultado.textContent = op.toString()
    }else if(operacion == "*"){
        var op = parseInt(sumando1) * parseInt(sumando2)
        resultado.textContent = op.toString()
    }else if(operacion == "/"){
        var op = parseInt(sumando1) / parseInt(sumando2)
        resultado.textContent = op.toString()
    }
    
    
}

suma.onclick = sumaF
resta.onclick = restaF
multiplicacion.onclick = multiplicacionF
division.onclick = divisionF
igual.onclick = igualF