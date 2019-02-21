import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import FocusSummary from '../../components/FocusListSummary/FocusListSummary';

class FocusList extends Component {

    componentDidMount () {
        console.log(this.props);
        // axios.get('')
        //     .then(response => {
        //         this.setState({ingredients: response.data })
        //     })
        //     .catch( error =>{
        //         this.setState({error: true});
        //     });
        this.props.onFocus();

    }

   
    render() {
        let result = <p>Loading FocusList</p>
        if(!this.props.focusListError) {
            result = (
                <div>
                    {this.props.FocusList.map((listItem, index) => (
                        <div>
                            <FocusSummary 
                                        focusList= {listItem}/>    
                        </div>

                    ))}
                </div>
            )
        }
        else {
            result = <p>Fail to load data from server.</p>
        }
        return (
            <div className="container">
                {result}
            </div>
        );
        
    }
};

const mapStateToProps = state => {
    return {
        FocusList: state.FocusList,
        focusListError: state.focusListError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFocus: () => dispatch(actions.showFocusList())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FocusList);