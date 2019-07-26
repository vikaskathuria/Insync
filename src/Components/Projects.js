import React, { Component } from "react";
// import Icons from "react-native-vector-icons/Ionicons";
// import LinearGradient from "react-native-linear-gradient";
import { Button, Icon } from "native-base";
import {addProject,deleteProject} from "../Actions/addProjectAction";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Alert
} from "react-native";
import {ListItem} from "./ListItem";
import axios from 'axios'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      loading:false
    };
  }

  deleteNote=async(id)=>{

    try {
      this.setState({loading:true,})
      let ress=await axios.get(`http://192.168.0.30:3000/project/delete/${id}`) 

      console.log('ress=>',ress)
      if(ress.status==200)
      {
        this.props.deleteProject(id)
      }
      this.setState({loading:false})

    } catch (error) {
      this.setState({loading:false})
      console.log('error=>',error)

    }
  }
  _listner='';

  static navigationOptions = ({ navigation }) => {
    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button transparent onPress={() => params._onHeaderEventControl()}>
          <Icon name="search" style={{ fontSize: 30, color: "white" }} />
        </Button>
      )
    };
  };
  renderRow=({item})=>{
    console.log()
      return <ListItem onDelete={()=>this.deleteNote(item._id)} onPress={()=>this.props.navigation.navigate({routeName:'insideProject',params:{title:item.project_name,item:item}})} text1={item.project_name} text2={item.client_name} text3={item.description} text4={item.date} />
  }
  renderSeprator=()=>{
    return <View style={{height:1,borderBottomWidth:1,borderColor:'#d4d4d4',marginLeft:20}}/>
  }
  componentDidMount=async()=>{
    _listner=this.props.navigation.addListener(
      'willFocus',
      payload => this.onBack(payload)
    )
this.getProjects();
  }
  getProjects=async ()=>
  {

    try {
      let result=await axios.get('http://192.168.0.30:3000/project/get')
      this.props.addProject(result.data);
    } catch (error) {
      console.log("erro----->",error.response)
    }
  }
  onBack(payload)
  {
    console.log(payload)
    if(payload.action.type=="Navigation/BACK" || payload.action.type=="Navigation/NAVIGATE")
    {
this.getProjects()
    }
  }
  
  render() {
    const { projectList } = this.props;
    let filterList=[];
   console.log(this.props.navigation.state.params)
   if(this.props.navigation.state.params)
   {
     let search=this.props.navigation.state.params.search.toLowerCase();
      filterList=search.length>0?projectList.filter(v=>v.project_name.toLowerCase().match(search)):projectList;
   }
   else{
  filterList=projectList;
   }
    if(this.state.loading){
      return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       <ActivityIndicator size="large"/>
       </View>
    }
    return (
      <View style={styles.MainContainer}>
        <StatusBar backgroundColor="#0715F7" />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.navigation.navigate("addProject")}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={require("../Images/float.png")}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ marginVertical: 30 }}>
            <FlatList
              data={filterList||[]}
              renderItem={this.renderRow}
              ItemSeparatorComponent={this.renderSeprator}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  projectList: state.project.projectList
});
const mapDispatchToProps = dispatch =>({
  addProject:(project)=>dispatch(addProject(project)),
  deleteProject:(id)=>dispatch(deleteProject(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

const styles = StyleSheet.create({
  linearGradient: {
    width: 320,
    height: 50
  },
  MainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    zIndex: 100
  },

  FloatingButtonStyle: {
    position: "absolute",
    resizeMode: "contain",
    width: 40,
    height: 40,
    color: "black"
  },
  subtitleView: {
    flexDirection: "row",
    // paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    color: "black",
    fontFamily: "SF Pro Text",
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#D1D1D6",
    paddingRight: 350,
    paddingBottom: 10
  }
});
