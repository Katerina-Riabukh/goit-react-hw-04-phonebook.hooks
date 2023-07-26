import React, { Component } from "react";
import { Form } from "./form/form";
import { ContactList } from "./contactList/contactList";
import { FilterContacts } from "./filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";




export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }


  formSubmit = (data) => {

    return this.state.contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase()) ?
      alert(`${data.name} already in contacts`)
      :
      this.setState((state) => ({
        contacts: state.contacts.concat(data)
      }));
  }

  filterValue = (currentValue) => {
    this.setState({ filter: currentValue })
  }

  delateContact = (id) => {
    this.setState((state) => ({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
    }));
  }

  componentDidMount() {
    const local = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(local);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {



    const filteredContactsList = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    });

    return (
      <Wraper>
        <H1>Phone book</H1>
        <Form onFormSubmit={this.formSubmit} />
        <H2>Contacts</H2>
        <FilterContacts value={this.state.filter} filterContactsByName={this.filterValue} />

        <ContactList data={filteredContactsList} delateContact={this.delateContact} />
      </Wraper>
    );
  }


};
