import React, { Component } from 'react';
import { Form as Forms, Item, Input, Text } from 'native-base';

export default class TextInput extends Component {
    render() {
        const { placeholder, input, meta } = this.props;
        const { touched, error, warning } = meta
        return (
            <Item error={ touched && error ? true: false } >
                <Input 
                    value={input.value}
                    placeholder={placeholder} 
                    onChangeText={(text) => input.onChange(text)}
                    />
            </Item>
        )
    }
};
