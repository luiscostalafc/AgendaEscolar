import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import commomStyles from '../commomStyles'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.notificationContainer}>
                <Icon name={props.icon} size={40} color="#dbdbdb" style={styles.icon} />
                {props.notification > 0 ?
                <View style={styles.notification}>
                    <Text style={styles.textNotification}>{props.notification}</Text>
                </View>
                : null }
            </View>
            <Text style={styles.text}> {props.text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 100,
        backgroundColor: commomStyles.colors.wrapBox,
        borderRadius: 5,
        elevation: 2,
        margin: 5,
        justifyContent: "space-around"
    },
    notificationContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 15
    },
    icon: {
        // marginLeft: 15,
        // marginTop: 15
    },
    text: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.mainColor,
        marginBottom: 15,
        marginLeft: 15
    },
    notification: {
        backgroundColor: commomStyles.colors.mainColor,
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: "center",

    },
    textNotification: {
        color: commomStyles.colors.wrapBox,
        fontFamily: commomStyles.fontFamily,
        fontWeight: 'bold'
    }
})