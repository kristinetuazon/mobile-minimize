import { StyleSheet, Text, View } from "react-native";
// import React from 'react'
import React from "react";
export type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: 100,
    backgroundColor: "lightgrey",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
