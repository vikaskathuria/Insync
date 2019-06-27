 import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'
 import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Projects from './Projects'
import Teams from './Teams'
import Chat from './Chat'
// import Icon from "react-native-vector-icons/Ionicons";
import CustomHeader from "./CustomHeader";
// import { Button } from "react-native";
import {Button,Icon} from 'native-base'
import DrawerScreen from "./DrawerScreen";


const ProjectStack=createStackNavigator({
  Project:{
    screen:Projects,
    navigationOptions: () => ({
      title: 'Projects',
      headerTintColor: 'white',
      header: props => <CustomHeader {...props} />,
      headerStyle: {
        backgroundColor: "transparent"
      },   
      animationEnabled: true 
    }
    
    )

  },
  
});


const TeamStack=createStackNavigator({
  Teams:{
    screen:Teams,
    navigationOptions: () => ({
      header: props => <CustomHeader {...props} />,

      title: 'Teams',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: "transparent",
        elevation: 0,
        showdowOpacity: 0
      },
      
      // tabBarIcon: ({ tintColor }) => {
      //   return (
      //     <Icon
      //       name='home'
      //       size={26}
      //       color={tintColor}
      //     />
      //   );
      // },
    
    })

  }
});
const ChatStack=createStackNavigator({
  Chat:{
    screen:Chat,
    navigationOptions: () => ({
      header: props => <CustomHeader {...props} />,

      title: 'Chats',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: "transparent",
        elevation: 0,
        showdowOpacity: 0
      },
      // tabBarIcon: ({ tintColor }) => {
      //   return (
      //     <Icon
      //       name='home'
      //       size={26}
      //       color={tintColor}
      //     />
      //   );
      // }
    })

  }
});



const TabBar=createBottomTabNavigator({
    Projects:{
        screen: ProjectStack,
    
                },

    Teams:{
        screen: TeamStack,
        // navigationOptions = {
        //    tabBarIcon: ({ tintColor, focused }) => (
        //        <Icon name={focused ? "md-call" : "ios-call"} size={28} color={tintColor} />
        //      ),
        //    }
        
    },
  Chat:{
      screen: ChatStack
  },

},
// {
//   initialRouteName: 'Projects',
//   activeColor: 	'#808080',
//   inactiveColor: '#000000',
//   barStyle: { backgroundColor: 'transparent' },
// }
{
  navigationOptions: ({navigation}) => ({
    header: props => <CustomHeader {...props} />,
    headerStyle:{
    backgroundColor: "transparent",
    elevation: 0,
    showdowOpacity: 0
  },
  headerRight: (
<Button
          transparent
          onPress={() => navigation.openDrawer()}
        >
          <Icon 
            name="menu"
            style={{ fontSize: 30, color: 'white' }}
          /> 
        </Button>  ),


}),
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: "#0715F7"
    },
    inactiveTintColor: 'white',
    activeTintColor: '#000000'
  }
}
)

const StackTab=createStackNavigator({
  Tabs:TabBar
})
export const Drawer = createDrawerNavigator({
  Tabs: {
    screen: StackTab
  }
},{
  contentComponent: props => <DrawerScreen {...props} />,

  drawerPosition: 'right',
})