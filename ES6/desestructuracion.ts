(()=>{

    // Interface creada despues de avengers 
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samiel L. Jackson',
        ironman: 'Robert Donew Jr.',
        vision: 'Paul Betany',
        activo: true,
        poder: 1500.5465
    }

    const  {poder, vision } = avengers;

    // Tengoq ue especificar el tipo, habria que definirlo en cada situacion los tipos de datos
    //  pero lo ideal es crear una interface
    // const printAvengers = (avengers:{
    //     nick: string,
    //     ironman: string,
    //     vision: string,
    //     activo: boolean,
    //     poder: number
    // }) => {

    // }
    // Implementadno la interfaz 
    // const printAvengers = (avengers: Avengers) => {
        // const printAvengers = ({vision, activo, poder, ironman}: Avengers) => {
        const printAvengers = ({ironman, ...resto}: Avengers) => {
        // console.log(avengers.ironman);
        // En typescript el saca ironman del resto (usando operador ... 'rest' )
        console.log(ironman, resto);
    }


    // console.log(poder.toFixed(), vision.toUpperCase());
    printAvengers(avengers);

})();