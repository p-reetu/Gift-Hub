import React from 'react';
import "./Main.css"
import Card from './Card';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


export default function Main(props) {
    return (
        <Container className="card-container">
            {props.gifts.map(e => <Card gift={e}/> )}
        </Container>
    )
}