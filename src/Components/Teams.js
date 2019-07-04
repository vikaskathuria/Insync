import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import {
    View,
    StyleSheet,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    // Button
  } from "react-native";
  // import Icons from "react-native-vector-icons/Ionicons";
  import { Button, Icon } from 'native-base';


export class Teams extends Component {

  static navigationOptions = ({ navigation }) => {

    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button
          transparent
        >
          <Icon 
            name="search"
            style={{ fontSize: 30, color: 'white' }}
          /> 
        </Button>
        
      ),
      
      }
  }


    render() {
        return (
            <View style={styles.MainContainer}>
            <StatusBar backgroundColor="#0715F7" />
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('addTeam',{otherParam: 'anything you want here',})}        
            style={styles.TouchableOpacityStyle}>
            <Image
              source={require('../Images/float.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>


          
    
    
          </View>
                )
    }
}

export default Teams
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
   
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
   
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 40,
      height: 40,
      color:'black'
    },
  });
  