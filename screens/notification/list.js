import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Item,
} from "native-base";
import { Authcontext } from "../../context/auth-context";
import { View, RefreshControl, ScrollView } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Notification = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/notification/${auth.userId}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.notifications);
    };
    sendRequest();
  }, []);

  const [list, setList] = useState([]);

  const auth = useContext(Authcontext);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/notification/${auth.userId}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.notifications);
    };
    sendRequest();
  }, []);

  console.log(list);
  return (
    <View style={{ backgroundColor: "#4ebaaa", height: "100%" }}>
      <Container>
        <Content>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {list &&
              list.map((item, index) => (
                <ListItem avatar>
                  <Body>
                    <View style={{ marginTop: 20 }}>
                      <Text>{item.sujet}</Text>
                      <Text note>{item.message}</Text>
                    </View>
                  </Body>
                  <Right>
                    <IconAntDesign
                      name="delete"
                      size={20}
                      color="#c62828"
                      onPress={() => {}}
                      style={{ marginTop: 30 }}
                      OnPress={async () => {
                        let response = await fetch(
                          `http://192.168.1.185:5000/api/reclamation/${item._id}`,
                          {
                            method: "DELETE",
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        let responsedata = await response.json();
                        if (!response.ok) {
                          Alert.alert("Message", "Failed !!", [
                            { text: "fermer" },
                          ]);
                          throw new Error(responsedata.message);
                        }
                        setList(list.filter((el) => el._id !== item._id));
                        Alert.alert(
                          "Message",
                          "Votre reclamation est suprimée",
                          [{ text: "fermer" }]
                        );
                      }}
                    />
                  </Right>
                </ListItem>
              ))}
          </ScrollView>
        </Content>
      </Container>
    </View>
  );
};

Notification.navigationOptions = (navData) => {
  return {
    headerTitle: "Notifications",
    
  };
};

export default Notification;
