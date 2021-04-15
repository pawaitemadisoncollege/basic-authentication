/* This file will hold the router and some 
logic to determine the current route name.*/


import 
    React
    , { 
        useState
        , useEffect 
    } from 'react';

import { 
    HashRouter
    , Switch
    , Route 
    } from 'react-router-dom';

import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';

const Router = () => {
    const [current, setCurrent] = useState('home');

    useEffect(
        () => {
            setRoute();
            window.addEventListener('hashchange', setRoute);
            return () =>  window.removeEventListener('hashchange', setRoute);  // return a function to clean up
        }
        , []
    );


    const setRoute = () => {
        const location = window.location.href.split('/');
        const pathname = location[location.length-1]
        setCurrent(pathname ? pathname : 'home'); // if we get a path name, use, otherwise default current to home
    };

    return (
        <HashRouter>
            <Nav 
                current={current} 
            />
            <Switch>
                <Route 
                    exact path="/" 
                    component={Public}
                />

                <Route 
                    exact path="/protected" 
                    component={Protected} 
                />

                <Route 
                    exact path="/profile" 
                    component={Profile}
                />

                <Route // no path, this is the catch-all route
                    component={Public}
                />
            </Switch>
        </HashRouter>
    );
};

export default Router