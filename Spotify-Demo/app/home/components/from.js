import React, { Component } from 'react';
import { Button } from 'react-native';
import { Form as Forms, Item, Input, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import TextInput from '../component/textInput';

const required = value => value ? undefined : 'Required';


class Form extends Component {
    render() {
        return (
            <Forms >
                <Field
                    component={TextInput}
                    name="name" placeholder="Nama"
                    validate={[require]}
                />
                <Field
                    component={TextInput}
                    name="name" placeholder="Nama"
                    validate={[require]}
                /><Field
                    component={TextInput}
                    name="name" placeholder="Nama"
                    validate={[require]}
                />
                <Button
                    onPress={this.props.handleSubmit}
                    title="Create" />
            </Forms>
        )
    }
};

const wrapperForm = reduxForm({
    form: 'contact',
})(Form)

export default wrapperForm
