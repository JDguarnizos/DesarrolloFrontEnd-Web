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
            valor <= LIMITE_MAX ? `Llegaste al máximo ${LIMITE_MAX}` :
                valor <= LIMITE_MIN ? `Llegaste al mínimo ${LIMITE_MIN}` : ``;
    }



    botonMas.addEventListener('click', () => {
        valor = Math.min(LIMITE_MAX, valor + 1);
        console.log("Le digo Hola");
        pintar();
    })


    botonMenos.addEventListener('click', () => {
        valor = Math.max(LIMITE_MIN, valor - 1);
        console.log("Ella me dice good bye");
        pintar();
    })


    botonReiniciar.addEventListener('click', () => {
        valor = 0;
        console.log("Le digo nena como tu ya no hay")
        pintar();
    })


    pintar();

})();