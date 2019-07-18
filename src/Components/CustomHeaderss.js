import React, { Component } from "react";
import { Header } from "react-navigation";
import { View, Platform ,StyleSheet,Easing} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import CenterComponent from "./CenterComponent";

import { COLOR } from 'react-native-material-ui/src';

class CustomHeaderss extends Component {
    constructor(props, context) {
        super(props, context);
      
        this.state = { isSearchActive: false, searchValue: '' };
    }
    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }
    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }
    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }
    onSearchClosed = () => {
        if(!this.state.isSearchActive)
        {
            this.props.navigation.openDrawer()
        }
        this.setState({ isSearchActive: false, searchValue: '' });
    }
  render() {
    const { isSearchActive, searchValue } = this.state;
    return (
      <View
        style={{
          height: 56,
          marginTop: Platform.OS == "ios" ? 20 : 0
        }}
      >
        <LinearGradient
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#0715F7", "#518EF8"]}
        >
          <View style={[styles.container, isSearchActive && { backgroundColor: 'white' }]}>
          <View style={styles.toolbarContainer}>
          <LeftComponent isSearchActive={isSearchActive}
                        onSearchClose={this.onSearchClosed}/>
            <CenterComponent title={this.props.title} 
                        isSearchActive={isSearchActive}
                        onSearchTextChange={this.onSearchTextChanged}
                        searchValue={searchValue}
            />

            <RightComponent  isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={searchValue}
                        onSearchClear={this.onSearchClearPressed}

                        />
                        </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default CustomHeaderss;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        elevation:2
    },
    toolbarContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
       
    },
});