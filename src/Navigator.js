import React from 'react'
import {
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    createStackNavigator,
    NavigationActions
} from 'react-navigation'


import Icon from 'react-native-vector-icons/FontAwesome5'
import commomStyles from './commomStyles'

import App from './screens/App'
import Notifications from './screens/Notifications'
import Menu from './components/Menu'

const DrawerNavigation = createDrawerNavigator({
    Home: {
        name: "Home",
        screen: App,
        navigationOptions: () => ({
            drawerIcon: <Icon  name="home" size={20} color={commomStyles.colors.mainColor} />,
            title: 'Início'
        })
    },
    Notifications: {
        name: "Notifications",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="bell" size={20} color={commomStyles.colors.mainColor} />,
            title: 'Notificações'
        })
    },
    Diary: {
        name: "Diary",
        screen: App,
        navigationOptions: () => ({
            drawerIcon: <Icon  name="history" size={20} color={commomStyles.colors.mainColor} />,
            title: 'Diário'
        })
    },
    Cardapio: {
        name: "Cardapio",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="utensils" size={20} color={commomStyles.colors.mainColor} />,
            title: "Cardápio"
        })
    },
    Photos: {
        name: "Photos",
        screen: Notifications,
        navigationOptions: () => ({
            drawerIcon: <Icon   name="camera-retro" size={20} color={commomStyles.colors.mainColor} />,
            title: "Mural de Fotos"
        })
    },
}, {
    initialRouteName: 'Home',
    contentComponent: Menu,
    drawerWidth: 250,
    drawerType: "back",
    overlayColor: 1,
    contentOptions: {
        labelStyle: {
            fontFamily: commomStyles.fontFamily,
            fontSize: 15,
        },
        activeLabelStyle: {
            color: commomStyles.colors.mainColor
        },
    }, 
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