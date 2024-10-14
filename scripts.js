function defaultHorario(numero){
    if(numero < 10){
        numero = '0' + numero
    }

    return numero;
}

function atualizarHorario() {
    var agora = new Date();

    var horario = defaultHorario(agora.getHours()) + ':' + defaultHorario(agora.getMinutes()) + ':' + defaultHorario(agora.getSeconds());

    document.querySelector('.display').innerHTML = horario;
}

atualizarHorario();
setInterval(atualizarHorario, 1000);