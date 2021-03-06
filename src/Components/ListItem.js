import React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swipeout from 'react-native-swipeout';
export const ListItem=(props)=> {
      const {text1,text2,text3,text4,onPress}=props;
      
        let swipeBtns = [{
          text: 'Delete',
          backgroundColor: 'red',
          underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
          onPress: () => props.onDelete() 
        }];

       

        
    
    return (
      <Swipeout right={swipeBtns}
      autoClose='true'
      backgroundColor= 'transparent'>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.contentView}>
        <Text>{text2}</Text>
          <Text style={{color:'#000',fontSize: 25}}>{text1}</Text>
          <Text>{text3}</Text>
          <Text>{text4}</Text>
        </View>
        <View style={styles.iconView}>
            <Icon name="chevron-right" size={40}/>
        </View>
      </TouchableOpacity>
      </Swipeout>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    margin:20
  },
  contentView: {
    flex: 8,
    justifyContent: "space-evenly"
  },
  iconView: {
    flex: 2,
    justifyContent:'center',
    alignItems: 'flex-end',
  }
});
