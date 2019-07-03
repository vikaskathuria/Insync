import React,{Component} from "react";
import { StyleSheet, View, Text,TouchableOpacity,Image } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons'
export class EmployeeListItems extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       click:false
    }
  }
  handlePress(){
    this.setState({
      click:!this.state.click
    })
  }
  render(){
      const {text1,text2,text3,onPress}=this.props;
      
      if(this.state.click){
        return (
          <View style={styles.container}>
          <View style={styles.contentView}>
          <Text style={{marginLeft:30}} >{text2}</Text>

          <View style={{flexDirection:'row'}}>

          <TouchableOpacity onPress={()=>this.handlePress()}>
              <Image
                source={require("../Images/pause.png")}
              />

            </TouchableOpacity>
            <Text style={{color:'#000',fontSize: 25}}>{text1}</Text>

            </View>
                   
  
            <Text style={{fontSize: 15,marginLeft:30}}>{text3}</Text>
          </View>
          {/* <View style={styles.iconView}>
              <Icon name="chevron-right" size={40}/>
          </View> */}
          </View>
      );
      }
      else{
        return (
  
          <View style={styles.container}>
          <View style={styles.contentView}>
          <Text style={{marginLeft:30}}>{text2}</Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={()=>this.handlePress()}>
              <Image
                source={require("../Images/play.png")}
              />
            </TouchableOpacity>
            <Text style={{color:'#000',fontSize: 25}}>{text1}</Text>

            </View>
                     
            <Text style={{fontSize: 15,marginLeft:30}}>{text3}</Text>
          </View>
          {/* <View style={styles.iconView}>
              <Icon name="chevron-right" size={40}/>
          </View> */}
          </View>
      );
      }
  
  }}


const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    height: 70,
    margin:10
  },
  contentView: {
    flex: 8,
    justifyContent: "flex-start",
    flexDirection:'column',
  },
});
