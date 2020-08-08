import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

const wishList = ["wish 1", "wish 2", "wish 3"];

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Lista de Deseos</Text>
        {
            wishList.map(wish => 
                <Text key={wish}>{wish}</Text>
            )
        }
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
