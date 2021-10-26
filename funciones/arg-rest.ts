(() => {
    // REST agument (resto de argumetnos)
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        console.log(restArgs.length);
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Edmundo', 'Pichardo');
    console.log({ superman });


})();