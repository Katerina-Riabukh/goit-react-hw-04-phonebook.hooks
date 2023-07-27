
import { Form } from "./form/form";
import { ContactList } from "./contactList/contactList";
import { FilterContacts } from "./filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";
import { useState, useEffect, useMemo } from "react";



export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  const formSubmit = (data) => {

    if (contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} already in contacts`)
    }
    setContacts(prevState => contacts.concat(data));

  };

  useEffect(() => {

    window.localStorage.setItem('contacts', JSON.stringify(contacts))

  }, [contacts]);

  const filterValue = (currentValue) => {
    setFilter(prevState => currentValue)
  }

  const delateContact = (id) => {
    setContacts(prevState => contacts.filter((contact) => contact.id !== id))

  }
  /**variant 1 *///=============
  const filteredContactsList = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  /**variant 2 *///=============

  // const filteredContactsList = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase())
  // });

  //============================

  return (
    <Wraper>
      <H1>Phone book</H1>
      <Form onFormSubmit={formSubmit} />
      <H2>Contacts</H2>
      <FilterContacts value={filter} filterContactsByName={filterValue} />

      <ContactList data={filteredContactsList} delateContact={delateContact} />
    </Wraper>
  );
}

