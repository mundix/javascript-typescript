(() => {

    // para hacerlo tipo objeto sele pone el : {}
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name
        }
    }
})();