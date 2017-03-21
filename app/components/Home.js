import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';



class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Welcome To My App</Text>
        <Image
          source={require('../images/cat.jpg')}
        />
      </View>
    )
  }
}

export default Home
