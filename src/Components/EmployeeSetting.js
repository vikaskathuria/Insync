import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

export class EmployeeSetting extends Component {
    code()
    {

    }
    render() {
        return (
            <View style={{flex:1}}>
      <View style={styles.content}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('employeeNotifications')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Project')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Switch to Employer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('employeeFeedback')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Give us Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Log Out</Text>
      </TouchableOpacity>
      </View>
            </View>
        )
    }
}

export default EmployeeSetting
const styles=StyleSheet.create({
    header:{
        // borderBottomWidth:1 ,
        // borderBottomColor: '#000000',
        height:50,
        width:50

    },
    content:{
        flex:90,

    },
    linearGradient: {
// flex:1,        
height: 50,
        padding: 20,
      },
    

})
