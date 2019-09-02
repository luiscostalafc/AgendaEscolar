import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native'

import HorizontalItemMenu from './HorizontalItemMenu'
import notificationObj from '../assets/notificationsObj'

export default props => {

    notificationsReaded = notificationObj.filter(notification => !notification.read).length

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={styles.container} >
                <HorizontalItemMenu text="Comunicados" icon="bullhorn" notification={this.notificationsReaded} />
                <HorizontalItemMenu text="Diário" icon="history" />
                <HorizontalItemMenu text="Cardápio" icon="utensils" />
                <HorizontalItemMenu text="Mural de Fotos" icon="camera-retro" />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: "center"
    }
})
