(()=>{
    const hero: [string, number, boolean] = ['Dr. Strange', 100, true];
    
    // El orden es muy importantepara asignar segun la definicio de las tuples
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero);

})();