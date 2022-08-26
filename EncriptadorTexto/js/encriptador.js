var textoEncriptado;
var textoAEncriptar = document.querySelector(".entrada");

var salida = document.querySelector("#salida");
function encriptar() {
  salida.style.backgroundImage = "none";

  textoEncriptado = textoAEncriptar.value.split("");

  for (let i = 0; i < textoEncriptado.length; i++) {
    if (
      textoEncriptado[i] == "a" ||
      textoEncriptado[i] == "A" ||
      textoEncriptado[i] == "á" ||
      textoEncriptado[i] == "Á"
    ) {
      textoEncriptado[i] = "enter";
    } else if (
      textoEncriptado[i] == "e" ||
      textoEncriptado[i] == "E" ||
      textoEncriptado[i] == "é" ||
      textoEncriptado[i] == "É"
    ) {
      textoEncriptado[i] = "imes";
    } else if (
      textoEncriptado[i] == "i" ||
      textoEncriptado[i] == "I" ||
      textoEncriptado[i] == "í" ||
      textoEncriptado[i] == "Í"
    ) {
      textoEncriptado[i] = "ai";
    } else if (
      textoEncriptado[i] == "o" ||
      textoEncriptado[i] == "O" ||
      textoEncriptado[i] == "ó" ||
      textoEncriptado[i] == "Ó"
    ) {
      textoEncriptado[i] = "ober";
    } else if (
      textoEncriptado[i] == "u" ||
      textoEncriptado[i] == "U" ||
      textoEncriptado[i] == "ú" ||
      textoEncriptado[i] == "Ú"
    ) {
      textoEncriptado[i] = "ufat";
    }
  }

  var txt = document.createTextNode(textoEncriptado.join(""));
  document.getElementById("salida").appendChild(txt);
  textoAEncriptar.value = "";
}


function desencriptar() {
    salida.style.backgroundImage = "none";
    var textoADesencriptar = textoAEncriptar.value;
    
    var matriz = [["a", "enter"], ["e","imes"],["i", "ai"],["o","ober"], ["u","ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        if (textoADesencriptar.includes(matriz[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    console.log(textoADesencriptar)
    var txt = document.createTextNode(textoADesencriptar);
    document.getElementById("salida").appendChild(txt);
    textoAEncriptar.value = "";
}
//var btncopiar = document.querySelector(".btncopiar")
function copiar() {
    
  salida.select();
  navigator.clipboard.writeText(salida.value);
  location.reload()
}
