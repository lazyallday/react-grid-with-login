import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;

        if (username === 'Admin' && password === '1234') {
            this.props.userHasAuthenticated(true);
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', username);
            this.props.history.push(`/main/${username}`);
        }
        else {
            alert("Wrong account info. Suggest using account: 'Admin' - password: '1234'");
        }
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            placeholder="Admin"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="1234"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}