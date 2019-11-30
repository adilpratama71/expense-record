import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button, withTheme } from 'react-native-elements';


function Login (props) {
  const { theme } = props
  function submitLogin () {
    console.log("submit");
  }

  return (
    <View style={theme.container}>
      <Text>Login page soon..</Text>
      <Button 
        onPress={() => submitLogin()}
        title="Login"
        type="solid"
        buttonStyle={{backgroundColor: "red"}}
      />
    </View>
  );
}

export default withTheme(Login)