"use strict";
(function () {
    //* existe una palabra reservada 'type' en type script 
    var myCustomVariable = 'Edmundo';
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof (myCustomVariable));
    myCustomVariable = {
        name: 'Bruce',
        age: 34,
        powers: [1]
    };
    console.log(typeof (myCustomVariable));
})();
//# sourceMappingURL=union-types.js.map