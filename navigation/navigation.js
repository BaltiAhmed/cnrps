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
import PensionRetraite from "../screens/pension-retraite/pension-retraite";
import PretPersonnel from "../screens/pret-personnel/pret-personnel";
import PretUniversiatire from "../screens/pret-universitaire/pret-universitaire";
import PrestationSoutien from "../screens/prestation-soutien/prestation-soutien";
import PensionOrphelein from "../screens/pensions-orphelin/pension-orphelin";
import AttestationNonAffiliation from "../screens/attestation/attestation-non-affiliation";
import AttestationAffiliation from "../screens/attestation/attestation-affiliation";
import nonBenifisPret from "../screens/attestation/non-benefis-pret";
import MapList from "../screens/map";

const LandingNav = createStackNavigator(
  {
    Landing: Landing,
    PensionCivile: PensionCivile,
    AllocationVieillesse: AllocationVieillesse,
    CapitalDeces: CapitalDeces,
    PensionConjoin: PensionConjoin,
    PensionRetraite:PensionRetraite,
    PretPersonnel:PretPersonnel,
    PretUniversitaire:PretUniversiatire,
    PrestationSoutien: PrestationSoutien,
    PensionOrphelin: PensionOrphelein,
    AttestationNonAffiliation: AttestationNonAffiliation,
    AttestationAffiliation: AttestationAffiliation,
    nonBenifisPret: nonBenifisPret,
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
    Map: {
      screen: MapList,
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
