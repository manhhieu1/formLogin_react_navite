import React, { useState } from "react";
import { Text,StyleSheet, CheckBox, View, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 30, borderBottomWidth: 1, paddingBottom: 10 }}>SIGN IN</Text>

      <View style={{ flex: 1, paddingTop: 50, paddingLeft: 20, paddingRight: 20 }} >
        <Text style={{ paddingTop: 10 }}>EMAIL ADDRESS</Text>
        <TextInput style={{ borderColor: "black", borderWidth: 1, placeholder: "email" }} > </TextInput>
        <Text style={{ paddingTop: 10 }}>EMAIL ADDRESS</Text>
        <TextInput style={{ borderColor: "black", borderWidth: 1, placeholder: "email" }} > </TextInput>
     
        <View style={{ flex:1,textAlign: 'center',marginTop:20 }}>
          <TouchableOpacity><Text style={{backgroundColor:'yellow',textAlign:'center',paddingTop:10,paddingBottom:10}}> SIGN IN</Text></TouchableOpacity>
          <Text style={{textAlign:'center',padding:30,borderBottomWidth: 1,}}>Forgot Password?</Text>
          <Text style={{textAlign:'center',padding:30,}}>Don't have an account</Text>
        
                    
        </View>
      </View>
    </View>
  );
};

export default App;