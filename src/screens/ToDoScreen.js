import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from '../../Theme'
import AddItem from '../components/AddItem'
import ListItem from '../components/ListItem'

import { v4 as uuidv4 } from 'uuid'

const ToDoScreen = () => {
    const { dark, theme, toggle } = useContext(ThemeContext)
    const [list, setList] = useState([])

    const addItem = (text) => {
      const newItem = {
        id: uuidv4(),
        task: text
      }
      setNewItem([newItem, ...list])
    }

    const deleteItem = (id) => {
      const newItem = list.filter(item => item.id === !id)
      setList(newList)
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style = {styles.containerSwitch}>
       <Switch
         trackColor={{ false: "#767577", true: "#ccc" }}
         thumbColor={dark ? "#fff" : "#f4f3f4"}
         onChange={toggle} value = {dark} />
         </View>
            <Text style={[ styles.titleText, { color: theme.color}]}>To Do List</Text>
            <AddItem addItem={addItem}></AddItem>
            <ListItem deleteItem={deleteItem} listItems={list}></ListItem>
        </SafeAreaView>
    )
}

export default ToDoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
     },
     containerSwitch:{
        marginBottom:30,
        marginTop:20,
        right: 100
     },
     titleText: {
       fontSize: 38,
     },
     text: {
       fontSize: 20,
       padding: 20,
     },
})

