import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import Todo from './Todo';

class TodoList extends Component {

  render() {
    let todos = this.props.todos.map( todo => {
      return <Todo update={this.props.update} key={todo.id} {...todo} />
    });
    return (
      <ScrollView>
        {todos}
      </ScrollView>
    );
  }
}

export default TodoList;
