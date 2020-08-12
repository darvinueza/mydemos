import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import { wishList } from 'MyFirstDemo/src/data/WishData';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Lista de Deseos</Text>
        {
          wishList.map(wish => 
            wish.wishMost && <Text key={wish.id}>{wish.name}</Text>)
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
