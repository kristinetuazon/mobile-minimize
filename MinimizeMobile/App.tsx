import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import { Button, List, Checkbox, Provider as PaperProvider } from 'react-native-paper';
// import ListItem from "./components/ListItem";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState<{ id: number; text: string }[]>([
    { id: 1, text: "milk" },
    { id: 2, text: "bread" },
    { id: 3, text: "cake" },
    { id: 4, text: "chips" },
  ]);
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Header title="Shopping List"></Header>
      <FlatList
        data={items}
        renderItem={({ item }) => <Checkbox.Item label={item.text} status="unchecked" position="leading" labelVariant="headlineMedium"/>}
      />
      <Button mode="contained"> Press Me </Button>
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTio: 60,
  },
});
