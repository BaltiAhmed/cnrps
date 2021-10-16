import React,{useContext} from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import LandingGrid from "../components/landingGrid";
import { LINKS,LINKS1 } from "../data/data";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import {Authcontext} from '../context/auth-context'

const Landing = (props) => {
  const auth = useContext(Authcontext)
  const renderGridItem = (itemData) => {
    return (
      <LandingGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: itemData.item.link,
          });
        }}
        
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={auth.user.matriculeCNRPS ? LINKS : LINKS1}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

Landing.navigationOptions = (navData) => {
  return {
    headerTitle: "CNRPS",
    headerLeft: (
      <IconAntDesign
        name="menuunfold"
        size={30}
        color="#ff6f00"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default Landing;
