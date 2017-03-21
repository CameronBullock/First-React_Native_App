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

import TodoApp from './app/components/TodoApp';

export default class RNTodoList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TodoApp />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNTodoList', () => RNTodoList);
