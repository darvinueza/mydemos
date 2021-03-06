import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Lista de Deseos</Text>
        <Text>Wish 1</Text>
        <Text>Wish 2</Text>
        <Text>Wish 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTxt: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default MainScreen;
