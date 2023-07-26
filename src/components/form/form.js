import { nanoid } from "nanoid";
import React, { Component } from "react";
import { BUTTON, FORM, Input, LABEL } from "./form.styled";

export class Form extends Component {

  state = {
    name: '',
    id: '',
    number: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: nanoid(10) })
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }



  render() {

    return (<FORM onSubmit={this.handleSubmitForm} >
      <LABEL>
        Name
        <Input

          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LABEL>
      <LABEL>
        Phone number
        <Input
          value={this.state.number}
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LABEL>
      <BUTTON type="submit">Add to contacts</BUTTON>
    </FORM>)
  };

};




