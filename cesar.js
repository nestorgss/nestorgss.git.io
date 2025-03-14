const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado() {
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = c === c.toUpperCase();
        let valorEntero = c.toLowerCase().charCodeAt(0);
        
        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value) % 26;
            valorEntero = ((valorEntero - 97 + valorDesplazamiento + 26) % 26) + 97;
        }
        
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("change", cifrado);