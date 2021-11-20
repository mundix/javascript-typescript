(()=>{
    // El orden de las interface , va en orden de arriba hacia abajo , como el ejemplo de address 
    // La principal va arriba
    interface Client {
        name: string;
        age?: number;
        address?: Address,
        //Otra diferente entre los tipos e interfaces y puede devolver cual quier tipo de datos. 
        getFullAddress(id: string): string 
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Edmundo',
        age: 25,
        address: {
            id: 125,
            zip: 'KYZX 123',
            city: 'Okinawa',
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
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
    }

    // console.log(client.getFullAddress('123'));
})();