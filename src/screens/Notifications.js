import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import Anuncio1 from '../assets/photos/comunicado1.png'
import Anuncio2 from '../assets/photos/comunicado2.png'

import Notification from '../components/Notification'
import NotificationHeader from '../components/NotificationHeader'

export default class Notifications extends Component {

    notifications =
        [{
            id: Math.random(),
            image: Anuncio1,
            title: "2ª Escola de Pais",
            category: "Comunicados",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        },
        {
            id: Math.random(),
            image: Anuncio2,
            title: "Proteção ao Meio Ambiente",
            category: "Atividades",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: false
        },
        {
            id: Math.random(),
            image: Anuncio1,
            title: "2ª Escola de Pais",
            category: "Comunicados",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: false
        },
        {
            id: Math.random(),
            image: Anuncio2,
            title: "Proteção ao Meio Ambiente",
            category: "Atividades",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        },
        {
            id: Math.random(),
            image: Anuncio1,
            title: "2ª Escola de Pais",
            category: "Comunicados",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        },
        {
            id: Math.random(),
            image: Anuncio2,
            title: "Proteção ao Meio Ambiente",
            category: "Atividades",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        },
        {
            id: Math.random(),
            image: Anuncio1,
            title: "2ª Escola de Pais",
            category: "Comunicados",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        },
        {
            id: Math.random(),
            image: Anuncio2,
            title: "Proteção ao Meio Ambiente",
            category: "Atividades",
            contentText: "Querida família, dia 29/08, às 17:45H, teremos nossa 2ª escola de pais, com o tema Separação dos pais e seus efeitos psíquicos.",
            date: "Quinta-feira, 29 de Agosto às 15h40",
            read: true
        }]

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