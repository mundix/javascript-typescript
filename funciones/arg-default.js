"use strict";
(function () {
    // Por defaul los argumetnos son tipo ANY 
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return firstName.toUpperCase() + " " + (lastName.toUpperCase() || '-----');
        }
        else {
            return firstName + " " + (lastName || '-----');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
