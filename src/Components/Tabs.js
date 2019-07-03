 import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'
 import React from 'react'
import Projects from './Projects'
import Teams from './Teams'
import Chat from './Chat'
import Icons from "react-native-vector-icons/MaterialIcons";
import IconD from "react-native-vector-icons/AntDesign";
import IconA from "react-native-vector-icons/Octicons";

import CustomHeader from "./CustomHeader";
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
        navigationOptions : {
          tabBarIcon: ({ tintColor}) => (
              <IconA name="project" size={28} color={tintColor} />
            ),
          }

    
                },

    Teams:{
        screen: TeamStack,
          navigationOptions : {
            tabBarIcon: ({ tintColor}) => (
                <IconD name="team" size={28} color={tintColor} />
              ),
            }
        
    },
  Chat:{
      screen: ChatStack,
              navigationOptions : {
           tabBarIcon: ({ tintColor}) => (
               <Icons name="chat" size={28} color={tintColor} />
             ),
           }

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
      backgroundColor: "transparent"
    },
    inactiveTintColor: '#000',
    activeTintColor: 'grey'
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