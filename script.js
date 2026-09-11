(function contador() {

    const LIMITE_MIN = -5;
    const LIMITE_MAX = 10;

    const pantalla = document.querySelector('[data-rol="contador-valor"]');
    const botonMas = document.querySelector('[data-rol="contador-incrementar"]');
    const botonMenos = document.querySelector('[data-rol="contador-decrementar"]');
    const botonReiniciar = document.querySelector('[data-rol="contador-reiniciar"]');
    const mensaje = document.querySelector('[data-rol="contador-mensaje-limite"]');


    let valor = 0;


    function pintar() {

        pantalla.textContent = valor;
        botonMas.disabled = valor >= LIMITE_MAX;
        botonMenos.disabled = valor <= LIMITE_MIN;
        mensaje.textContent =
            valor >= LIMITE_MAX ? `Llegaste al maximo (${LIMITE_MAX}).` :
                valor <= LIMITE_MIN ? `Llegaste al minimo (${LIMITE_MIN}).` : '';

    }

    botonMas.addEventListener('click', () => {
        valor = Math.min(LIMITE_MAX, valor + 1);
        pintar();
    });

    botonMenos.addEventListener('click', () => {
        valor = Math.max(LIMITE_MIN, valor - 1);
        pintar();
    });

    botonReiniciar.addEventListener('click', () => {
        valor = 0;
        pintar();
    });

    pintar();

})();

(function cronometro() {

    const pantallaMins = document.querySelector('[data-rol="cron-mins"]');
    const pantallaSecs = document.querySelector('[data-rol="cron-segs"]');
    const pantallaCents = document.querySelector('[data-rol="cron-ms"]');
    const botonSwitch = document.querySelector('[data-rol="switch-cronometro"]');
    const botonReiniciar = document.querySelector('[data-rol="reiniciar-cronometro"]');

    let mins = 0;
    let secs = 0;
    let cents = 0;
    let ejecutando = false;
    //Se generará obligatoriamente al iniciar el cronómetro
    let reloj = null;

    function inicio() {
        // Lanzamos el reloj que llama el pulso cada 10 ms
        reloj = setInterval(pulso, 10);
        botonSwitch.textContent = "Pausar";
        botonReiniciar.disabled = true;
        ejecutando = true;
    }

    function pausa() {
        // Se retira el reloj
        clearInterval(reloj);
        botonSwitch.textContent = "Iniciar";
        botonReiniciar.disabled = false;
        ejecutando = false;
    }

    function reiniciar() {
        clearInterval(reloj);
        mins = 0;
        secs = 0;
        cents = 0;

        pantallaMins.textContent = "00";
        pantallaSecs.textContent = "00";
        pantallaCents.textContent = "00";

        botonSwitch.textContent = "Iniciar"
        botonReiniciar.disabled = false;
        ejecutando = false;
    }

    function pulso() {
        // Loop para las centésimas de segundo
        if (cents < 99) {
            cents++;
            if (cents < 10) {
                pantallaCents.textContent = "0" + cents;
            }else{
                pantallaCents.textContent = cents;
            }
            
        }
        if (cents == 99) {
            cents = -1;
        }
        // Loop para los segundos en base de las centésimas
        if (cents == 0) {
            secs++;
            if (secs < 10) {
                pantallaSecs.textContent = "0" + secs;
            }else{
                pantallaSecs.textContent = secs;
            }
        }
        if (secs == 59) {
            secs = -1;
        }
        // Loop para los minutos en base de los segundos
        if (secs == 0 && cents == 0) {
            mins++;
            if (mins < 10) {
                pantallaMins.textContent = "0" + mins;
            }else {
                pantallaMins.textContent = mins;
            }
        }
        // Aquí no añado el reset a los minutos cuando lleguen a 60,
        //  dado que no he puesto un contador de horas
    }

    botonSwitch.addEventListener('click', () => {
        if (ejecutando) {
            pausa();
        } else {
            inicio();
        }
    })

    botonReiniciar.addEventListener('click', reiniciar);

})();