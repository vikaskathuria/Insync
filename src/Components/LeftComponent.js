import React, { Component } from 'react';
import { View, Text,StyleSheet,Animated,Easing,Platform} from 'react-native';
import { IconToggle,COLOR } from 'react-native-material-ui/src';

export default class LeftComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            leftElement: 'menu',
            spinValue: new Animated.Value(0),
        };
    }
    componentWillReceiveProps(nextProps) {
        // goes to search state
        if (nextProps.isSearchActive && !this.props.isSearchActive) {
            this.animate({ toValue: 1, leftElement: 'arrow-forward' });
        }
        // goes to default look
        if (!nextProps.isSearchActive && this.props.isSearchActive) {
            this.animate({ toValue: 0, leftElement: 'menu' });
        }
    }
    animate = ({ toValue, leftElement }) => {
        Animated.timing(this.state.spinValue, {
            toValue: 0.5,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({ leftElement });

            Animated.timing(this.state.spinValue, {
                toValue,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    }
    render() {
        const { leftElement, spinValue } = this.state;
        const { isSearchActive, onSearchClose } = this.props;

        const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        return (
            <Animated.View style={[styles.container, { transform: [{ rotate: spin }] }]} >
                <IconToggle
                    name={leftElement}
                    color={isSearchActive ? COLOR.grey600 : 'white'}
                    onPress={onSearchClose}
                    size={30}
                />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
    },
});