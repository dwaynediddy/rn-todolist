import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { ThemeContext } from '../../Theme'


const AddItem = (props) => {
    const { theme } = useContext(ThemeContext)
    const [item, setItem] = useState('')

    return (
        <View>
            <Text style={[ styles.titleText, { color: theme.color}]}>Add Item</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={(textValue) => setItem(textValue)}
            />
            <Button onPress={() => props.addItem(item)} title="Submit" />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    titleText: {
        position: 'relative',
        fontSize:32,
        paddingTop: 20,
    },
    textInput: {
        borderBottomColor: 'black',
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 4,
    }
})
