import React, { Component } from "react";
// import Icons from "react-native-vector-icons/Ionicons";
// import LinearGradient from "react-native-linear-gradient";
import { Button, Icon } from "native-base";
// import AddProject from "../Components/AddProject"
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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: []
    };
  }

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
      return <ListItem onPress={()=>this.props.navigation.navigate('insideProject')} text1={item.projectName} text2={item.clientName} text3={item.description} />
  }
  renderSeprator=()=>{
    return <View style={{height:1,borderBottomWidth:1,borderColor:'#d4d4d4',marginLeft:20}}/>
  }
  render() {
    const { projectList } = this.props;
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
              data={projectList||[]}
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
  projectList: state.projectList
});

export default connect(
  mapStateToProps,
  null
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
