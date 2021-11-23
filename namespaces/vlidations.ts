namespace Validations { 
    // DEbe exportarse para poder acceder aellas , esto seria solo lo que quiero 
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    }

    export const validateDate = (myDate: Date): boolean => {
        return (isNaN( myDate.valueOf())) 
        ? false 
        : true;
    }
}

console.log(Validations.validateText('Edmundo'));

