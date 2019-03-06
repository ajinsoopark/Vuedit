import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    
    render () {
        return (
            <div className='signUpContainer'>
                <span className='thoughtSpan'>
                    What are your thoughts? Log in or Sign up
                </span>
                <Link className='loginLink' to={ '' }>
                    log in
                </Link>
                <Link className='signUpLink' to={ '' }>
                    sign up
                </Link>
            </div>
        )
    }
}

export default SignUp;