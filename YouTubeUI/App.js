/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './screens/Home';
import Trending from './screens/Trending';
import Subscriptions from './screens/Subscriptions';
import Library from './screens/Library';
import Inbox from './screens/Inbox';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

const MainApp = createBottomTabNavigator(
  {
    Home: Home,
    Trending: Trending ,
    Subscriptions: Subscriptions,
    Inbox: Inbox,
    Library: Library
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Icon
          size={25}
          name="home"
          color={tintColor}
          />
          );
        } else if (routeName === 'Trending') {
          return (
            <Icon
          size={25}
          name="whatshot"
          color={tintColor}
          />
          );
        } else if (routeName === 'Subscriptions') {
          return (
            <Icon
          size={25}
          name="subscriptions"
          color={tintColor}
          />
          );
        
      }else if (routeName === 'Inbox') {
        return (
          <Icon
        size={25}
        name="mail"
        color={tintColor}
        />
        );
      
    } 
      else {
        return (
          <Icon
          size={25}
          name="video-library"
          color={tintColor}
          />
        );
      }
      }, 
      }),
    tabBarOptions: {
      activeTintColor: '#FF362E',
      inactiveTintColor: '#7B8788',
    },
  }
);

export default createAppContainer(MainApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});