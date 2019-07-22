import React from "react";
import {Col} from "../Grid";
import {Row, Card} from "react-bootstrap"
import PatternSearch from "../PatternSearch"
import "./style.css";

function Catalog (props) {
    return(
        <Row style={{margin:"10px"}}>
            <Col size="lg-4">
            <dl>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>   
            </dl>
            </Col>
            <Col size="lg-4">
            <dl>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>  
                
            </dl>
                
            </Col>
            <Col size="lg-4">
               <dt><img src="https://picsum.photos/id/865/500/540" alt=""></img></dt>
            </Col>
           
            <Card className="patternSearchForm">
                <PatternSearch />
            </Card>
    
        </Row>
    )
}
export default Catalog;