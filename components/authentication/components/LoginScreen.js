import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'

const LoginScreen = (props) => {
  const [user_email, setUserName] = useState("");
  const [user_password, setPassword] = useState("");

  function loginClick() {
    fetch(props.apiURI + 'users/login', {
      method: 'GET',
      headers: {
        "Authorization": "Basic " + Base64.encode(user_email + ":" + user_password)
      }
    })
    .then(response => response.text())
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + response);
      }
      return response;
    })
    .then(json => {
      console.log("Login successful")
      console.log("Received following JSON");
      console.log(json);

      props.onLoginReceiveJWT(json.token);
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>User Login</Text>
      <TextInput
        style={ styles.input}
        value={ user_email }
        placeholder="Email"
        onChangeText={ value => setUserName(value)}
      />
      <TextInput
        style={ styles.input }
        value={ user_password }
        placeholder="Password"
        onChangeText={ value => setPassword(value)}
      />
      <TouchableHighlight onPress={ () => loginClick() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>LOGIN</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={ () => props.navigation.navigate('Signup') }>
        <View style={ styles.secondaryButton }>
          <Text style={ styles.secondaryButtonText }>Sign up</Text>
        </View>
      </TouchableHighlight>
      
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ef5350',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: '#293a4b'
  },
  text: {
    fontSize: 20,
    color: '#f39237'
  },
  input: {
    borderRadius: 20,
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    color : '#f39237',
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  primaryButton: {
    backgroundColor: '#f39237',
    borderRadius: 20,
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 10
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 20

  },
  secondaryButton: {
    backgroundColor: '#293a4b',
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginBottom: 10
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16

  }
});

export default LoginScreen
