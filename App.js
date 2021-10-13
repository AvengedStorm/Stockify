import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import Header from './components/header';
import ListItem from './components/listitem';
import md5 from 'md5';

const DATA = [
  {
    title: "Home",
    id: md5('home')
  },
  {
    title: "Favorites",
    id: md5('favorites'),
  },
  {
    title: "Search",
    id: md5('search'),
  },
  {
    title: "My User",
    id: md5('myUser'),
  },
  {
    title: "Settings",
    id: md5('settings'),
  },
]

const App = () => {
  const [items, setItems] = useState(DATA);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex: 1,
    paddingTop: 60,
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // textAlign: "center",
  },
})

export default App;