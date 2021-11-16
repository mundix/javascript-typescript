"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder === null || poder === void 0 ? void 0 : poder.length;
    console.log(largoDelPoder);
    // !~-----------------------------
    // * Ejercicio Practivo de Seccion Functions 
    // !~-----------------------------
    //? Funciones básicas
    // function sumar(a, b) {
    //   return a + b;
    // }
    var sumar = function (a, b) {
        return a + b;
    };
    // var contar = (heroes) => {
    //   return heroes.length;
    // }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    // Parametros por defecto
    // const llamarBatman = (llamar) => {
    //   if (llamar) {
    //     console.log("Batiseñal activada");
    //   }
    // }
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = false; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    //Rest?
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    //Tipo funcion
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    var noHaceNadaTampoco = noHaceNada(1, 'Hola', true, superHeroes);
})();
//# sourceMappingURL=app-bkp.js.map