import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpCompleted = (props) => {


  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Sign up completed</Text>
      <TouchableHighlight onPress={ () => props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Proceed to login</Text>
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
    color: 'white'
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

  }
});


export default SignUpCompleted
