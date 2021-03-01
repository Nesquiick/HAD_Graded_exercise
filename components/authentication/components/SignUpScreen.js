import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native'

const SignUpScreen = (props) => {

  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password_com, setPasswordCom] = useState("");
  const [birth, setBirth] = useState("");

  function signupPressed()
  {
    fetch(props.apiURI + '/users/', {
        method: 'POST',
        body: JSON.stringify({
          user_email: email,
          user_name : name,
          user_address : address,
          user_date_birth : birth,
          user_password: password,
          user_comfirm_password: password_com,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.json();
      })
      .then(json => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'SignupCompleted' }],
        })
      })
      .catch(error => {
        console.log("Error message:")
        console.log(error.message)
      });

  }

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Sign Up</Text>
      <TextInput
        style={ styles.input }
        value={ email }
        placeholder="Email"
        onChangeText={ value => setEmail(value)}
      />
      <TextInput
        style={ styles.input }
        value={ name }
        placeholder="Full name"
        onChangeText={ value => setName(value)}
      />
      <TextInput
        style={ styles.input }
        value={ address }
        placeholder="Address"
        onChangeText={ value => setAddress(value)}
      />
      <TextInput
        style={ styles.input }
        value={ birth }
        placeholder="2000-06-14T01:32:09.124+00:00"
        onChangeText={ value => setBirth(value)}
      />
      <TextInput
        style={ styles.input }
        value={ password }
        placeholder="password"
        onChangeText={ value => setPassword(value)}
      />
      <TextInput
        style={ styles.input }
        value={ password_com }
        placeholder="password comfirmation"
        onChangeText={ value => setPasswordCom(value)}
      />
      <TouchableHighlight onPress={ () => signupPressed() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Sign up</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={ () => props.navigation.reset({ index: 0, routes: [{ name: 'Login' }], }) }>
        <View style={ styles.secondaryButton }>
          <Text style={ styles.secondaryButtonText }>Cancel</Text>
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


export default SignUpScreen
