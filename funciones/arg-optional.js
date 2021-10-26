"use strict";
(function () {
    // Por defaul los argumetnos son tipo ANY 
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '-----');
    };
    var name = fullName('Tony');
    console.log(name);
})();
