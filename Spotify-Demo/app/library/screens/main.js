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
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 1, backgroundColor: Color.green }}
                    renderTabBar={() => 
                    <ScrollableTab style={{ borderColor: 'transparent', backgroundColor: 'transparent' }} />
                    }>
                    <Tab tabStyle={{ backgroundColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: Color.grey03 }}
                        style={{ backgroundColor: 'transparent' }}
                        heading="Playlist">
                        <Playlist  {... this.props} />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: Color.grey03 }}
                        style={{ backgroundColor: 'transparent' }}
                        heading="Artist">
                        <Artist {... this.props} />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: Color.grey03 }}
                        style={{ backgroundColor: 'transparent' }}
                        heading="Albums">
                        <Albums {... this.props} />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: Color.grey03 }}
                        style={{ backgroundColor: 'transparent' }}
                        heading="Podcast">
                        <Podcast {... this.props} />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: Color.grey03 }}
                        style={{ backgroundColor: 'transparent' }}
                        heading="Radio">
                        <Radio {... this.props} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
};
