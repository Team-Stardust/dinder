import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ImageBackground
} from 'react-native';
import React from 'react';

import styles from '../screens/styles';
export default Login = ({createUser, isUsername, isPassword, setIsPassword, setIsUsername})=>{
  return (<View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>
  
        <ImageBackground source={require('../assets/images/bg-main.jpg')} style={{width:'100%', height:'125%'}}>
        <View style={styles.welcomeContainer}>
        <Image
          style={{width: 100,
            height: 100,
            resizeMode:'contain',
            marginTop: 100,
            marginLeft: 0}}
            source={{uri: 'https://i.ibb.co/j5HF7XC/logo.png'}}
        />
    </View>
  
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}> Sign Up</Text>
        <TextInput autoCapitalize = 'none' placeholder='username' style={{marginTop: 15, width: 90, height: 25, borderColor: 'white', borderWidth: 2, backgroundColor:'white'}} value={isUsername} onChangeText={(e)=>{setIsUsername(e)}} />
        <TextInput secureTextEntry={true} autoCapitalize = 'none' placeholder='password' style={{marginTop: 15, width: 90, height: 25, borderColor: 'white', borderWidth: 2, backgroundColor:'white'}} value={isPassword} onChangeText={(e)=>{setIsPassword(e)}} />
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink} onPress={()=>{
          createUser(isUsername, isPassword)
        }}>
          <Text style={styles.helpLinkText} style={{fontSize:16, color:'white'}}>
            Sign Up here
          </Text>
        </TouchableOpacity>
      </View>
  </ImageBackground>
      </View>
  
    </ScrollView>
  </View>)
}