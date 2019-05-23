window.onload = iniciar;

function iniciar() {

    // Estoy probando con el 9 para ver el error pero el valor correcto es 2
    var arrayNotasCancion = [9, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0];

    var temposNotas = [4, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4];

    var arraySonidos = $('.sonido');

    $('.nota').click(function () {

        let numeroNota = parseInt(this.id);

        tocar(numeroNota);

    });

    function tocar(numeroNota) {

        if (numeroNota < 9) {

            arraySonidos[numeroNota].pause();

            arraySonidos[numeroNota].currentTime = 0;

            arraySonidos[numeroNota].play();

            $("#" + numeroNota).css("box-shadow", "0px 0px 10px black");

            setTimeout(function () {

                $("#" + numeroNota).css("box-shadow", "none");

            }, 300);

        }

    }

    $('button').click(function () {

        for (var index = 0; index < arrayNotasCancion.length; index++) {

            setTimeout(function(y) {

                tocar(arrayNotasCancion[y]);

            }, ritmo(index) * 350, index);

        }

    });

    function ritmo(numeroNota) {

        sumaRitmo = 0;

        for (index = 0; index < numeroNota; index++) {

            sumaRitmo = sumaRitmo + temposNotas[index];

        }

        return sumaRitmo;

    }

}