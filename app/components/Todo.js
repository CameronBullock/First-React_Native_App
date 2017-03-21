import React from 'react';

import {
  Text,
} from 'react-native'

const Todo = ({ id, name, complete, update }) => (
  <Text
    style={ complete ? {...styles.todo, ...styles.complete } : styles.todo }
    onPress={() => update(id)}
  >
   {name}
  </Text>
)

const styles = {
  todo: {
    textAlign: 'center',
  },
  complete: {
    textDecorationLine: 'line-through',
    color: 'grey',
  }
}

export default Todo
