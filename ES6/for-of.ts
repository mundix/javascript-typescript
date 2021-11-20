(() => {
    type Avengers = {
        name: string,
        weapon: string,
    }

    const ironman: Avengers = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }

    const captainAmerica: Avengers = {
        name: 'Capitan America',
        weapon: 'Escudo',
    }

    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir',
    }

    // Un array de Avenders[]
    const avengers:Avengers[] = [ironman, thor, captainAmerica];

    // Genial !!! 
    for (const avenger of avengers) {
        console.log(avenger);
    }

})();