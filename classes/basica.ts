(()=>{
    
    class Avenger {
        
        // private name:string;
        // public team:string;
        // public realName?:string; //optional
        static avgAge: number = 35;

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
    }

    const antman: Avenger = new Avenger('Atnman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
    // console.log(Avenger); //Usando propiedades staticas , se accede haciendo referencia a la clases, no a la instancia. 

})();