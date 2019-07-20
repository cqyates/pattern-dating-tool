import React from "react";
import {Form, Button} from "react-bootstrap";
import "./style.css";

function PatternSearch() {
    return(
        <div>
        <Form>
            <Form.Group controlId="patternFormCompany">
                <Form.Label>Company Name</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
            </Form.Group> 
            <Form.Group controlId="patternFormNumber">
                <Form.Label>Pattern Number</Form.Label>
                <Form.Control placeholder="XXXX" />
            </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Search
        </Button>
        </div>

    )
}
export default PatternSearch