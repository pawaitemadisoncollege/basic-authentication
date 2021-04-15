/*This is a basic route that will be 
viewable whether or not the user is signed in.*/

import React from 'react'
import Container from './Container'

const Public = () => {
    return (
        <Container>
            <h1>
                Public route
            </h1>
        </Container>
    );
}

export default Public