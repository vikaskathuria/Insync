import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  AsyncStorage,
  TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Logo from "./Logo";
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import Toast from "react-native-simple-toast";
// import { projectStrings } from "./ProjectStrings";
// import { validateEmail, validatePassword } from "./Validation";
import TouchID from 'react-native-touch-id'
import { validatePassword, validateEmail } from "./Validation";
export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email:'',
       password:'',
       loading:false,
       biometryType: 'FingerPrint'
    }
  }
  // validateData = () => {
  //   if (this.state.email == "" || this.state.password == "") {
  //     Toast.show(projectStrings.toastFillAllDetails);
  //   } else if (validateEmail(this.state.email)) {
  //     Toast.show(projectStrings.toastInvalidEmail);
  //   } else if (validatePassword(this.state.password)) {
  //     {
  //       Toast.show(projectStrings.toastShortPassword);
  //     }
  //   } else {
  //     this.props.doLogin(this.state, "farmer/login");
  //   }
  // };




  
  async componentDidMount() {
    console.log(this.props.navigation)
    // Preload data from an external API
    // Preload data using AsyncStorage
    // TouchID.isSupported()
    // .then(biometryType => {
    //   this.setState({ biometryType });
    // })
    let userData=await AsyncStorage.getItem('userData');
    if(userData)
    {
    this.props.navigation.navigate('dashboard')
    }
    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:  "741984439598-a6vtl3079pbe4ps52stg2invr7u0j9ci.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.revokeAccess();
      this.setState({ userInfo, error: null });
      console.log("success",userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      }
       else {
        // console.log("Something went wrong",error.toString())
        // Alert.alert('Something went wrong', error.toString());
        // this.setState({
        //   error,
        // });
        this.props.navigation.navigate('dashboard')
      }
    }
  };

  // checkLogin=()=>{
  //   const { username, password}= this.state
  //   if(username=="" && password==""){
  //     this.props.navigation.navigate('dashboard')   
  //    }
  //   else{
  //     Alert.alert('Error','Username/Password mismatch',[{
  //       text:'Okay'
  //     }])

  //   }
  // }

  handleLogin=async()=>{
    const {email,password}=this.state
    if (validateEmail(email)) {
      // Alert.alert('Invalid Email')
      Toast.show("Invalid Email");
    }
    else if(validatePassword(password))
    {
      Alert.alert('Invalid Password')
      // return <View style={{flex:1}}><Text style={{color:'red'}}>Invalid Password</Text></View>

    }
     else {
  
    try {

      this.setState({loading:true,})
     let result=await axios.post('http://192.168.0.30:3000/user/login', {
        email: email,
        password: password
      })
     AsyncStorage.setItem('userData',JSON.stringify(result.data));
      this.props.navigation.navigate("dashboard");

      console.log("result=>>>",result)
      this.setState({loading:false,email:'',password:''})
    } catch (error) {
      this.setState({loading:false})
      console.log("error---->", error);
 
    }
  }
    
  }
  _pressHandler=()=> {
    const optionalConfigObject = { title: 'Authentication Required', color: '#e00606' };
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
        this.props.navigation.navigate("dashboard")
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }
  // _testSupport() {
  //   TouchID.isSupported()
  //     .then(supported => {
  //       // Success code
  //       Alert.alert('Touch ID supported');
  //     })
  //     .catch(error => {
  //       // Failure code
  //       Alert.alert('Touch ID not support');
  //     });
  //}
    render() {
    
    const {email,password,loading}=this.state;
    if(loading){
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size="large"/>
      </View>
    }
    return (
      <KeyboardAwareScrollView style={{flex:1}}>

      <View style={styles.container}>
        <Logo style={{marginRight:30}} />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgb(128,128,128)"
          placeholder="Email"
          placeholderTextColor="#808080"
          value={email}
          onChangeText={text=>this.setState({email:text})}
        />
          {validateEmail(this.state.email) && <Text style={{color:'red',marginBottom:20}}>Invalid Email</Text>}
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgb(128,128,128)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#808080"
          value={password}
          blurOnSubmit={true}
          onChangeText={text=>this.setState({password:text})}
        />
        <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#0715F7", "#518EF8"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity  onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('resetPassword')}>
        <Text style={{color: "#0715f7",fontSize: 18,alignItems:'center'}}>Forgot Password ?</Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.googleBorder}
          onPress={this._signIn}        >
          <Image
            style={styles.googleIcon}
            source={require("../Images/search.png")}
          />
          <Text style={styles.googleText}>Sign In With Google</Text>
        </TouchableOpacity>

       

        <TouchableHighlight
          onPress={this._pressHandler}
          // activeOpacity={1}
        >
         <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#0715F7", "#518EF8"]}
          style={styles.btn}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Authenticate with ${this.state.biometryType}`}
          </Text>
          </LinearGradient>

        </TouchableHighlight>

        <View style={styles.Account}>
        <Text style={{color:'#000000',fontSize: 18}}>Don't have an account yet?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('signup')}
        ><Text style={{color:'#0715f7',fontSize: 18}}>Sign Up</Text></TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>

    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop:30 ,

  },
  inputBox: {
    // flexGrow: 1,
    width: 320,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 7,
    marginTop:20 ,
  },
  linearGradient: {
    width: 320,
    height: 50,
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

  Account:{
    alignItems:'center',
    justifyContent:'flex-end',
    marginVertical: 40,
    flexDirection: 'row',
    
},
btn: {
  borderRadius: 3,
  marginTop: 30,
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
}

});
