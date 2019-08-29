import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style={styles.container}>
            <Icon name="bars" size={25} color="#FFF" style={styles.icons} />
            <Text style={styles.titleText}> Boa Noite, Gustavo </Text>
            <Icon name="bell-o" size={25} color="#FFF" style={styles.iconsNot} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: "#816ab0",
        justifyContent: "space-between",
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    iconsNot: {
        transform: [{rotate: '-25deg'}]
    },
    titleText: {
        color: "#FFF",
        fontFamily: 'Montserrat Regular'
    }
})