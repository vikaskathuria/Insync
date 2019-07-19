import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import {addEmployeeProject } from "../Actions/addProjectAction";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

class EmployeeAddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      clientName: "",
      description: "",
      id:1
    };
  }
  newProjectList() {
    let id = this.state.id + 1;
    this.setState({id:id})
    console.log(this.state);
    this.props.addEmployeeProject({
      projectName: this.state.projectName,
      clientName: this.state.clientName,
      description: this.state.description,
      id:this.state.id
    });
    
    this.setState(
      {
        projectName: "",
        clientName: "",
        description: "",
        id:id
      },
      () => {
        this.props.navigation.goBack();
      }
    );
  }
  render() {
    return (
      <KeyboardAwareScrollView style={{flex:1}}>

      <View>
        <TextInput
          style={styles.inputBoxes}
          underlineColorAndroid="rgb(128,128,128)"
          placeholder="Project Name"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          value={this.state.projectName}
          // onChangeText={(event)=>this.handleChange(event)}

          onChangeText={text => this.setState({ projectName: text })}
        />
        <TextInput
          style={styles.inputBoxes}
          underlineColorAndroid="rgb(128,128,128)"
          placeholder="Client Name"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ clientName: text })}
          value={this.state.clientName}
          // onChangeText={()=> this.handleProject()}
        />
        <TextInput
          style={styles.inputBoxes}
          underlineColorAndroid="rgb(128,128,128)"
          placeholder="Description"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ description: text })}
          value={this.state.description}
        />

        <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#0715F7", "#518EF8"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity>
            <Text
              style={styles.buttonText}
              onPress={() => this.newProjectList()}
            >
              Done
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addEmployeeProject: project => dispatch(addEmployeeProject(project))
});
export default connect(
  null,
  mapDispatchToProps
)(EmployeeAddProject);
const styles = StyleSheet.create({
  linearGradient: {
    width: 322,
    height: 60,
    marginLeft: 40,
    borderRadius: 5,
    marginVertical: 20
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  inputBoxes: {
    // flexGrow: 1,
    width: 400,
    paddingHorizontal: 16,
    paddingLeft: 30,
    fontSize: 16,
    marginVertical: 20,
    backgroundColor: "#EFEFF4"
  }
});
