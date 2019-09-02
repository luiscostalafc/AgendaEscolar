import React from 'react'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

import { DrawerItems } from 'react-navigation'

import commomStyles from '../commomStyles'

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
        backgroundColor: commomStyles.colors.mainColor,
        flexDirection: "row"
    },
    title: {
        backgroundColor: commomStyles.colors.background,
        color: commomStyles.colors.mainColor,
        fontFamily: commomStyles.fontFamily,
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
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.lightText ,
        fontSize: 15,
        margin: 10
    },
    school: {
        fontFamily: commomStyles.fontFamily,
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