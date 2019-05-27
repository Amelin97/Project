import React from 'react';
//import GoogleAuth from '../Auth/GoogleAuth';
import {connect} from 'react-redux' 
import { Field, reduxForm } from 'redux-form' ;
import {signIn} from '../actions/auth.thunk';



class Login extends React.Component {
  

    renderInput = ({input , label, type, placeholder, iconClass }) => {
        
        return (<div className="field">
            <label>{label}</label>
            <div className="ui left icon input">
                <input type={type}
                    placeholder={placeholder}
                     {...input}
                required/>
                <i className={iconClass}></i>
            </div>
        </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.signIn(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="regist" >
            <div className="ui placeholder segment">
                <div className="ui one column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                           
                        <Field name='name' 
                                        component={this.renderInput}
                                        label="Login"
                                        type="texr"
                                        placeholder="Login"
                                        iconClass="user icon" />
                        <Field name='password' 
                                        component={this.renderInput}
                                        label="Password"
                                        type="password"
                                        placeholder="password"
                                        iconClass="lock icon" />

                            <button className="ui blue submit button">Login</button>
                            
                          
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </form>
        );
    };
}

const form  = reduxForm({
    form: 'signInForm'
}
)(Login);

export default connect (null , {
    signIn
})(form)