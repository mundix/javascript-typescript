(() => {

    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log(avenger.charAt(10));
    console.log((avenger as string).charAt(5));

    avenger = 150.003434234;
    console.log(avenger.toFixed(2));
    console.log(<number>avenger.toFixed(2));

    console.log(exists);
    console.log(power);

})();