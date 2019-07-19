import React,{Component} from "react";
import { StyleSheet, View, Text,TouchableOpacity,Image } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons'
import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux";

 class EmployeeListItems extends Component {
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
      const {text1,text2,text3}=this.props;


      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => this.props.onDelete() 
      }]
      
      if(this.state.click){
        return (
          <Swipeout right={swipeBtns}>

          <View style={styles.container}>
          <View style={styles.contentView}>
          <Text style={{marginLeft:30}} >{text2}</Text>

          <View style={{flexDirection:'row'}}>

          <TouchableOpacity onPress={()=>this.handlePress()}>
              <Image
                source={require("../Images/pause.png")}
              />

            </TouchableOpacity>
            <Text style={{color:'#000',fontSize: 25,}}>{text1}</Text>

            </View>
                   
  
            <Text style={{fontSize: 15,marginLeft:30}}>{text3}</Text>
          </View>
          {/* <View style={styles.iconView}>
              <Icon name="chevron-right" size={40}/>
          </View> */}
          </View>
          </Swipeout>

      );
      }
      else{
        return (
          <Swipeout right={swipeBtns}>
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
          </Swipeout>
      );
      }
  
  }}
  const mapDispatchToProps=(dispatch)=>({
    deleteEmployeeProject:(index)=>dispatch(deleteEmployeeProject(index))
  })
  export default connect(
    null,
    mapDispatchToProps
  )( EmployeeListItems);
  

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    height: 70,
    margin:10,
    // backgroundColor:"#fff"
  },
  contentView: {
    flex: 8,
    justifyContent: "flex-start",
    flexDirection:'column',
    // backgroundColor:"#fff"

  },
});
