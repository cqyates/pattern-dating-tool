import React from "react";
import {Card} from "react-bootstrap";
import "./style.css";

function PatternImage () {

    return (
        <div>
        <Card>
            <Card.Body>
            <Card.Text className="cardTitle">
                FIND YOUR PATTERN
            </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
        </div>
    )
}
export default PatternImage;