import React, { useState } from 'react'
import {Text,View,Button,StyleSheet,Image, Pressable,TextInput} from 'react-native'


const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

return <View style={{justifyContent:"center",allignItems:"center",flex:1}}>

    <View style={styles.center}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:'https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000'
        }}
      />
    <View/>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Username"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      </View>

  <View style={styles.button1}>
  <Pressable><Button title="Login to Google" color="#525252" onPress={()=>{navigation.navigate('AboutScreen')}}/></Pressable>
  </View>
  <View style={styles.button2}>
  <Pressable><Button title="Login to Facebook" onPress={()=>{navigation.navigate('AboutScreen')}}/></Pressable>
  </View>
  </View>
}
export default HomeScreen
const styles = StyleSheet.create({
  button1:{
    paddingHorizontal:10,
    marginVertical:20,
    fontSize:20,
    borderRadius:40,
    marginBottom: 20
  },
  button2:{
    paddingHorizontal:10,
    marginVertical:1,
    fontSize:20,
    borderRadius:40,
  },
  tinyLogo:{
    alignItems:"center",
    justifyContent:"center",
    paddingRight:10,
    width: 70,
    height: 70,
    marginBottom:40,
    borderRadius:33
  },
  center:{
    alignItems:"center",
    justifyContent:"center",
  },
  inputView: {
    backgroundColor: "#627E8B",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
})