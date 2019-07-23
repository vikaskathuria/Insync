import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  TextInput,
  Dimensions
} from "react-native";
import { COLOR } from "react-native-material-ui";
import axios from 'axios'
import { connect } from "react-redux";
import {searchProject} from '../Actions/addProjectAction'
const { width } = Dimensions.get("window");
class CenterComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      textInput: props.isSearchActive,
      opacityValue: new Animated.Value(1),
      projectList: [],
      searchString: "",
      projectName: "",

    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isSearchActive !== nextProps.isSearchActive) {
      this.animateElements(nextProps.isSearchActive);
    }
  }
  animateElements = nextIsSearchActive => {
    Animated.timing(this.state.opacityValue, {
      toValue: 0,
      duration: 112,
      easing: Easing.linear,
      useNativeDriver: Platform.OS === "android"
    }).start(() => {
      this.setState({
        textInput: nextIsSearchActive
      });

      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        duration: 112,
        easing: Easing.linear,
        useNativeDriver: Platform.OS === "android"
      }).start();
    });
  };
 handleChange = (text) => {
this.setState({searchString:text},()=>{
  this.props.onSearch(this.state.searchString)
});
};
  render() {
   

   
    const {
      title,
      onSearchTextChange,
      searchValue,
      isSearchActive
    } = this.props;
    const { opacityValue, textInput, searchString } = this.state;

    const color = isSearchActive ? COLOR.grey600 : "white";

    let content = <Text style={[styles.text, { color }]}>{title}</Text>;

    if (textInput) {
      content = (
        <TextInput
          placeholder="Search"
          autoFocus
          style={{ width: width - 100, height: 50 }}
          value={searchString}
            onChangeText={this.handleChange}
            />
      );
    }
    return (
      <Animated.View style={[styles.container, { opacity: opacityValue }]}>
        {content}
      </Animated.View>
    );
  }
}
const mapStateToProps = state => {
  return {
    projectList: state.projectList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchProject:(value)=>dispatch(searchProject(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterComponent);
const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
    color: "white"
  }
});
