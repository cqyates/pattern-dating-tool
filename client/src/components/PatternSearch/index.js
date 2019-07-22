import React from "react";
import {Form, Button} from "react-bootstrap";
import "./style.css";

function PatternSearch() {
    return(
        <div>
        <Form className="searchForm">
            <h4>Search for a Pattern</h4>
            <Form.Group controlId="patternFormCompany">
                <Form.Label>Company Name</Form.Label>
                <Form.Control as="select" style={{width:"60%"}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
            </Form.Group> 
            <Form.Group controlId="patternFormNumber">
                <Form.Label>Pattern Number</Form.Label>
                <Form.Control placeholder="XXXX" style={{width:"60%"}} />
            </Form.Group>
        </Form>
        <Button type="submit" style={{margin:"auto", display:"block", marginBottom:"10px"}}>
          Search
        </Button>
        </div>

    )
}
export default PatternSearch