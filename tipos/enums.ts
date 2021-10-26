
(()=>{
    // por defecto lso valroes son 0, 1, 2
    // enum AudioLevel  {
    //     min,
    //     medium,
    //     max
    // }

    enum AudioLevel  {
        min = 1,
        medium,
        medium2,
        max = 10
    }

    let currentAudioLevel = AudioLevel.max;

    console.log(currentAudioLevel);
    console.log(AudioLevel);

})();