export class Contact {
    name= "";
    last_name= "";
    email= "";
    connected= false;

    constructor (name, last_name, email, connected) {
        this.name=name;
        this.last_name=last_name;
        this.email=email;
        this.connected=connected;
    }
}

// eslint-disable-next-line no-lone-blocks
{/*Nombre: que será un String.
Apellido: también un String.
Email: de nuevo un String.
Conectado: será un booleano que nos indicará si la persona está conectada o no. */}