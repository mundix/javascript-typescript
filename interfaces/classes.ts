(() => {


    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id: number): string
    }

    interface Human {
        age: number;

    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        mutanPower(id: number) {
            return this.name + ' ' + this.realName;
        }
    }

    const wolverine = new Mutant();

})();