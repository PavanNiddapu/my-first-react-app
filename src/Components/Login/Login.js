import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import "./Login.css"

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (userName === "admin" && password === "1984") {
            props.afterValidHandler()
        } else {
            alert("Invalid password")
        }
    }
    return (
        <div>
            <h1 className="PortfolioTitle">Portfolio Login</h1>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="userName" className="userName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Please enter user name"
                        />

                    </Form.Group>
                    <Form.Group size="lg" controlId="password" className="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Please enter password"
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}
                        style={{
                            margin: "10px 0"
                        }}>
                        Login
                    </Button>
                </Form>


            </div>
            <h1 className="PortfolioWishes">Happy Birthday Sir</h1>
            <h6 className="PortfolioWisher">- from a well wisher</h6>
        </div>

    )
}

export default Login;