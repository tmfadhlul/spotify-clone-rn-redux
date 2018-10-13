import { Icon } from 'native-base'
import React, { Component } from 'react'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';
import {
	LoginScreen,
	RegisterScreen,
	WelcomeScreen
} from 'app/welcome/screens/index';

import {
	LibraryScreen,
	playlistList
} from '../library/screens/';
import {
	SearchScreen
} from '../search/screens/index';
import { PremiumScreen } from '../premium/screens/index';
import {
	Color,
	Layout
} from '.././index';
import NowPlayingScreen from '../premium/screens/NowPlayingScreen'

import {
	HomeScreen,
} from '../index'

const BottomStack = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
	},
	Search: {
		screen: SearchScreen,
	},
	Library: {
		screen: LibraryScreen,
	},
	Track: {
		screen: PremiumScreen,
		navigationOptions: {
			header: true
		}
	},

}, {
	tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: Color.grey03,
		showLabel: true,
		style: {
			backgroundColor: Color.grey01,
			height: 57,
		}
	},
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ tintColor, focused }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
	}),
})

const RootNavigator = createStackNavigator({
	Main: {
		screen: WelcomeScreen,
		navigationOptions: {
			header: null
		}
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: {
			title: 'Register',
			headerStyle: {
				backgroundColor: Color.grey01,
				elevation: 0

			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				width: '72%',
				textAlign: 'center'
			}
		}
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			title: 'Login',
			headerStyle: {
				backgroundColor: Color.grey01,
				elevation: 0

			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				width: '72%',
				textAlign: 'center'
			}
		}
	},
	Apps: {
		screen: BottomStack,
		navigationOptions: {
			header: null
		}
	},
	NowPlaying: {
		screen: NowPlayingScreen,
		navigationOptions: {
			header: null
		}
	}
})

export default RootNavigator