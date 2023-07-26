import React from "react";
import { Filter, FilterContact } from "./filterContacts.styled";
import PropTypes from 'prop-types';



export const FilterContacts = ({ filterContactsByName }) => {


    return (<FilterContact> Find contact by name
        <Filter type="text"
            onChange={(event) => filterContactsByName(event.currentTarget.value)}></Filter>
    </FilterContact>
    );



};

FilterContacts.propTypes = {
    filterContactsByName: PropTypes.func.isRequired,
}


