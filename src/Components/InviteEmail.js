import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
  } from "react-native";
  

class AddTeam extends Component {
  static navigationOptions = ({ navigation }) => {
    return (
       <View>
         <LinearGradient
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={["#0715F7","#518EF8" ]}
            style={styles.linearGradient}
          >
            
          </LinearGradient>
       </View>
    )
      
    ;
  };

    render() {
        return (
            <View>
            <TextInput
            style={styles.inputBoxes}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Email Address"
            placeholderTextColor="#808080"
            underlineColorAndroid="transparent"
            // onChangeText={text=>this.setState({username:text})}
          />
          <LinearGradient
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={["#0715F7","#518EF8" ]}
            style={styles.linearGradient}
          >
          <TouchableOpacity style={{alignItems:'center'}}>
            <Text style={styles.buttonText}>Send Invite</Text>
          </TouchableOpacity>
          </LinearGradient>
            </View>
          )
    }
}

export default AddTeam
const styles = StyleSheet.create({

linearGradient: {
    width:320,
    height:50,
    marginLeft: 40,
    borderRadius: 5,
    marginVertical:20,
    alignItems:'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },  
  inputBoxes: {
    // flexGrow: 1,
  width: 400,
  paddingHorizontal: 16,
  paddingLeft: 30,
  fontSize: 16,
  color: "#ffffff",
  marginVertical: 20,
backgroundColor:'#EFEFF4'

},
});
