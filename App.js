
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {AppContainer} from './src/Components/Nav'
import { Provider } from 'react-redux'
import {store} from './src/Store/addProjectStore'
import LinearGradient from 'react-native-linear-gradient';
// import ViewInventoryMain from './src/Components/ViewInventoryMain'


export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 1000)
    );
  };

  async componentDidMount() {

    const data = await this.performTimeConsumingTask();
    // GoogleSignin.configure();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

 
  render() {
    if (this.state.isLoading) {
      return (
        <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 0.5, y: 0.5 }}
  colors={["#0715F7","#518EF8" ]}
  style={styles.linearGradient}>
  <Text style={{alignItems: "center",justifyContent: "center",fontSize: 50, fontWeight: "bold"}}>
    Insync
  </Text>
  {/* <View   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  <Image source={require('../Images/Group.png')}></Image></View> */}

</LinearGradient>
      );
    }
     else {
      return ( 
        <Provider store={store}><AppContainer /></Provider>
    // <ViewInventoryMain/>
  );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  linearGradient: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
