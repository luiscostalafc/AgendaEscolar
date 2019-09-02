import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
} from 'react-native'

import Anuncio1 from '../assets/photos/comunicado1.png'
import commomStyles from '../commomStyles'

export default props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Anuncio1} style={styles.anoun} >
                <View style={styles.whiteMask}>
                    <View style={styles.textBox}>
                        <Text style={styles.title}> 2ª Escola de Pais</Text>
                        <Text style={styles.text}>Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema "Separação dos pais e seus efeitos psíquicos".</Text>
                        
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: "100%",
        backgroundColor: "red",
        marginTop: 15
    },
    anoun: {
        height: "100%",
        resizeMode: 'cover'
    },
    whiteMask: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.75)"
    },
    textBox: {
        width: "80%",
        height: "100%",
        // backgroundColor: "red"
    },
    title: {
        fontFamily: commomStyles.fontFamily,
        fontWeight: "bold",
        fontSize: 20,
        color: commomStyles.colors.mainColor,
        marginHorizontal: 10,
        marginTop: 10
    },
    text: {
        marginHorizontal: 10,
        marginTop: 5,
        fontFamily: commomStyles.fontFamily,
        // fontWeight: "bold",
        fontSize: 15,
        color: commomStyles.colors.mainColor,
    }
})