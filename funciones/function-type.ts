(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

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

    let myFunction: () => string; 
    myFunction = saveTheWorld;
    console.log(myFunction());

})();