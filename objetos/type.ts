(() => {

    //* existe una palabra reservada 'type' en type script 

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    //? para hacerlo tipo objeto sele pone el : {}
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