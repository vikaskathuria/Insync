import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image } from 'react-native'

class EmployeeNotification extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity>
            <View style={{flexDirection:'row',marginVertical:30,justifyContent:'center',alignItems:'center'}}>
            <Image
            style={{justifyContent:'center'}}
          source={require('../Images/Ellipse.png')}
        />
                <Text style={{fontFamily:'Roboto',fontSize:15,borderBottomWidth:1,borderBottomColor:'#C4C4C4',color:'#000',flex:1,marginLeft:10}}>
                Zach doty invited you to join Gradient Descent workspace</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',marginVertical:30,justifyContent:'center',alignItems:'center'}}>
            <Image
          source={require('../Images/Ellipse.png')}
        />

<Text style={{fontFamily:'Roboto',fontSize:15,borderBottomWidth:1,borderBottomColor:'#C4C4C4',color:'#000',flex:1,marginLeft:10}}>
Zach doty invited you to join Gradient 
Descent workspace                </Text>
                </View>
            </TouchableOpacity>

            </View>
        )
    }
}

export default EmployeeNotification
