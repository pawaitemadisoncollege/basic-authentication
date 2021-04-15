/* This is the component we will be using as an example of how to create a protected route. If the user is signed in, they will be able to view this route. If they are not signed in, they will be 
redirected to the sign-in form.*/

import 
    React
    , { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = ({history}) => {  // destructured because i know i only need history
  useEffect(
      () => {
            Auth.currentAuthenticatedUser()
                .then(
                    () => {
                        console.log("User was authenticated");
                    }
                )
                .catch(
                    () => {  // could refactor to use async await
                        history.push('/profile')
                     }
                );
        }
        , []
  );
  return (
    <Container>
        <h1>
            Protected route
        </h1>
    </Container>
  );
}

export default Protected