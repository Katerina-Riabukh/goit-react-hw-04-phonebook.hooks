import React from "react";
import { Button, LI, Name } from "./contactItems.styled";
import PropTypes from 'prop-types';



export const ContactItem = ({ item, delateContact }) => {

        const { name, number, id } = item

        return <LI >
                <Name>{name}</Name>
                <span>{number}</span>
                <Button onClick={() => delateContact(id)}>Delate contact</Button>
        </LI>
};

ContactItem.propTypes = {
        item: PropTypes.objectOf(PropTypes.string),
        delateContact: PropTypes.func.isRequired,
}


