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
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Login = ({onClickSendToServer, setUserWantsToSignIn, isUsername, isPassword, setIsPassword, setIsUsername})=>{
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
          <TextInput autoCapitalize = 'none' style={{marginTop: 15, width: 90, height: 25, borderColor: 'white', borderWidth: 2, backgroundColor:'white'}}  placeholder='username'  value={isUsername} onChangeText={(e)=>{setIsUsername(e)}} />
          <TextInput secureTextEntry={true} autoCapitalize = 'none' placeholder='password' style={{marginTop: 10,width: 90, height: 25, backgroundColor:'white', borderColor: 'white', borderWidth: 2,}} value={isPassword} onChangeText={(e)=>{setIsPassword(e)}} />
        </View>
        <View style={styles.helpContainer}>
        <Button style={{marginTop:20}} onPress={()=>{
          onClickSendToServer(isUsername, isPassword)
        }} icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="Login"
      />
          <TouchableOpacity style={styles.helpLink} onPress={()=>{
            setUserWantsToSignIn(true);
          }}>
            <Text style={styles.helpLinkText} style={{fontSize:16, color:'white'}}>
              Sign Up here
            </Text>
          </TouchableOpacity>
        </View>
  </ImageBackground>
        </View>

      </ScrollView>
    </View>
    )
}
//  <a href="https://ibb.co/ch1c3w7"><img src="https://i.ibb.co/ch1c3w7/images.png" alt="images" border="0"></a>