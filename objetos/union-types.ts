(() => {

    //* existe una palabra reservada 'type' en type script 

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

   let myCustomVariable: (string | number | Hero) = 'Edmundo';
   console.log(myCustomVariable);

    myCustomVariable = 10;
   console.log(typeof(myCustomVariable));

    myCustomVariable = {
       name: 'Bruce',
       age: 34,
       powers: [1]
   };
   console.log(typeof(myCustomVariable));

})();