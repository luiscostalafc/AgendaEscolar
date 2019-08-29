import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native'
import Foto1 from '../assets/photos/arthur1.png'
import Foto2 from '../assets/photos/arthur2.png'
import Foto3 from '../assets/photos/arthur3.png'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={Foto1} style={styles.photoB} />
            <View style={styles.secondary}>
                <Image source={Foto2} style={styles.photoSecondary} />
                <Image source={Foto3} style={styles.photoSecondary} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 310,
        backgroundColor: "rgba(255,255,255,1)",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "space-between"

    },
    photoB: {
        height: "100%",
        width: "50%",
        borderRadius: 5,
        marginHorizontal: 10
        
    },
    photoSecondary: {
        height: "48%",
        width: 160,
        resizeMode: 'cover',
        borderRadius: 5,
        marginHorizontal: 5,


    },
    secondary: {
        justifyContent: "space-between"
    }

})