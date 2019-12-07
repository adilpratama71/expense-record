import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, withTheme, Input, Text } from 'react-native-elements';
import { AppContext } from '../context'
const InputEmail = props => <Input placeholder="email" {...props}/>
const InputPassword = props => <Input placeholder="password" {...props}/>

function Login (props) {
  const { theme } = props;
  const { state, dispatch } = useContext(AppContext)
  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")
  const submitLogin = () => dispatch({ type: "userLogin", loginStatus: "true" })

  return (
    <View style={theme.container}>
      <View style={theme.form}>
        <InputEmail onChangeText={text => onChangeEmail(text)} />
        <InputPassword onChangeText={text => onChangePassword(text)} />
        <Button
          onPress={() => submitLogin()}
          title="Login"
          type="solid"
        />
      </View>
    </View>
  );
}

export default withTheme(Login)