"use strict";
(() => {
    let flash = {
        name: 'Barry allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 3],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutanPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
    const wolverine = new Mutant();
})();
(() => {
    const client = {
        name: 'Edmundo',
        age: 25,
        address: {
            id: 125,
            zip: 'KYZX 123',
            city: 'Okinawa',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 126,
            zip: 'KYZX 445',
            city: 'Toronto',
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map