import React from 'react';
import {Card, CardBody, CardHeader, CardFooter,Col, Row} from 'reactstrap';
import './Topnews.css';
import Worldcup from './Worldcup.jpg';
import New1 from './New1.jpg';
var bgColors = { "Default": "#81b71a",
                    "Blue": "#66d9ff",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42"
};


const Topnews=()=>
{
	return(
		<div>
			<Card style={{height:700,left:0,right:0}}>
         		<CardHeader style={{backgroundColor: bgColors.Blue}}>
          			<div className="hello">
              		<strong className="blue">Menu News Menu Menu Menu</strong>
           			</div>
          		</CardHeader>
         	 	<CardBody style={{backgroundImage: `url(${Worldcup})`}}>
           			 <Row className="tl f1 lh-title underline lightest-blue">
             			<Col col="12" xl className="pa0">
              			 Top post
             			</Col>
          			</Row>
        		</CardBody>
        	</Card>
        <div className="pa6">
        	<Card style={{width:500,height:500}}>
        		<CardHeader>
        	  		<Col xs="12" sm="8" md="3" xl="2">
                		<i className="cui-envelope-open icons font-2xl d-block mt-4"></i>
                		<div>envelope-open</div>
              		</Col>
        		</CardHeader>
        		<CardBody style={{backgroundImage: `url(${New1})`}}>
           			 <Row className=" f1 dib v-btm lightest-blue">
             			<Col col="12" xl className="pa0">
              			 helo
             			</Col>
          			</Row>
        		</CardBody>
          
        		<CardFooter>
        	 		<Col xs="12" sm="8" md="3" xl="2">
                  <span class="cuis-accessible" aria-hidden="true"></span> 
                    
              </Col>
          </CardFooter>
        	</Card>
        	</div>
        
        </div>
		);
}
export default Topnews;