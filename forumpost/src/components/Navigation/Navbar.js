import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    // const { auth, profile } = props;
    // console.log(auth);
    // const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to ='/' className="brand-logo">Forum</Link>
                <ul className="right">
                    <li><NavLink to='/createtopic'>New Topic</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;