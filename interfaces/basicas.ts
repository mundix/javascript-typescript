(()=>{
    //un interface funciona igual que casi un tipo. 
    // No llega el =  si no que contiene propiedades 
    interface Hero  {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry allen',
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 3],
        getName() {
            return this.name;
        }
    }

})();