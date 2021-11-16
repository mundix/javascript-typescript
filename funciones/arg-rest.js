"use strict";
(function () {
    // REST agument (resto de argumetnos)
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        console.log(restArgs.length);
        return firstName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent', 'Edmundo', 'Pichardo');
    console.log({ superman: superman });
})();
//# sourceMappingURL=arg-rest.js.map