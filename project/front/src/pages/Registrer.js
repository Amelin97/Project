import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions/auth.thunk';


class Register extends React.Component {

    renderInput = ({ input, label, type, placeholder, iconClass }) => {

        return (<div className="field">
            <label>{label}</label>
            <div className="ui left icon input">
                <input type={type}
                    placeholder={placeholder}
                    {...input}
                    required />
                <i className={iconClass}></i>
            </div>
        </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createUser(formValues)
    }

    render() {

        return (

            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <div className="regist">
                    <div className="ui placeholder segment regist">
                        <div className="ui one column very relaxed stackable grid">
                            <div className="column">
                                <div className="ui form">

                                    <Field name='name'
                                        component={this.renderInput}
                                        label="Login"
                                        type="text"
                                        placeholder="Username"
                                        iconClass="user icon"
                                    />

                                    <Field name='email'
                                        component={this.renderInput}
                                        label="Email"
                                        type="email"
                                        placeholder="Email"
                                        iconClass="at icon" />

                                    <Field name='password'
                                        component={this.renderInput}
                                        label="Password"
                                        type="password"
                                        placeholder="password"
                                        iconClass="lock icon" />

                                    <button
                                        className="ui blue submit button">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
}

const form = reduxForm({
    form: 'registrationForm'
}
)(Register);

export default connect(null, {
    createUser
})(form)