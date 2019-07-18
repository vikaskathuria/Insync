import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { IconToggle } from 'react-native-material-ui/src';

class RightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { onSearchPress, onSearchClear, isSearchActive, searchValue } = this.props;

    if (isSearchActive && searchValue.length === 0) {
        return null;
    }

    const iconProps = {};

    if (isSearchActive && searchValue.length > 0) {
        iconProps.name = 'clear';
        iconProps.color = COLOR.grey600;
        iconProps.onPress = onSearchClear;
    } else {
        iconProps.name = 'search';
        iconProps.color = 'white';
        iconProps.onPress = onSearchPress;
    }
return (
      <TouchableOpacity >
              {/* <Image
              source={require('../Images/search1.png') }
            
            /> */}
            <IconToggle {...iconProps} />
                        </TouchableOpacity>
    );
  }
}

export default RightComponent;
