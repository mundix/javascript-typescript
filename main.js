"use strict";
(() => {
    var _a;
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    _a = Avenger;
    Avenger.avgAge = 35;
    Avenger.getAvgAge = () => {
        return _a.name;
    };
    const antman = new Avenger('Atnman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map