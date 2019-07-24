import React from 'react';
import {Card, CardBody, CardHeader, CardFooter,Col, Row,Button} from 'reactstrap';
import './Topnews.css';
import Worldcup from './Worldcup.jpg';
import New1 from './New1.jpg';
import { MdAccountCircle } from "react-icons/md";
import {IoLogoFacebook,IoLogoTwitter,IoLogoInstagram } from "react-icons/io";


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
        		<CardHeader bordered>
        	  		<Col className="tl pa0">
                    <MdAccountCircle size={40}/> <span className="fs-normal">SHUBHI MIRAWDAL</span>
              	</Col>
        		</CardHeader>
        		<CardBody style={{backgroundImage: `url(${New1})`}}>
           			 <Row className=" f1 dib v-btm lightest-blue">
             			
          			</Row>
        		</CardBody>
          
        		<CardFooter >
              <div className="tl">
              <Button color="secondary" size="lg" className="float-left pr4" >Read more</Button></div> 
              <div className="tr">                           
              <span className="pa3 pl5"><IoLogoFacebook size={40}/></span>
              <span className="pa2"><IoLogoTwitter size={40}/></span>
              <span className="pa2"><IoLogoInstagram size={40}/></span>
              </div>
              
              
          </CardFooter>
        	</Card>
        	</div>
        
        <div className="pa6 pt2">
          <Card style={{width:500,height:500}} >
            <CardHeader>
                <Col className="tl pa0">
                    <MdAccountCircle size={40}/> <span className="fs-normal">SHUBHI MIRAWDAL</span>
                </Col>
            </CardHeader>
            <CardBody style={{backgroundImage: `url(${New1})`}}>
                 <Row className=" f1 dib v-btm lightest-blue">
                  
                </Row>
            </CardBody>
          
            <CardFooter >
              <div className="tl">
              <Button color="secondary" size="lg" className="float-left pr4" >Read more</Button></div> 
              <div className="tr">                           
              <span className="pa3 pl5"><IoLogoFacebook size={40}/></span>
              <span className="pa2"><IoLogoTwitter size={40}/></span>
              <span className="pa2"><IoLogoInstagram size={40}/></span>
              </div>
              
              
          </CardFooter>
          </Card>
          </div>
        </div>




		);
}
export default Topnews;