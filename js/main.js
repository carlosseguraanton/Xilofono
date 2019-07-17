window.onload = iniciar;

function iniciar() {

    var numerosNotasCancion = [2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0];

    var duracionNotasCancion = [1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4];

    var arraySonidos = $('.sonidoNota');

    $('.barraMetal').click(function () {

        let numeroNota = parseInt(this.id);

        tocar(numeroNota);

    });

    function tocar(numeroNota) {

            arraySonidos[numeroNota].pause();

            arraySonidos[numeroNota].currentTime = 0;

            arraySonidos[numeroNota].play();

            $("#" + numeroNota).css("box-shadow", "0px 0px 10px black");

            setTimeout(function () {

                $("#" + numeroNota).css("box-shadow", "none");

            }, 300);

    }

    $('button').click(function () {

        for (var index = 0; index < numerosNotasCancion.length; index++) {

            setTimeout(function(y) {

                tocar(numerosNotasCancion[y]);

            }, ritmo(index) * 500, index);

        }

    });

    function ritmo(numeroNota) {

        sumaRitmo = 0;

        for (index = 0; index < numeroNota; index++) {

            sumaRitmo = sumaRitmo + duracionNotasCancion[index];

        }

        return sumaRitmo;

    }

}