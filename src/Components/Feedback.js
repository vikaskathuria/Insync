import React, { Component } from 'react'
import { Text, View,Image,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient";

class Feedback extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontFamily:'Roboto',fontSize:15,marginVertical:20,marginLeft:20,color:'#000',fontWeight:'bold'}}>Tell  us how do you like our app</Text>
            <View style={{flexDirection:"row", marginLeft:20}}>
            <Image
          source={require('../Images/Star.png')}
        //   style={styles.FloatingButtonStyle}
        />
                    <Image
          source={require('../Images/Star.png')}
        //   style={styles.FloatingButtonStyle}
        />
            <Image
          source={require('../Images/Star.png')}
        //   style={styles.FloatingButtonStyle}
        />
            <Image
          source={require('../Images/Star.png')}
        //   style={styles.FloatingButtonStyle}
        />
            <Image
          source={require('../Images/Star.png')}
        //   style={styles.FloatingButtonStyle}
        />

            </View>
            <View  style={{borderLeftWidth: 1,
            borderRightWidth: 1
            ,borderBottomWidth:1,
            borderTopWidth:1,height: 106,width:350,marginLeft:20,borderRadius:10,marginVertical:20,alignItems:'center',}} >
            <TextInput
        //   style={styles.inputBox}
        //   underlineColorAndroid="rgb(128,128,128)"
        //   placeholder="Email"
        //   placeholderTextColor="#808080"
        />
                <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#0715F7", "#518EF8"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity  >
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </LinearGradient>

            </View>
            </View>
        )
    }
}

export default Feedback
const styles=StyleSheet.create({
    linearGradient: {
        width: 350,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100
      },
      buttonText: {
        fontSize: 18,
        fontFamily: "Gill Sans",
        textAlign: "center",
        margin: 10,
        color: "#ffffff",
        backgroundColor: "transparent"
      },
    
})

