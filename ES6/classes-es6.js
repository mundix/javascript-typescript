(()=>{
    class Avenger  {
        name;
        power;

        constructor(name = 'No Name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flygin;

        constructor(name, power){
            super(name, power);
            this.flygin = true;
        }
    }

    const hulk = new Avenger('Hulk', 99999);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    console.log(falcon);
})();