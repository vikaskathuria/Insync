 import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'
 import React from 'react'
import Projects from './Projects'
import Teams from './Teams'
import Chat from './Chat'
import CustomHeaderss from "./CustomHeaderss";

import CustomHeader from "./CustomHeader";
import {Button,Icon} from 'native-base'
import DrawerScreen from "./DrawerScreen";
import {Image} from 'react-native'

const ProjectStack=createStackNavigator({
  Project:{
    screen:Projects,
    navigationOptions: ({navigation}) => ({
      title: 'Projects',
      headerTintColor: 'white',
      header:props => <CustomHeaderss onSearch={t=>navigation.setParams({search:t})} title="Project" {...props}/>,
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
      header:props => <CustomHeaderss title="Teams" {...props}/>,

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
      header:props => <CustomHeaderss title="Chat" {...props}/>,

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
              // <IconA name="briefcase" size={28} color={tintColor} />
              <Image
              source={require('../Images/case.png') }
              tintColor={tintColor}
            
            />
            ),
          }

    
                },

    Teams:{
        screen: TeamStack,
          navigationOptions : {
            tabBarIcon: ({ tintColor}) => (
                // <IconD name="team" size={28} color={tintColor} />
                <Image
                source={require('../Images/team.png') }
                tintColor={tintColor}
              
              />
              ),
            }
        
    },
  Chat:{
      screen: ChatStack,
              navigationOptions : {
           tabBarIcon: ({ tintColor}) => (
              //  <Icons name="chat" size={28} color={tintColor} />
              <Image
          source={require('../Images/chat.png') }
          tintColor={tintColor}
        
        />
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
    header: null,
    headerStyle:{
    backgroundColor: "transparent",
    elevation: 0,
    showdowOpacity: 0
  },
//   headerRight: (
// <Button
//           transparent
//           onPress={() => navigation.openDrawer()}
//         >
//           <Icon 
//             name="menu"
//             style={{ fontSize: 30, color: 'white' }}
//           /> 
//         </Button>  ),


}),
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: "transparent"
    },
    inactiveTintColor: 'grey',
    activeTintColor: 'blue'
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

  drawerPosition: 'left',
})