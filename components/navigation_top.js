import React, { Component, useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Navigation_top = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor:"#ef5350", justifyContent: 'space-between', alignSelf: "stretch"}}>
            <Ionicons name="chevron-left" size={60} color="white" style={{marginLeft:20}}/>
            <Text style={{color:"white", fontSize:30, marginRight: 100}}>{props.title}</Text>
            <Ionicons name="menu" size={60} color="white" style={{marginRight:10}} />
        </View>
    )
}

export default Navigation_top