(() => {
    //quiero restringir una funcion o que funcione de esta manera
    interface addTwoNumbers {
        (a: number, b: number): number; //Es la funcion 
    }

    let addTwoNumbersFunction: addTwoNumbers;

    addTwoNumbersFunction = (a: number, b: number): number => {
        return 10;
    }

})();