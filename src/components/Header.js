import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'
import commomStyles from '../commomStyles'

class Header extends Component {

    
    render() {
        let d = new Date()
        let hour = d.getHours()
        let horario = ''

        if (hour >= 5 && hour < 12)  horario = "Bom dia"
        else if (hour >= 12 && hour < 18)  horario = "Boa tarde"
        else if (hour >= 18 && hour < 5 )  horario = "Boa noite"
        else horario = "Olá"

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                    <Icon name="bars" size={25} color="#FFF" style={styles.icons} />
                </TouchableOpacity>
                <Text style={styles.titleText}> {horario}, Gustavo </Text>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Notifications")}} >
                    <Icon name="bell-o" size={25} color="#FFF" style={styles.iconsNot} />
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: commomStyles.colors.mainColor,
        justifyContent: "space-between",
        padding: 20,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
    },
    iconsNot: {
        transform: [{rotate: '-25deg'}]
    },
    titleText: {
        color: commomStyles.colors.lightText,
        fontFamily: commomStyles.fontFamily
    }
})

export default withNavigation(Header)