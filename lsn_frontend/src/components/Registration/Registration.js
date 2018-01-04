import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Registration.css";
import axios from "axios";

const URL = "localhost:3030";
class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      loginEmail: "",
      loginPw: "",
      fName: "",
      lName: "",
      regEmail: "",
      regPw: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state.role);
    console.log(this.state.loginPw);
  };

  signIn = e => {
    e.preventDefault();
    const { loginEmail, loginPw } = this.state;

    axios
      .post("URL/login", { email: loginEmail, password: loginPw })
      .then(result => {});
  };

  register = e => {
    e.preventDefault();
    const { role, fName, lName, regEmail, regPw } = this.state;

    axios
      .post("URL/new-user", {
        name: `${fName} ${lName}`,
        email: regEmail,
        password: regPw,
        role: role
      })
      .then(result => {});
  };

  componentDidMount() {}

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <h1>Login</h1>
          <Form id="login">
            <FormGroup>
              <Label for="loginEmail">Email</Label>
              <Input
                type="email"
                name="loginEmail"
                id="loginEmail"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="loginPw">Password</Label>
              <Input
                type="password"
                name="loginPw"
                id="loginPw"
                placeholder="password"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <Button onClick={this.signIn} color="primary">
              Login
            </Button>
          </Form>
        </div>
        <div className="reg-form">
          <h1>Register</h1>
          <Form id="register">
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                type="select"
                name="select"
                name="role"
                onChange={this.onChange}
                required
              >
                <option>-</option>
                <option>student</option>
                <option>instructor</option>
                <option>TA</option>
                <option>graduate</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="fName">First Name</Label>
              <Input
                type="fName"
                name="fName"
                id="fName"
                placeholder="First Name"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lName">Last Name</Label>
              <Input
                type="lName"
                name="lName"
                id="lName"
                placeholder="Last Name"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="regEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="regEmail"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="regPw">Password</Label>
              <Input
                type="password"
                name="password"
                id="regPw"
                placeholder="password"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <Button onClick={this.register} color="primary">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Registration;
