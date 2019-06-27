import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,Image
} from 'react-native'
import  SignUp  from './SignUp';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Logo extends Component {
    render() {
        return (
            // <KeyboardAwareScrollView style={{flex:1}}>

            <View style={styles.container}>
            <Image source={require('../Images/Group.png')}></Image>
             {/* <SignUp/> */}
            </View>
            // </KeyboardAwareScrollView>

        )
    }
}

export default Logo

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },

})