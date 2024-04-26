import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./form.css";

const SERVICE_ID = "service_p920ico";
const TEMPLATE_ID = "template_i5pi6qu";
const PUBLIC_KEY = "rq898-0ALb3WReHI3";

export const FormFields = (props) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Successfully");
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong!");
            });
        e.target.reset();
    };
    return (
        <Form
            className="formContainer"
            onSubmit={handleOnSubmit}
            id="formContainer">
            <Form.Group as={Col} controlId="formGridName"
                className="formRow">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    label='Name'
                    name='fromName'
                    type='text'
                    placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail"
                className="formRow">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    label="Email"
                    name="replyTo"
                    type="email"
                    placeholder="Email"

                />
            </Form.Group>

            <Form.Group as={Col} id="formGridQuery"
                className="formRow">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    label="Message"
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    rows={3} />
            </Form.Group>
            <div className="formButtonContainer">
                <Button className="formButton" type="submit">
                    Submit
                </Button>
            </div>
        </Form >

    );
};