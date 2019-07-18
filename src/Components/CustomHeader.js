import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <LinearGradient
      start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1.0, y: 1.0 }}
  colors={["#0715F7","#518EF8" ]}
      >
        <Header {...props}  />
        {/* <View style={{padding:30}}>
<LeftComponent/>
        </View> */}
      </LinearGradient>
    </View>
  );
};

export default CustomHeader;