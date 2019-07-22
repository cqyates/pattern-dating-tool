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
                    <option>select company</option>
                    <option>Butterick</option>
                    <option>McCall</option>
                    <option>Simplicity</option>
                    <option>Advance</option>
                    <option>Hollywood</option>
                    <option>Du Barry</option>
                    <option>New York</option>
                    <option>Anne Adams</option>
                    <option>Marian Martin</option>
                    <option>Excella</option>
                    <option>Superior</option>
                    <option>Pictoral Review</option>
                    <option>Mail Order</option>
                    <option>Fashion Server</option>
                    <option>Ladies Home Journal</option>
                    <option>Vogue</option>
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