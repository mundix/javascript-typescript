(()=>{


    abstract class Mutante {
        constructor(
            public name:string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return `Mundo a salvo`;
        }
    }

    class Villian extends Mutante {
        conquistarMundo() {
            return `Mundo conquitado`;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // let wolverine: Mutante; //si no estuviera siendo inicializado puede poner asi  
    
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante): void => {
        console.log(character.realName);
    }

    printName(wolverine);
    printName(magneto);

})();