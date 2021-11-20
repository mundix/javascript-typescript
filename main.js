"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samiel L. Jackson',
        ironman: 'Robert Donew Jr.',
        vision: 'Paul Betany',
        activo: true,
        poder: 1500.5465
    };
    const { poder, vision } = avengers;
    const printAvengers = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avangers = ['Cap. America', 'Iron Man', true, 150.6];
    const avengersArray = ['Cap. America', 'Iron Man', true, 150.6];
    const [capi, ironman, seriaUnBool, seriaUnNumero] = avengersArray;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = 'Edmundo';
    const getName = () => { };
})();
//# sourceMappingURL=main.js.map