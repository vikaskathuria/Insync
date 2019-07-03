import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
import { Button, Icon } from "native-base";

class Calls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  static navigationOptions = ({ navigation }) => {
    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button transparent onPress={() => params._onHeaderEventControl()}>
          <Icon name="search" style={{ fontSize: 30, color: "white" }} />
        </Button>
      )
    };
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  


 


  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={messages => this.onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    );
  }
}

export default Calls;
// Calls.navigationOptions = {
//     tabBarIcon: ({ tintColor, focused }) => (
//       <Icon
//         name={focused ? "md-call" : "ios-call"}
//         size={28}
//         color={tintColor}
//       />
//     )
//   };
