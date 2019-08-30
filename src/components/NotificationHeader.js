import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                    <Icon name="bars" size={25} color="#FFF" style={styles.icons} />
                </TouchableOpacity>
                <Icon name="search" size={25} color="#FFF" style={styles.iconsNot} />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        padding: 20,
        flexDirection: 'row',
        backgroundColor: "#816ab0",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconsNot: {
        transform: [{rotate: '-25deg'}]
    },
    input: {
        color: "#FFF",
        fontFamily: 'Montserrat Regular',
        backgroundColor: "rgba(255,255,255,0.2)"

    }
})

export default withNavigation(Header)