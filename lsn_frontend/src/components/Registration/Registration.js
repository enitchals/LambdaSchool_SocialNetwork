import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Registration.css";
import axios from "axios";

const URL = "http://471e2504.ngrok.io";
class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      loginEmail: "",
      loginPw: "",
      fName: "",
      lName: "",
      regEmail: "",
      regPw: "",
      showLogin: true,
      showReg: false
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
      .post("URL/login", {
        email: loginEmail,
        password: loginPw
      })
      .then(result => {});
  };

  register = e => {
    e.preventDefault();
    const { role, fName, lName, regEmail, regPw } = this.state;
    let newUser = {
      name: fName,
      email: regEmail,
      password: regPw,
      role: role
    };
    axios.post("URL/new-user", newUser).then(result => {});
  };

  makeVisible = e => {
    const name1 = e.target.name;
    this.setState(prevState => {
      return Object.assign(
        prevState,
        { showLogin: false, showReg: false },
        { [name1]: !prevState[name1] }
      );
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div className='MainWrapper'>
        <div className="login">
          <div className="toggles">
            <h1>Welcome to Lambda School Social Network</h1>
            <Button
              className="toggle-btn"
              onClick={this.makeVisible}
              color="primary"
              name="showLogin"
            >
              Login
            </Button>
            <Button
              active
              className="toggle-btn"
              onClick={this.makeVisible}
              color="success"
              name="showReg"
            >
              Register
            </Button>
          </div>
          {this.state.showLogin && (
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
          )}
          {this.state.showReg && (
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
                    name="regEmail"
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
                    name="regPw"
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
          )}
        </div>
      </div>
    );
  }
}

export default Registration;
