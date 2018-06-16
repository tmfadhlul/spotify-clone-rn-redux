import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Icon, Button, Header, Left, Body, Right } from 'native-base';

export default class PlayilstHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='ios-arrow-down' />
                    </Button>
                </Left>
                <Body>
                    <Text>PLAYING FROM ARTIST</Text>
                    <Text>Maroon 5</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
    }
}
