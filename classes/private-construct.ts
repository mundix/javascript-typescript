(() => {

    // Singletone , una unica instancia 
    class Apocalipsis {
        //creo una propiedad statica instance 
        static instance: Apocalipsis;

        // constructor(
        // Esto es para controlar como el cosntructor va a ser llamado. 
        private constructor(public name: string) {}

        // Ahora creo un metodo para crear el Apocalipsis
        // Esto es el princpio Singletone
        static callApocalipsis(): Apocalipsis {
            if (Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }

         changeName(newName: string): void {
            this.name = newName;
        }
    }

    // Todas seran la misma instancia 
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    // apocalipsis1.changeName('Xavier');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1 ... el unico');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2 ... el unico');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3 ... el unico');
    // console.log(apocalipsis);


})();