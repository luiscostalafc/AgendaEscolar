import React from 'react'
import {
    StyleSheet,
    ScrollView
} from 'react-native'

import HorizontalItemMenu from './HorizontalItemMenu'

export default props => {
    return (
        <ScrollView horizontal style={styles.container}>
            <HorizontalItemMenu text="Comunicados" icon="bullhorn" notification={5} />
            <HorizontalItemMenu text="Diário" icon="history" />
            <HorizontalItemMenu text="Cardápio" icon="utensils" />
            <HorizontalItemMenu text="Mural de Fotos" icon="camera-retro" />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    }
})
