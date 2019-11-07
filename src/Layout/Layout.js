import {Container} from 'react-bootstrap';
import React from 'react'

export default function Layout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
