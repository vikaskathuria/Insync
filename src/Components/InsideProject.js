import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,Image } from "react-native";
import CalendarStrip from "react-native-slideable-calendar-strip";

class InsideProject extends Component {
  state = {
    selectedDate: new Date()
  };
  render() {
    return (
      <View style={{ flex: 1,marginVertical:20 }}>
       
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
          markedDate={["2018-05-04", "2018-05-15", "2018-06-04", "2018-05-01"]}
        />

    <View style={styles.header}></View>
<View style={styles.bottom}>
<TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.props.navigation.navigate('addMembers',)}        
        style={styles.TouchableOpacityStyle}>
        <Image
          source={require('../Images/float.png')}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>


    </View>

      </View>
    );
  }
}

export default InsideProject;

const styles = StyleSheet.create({
  header: {
    flex: 5,
    borderBottomWidth:1 ,
    borderBottomColor: "#979797",
  },
  bottom:{
      flex:95,

  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    zIndex:100
  },
 
  FloatingButtonStyle: {
    position:'absolute',
    resizeMode: 'contain',
    width: 40,
    height: 40,
    color:'black',
  },

});
