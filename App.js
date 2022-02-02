import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Contact from "./Components/Contact";

const App = () => {
  const contacts = [
    {
      name: "Mendy",
      phone: "07777777777",
      image: require("./assets/1.jpg"),
    },

    {
      name: "Ziyech",
      phone: "0578662482",
      image: require("./assets/2.jpg"),
    },

    {
      name: "James",
      phone: "078934081282s",
      image: require("./assets/3.jpeg"),
    },

    {
      name: "Hudson-Odoi",
      phone: "0111111111111",
      image: require("./assets/4.jpeg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 2, marginTop: 50 }}>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => <Contact item={item} />}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});