import React, { Component } from 'react';
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
  import LinearGradient from "react-native-linear-gradient";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
handlePassword=()=>{
    


}
  render() {
    return (
<View>
            <TextInput
            style={styles.inputBoxes}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="New Password "
            secureTextEntry={true}

            placeholderTextColor="#808080"
            underlineColorAndroid="transparent"
            // onChangeText={text=>this.setState({username:text})}
          />
                      <TextInput
            style={styles.inputBoxes}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Confirm Password "
            secureTextEntry={true}

            placeholderTextColor="#808080"
            underlineColorAndroid="transparent"
            // onChangeText={text=>this.setState({username:text})}
          />

                    <TouchableOpacity 
                    style={{alignItems:'center',justifyContent:'center'}}
                    onPress={this.handlePassword}
                    >

          <LinearGradient
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={["#0715F7","#518EF8" ]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Done</Text>
          </LinearGradient>
          </TouchableOpacity>

            </View>    );
  }
}

export default ForgotPassword;
const styles = StyleSheet.create({

    linearGradient: {
        width:320,
        height:50,
        // marginLeft: 0,
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
      marginVertical: 20,
    backgroundColor:'#EFEFF4'
    
    },
    });
    