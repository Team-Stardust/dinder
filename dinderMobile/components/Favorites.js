import DropdownMenu from 'react-native-dropdown-menu';
import React, {Component} from 'react';
import { StyleSheet, Image, View, Text} from "react-native";
export default class Favorites extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  
  render() {
    var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    return (
      <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'black'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          optionTextStyle={{color: '#333333'}}
          titleStyle={{color: '#333333'}} 
          maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu>
      </View>
    );
  }
  
}