// import {
//     Image,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     View,
//     TextInput
// } from 'react-native';
// import React from 'react';
// import styles from '../screens/styles';

import React, { Component, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Container,
  Title,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  ImageBackground,
  ScrollView,
  Picker
} from "native-base";
import {Header, Rating, Button} from 'react-native-elements'
let cards = [];
import Favorited from './Favorites'

const SimpleDeck = ({isBusinessList}) => {

  const [isFavorited, setIsFavorited] = useState([]);
  const [swipesLeft, setSwipesLeft] = useState(50);
    if (isBusinessList.length > 1){cards = cards.concat(...isBusinessList)}
    return (isBusinessList.length > 1) ?
      (
        <Container >
        <Header
        leftComponent={{ text: 'Dinder', style: { color: '#fff', textSize:20 } }}
        rightComponent={
            <Picker
            prompt={'Favorites'}
            mode={'dropdown'}
            selectedValue={isFavorited}
            placeholder={<IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />}
            style={{height: 50, width: 50}}
            onValueChange={(itemValue, itemIndex) =>
              console.log(itemValue)
            }>
            { isFavorited.map(obj=>{
                return <Picker.Item label={`
                ${obj.name} 
                Rating: ${obj.rating}/5      
                Number:${obj.phone}`} />
              })
            }
            </Picker>
      }
      />
        <View style={{ padding: 6 }}>
          <DeckSwiper
            dataSource={cards}
            looping={false}
            onSwipeLeft={()=>{
              let val = swipesLeft - 1;
              setSwipesLeft(val);
            }}
            onSwipeRight={(cards)=>{
              let temp = [].concat([...isFavorited,cards]);
              let val = swipesLeft - 1;
              setSwipesLeft(val);
              setIsFavorited(temp);
            }}
            renderEmpty={() =>
              <View>
                <Text>Over</Text>
              </View>}
            renderItem={(item,index) =>
              <Card style={{ elevation: 0 }}>
                <CardItem style={{backgroundColor:'gray'}}>
                  <Left>
                    <Thumbnail source={require('../assets/images/logo.png')} />
                    <Body>
                    <View>
                    <Text style={{color:'white'}}>{`Swipes Left: ${swipesLeft}`}</Text>
                    </View>
                      <Text>
                        {item.text}
                      </Text>
                      <Text style={{marginTop:10,color:'white', fontSize:25}}>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={{uri: item.imgurl}}
                  />
                </CardItem>
                <CardItem >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                <Rating imageSize={20} fractions={20} startingValue={`${item.rating}`} />
                <Text style={{fontSize:10}}>({item.reviewCount})                                               </Text>
                <IconNB name={"ios-heart"} style={{color: "grey" }} />
                </View>
                </CardItem>
              </Card>}
          />
        </View>
      </Container>
    ) : <Button style={{marginTop: 200}} title="Clear button" loading type="clear"/>
};

export default SimpleDeck;