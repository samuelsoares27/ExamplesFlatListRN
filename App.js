import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Pessoa from './src/Pessoas/Pessoas';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: 'Samuel', idade: '20', email: 'samuel_soares27@hotmail.com' },
        { id: 2, nome: 'João', idade: '22', email: 'joao@hotmail.com' },
        { id: 3, nome: 'Fulano', idade: '24', email: 'fulano@hotmail.com' },
        { id: 4, nome: 'Cicrano', idade: '25', email: 'cicrano@hotmail.com' },
        { id: 5, nome: 'Zé', idade: '30', email: 'ze@hotmail.com' },
        { id: 6, nome: 'henrique', idade: '30', email: 'henrique@hotmail.com' },
        { id: 7, nome: 'marcos', idade: '50', email: 'marcos@hotmail.com' },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});



