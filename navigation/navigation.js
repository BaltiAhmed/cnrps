import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Landing from "../screens/landing";
import Login from "../screens/login";
import Signup from "../screens/signup";
import PensionCivile from "../screens/pension/pension-civile";
import AjoutReclamtion from "../screens/reclamation/ajoutReclamation";
import ListeReclamation from "../screens/reclamation/liste-reclamation";
import AllocationVieillesse from "../screens/allocation/allocation-vieillesse";
import CapitalDeces from "../screens/CapitalDeces/capital-deces";
import PensionConjoin from "../screens/pension-conjoin/pensions-conjoin";

const LandingNav = createStackNavigator(
  {
    Landing: Landing,
    PensionCivile: PensionCivile,
    AllocationVieillesse: AllocationVieillesse,
    CapitalDeces: CapitalDeces,
    PensionConjoin: PensionConjoin
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white",
    },
  }
);

const Reclamation = createStackNavigator(
  {
    ListeReclamation: ListeReclamation,
    AjoutReclamtion: AjoutReclamtion,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white",
    },
  }
);

const mainNavigator = createDrawerNavigator(
  {
    LandingNav: {
      screen: LandingNav,
      navigationOptions: {
        drawerLabel: "Acceuil",
      },
    },
    Reclamation: {
      screen: Reclamation,
    },
  },
  {
    contentOptions: {
      activeTintColor: "#ff6f00",
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

export default createAppContainer(mainNavigator);
