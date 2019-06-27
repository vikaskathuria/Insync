import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'

class AddMembers extends Component {
    render() {
        return (
            <View style={{flex:1,}}>
             <View style={styles.Center}>
                 <TouchableOpacity>
                     <Text style={{color:'#0715F7',fontFamily: 'SF Pro Text',fontSize: 17,}}>Select All</Text>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Text style={{color:'#0715F7',fontFamily: 'SF Pro Text',fontSize: 17,}}>Add</Text>
                 </TouchableOpacity>

             </View>        
            </View>
        )
    }
}

export default AddMembers

const styles=StyleSheet.create({
    Center:{
        flex:1,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:580,

    }
})