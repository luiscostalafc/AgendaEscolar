import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import Notification from '../components/Notification'
import NotificationHeader from '../components/NotificationHeader'

import notificationsObj from '../assets/notificationsObj'



export default class Notifications extends Component {
    


    notifications = notificationsObj.filter( notification => !notification.read )
    

        

    render() {
        return (
            <View style={styles.container}>
                <NotificationHeader />
                <FlatList data={this.notifications}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                         <Notification {...item} /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F5FA",
    }
})