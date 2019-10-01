import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import axios from "axios";
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: [],
            newLoginData: {
                Name: "",
                EmpID: "",
                Email: "",
                Password: "",
                ConfPassword: ""
            }
        }
    }
    AddLoginEntry(myWord) {
        return (
            <FormGroup>
                <Label for="{myWord}">{myWord}</Label>
                <Input
                    id={myWord}
                    value={this.state.newLoginData[myWord]}
                    onChange={e => {
                        let { newLoginData } = this.state;
                        newLoginData[myWord] = e.target.value;
                        this.setState({ newLoginData });
                    }}
                />
            </FormGroup>
        );

    }
    addLogin = () => {
        window.location.href = "/";
    }
    addSignUp = () => {
        axios
            .post("http://localhost:3001/signUp", this.state.newLoginData)
            .then(response => {
                let { login } = this.state;
                login.push(response.data);

                this.setState({
                    newLoginData: {
                        Name: "",
                        EmpID: "",
                        Email: "",
                        Password: "",
                        ConfPassword: ""
                    }
                });
            });
        alert("Welcome.Sign up successfull..!")
    }
    render() {
        return (
            <div>
                <h3>Please fill the details for slot</h3>
                {this.AddLoginEntry("Name")}
                {this.AddLoginEntry("EmpID")}
                {this.AddLoginEntry("Email")}
                {this.AddLoginEntry("Password")}
                {this.AddLoginEntry("ConfPassword")}
                <h4>Please select Login. After successfull signUp </h4>
                <Button onClick={this.addSignUp} color="primary">Submit</Button>
                <Button onClick={this.addLogin} color="primary">Login</Button>
            </div>
        );
    };

}
