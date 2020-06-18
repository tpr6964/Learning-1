import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class App extends Component {
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.box1}>
              <Text style={styles.text}>my first app</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.text}>my second app</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.text}>my third app</Text>
            </View>
 
                
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'flex-start',
        alignItems: 'flex-start',  
    },
     box1: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent:'center',
      alignItems: 'center',  
      },
      box1: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent:'flex-end',
        alignItems: 'flex-end',  
        },
        box1: {
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent:'flex-end',
          alignItems: 'center',  
          },
})

export default App;