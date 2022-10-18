// LIBRERIA JAVASCRIPT

// GENERATORE DI NUMERI RANDOM
function randomRumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// VERIFICA NUMERO PARI O DISPARI
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// ALERT DI NOTIFICA ERRORE DINAMICO
function notifyError(msgError){
    const alertError = document.createElement('div');
    alertError.className = 'alert alert-danger';
    alerta.innerHTML = msgError;
    return alertError;
}