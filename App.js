import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Main from './components/main_page/main_view';
import Navigation from './components/navigation_top';
import Authentication from './components/authentication/Authentication';

export default function App() {
  let output;
    output = (
      <View style={ styles.container }>
        <Authentication apiURI='https://graded-exercise.herokuapp.com/'></Authentication>
      </View>
    );

  //   output = (
  //     <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', marginTop: 50}}>
  //       <Navigation title='Main' ></Navigation>
  //     </View>
  //  );

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
