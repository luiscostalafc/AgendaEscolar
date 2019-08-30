import React from 'react'
import {
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    NavigationActions
} from 'react-navigation'


import Icon from 'react-native-vector-icons/FontAwesome5'

import App from './screens/App'
import Notifications from './screens/Notifications'
import Menu from './components/Menu'

const DrawerNavigation = createDrawerNavigator({
    Home: {
        name: "Home",
        screen: App,
        navigationOptions: () => ({
            drawerIcon: <Icon  name="home" size={20} color="#816ab0" />,
            title: 'Início'
        })
    },
    Notifications: {
        name: "Notifications",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="bell" size={20} color="#816ab0" />,
            title: 'Notificações'
        })
    },
    Diary: {
        name: "Diary",
        screen: App,
        navigationOptions: () => ({
            drawerIcon: <Icon  name="history" size={20} color="#816ab0" />,
            title: 'Diário'
        })
    },
    Cardapio: {
        name: "Cardapio",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="utensils" size={20} color="#816ab0" />,
            title: "Cardápio"
        })
    },
    Photos: {
        name: "Photos",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="camera-retro" size={20} color="#816ab0" />,
            title: "Mural de Fotos"
        })
    },
}, {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: "Montserrat Regular",
            fontSize: 15,
        },
        activeLabelStyle: {
            color: "#816ab0"
        }
    }
})

const MainRoutes = createSwitchNavigator({
    Notifications: {
        name: 'Notifications',
        screen: Notifications
    },
    Home: {
        name: 'Home',
        screen: DrawerNavigation
    }
}, {
    initialRouteName: 'Home'
})




export default createAppContainer(MainRoutes)