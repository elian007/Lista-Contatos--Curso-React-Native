import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props =>{
    const {people, onPressItem} = props 


    const items = people.map(person => {
        return <PeopleListItem 
                key={person.name.first} person={person} 
                onPressItem = {onPressItem}
                />
    })

    return(
        <View style={styles.container}>
            { items }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList