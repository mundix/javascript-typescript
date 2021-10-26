"use strict";
(function () {
    // por defecto lso valroes son 0, 1, 2
    // enum AudioLevel  {
    //     min,
    //     medium,
    //     max
    // }
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.max;
    console.log(currentAudioLevel);
    console.log(AudioLevel);
})();
