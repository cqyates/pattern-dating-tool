import React from "react";
import {Col} from "../Grid";
import {Row} from "react-bootstrap"
import "./style.css";

function Catalog (props) {
    return(
        <Row style={{margin:"10px"}}>
            <Col size="md-4">
            <dl>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>   
            </dl>
            </Col>
            <Col size="md-4">
            <dl>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>  
                
            </dl>
                
            </Col>
            <Col size="md-8">
               <dt><img src="https://picsum.photos/id/865/500/540" alt=""></img></dt>
            </Col>

        </Row>
    )
}
export default Catalog;