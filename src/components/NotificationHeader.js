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
import commomStyles from '../commomStyles'

class Header extends Component {

    state = {
        filterNotifications: false,
    }

    toggleFilter = () => {
        this.setState({ filterNotifications: !this.state.filterNotifications })
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                    <Icon name="bars" size={25} color="#FFF" style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.toggleFilter }>
                    <Icon name={this.state.filterNotifications ? 'eye' : 'eye-slash'} 
                    size={25} color="#FFF"/>
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
        backgroundColor: commomStyles.colors.mainColor,
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconsNot: {
    },
    input: {
        color: "#FFF",
        fontFamily: commomStyles.fontFamily,
        backgroundColor: "rgba(255,255,255,0.2)"

    }
})

export default withNavigation(Header)