
let diccionario = ["PIEZA", "CORAL", "TEXTO", "PERRO", "ANGEL"]
let jugadas = 6
const BUTTON = document.getElementById("guess-button")
 
BUTTON.addEventListener("click",intentar)

function obtenerPalabra(){
    let aleaotorio = Math.floor(Math.random()*diccionario.length)
    return diccionario[aleaotorio]
}

let palabraOculta = obtenerPalabra()

function intentar(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    jugadas--
    if (jugadas==0){
        terminar("PERDISTE!😖")
    }
    if (palabraOculta == INTENTO){
        terminar("GANASTE!😀")
    } else{
        let fila = document.createElement("div")
        fila.className = "row"
        console.log(fila)
        for (const i in INTENTO){
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            fila.appendChild(letra)
            console.log(fila)
            if (INTENTO[i]==palabraOculta[i]){
                letra.style.background = "green"
            } else if (palabraOculta.includes(INTENTO[i])) {
                letra.style.background = "yellow"
            } else {
                letra.style.background = "grey"
            }
        }
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila)
    }
} 
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById("guesses")
    p.innerHTML = "<h1>" + mensaje + "</h1>"
}


