import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Landing from '../screens/landing'
import Login from '../screens/login'
import Signup from '../screens/signup'
import PensionCivile from '../screens/pension/pension-civile'


const LandingNav = createStackNavigator({
    Landing:Landing,
    PensionCivile:PensionCivile
},
    {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:"#4a148c"
            },
            headerTintColor: 'white'
        }
    }
)



const mainNavigator = createDrawerNavigator({
    LandingNav: {
        screen:LandingNav,
        navigationOptions:{
            drawerLabel:'Acceuil'
        }
    },
    
},{
    contentOptions:{
        activeTintColor:'#ff6f00',
        labelStyle:{
            fontSize:18
        }
    }
}
)

export default createAppContainer(mainNavigator)