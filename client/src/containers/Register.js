import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, withTheme, Input, Text } from 'react-native-elements';
import { AppContext } from '../context'
import axios from '../api'
const InputUsername = props => <Input placeholder="username" {...props}/>
const InputEmail = props => <Input placeholder="email" {...props}/>
const InputPassword = props => <Input placeholder="password" {...props}/>
const InputGender = props => <Input placeholder="gender" {...props}/>

function Register (props) {
  const { theme } = props;
  const { state, dispatch } = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  
  function submitRegister () {
    axios.post('/users', {
      username,
      email,
      password,
      gender
    }).then(({ data }) => console.log(data))
      .catch(({ response }) => dispatch({
        type: "setError", isError: true, errorMessage: response.data.message
      }))
  }

  return (
    <View style={theme.container}>
      <View style={theme.form}>
        <InputUsername onChangeText={text => setUsername(text)} />
        <InputEmail onChangeText={text => setEmail(text)} />
        <InputPassword onChangeText={text => setPassword(text)} />
        <InputGender onChangeText={text => setGender(text)} />
        <Button
          onPress={() => submitRegister()}
          title="Register"
          type="solid"
        />
      </View>
        {state.isError ? state.errorMessage.map((el, i) => <Text key={i}>{el}</Text>) : null}
    </View>
  );
}

export default withTheme(Register)