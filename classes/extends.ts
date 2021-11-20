(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Contructor Avenger  llamado!');
        }

        protected getFullName() : string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
             name: string,
             realName: string,
            public isMutant: boolean
        ) {
            // El constructo debe llamar primero que cual quier linea 'super(args)' 
            super(name, realName);
            console.log('Contructor Xmen llamado');

        }

        // Getters and Setters 
        get fullName() {
            return `${this.name} ${this.realName}`;
        }

        set fullName(name: string) { //Solo recibe un argumento , no se puede poner mas de uno. 
            if(name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }

        public getFullNameDesdeXmen() {
            console.log(super.getFullName()); //Esto no lo lee por que esta privado 
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();

    // wolverine.fullName = 'Eduardo';
    // console.log(wolverine.fullName); //los getters  se llaman , no se ejecutan. 
})();