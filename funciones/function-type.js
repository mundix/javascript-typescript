"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    //* Tipo func 
    //? let myFunction: Function; //* Tipo func 
    //* Despues de declarar el nombre de la funcion los ":" indica que viene el tipo de datos,
    //* Y el => el tipo que regresa
    //* let myFunction: (y:number, z:number) => number;  
    //? myFunction = addNumbers;
    //! console.log(myFunction(1, 2));
    //* let myFunction: (y:string) => string; 
    //? myFunction = greet;
    //! console.log(myFunction('Edmundo'));
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
