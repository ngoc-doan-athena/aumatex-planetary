import React, { useEffect, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

class FormValidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ajaxError:
        "There was a server error the prevented the form from submitting.",
    };
  }

  submitForm() {
    if (this.validator.allValid()) {
      alert("You submitted the form successfully!");
    } else {
      this.validator.showMessages();
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  input(name, value, rules, type = "text") {
    value = value || this.state[name];
    rules = rules || name;
    return (
      <div>
        <label>{name}</label>
        <input
          className="input"
          type={type}
          name={name}
          value={this.state[name]}
          onChange={this.handleInputChange.bind(this)}
          onBlur={() => this.validator.showMessageFor(name)}
        />
        {this.validator.message(name, value, rules)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.input("alpha")}
        {this.input("card_exp")}
        {this.input("card_num")}
        {this.input("currency")}
        {this.input("email")}
        {this.input("integer")}
        {this.input("max", this.state.max, "max:20")}
        {this.input("min", this.state.min, "min:8")}
        {this.input("numeric")}
        {this.input("phone")}
        {this.input("regex", this.state.regex, "regex:^A*$")}
        {this.input("required")}
        {this.input("size", this.state.size, "size:20,num")}
        {this.input("string")}
        {this.input("typeof", this.state.typeof, [{ typeof: "string" }])}
        {this.input("url")}
        {this.input("password", this.state.password, [
          "min:8|required|integer|regex|alpha",
        ])}
        {this.input(
          "confirmPassword",
          this.state.confirmPassword,
          `required|in:${this.state.password}`,
          { messages: { in: "The passwords need to match." } }
        )}
      </div>
    );
  }
}

export default FormValidate;
