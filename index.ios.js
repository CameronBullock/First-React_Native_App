/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';


import TodoApp from './app/components/TodoApp';
import Home from './app/components/Home';
import Products from './app/components/Products';

export default class RNTodoList extends Component {
  render() {
    return (
      <NativeRouter>
          <View style={styles.container}>
            <View style={styles.navbar}>
              <Link style={styles.link} to="/" replace={true}>
                <Text>Home</Text>
              </Link>
              <Link style={styles.link} to="/todos" replace={true}>
                <Text>ToDo</Text>
              </Link>
              <Link style={styles.link} to="/products" replace={true}>
                <Text>Products</Text>
              </Link>
            </View>
            <Route exact path="/" render={() => ( <Home /> )} />
            <Route path="/todos" render={() => (<TodoApp />)} />
            <Route path="/products" render={() => ( <Products /> )} />
        </View>
    </NativeRouter>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbar: {
    flexDirection: 'row'
  },
  link: {
    padding: 40
  }
});

AppRegistry.registerComponent('RNTodoList', () => RNTodoList);
