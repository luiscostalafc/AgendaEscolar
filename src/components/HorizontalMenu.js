import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native'

import HorizontalItemMenu from './HorizontalItemMenu'

export default props => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <HorizontalItemMenu text="Comunicados" icon="bullhorn" notification={5} />
                <HorizontalItemMenu text="Diário" icon="history" />
                <HorizontalItemMenu text="Cardápio" icon="utensils" />
                <HorizontalItemMenu text="Mural de Fotos" icon="camera-retro" />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingVertical: 15,
        alignItems: "center"
    }
})
