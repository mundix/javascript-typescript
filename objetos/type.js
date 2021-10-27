"use strict";
(function () {
    //* existe una palabra reservada 'type' en type script 
    //? para hacerlo tipo objeto sele pone el : {}
    var flash = {
        name: 'Barry allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 3],
        getName: function () {
            return this.name;
        }
    };
})();
