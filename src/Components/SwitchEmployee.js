import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,FlatList } from "react-native";
import CalendarStrip from "react-native-slideable-calendar-strip";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
// import { ListItem } from "react-native-elements";
import { Button, Icon } from "native-base";
import {EmployeeListItems} from "./EmployeeListItems";

class SwitchEmployee extends Component {
  state = {
    selectedDate: new Date(),
    projectList: []
  };

  static navigationOptions = ({navigation})=>({
    headerRight: (
      <Button
        transparent
        onPress={() =>navigation.navigate("employeeSetting")}
      >
        <Icon name="menu" style={{ fontSize: 30, color: "white" }} />
      </Button>
    )
  });
  renderRow=({item})=>{
    return <EmployeeListItems onPress={()=>this.props.navigation.navigate('insideProject')} text1={item.projectName} text2={item.clientName} text3={item.description} />
}
renderSeprator=()=>{
  return <View style={{height:1,borderBottomWidth:1,borderColor:'#d4d4d4',marginLeft:20}}/>
}

  render() {
    const { projectList } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.navigation.navigate("employeeAddProject")}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={require("../Images/float.png")}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, marginVertical: 20 }}>
          <CalendarStrip
            isChinese={false}
            showWeekNumber
            showChineseLunar={false}
            selectedDate={this.state.selectedDate}
            onPressDate={date => {
              this.setState({ selectedDate: date });
            }}
            onPressGoToday={today => {
              this.setState({ selectedDate: today });
            }}
            onSwipeDown={() => {
              alert("onSwipeDown");
            }}
            markedDate={[
              "2018-05-04",
              "2018-05-15",
              "2018-06-04",
              "2018-05-01"
            ]}
          />

          <View style={styles.header} />
          <View style={styles.bottom} />

          {/* <KeyboardAwareScrollView style={{ flex: 1 }}>
            <View>
              {projectList.map(project => (
                <View style={{}}>
                  <TouchableOpacity>
                    <Image
                      source={require("../Images/pause.png")}
                    />
                  </TouchableOpacity>

                  <ListItem
                    title={project.projectName}
                    titleStyle={{
                      color: "#000000",
                      fontSize: 25,
                      fontFamily: "SF Pro Text"
                    }}
                    subtitle={
                      <View style={styles.subtitleView}>
                        <Text style={styles.ratingText}>
                          {project.description}
                        </Text>
                      </View>
                    }
                  />
                </View>
              ))}
            </View>
          </KeyboardAwareScrollView> */}
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
)(SwitchEmployee);

const styles = StyleSheet.create({
  header: {
    // flex: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#979797"
  },
  bottom: {
    //   flex:1,
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
  ratingText: {
    color: "#000",
    fontFamily: "SF Pro Text",
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#D1D1D6",
    paddingBottom: 10,
    marginVertical: 5
  }
});
