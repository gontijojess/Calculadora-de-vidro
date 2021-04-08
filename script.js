function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    if (numero.length < 22) {
    document.getElementById('resultado').innerHTML = numero + num;
    } else {
    document.getElementById('resultado').innerHTML = numero;  
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        resultado = eval(resultado)
        document.getElementById('resultado').innerHTML = resultado.toFixed(3);
    }
}