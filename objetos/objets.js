"use strict";
(function () {
    // para hacerlo tipo objeto sele pone el : {}
    var flash = {
        name: 'Barry allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getName: function () {
            return this.name;
        }
    };
})();