var vigenere = vigenere || (function(){
    var proceso = function(txt, clave, action){
        var abc = 'abcdefghijklmnñopqrstuvwxyz'.split('');
        var longitud = abc.length;
        var resultado = '';

        if (!txt || !clave) return ""; // Validar campos vacíos

        for (var i = 0, j = 0; i < txt.length; i++) {
            var c = txt[i].toLowerCase();
            var index = abc.indexOf(c);

            if (index !== -1) {
                var desp = abc.indexOf(clave[j % clave.length].toLowerCase());
                if (action) {
                    var pos = (index + desp) % longitud;
                } else {
                    var pos = (index - desp + longitud) % longitud;
                }
                resultado += txt[i] === txt[i].toUpperCase() ? abc[pos].toUpperCase() : abc[pos];
                j++;
            } else {
                resultado += txt[i];
            }
        }
        return resultado;
    };

    return {
        encode: function(txt, clave){
            return proceso(txt, clave, true);
        },
        decode: function(txt, clave){
            return proceso(txt, clave, false);
        }
    };
})();

function codificar(){
    var texto = document.getElementById("texto").value;
    var clave = document.getElementById("clave").value;

    if (clave.length > texto.length) { // Validar si la clave es mayor que el texto
        alert("La clave no puede ser más larga que el texto a cifrar.");
        return;
    }

    document.getElementById("resultado").value = vigenere.encode(texto, clave);
}

function decodificar(){
    var texto = document.getElementById("texto").value;
    var clave = document.getElementById("clave").value;

    if (clave.length > texto.length) { // Validar si la clave es mayor que el texto
        alert("La clave no puede ser más larga que el texto a descifrar.");
        return;
    }

    document.getElementById("resultado").value = vigenere.decode(texto, clave);
}

function reiniciar(){
    document.getElementById("texto").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("resultado").value = "";
}
