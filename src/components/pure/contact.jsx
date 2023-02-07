import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h2>
                Last Name: { contact.last_name }
            </h2>
            <h2>
                Email: { contact.email }
            </h2>
            <h2>
                This person is: { contact.connected ? "Online" : "Offline" }
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    connected: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
