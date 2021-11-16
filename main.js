"use strict";
(function () {
    // para hacerlo tipo objeto sele pone el : {}
    var flash = {
        name: 'Barry allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Super fuerza']
    };
    // flash = {
    //     name: 'Clark Kent',
    //     // age: 60,
    //     powers: ['Super fuerza'],
    //     getName() {
    //         return this.name
    //     }
    // }
})();
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
(function () {
    //* existe una palabra reservada 'type' en type script 
    var myCustomVariable = 'Edmundo';
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof (myCustomVariable));
    myCustomVariable = {
        name: 'Bruce',
        age: 34,
        powers: [1]
    };
    console.log(typeof (myCustomVariable));
})();
//# sourceMappingURL=main.js.map