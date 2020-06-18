import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Head extends Component {
    render() {
        return(
            <View Style = {styles.container}>
                <Text>My test App!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems: 'center',
    }

})