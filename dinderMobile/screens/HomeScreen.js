import * as WebBrowser from 'expo-web-browser';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dindr from '../components/Dindr';
import React, {useState} from 'react';
import {
  View
} from 'react-native';
import { MonoText } from '../components/StyledText';
import styles from './styles'
import { conditionalExpression } from '@babel/types';
// import TopBarNav from 'top-bar-nav';
import {Header, Rating, Button} from 'react-native-elements'

export default HomeScreen = ()=> {
  const [isUsername, setIsUsername] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [userWantsToSignIn, setUserWantsToSignIn] = useState(false);
  const [isUserValidated, setUserIsValidated] = useState(false);
  const [isBusinessList, setIsBusinessList] = useState([]);

  const onClickSendToServer = (user, password) =>{
    fetch('http://127.0.0.1:3000/authenticate', {
      method: 'post', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user, password})
    })
    .then(res =>{
      return res.json();
    })
    .then( async result =>{
      if (result.validated){
        await getDataFromYelp();
        await setUserIsValidated(result.validated);
        return;
      }      
    })
    .catch(err =>{
      return new Error(err);
    })
  }
  const createUser = (user, password)=>{
    fetch('http://127.0.0.1:3000/signup', {
      method: 'post', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user, password})
    })
    .then(res =>{
      return res.json();
    })
    .then( async result =>{
      console.log('here in result for create user', result)
      if (result.signedup){
        await getDataFromYelp()
        await setUserWantsToSignIn(!result.signedup);
        await setUserIsValidated(result.validated);
      }
    })
    .catch(err =>{
      return new Error(err);
    })
  }
  const getDataFromYelp = ()=>{
    fetch('http://127.0.0.1:3000/getData')
    .then( res => res.json())
    .then(data => {
      setIsBusinessList(data.businessList)
    })
    .catch(err =>{
      console.log('broke inside of getDataFromYelp, line 81', err)
      return new Error(err);
    })
  
  };
  return (
    (!isUserValidated) ?
    (!userWantsToSignIn ? 
      <Login 
      onClickSendToServer={onClickSendToServer} 
      setUserWantsToSignIn = {setUserWantsToSignIn}
      isUsername = {isUsername}
      isPassword = {isPassword}
      setIsPassword = {setIsPassword}
      setIsUsername = {setIsUsername}
     />
    : (
      <Signup
        createUser = {createUser}
        isUsername = {isUsername}
        isPassword = {isPassword}
        setIsPassword = {setIsPassword}
        setIsUsername = {setIsUsername}
      />
    )) : <Dindr 
      isBusinessList={isBusinessList} 
      setIsBusinessList={setIsBusinessList}
    />
  );
}

HomeScreen.navigationOptions = {
  header: null
};


