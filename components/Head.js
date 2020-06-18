import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Head extends Component {
    render() {
        return(
            <View>
                <Image source={ require('../about/sign1.png') } style={styles.headerImg} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerImg: {
        height: 100,
        width: 220,
    
    },
})
export default Head;

