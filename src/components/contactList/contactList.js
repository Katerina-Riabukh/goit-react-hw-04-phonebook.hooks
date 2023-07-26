import React from "react";
import { ContactItem } from "./contactItem";
import { UL } from "./contactList.styled";
import PropTypes from 'prop-types'; 



export const ContactList = ({ data, delateContact }) => {

    return <UL >
        {data.map((i) => {    
            return <ContactItem item={i} key={i.id} delateContact={delateContact} />
       })}
    </UL>
    
  
}

ContactList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired),
    delateContact: PropTypes.func.isRequired,
};


