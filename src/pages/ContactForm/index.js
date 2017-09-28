// Dependencies
import React, { Component } from 'react';
// Externals
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  updateInput = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form className="container content text-center">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-1">
            <h1>Get in touch</h1>
            <p>Feel free to reach out for feedback on my projects or for interesting opportunities!</p>
            {/* Name field */}
            <Input
              label="Name"
              onChange={(event) => this.updateInput('name', event.target.value)}
              value={this.state.name}
              placeholder="Name"
            />
            {/* Email field */}
            <Input
              label="Email"
              onChange={(event) => this.updateInput('email', event.target.value)}
              value={this.state.email}
              placeholder="Email"
            />
            {/* Message textarea */}
            <Textarea
              label="Message"
              onChange={(event) => this.updateInput('message', event.target.value)}
              /* This should be written like 'textarea' */
              value={this.state.message}
              placeholder="Message"
            />
            {/* Submit button */}
            <Button
              email="sandra.adamshallie@gmail.com"
              formValues={this.state}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
