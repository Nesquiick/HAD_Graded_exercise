import React from 'react'
import { View, Text, Button } from 'react-native'

const Succes_login_view = (props) => {
  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>You have successfully logged in !</Text>
      <TouchableHighlight onPress={() => props.navigation.navigate('main_view')}>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Go to the main page</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={ props.onLogout }>
        <View style={ styles.secondaryButton }>
          <Text style={ styles.secondaryButtonText }>Logout</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
};

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

export default Succes_login_view
