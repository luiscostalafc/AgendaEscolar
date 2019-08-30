import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-swipeable'

import Anuncio1 from '../assets/photos/comunicado1.png'




export default props => {
    

    const leftContent = (
        <View style={styles.exclude}>
            <Icon name='check' size={20} color="#FFF" />
            <Text style={styles.excludeText}>Lido</Text>
        </View>
    )
    
    const rightContent = [
        <TouchableOpacity style={[styles.exclude, { justifyContent: "flex-start", paddingLeft: 20 }]}
            onPress={() => {}}>
            <Icon name="check" size={30} color="#FFF" />
        </TouchableOpacity>
    ]

    return (
        <Swipeable leftActionActivationDistance={200}
        onLeftActionActivate={() => {}}
        leftContent={leftContent}
        rightButtons={rightContent}>
            <View style={[styles.container, {borderRightWidth: props.read ? 0 : 10 }]}>
                <Image source={props.image} resizeMode="cover" style={styles.image} />
                <View style={styles.textContainer} >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> {props.title}</Text>
                        <Text style={styles.category}> {props.category.toUpperCase()} </Text>
                    </View>
                    <Text style={styles.contentText}>{props.contentText}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: "100%",
        height: 100,
        borderRightColor: "#816ab0",
        // marginHorizontal: 5,
        marginVertical: 5,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 3,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    category: {
        color: "rgba(0,0,0,.5)",
        fontFamily: 'Montserrat Regular',
        fontSize: 10
    },
    date: {
        color: "rgba(0,0,0,.5)",
        fontFamily: 'Montserrat Regular',
        fontSize: 10,
        textAlign: "right"
    },
    title: {
        fontFamily: 'Montserrat Regular',
        fontSize: 15
    },
    contentText: {
        flex: 2,
        fontFamily: 'Montserrat Regular',
        fontSize: 10,
        width: "100%"
    },
    image: {
        height: "100%",
        flex: 1
    },
    exclude: {
        flex: 1,
        backgroundColor: '#816ab0',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    excludeText: {
        fontFamily: "Montserrat Regular",
        color: "#FFF",
        fontSize: 20,
        margin: 10,
    }
})