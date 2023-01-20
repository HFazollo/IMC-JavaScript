// Captura valores
const form = document.querySelector('#form');

// Cria parágrafo
function criaP() {
    const p = document.createElement('p');
    return p;
}

// Exibe resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    
    if(isValid == true) {
        p.classList.add('paragrafo-valido');
    } else {
        p.classList.add('paragrafo-invalido');
    }
}

// Captura evento de submit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputAltura = event.target.querySelector('#altura');
    const inputPeso = event.target.querySelector('#peso');
    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

    if(!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = peso / (altura ** 2);

    if(imc >= 39.9) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Obesidade Grau 3`, true)}
    if(imc >= 34.9) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Obesidade Grau 2`, true)}
    if(imc >= 29.9) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Obesidade Grau 1`, true)}
    if(imc >= 24.9) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Sobrepeso`, true)}
    if(imc >= 18.5) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Peso normal`, true)}
    if(imc < 18.5) {setResultado(`Seu IMC é ${imc.toFixed(1)} - Abaixo do peso`, true)}
})