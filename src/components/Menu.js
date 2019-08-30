import React from 'react'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

import { DrawerItems } from 'react-navigation'

import ArthurProfile from '../assets/photos/arthur_profile.png'


export default props => {

    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={ArthurProfile} style={styles.avatar} />
                <View styles={styles.userInfo}>
                        <Text style={styles.name}>
                            Arthur Holmes
                        </Text>
                        <Text style={styles.school} >
                           Infatil 3A - STI
                        </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#816ab0",
        flexDirection: "row"
    },
    title: {
        backgroundColor: "#FFF",
        color: "#000",
        fontFamily: "Montserrat Regular",
        fontSize: 30,
        paddingTop: 20
    },
    avatar: {
        width: 70,
        height: 70,
        // borderRadius: 30,
        // margin: 10
    },
    name: {
        fontFamily: "Montserrat Regular",
        color: "#FFF" ,
        fontSize: 15,
        margin: 10
    },
    school: {
        fontFamily: "Montserrat Regular",
        color: "rgba(255,255,255,0.55)" ,
        fontSize: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    menu: {
        justifyContent: "center",
        alignItems: "stretch"
    },
    userInfo: {
        justifyContent: "center",
        backgroundColor: "red"
    },
})