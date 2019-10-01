import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import SignUp from './signUp';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: false,
            password: false,
            emailValue: '',
            passwordValue: '',
            logedIn: false,
            login: [],
            newLoginData: {
                Email: "",
                Password: "",
                email: { fieldName: "Email", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format" }
            }
        }
    }
    doSomething = (e) => {
        alert('it works!');
        e.preventDefault();
    }


    handleValidSubmit = (event, values) => {
        this.setState({ email: values.email, password: values.password });
        window.location.href = "/layout";
    }

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({ email: values.email, password: values.password, error: true });
    }

    closeModal = () => {
        this.setState({ email: false, password: false, error: false });
    }
    updateInputValue = (evt) => {
        this.setState({
            emailValue: evt.target.value
        });
    }

    updatePasswordValue = (evt) => {
        this.setState({
            passwordValue: evt.target.value
        });
    }

    addLogin = () => {
        console.log(this.state.emailValue, this.state.passwordValue);
        axios.get("http://localhost:3001/signUp?Email=" + this.state.emailValue, {}).then((res) => {
            console.log("response", res.data[0].Password);
            const dbPassword = res.data[0].Password;
            const enteredPassword = this.state.passwordValue;
            if (dbPassword == enteredPassword) {
                window.location.href = "/layout";
            }
            else {
                alert("Please enter valied details.")
            }
        }).catch((error) => {
            //on error
            alert("Email/Password Entered wrong");
        });

    }
    signUp = () => {
        window.location.href = "/signUp";
    }


    render() {
        const modalError = this.state.error ? 'not' : ''; // This is just for the modal
        return (
            <div>
                <h1>Parking System</h1>
                <h4>Please Login to book your slot..!</h4>
                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <AvField name="email" label="Email Address" value={this.state.emailValue} onChange={this.updateInputValue} type="email" placeholder="Email" required />
                </AvForm>

                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <AvField name="password" value={this.state.passwordValue} onChange={this.updatePasswordValue} label="Password" type="password" placeholder="Password" required />

                    <Button color="primary" onClick={this.addLogin}>Login</Button>
                    <Button color="primary" onClick={this.signUp}>SignUp</Button>
                </AvForm>

                <Modal isOpen={(this.state.email !== false) || (this.state.password !== false)} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>Form is {modalError} valid!</ModalHeader>
                    <ModalBody>
                        You have {modalError} successfully Loged in the form and submitted it. Your email/Password ({this.state.email})/({this.state.password}) is {modalError} valid!
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>Ok, got it!</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default Login;
