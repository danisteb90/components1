import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact ("Esteban", "Albán", "esteban@email.com", false);

    return (
        <div>
            <h2>
                Contact State:
            </h2>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;


