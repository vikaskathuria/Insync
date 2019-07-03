import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,AsyncStorage } from 'react-native';
import LinearGradient from "react-native-linear-gradient";


class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  deleteData = async () => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('login')
       
      
    } catch (error) {
      console.log(error)
    }
  };


  render() {
    return (
      <View style={{flex:1}}>
            <LinearGradient
            style={styles.linearGradient}
      start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1.0, y: 1.0 }}
  colors={["#0715F7","#518EF8" ]}
      >
      <TouchableOpacity  style={styles.header} onPress={()=>this.props.navigation.closeDrawer()}>
                <Text style={{fontSize:25, color:'#ffffff',justifyContent:'center',marginBottom:20,}}>X</Text>

            </TouchableOpacity>

      </LinearGradient>



      <View style={styles.content}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('notifications')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('switchEmployee')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Switch to Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('feedback')}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Give us Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.deleteData}>
      <Text style={{borderBottomWidth:1,fontFamily:'Roboto',fontSize:17,color: '#000000',borderBottomColor:'#C4C4C4',marginVertical:15,marginLeft:10}}>Log Out</Text>
      </TouchableOpacity>

      </View>
      </View>
    );
  }
}

export default DrawerScreen;

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
