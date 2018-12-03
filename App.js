import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, TextInput } from 'react-native';
// import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// import Header from './src/components/header';
import ProfilePic from './src/components/profilePicture';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const onPress = () => { console.log('press'); };
    return (

      <View style={{ padding: 100 }}>

        <TextInput
          style={{ height: 40 }} placeholder='Type here to translate' onChangeText={(text) => this.setState({ text })}
        />

        <Text
          style={{ padding: 10, fontSize: 42 }}
        >
          {this.state.text}
        </Text>

        <Text>Hi my name is haris</Text>

        <ProfilePic />

        <Button
          title='Click here'
          onPress={onPress}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <TouchableOpacity style={styles.button} onPress={onPress} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#32CD32', alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 100
  }
});
