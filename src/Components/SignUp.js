import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import Logo from "./Logo";
// const {height,width}=Dimensions.get('window');

class SignUp extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false
  };
  async componentDidMount() {
    let userData=await AsyncStorage.getItem('userData')
    if(userData){
      this.props.navigation.navigate('dashboard')
    }

    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        "741984439598-a6vtl3079pbe4ps52stg2invr7u0j9ci.apps.googleusercontent.com",
      offlineAccess: false
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.revokeAccess();
      this.setState({ userInfo, error: null });
      console.log("success", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert("cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert("in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert("play services not available or outdated");
      } else {
        console.log("Something went wrong", error.toString());
        Alert.alert("Something went wrong", error.toString());
        this.setState({
          error
        });
      }
    }
  };

  handlePress = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    console.log("asdfasdfasdf");
    this.setState({ loading: true,});
    try {
      let result = await axios.post("http://192.168.0.30:3000/user/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirm_password: confirmPassword
      });
      AsyncStorage.setItem('userData',JSON.stringify(result.data))
      this.props.navigation.navigate("dashboard");
      this.setState({ loading: false,firstName:'', lastName:'', email:'',password:'', confirmPassword:''  });
      console.log("result==>", result);
    } catch (error) {
      this.setState({ loading: false });
      console.log("error---->", error);
    }
  };

  render() {
    const {
      loading,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    if (loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Logo />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="First Name"
            placeholderTextColor="#808080"
            value={firstName}
            onChangeText={text => this.setState({ firstName: text })}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Last Name"
            placeholderTextColor="#808080"
            value={lastName}
            onChangeText={text => this.setState({ lastName: text })}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Email"
            placeholderTextColor="#808080"
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#808080"
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgb(128,128,128)"
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            placeholderTextColor="#808080"
            onChangeText={text => this.setState({ confirmPassword: text })}
          />
          <LinearGradient
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={["#0715F7", "#518EF8"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity onPress={() => this.handlePress()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginBottom: 20,
              marginLeft: 20
            }}
          >
            or
          </Text>
          <TouchableOpacity style={styles.googleBorder} onPress={this._signIn}>
            <Image
              style={styles.googleIcon}
              source={require("../Images/search.png")}
            />
            <Text style={styles.googleText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <View style={styles.Account}>
            <Text style={{ color: "#000000", fontSize: 18 }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Text style={{ color: "#0715f7", fontSize: 18 }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center"
  },
  inputBox: {
    // flexGrow: 1,
    width: 320,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10
  },
  linearGradient: {
    width: 320,
    height: 50,
    borderRadius: 5,
    marginVertical: 20
  },
  googleBorder: {
    width: 320,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0715f7",
    flexDirection: "row"
  },
  googleIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    marginLeft: 50
  },
  googleText: {
    marginVertical: 10,
    marginLeft: 20,
    fontFamily: "SF Pro Text",
    color: "#000000",
    fontSize: 18
  },
  Account: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 16,
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});
