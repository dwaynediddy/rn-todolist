import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../Theme'


const ListItem = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <View>
            <FlatList style={[ styles.titleText, { color: theme.color}]} 
                data={props.listItem}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity style={styles.flatList}>
                            <Text>{item.task}</Text>
                            <Button 
                                title='delete'
                                onPress={() => {
                                    props.delete(item.id)
                                }}
                                />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    flatList: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        width: 180,
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
    }
})
