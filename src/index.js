import React from 'react';
import { render } from 'react-dom';
import { Home, About, SignIn, SignUp } from './screens';

const Index = ({pathname}) => {
    switch(pathname) {
        case '/':
            return <Home />
        case '/about':
            return <About />
        case '/signin':
            return <SignIn />
        case '/signup':
            return <SignUp />
        default:
            return <Home />
    }
}

let pathname = window.location.pathname;

render(
    <Index pathname={pathname} />,
    document.getElementById('root')
)

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
})