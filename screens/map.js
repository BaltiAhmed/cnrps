import React, { useEffect, useCallback, useState, Dimensions } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MapList = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const id = props.navigation.getParam("id");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    const sendRequest = async () => {
      const response = await fetch(`${path}/api/agence`);

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.agences);
    };
    sendRequest();
  }, []);

  const [list, setList] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`${path}/api/agence`);

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.agences);
    };
    sendRequest();
  }, []);
  console.log(list);
  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ height: "100%" }}>
          <MapView
            style={styles.map}
            region={{
              latitude: 36.811571199999996,
              longitude: 10.181017599999999,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {list &&
              list.map((item, index) => (
                <Marker
                  coordinate={{
                    latitude: parseFloat(item.lat),
                    longitude: parseFloat(item.long),
                  }}
                  title={item.nom}
                  description={item.adresse +" / "+ item.tel}
                />
              ))}
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

MapList.navigationOptions = {
  headerTitle: "Agence CNRPS sur le MAP",
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  map: {
    width: "100%",
    height: 900,
  },
});

export default MapList;
