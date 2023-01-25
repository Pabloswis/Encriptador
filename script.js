const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEnciptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEnciptado = stringEnciptado.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEnciptado.includes(matrizCodigo[i][0])) {
      stringEnciptado = stringEnciptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEnciptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
    
}
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringDesencriptado;
  }
