import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' }
  }

  addTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Add A Todo"
          autoFocus={true}
          value={this.state.todo}
          onChangeText={ todo => this.setState({ todo }) }
          onSubmitEditing={this.addTodo}
          blurOnSubmit={false}
        />
      </View>
    );
  }
}

export default AddTodo;
