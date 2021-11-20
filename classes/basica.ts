(()=>{
    
    class Avenger {
        
        private name:string;
        public team:string;
        public realName:string;
        static avgAge: number = 35;

        // ? es para opcional 
        constructor(name:string, team:string, realName?:string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Atnman', 'Capitan');
    // console.log({antman});
    console.log(Avenger.length); //Usando propiedades staticas , se accede haciendo referencia a la clases, no a la instancia. 

})();