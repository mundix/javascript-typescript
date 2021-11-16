"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["aquaman"] = 0] = "aquaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder === null || poder === void 0 ? void 0 : poder.length;
    console.log(largoDelPoder);
    var sumar = function (a, b) {
        return a + b;
    };
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = false; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco = noHaceNada(1, 'Hola', true, superHeroes);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    console.log(apocalipsis);
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return firstName.toUpperCase() + " " + (lastName.toUpperCase() || '-----');
        }
        else {
            return firstName + " " + (lastName || '-----');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '-----');
    };
    var name = fullName('Tony');
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Tony', 'Stark');
    console.log(name);
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        console.log(restArgs.length);
        return firstName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent', 'Edmundo', 'Pichardo');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activarBatisenal = function () {
        return 'Batisenal activada!';
    };
    var heroName = returnName();
})();
(function () {
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
})();
(function () {
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
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(10));
    console.log(avenger.charAt(5));
    avenger = 150.003434234;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 3, 4, 5, '6', 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormamu', 'Green Goblin'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isBatman: isBatman });
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.max;
    console.log(currentAudioLevel);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!!!');
})();
(function () {
    var isActive = null;
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    console.log("I'm " + batman);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
})();
(function () {
    var hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map