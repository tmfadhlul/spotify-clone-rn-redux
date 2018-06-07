import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import { Icon, Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import { Playlist, Artist, Albums, Podcast, Radio } from '../component/index'
import { Color } from '../../index'

export default class LibraryTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name='list' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <ImageBackground
                    style={[StyleSheet.absoluteFill, { marginTop: -105 }]}
                    source={require('../../src/source/searchBack.png')}
                />
                <Header hasTabs style={{ backgroundColor: 'transparent', height: '9%' }} />
                <Tabs tabBarUnderlineStyle={{borderBottomWidth: 1}} renderTabBar={() => <ScrollableTab style={{borderColor: 'transparent'}} />}>
                    <Tab  textStyle={{color: Color.grey03}} style={{ backgroundColor: 'transparent' }} heading="Playlist">
                        <Playlist  navigation={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{color: Color.grey03}} style={{ backgroundColor: 'transparent' }} heading="Artist">
                        <Artist navigation={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{color: Color.grey03}} style={{ backgroundColor: 'transparent' }} heading="Albums">
                        <Albums navigation={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{color: Color.grey03}} style={{ backgroundColor: 'transparent' }} heading="Podcast">
                        <Podcast navigation={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{color: Color.grey03}} style={{ backgroundColor: 'transparent' }} heading="Radio">
                        <Radio navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.black
    },
})