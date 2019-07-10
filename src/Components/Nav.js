import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import CustomHeader from "./CustomHeader";

import { Drawer, TabBar } from "./Tabs";
import { View, Text, TouchableOpacity } from "react-native";
import AddProject from "./AddProject";
import AddTeam from "./AddTeam";
import InsideProject from "./InsideProject";
import InviteEmail from "./AddMembers";
import EditProject from "./EditProject";
import AddMembers from "./AddMembers";
import DrawerScreen from "./DrawerScreen";
import Notification from "./Notification";
import SwitchEmployee from "./SwitchEmployee";
import Feedback from "./Feedback";
import EmployeeAddProject from "./EmployeeAddProject";
import EmployeeSetting from "./EmployeeSetting";
import EmployeeNotification from "./EmployeeNotification";
import EmployeeFeedback from "./EmployeeFeedback";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const AppNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    signup: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    insideProject: {
      screen: InsideProject,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title:navigation.state.params.title,
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate({routeName:"editProject",params:{item:navigation.state.params.item}})}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "SF Pro Text",
                color: "#ffffff"
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff"
        }
      })
    },

    addMembers: {
      screen: AddMembers,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Add Members",
        headerLeft: (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={30} color="#fff" />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "SF Pro Text",
                color: "#ffffff"
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate("inviteEmail")}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "SF Pro Text",
                color: "#ffffff"
              }}
            >
              Invite
            </Text>
          </TouchableOpacity>
        ),

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      })
    },

    inviteEmail: {
      screen: InviteEmail,
      navigationOptions: {
        title: "Invite",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },

        headerTitleStyle: {
          color: "white",
          textAlign: "center"
        },
        headerTruncatedBackTitle: "Nah"
      }
    },

    editProject: {
      screen: EditProject,
      navigationOptions: {
        title: "Edit Project",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },

        headerTitleStyle: {
          color: "white",
          textAlign: "center"
        },
        headerTruncatedBackTitle: "Nah"
      }
    },

    addProject: {
      screen: AddProject,
      navigationOptions: {
        // header: props => <CustomHeader {...props} />,

        title: "Add Project",
        headerTintColor: "white",

        headerStyle: {
          // backgroundColor: "transparent",
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },
        headerTitleStyle: {
          flex: 1,
          textAlign: "center"
        }
      }
    },

    addTeam: {
      screen: AddTeam,
      navigationOptions: {
        // header: props => <CustomHeader {...props} />,

        title: "Invite",
        headerTintColor: "white",
        headerStyle: {
          // backgroundColor: "transparent",
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },

        headerTitleStyle: {
          color: "white",
          textAlign: "center"
        },
        headerTruncatedBackTitle: "Nah"
      }
    },
    notifications: {
      screen: Notification,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Notifications",

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      })
    },
    switchEmployee: {
      screen: SwitchEmployee,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Projects",

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          // textAlign: "center",
          flex: 1
        }
      })
    },
    feedback: {
      screen: Feedback,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Feedback",

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      })
    },
    employeeAddProject: {
      screen: EmployeeAddProject,
      navigationOptions: {
        // header: props => <CustomHeader {...props} />,

        title: "Add Project",
        headerTintColor: "white",

        headerStyle: {
          // backgroundColor: "transparent",
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },
        headerTitleStyle: {
          flex: 1,
          textAlign: "center"
        }
      }
    },
    employeeSetting: {
      screen: EmployeeSetting,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,

        headerTintColor: "white",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{fontSize:30,marginLeft:10,color:'#fff'}}>X</Text>
          </TouchableOpacity>
        ),
        // headerRight:(
        //   <Icon name="menu" size={80} color="#fff"/>

        // ),

        headerStyle: {
          // backgroundColor: "transparent",
          backgroundColor: "blue",

          elevation: 0,
          showdowOpacity: 0
        },
        headerTitleStyle: {
          textAlign: "center"
        }
      }
      )},
    employeeFeedback: {
      screen: EmployeeFeedback,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Feedback",

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      })
    },
    employeeNotifications: {
      screen: EmployeeNotification,
      navigationOptions: ({ navigation }) => ({
        // header: props => <CustomHeader {...props} />,
        title: "Notifications",

        headerStyle: {
          backgroundColor: "#0715F7",
          elevation: 0,
          showdowOpacity: 0
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      })
    },
    forgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: "Reset Password",
        path: 'user/:forgotpassword',

      }
    },
    resetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        title: "Forgot Password",

      }
    },




    dashboard: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "login"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
