window.onload = iniciar;

function iniciar() {

    // Le he quitado el primer valor que había aquí (que era 9 y sobrepasaba el tamaño del array de sonidos)
    var arrayNotasCancion = [2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0];

    // Le he quitado el primer valor que había en este array (que era 4) para que así los tempos coincidan son las notas de arriba
    var temposNotas = [1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4];

    var arraySounds = $('.sounds');

    $('.note').click(function () {

        let numNota = parseInt(this.id);

        tocar(numNota);

    });

    function tocar(numNota) {

        if (numNota < 9) {

            arraySounds[numNota].pause();

            arraySounds[numNota].currentTime = 0;

            arraySounds[numNota].play();

            $("#" + numNota).css("box-shadow", "0px 0px 10px black");

            setTimeout(function () {

                $("#" + numNota).css("box-shadow", "none");

            }, 300);

        }

    }

    $('.boton').click(function () {

        for (var index = 0; index < arrayNotasCancion.length; index++) {

            setTimeout(function(y) {

                tocar(arrayNotasCancion[y]);

            }, ritmo(index) * 350, index);

        }

    });

    function ritmo(numNota) {

        sumaRitmo = 0;

        for (index = 0; index < numNota; index++) {

            sumaRitmo = sumaRitmo + temposNotas[index];

        }

        return sumaRitmo;

    }

}