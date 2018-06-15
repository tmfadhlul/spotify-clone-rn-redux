import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {play} from '../library/component/'
import { LoginScreen, RegisterScreen, WelcomeScreen } from '../welcome/screens/index';
import { HomeScreen } from '../home/screens/index';
import { LibraryScreen, playlistList } from '../library/screens/';
import { SearchScreen } from '../search/screens/index';
import { PremiumScreen } from '../premium/screens/index';
import Music from '../music/screens/main';
import { Color, Layout } from '.././index';


const BottomStack = createBottomTabNavigator(
  {
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

  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: Color.grey03,
      showLabel: true,
      style: {
        backgroundColor: Color.grey01,
        height: 57,
      }
    },
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ tintColor, focused }) => {
    //     const { routeName } = navigation.state
    //     switch (routeName) {
    //       case 'Home':
    //         !focused ? iconName = require('../src/drawable-land-xxhdpi/mediaservice_browse.png') : iconName = require('../assets/img/Nav/ha.png');
    //         break;
    //       case 'Browser':
    //         !focused ? iconName = require('../assets/img/Nav/m.png') : iconName = require('../assets/img/Nav/ma.png');
    //         break;
    //       case 'Search':
    //         !focused ? iconName = require('../assets/img/Nav/t.png') : iconName = require('../assets/img/Nav/ta.png');
    //         break;
    //       case 'Radio':
    //         !focused ? iconName = require('../assets/img/Nav/f.png') : iconName = require('../assets/img/Nav/fa.png');
    //         break;
    //       case 'Library':
    //         !focused ? iconName = require('../assets/img/Nav/a.png') : iconName = require('../assets/img/Nav/aa.png');
    //         break;
    //       default:
    //         break;
    //     }
    //     return <Thumbnail square style={{ width: 15, height: 15 }} source={iconName} />
    //   }
    // }),
  }
)

const RootNavigator = createStackNavigator(
  {
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
    }
  }
)

export default RootNavigator
