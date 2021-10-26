(() => {

    let isSuperman: boolean = true; 
    let isBatman: boolean = false;

    isSuperman = (isBatman) ? true : false;
    // isSuperman = true && false;

    console.log({isBatman});
    console.log({isSuperman});

})();