import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Landing from "../screens/landing";
import Login from "../screens/login";
import Signup from "../screens/signup";
import PensionCivile from "../screens/pension/pension-civile";
import AjoutReclamtion from "../screens/reclamation/ajoutReclamation";
import ListeReclamation from "../screens/reclamation/liste-reclamation";
import AllocationVieillesse from "../screens/allocation/allocation-vieillesse";
import CapitalDeces from "../screens/CapitalDeces/capital-deces";
import PensionConjoin from "../screens/pension-conjoin/pensions-conjoin";
import PensionRetraite from "../screens/pension-retraite/pension-retraite";
import PretPersonnel from "../screens/pret-personnel/pret-personnel";
import PretUniversiatire from "../screens/pret-universitaire/pret-universitaire";
import PrestationSoutien from "../screens/prestation-soutien/prestation-soutien";
import PensionOrphelein from "../screens/pensions-orphelin/pension-orphelin";
import AttestationNonAffiliation from "../screens/attestation/attestation-non-affiliation";
import AttestationAffiliation from "../screens/attestation/attestation-affiliation";
import nonBenifisPret from "../screens/attestation/non-benefis-pret";
import MapList from "../screens/map";
import Notification from "../screens/notification/list"
import Profile from "../screens/profile/profile"

import IconFontisto from "react-native-vector-icons/Fontisto";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LandingNav = createStackNavigator(
  {
    Landing: Landing,
    PensionCivile: PensionCivile,
    AllocationVieillesse: AllocationVieillesse,
    CapitalDeces: CapitalDeces,
    PensionConjoin: PensionConjoin,
    PensionRetraite: PensionRetraite,
    PretPersonnel: PretPersonnel,
    PretUniversitaire: PretUniversiatire,
    PrestationSoutien: PrestationSoutien,
    PensionOrphelin: PensionOrphelein,
    AttestationNonAffiliation: AttestationNonAffiliation,
    AttestationAffiliation: AttestationAffiliation,
    nonBenifisPret: nonBenifisPret,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#005b4f",
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
        backgroundColor: "#005b4f",
      },
      headerTintColor: "white",
    },
  }
);

const MapView = createStackNavigator(
  {
    MapView: MapList,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#005b4f",
      },
      headerTintColor: "white",
    },
  }
);

const NotificationNav = createStackNavigator(
  {
    MapView: Notification,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#005b4f",
      },
      headerTintColor: "white",
    },
  }
);

const ProfileNav = createStackNavigator(
  {
    UpdateProfile: Profile,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#005b4f",
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
    Map: {
      screen: MapView,
    },
  },
  {
    contentOptions: {
      activeTintColor: "#00897b",
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNav = createMaterialBottomTabNavigator(
  {
    Acceuil: {
      screen: LandingNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <IconFontAwesome name="home" size={25} color="#fafafa" />;
        },
        tabBarColor: "#005b4f",
      },
    },
    Reclamation: {
      screen: Reclamation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="exclamationcircleo" size={25} color="#fafafa" />
          );
        },
        tabBarColor: "#005b4f",
      },
    },
    Notifications: {
      screen: NotificationNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="notification" size={25} color="#fafafa" />
          );
        },
        tabBarColor: "#005b4f",
      },
    },
    Maps: {
      screen: MapView,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <MaterialCommunityIcons name="google-maps" size={25} color="#fafafa" />;
        },
        tabBarColor: "#005b4f",
      },
    },
    Profile: {
      screen: ProfileNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <IconFontisto name="person" size={25} color="#fafafa" />;
        },
        tabBarColor: "#005b4f",
      },
    }
  },
  {
    activeColor: "white",
    shifting: true,
  }
);

export default createAppContainer(AppNav);
