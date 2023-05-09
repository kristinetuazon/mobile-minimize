import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'

export type Item = {
    title: string;
    id: number;
  };

const ListItem = (props:Item) => {
    const [checked, setChecked] = useState<boolean>(false);
  return (
    <View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})