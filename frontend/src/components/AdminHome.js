import React from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const AdminHome = () => {
    const cardInfo = [
        {image:"", title:"Customer Management", text:"add customer"},
        {image:"", title:"Accommodation Management", text:"add hotel"},
        {image:"", title:"Package Management", text:"add packages"},
        {image:"", title:"Itinerary Management", text:"add tours"},
    ];

    const renderCard = (card, index) =>{
        return(
            <Card style={{ width: '10rem' }} key={index} className="box">
              <Card.Img variant="top" src="holder.js/100px180" srcs={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.text}
                </Card.Text>
                  <Button variant="primary"><a href="/all">Go</a></Button>
              </Card.Body>
            </Card>
        );
    };

    return<div className="grid">
        {cardInfo.map(renderCard)}
    </div>
};

export default AdminHome;