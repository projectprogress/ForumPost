import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class navbar extends Component {
    state = {
        symbol: ''
    }
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.state.symbol);
        e.preventDefault();
        // console.log(this.state)
        this.props.onSearch(this.state.symbol);
        this.props.history.push('/searchresult');
    }

    // const { auth, profile } = props;
    // console.log(auth);
    // const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
                  <div className="container mr-auto">
                  {/* <form onSubmit={this.handleSubmit}> */}
                    <ul className="left">
                        <li><Link to ='/' className="">Forum</Link></li>
                        <li><NavLink to='/createtopic'>New Topic</NavLink></li>
                        <li><NavLink to='/watchlist'>WatchList</NavLink></li>
                        <li className={classes.NavigationItems}><input style={{height: '30px'}} type="text" id="symbol" placeholder="Search" onChange={this.handleChange}  /></li>
                        <li><button onClick={this.handleSubmit} className="btn blue lighten-1 z-depth-0">Search</button></li>
                    </ul>
                  <ul className="right">
                      <li><NavLink to='/signin'>Sign In</NavLink></li>
                  </ul>
                  </div>
              </nav>
          )
    }
    
}
const mapStateToProps = state => {
    return {
        // stockData: state.stockData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (symbol) => dispatch(actions.searchSymbol(symbol))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navbar));