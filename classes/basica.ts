(()=>{
    
    class Avenger {
        
        // private name:string;
        // public team:string;
        // public realName?:string; //optional
        static avgAge: number = 35;

        // Solo puede acceder a ellas metiende la clase misma y no la instancia 
        // Avenger.getAvgAge();
        static getAvgAge = () => {
            return this.name; //Nombre de la clase, y no la propiedad, devuelve 'Avenger' que es la clase en si. 
            // Su pongo this.realName daria undefined  
        }

        // ? es para opcional 
        // constructor(name:string, team:string, realName?:string) {
        constructor(
            private name:string, 
            private team:string, 
            public realName?:string,
            // avgAge: number = 55 //Este valor como va despues de un opcional debe ser requerido si no es opcional
            // Por ende debe tener un valor por defecto si no es opcional. 
            ) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
            // Avenger.avgAge = avgAge; 
        }

        public bio(): string {
            return `${ this.name } ${ this.team }`;
        }

        
    }

    const antman: Avenger = new Avenger('Atnman', 'Capitan', 'Scott Lang');
    
    // console.log(antman);

    // console.log(antman.bio());

    // console.log(Avenger.getAvgAge());
    // console.log(Avenger.avgAge);
    // console.log(Avenger); //Usando propiedades staticas , se accede haciendo referencia a la clases, no a la instancia. 

})();