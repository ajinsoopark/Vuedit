import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpLogin extends Component {
    
    render () {
        return (
            <div className='loginSignUp'>
                <Link className='navLoginLink' to={ '' }>
                    log in
                </Link>
                <Link className='navSignUpLink' to={ '' }>
                    sign up
                </Link>
            </div>
        )
    }
}

export default SignUpLogin;