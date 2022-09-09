//boton de reinicio
document.getElementById("reiniciar").style.display = "none";

//-------------------------------------------------------------------------------------------------

//boton iniciar juego
document.getElementById("letras-erradas").style.display = "none";
document.getElementById("iniciar-juego").addEventListener("click",() =>{
    
    document.getElementById("reiniciar").style.display = "block";
    
    document.getElementById("letras-erradas").style.display = "block";
    document.getElementById("canvas-juego").style.display = "flex";//hago visible el juego
    window.addEventListener("keydown", capturaTeclado);//bloquea el teclado
    palabraAdivinada ="";
    limpiarCamvas();//limpia al reiniciar
    dibujarBase();
    guionesDePalabra();
    
//------reinicio todas las variables
    errores.innerHTML = "";//resetea
    letrasErradas = [];
    letrasRepetidas = [];
    intentos = 9;
    document.getElementById("intentos").innerHTML = "LE QUEDAN: " + intentos + " INTENTOS";//actualizo
    
});

//-------------------------------------------------------------------------------------------------

//boton agregar palabras
let btnAgregarPalabras = document.getElementById("nueva-palabra");
btnAgregarPalabras.addEventListener("click", ()=>{

    if(nuevaPalabra.value == ""){
       // alert("No ingreso palabra");
          
       swal ({title: "No ingreso ninguna palabra"});
    
    }else{
        
        document.getElementById("input-nueva-palabra").focus();
        agregarPalabra(palabras);
        
    }
    document.getElementById("input-nueva-palabra").value = "";//limpia
});

//-------------------------TECLADO-------------------------------------

function capturaTeclado(e){

    let tecla = e.keyCode || e.which;
    if(tecla > 64 && tecla < 91){
        letra = e.key.toUpperCase();
        comprobarLetra(letra);
    }
}

//--------------------- manejo del juego ---------------------------------

//------------------- Funcion de comprobar letras --------------------------
let tituloEquivocadas = document.getElementById("tituloEquivocadas");
let errores = document.getElementById("letras-erradas")
let nuevaPalabra = document.getElementById("input-nueva-palabra");

function comprobarLetra(letraIngresada){
    
    palabraOculta = palabraOculta.toUpperCase();
    
    let letraAdivinada = ""; // cadena vacia, donde se guardara la palabra oculta
    let fallidos = true;
    //recorro la palabra
    for(let i=0; i<palabraOculta.length; i++){
        
        // comparo la letra ingresada = palabra oculta
        if(letraIngresada == palabraOculta[i]){
            //si coincide que muestre la letra con espacios
            letraAdivinada = letraAdivinada + letraIngresada + " ";
            fallidos = false;
        }
        else{
             //sino que muestre el guion bajo
             letraAdivinada = letraAdivinada + palabraAdivinada[i*2] + " ";
        }
              
    }
    //---------- valida intentos y muetra los fallidos ---------- 
    // si fallo!
    if(fallidos){
        let resultadoErrores = mostrarLetrasErradas(letraIngresada);
        if(resultadoErrores){
            intentos--;//resto
            dibujarAhorcado(intentos);
           document.getElementById("intentos").innerHTML = "LE QUEDAN " + intentos + " INTENTOS";//actualizo
           document.getElementById("tituloEquivocadas").innerHTML = "PALABRAS EQUIVOCADAS";//muetra un titulo
        }
    }
    console.log(palabraAdivinada);
    console.log("palabra adivinada  " + letraAdivinada);
    
    palabraAdivinada = letraAdivinada;
     //muestra la palabra encontrada
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
//------------------------ valido si gano o perdio IMPRIMO MENSAJES ---------------------------------------------------------
    if(intentos==0){
     
        document.getElementById("mge-perdio").innerHTML = "PERDISTE!! 🥺, Fin del Juego!";
        window.removeEventListener("keydown", capturaTeclado);
    }
    
    //search retorna un -1, valido si es la letra encontrada o guion
    if(palabraAdivinada.search("_") == -1){
       
        document.getElementById("mge-ganar").innerHTML = "GANASTE!! 🥳 Felicitaciones!";
        
function habilitarTeclas(){
    for(var tecla of listaTeclas){
        tecla.addEventListener("click",habilitarTeclado);
    }
}

function habilitarTeclado(){
    activarTecladoPantalla(this.textContent);
 }
    }
}/// FIN DE LA FUNCION COMPROBAR
