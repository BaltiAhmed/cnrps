import React, { useState, useContext } from "react";
import {
  Container,
  Content,
  Textarea,
  Form,
  Item,
  Input,
  Text,
} from "native-base";
import { Button, Alert } from "react-native";
import { Authcontext } from "../../context/auth-context";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const AjoutReclamtion = (props) => {
  const [objet, setObjet] = useState();
  const [message, setMessage] = useState();

  const auth = useContext(Authcontext);

  const submit = async () => {
    console.log(objet);
    console.log(message);
    console.log(auth.userId);
    let response = await fetch(
      "http://192.168.1.185:5000/api/reclamation/ajout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objet: objet,
          message: message,
          utilisateurId: auth.userId,
        }),
      }
    );

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
    
    Alert.alert(
      "Message",
      "Votre reclamation est envoyer vous recevez une reponce dés possible",
      [{ text: "fermer" }]
    );
  };

  return (
    <Container>
      <Content padder>
        <Item regular>
          <Input
            placeholder="Objet"
            value={objet}
            onChangeText={(text) => {
              setObjet(text);
            }}
          />
        </Item>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Message"
          value={message}
          onChangeText={(text) => {
            setMessage(text);
          }}
        />
        <Button
          title="Ajouter"
          color="#4a148c"
          onPress={() => {
            submit();
          }}
        />
      </Content>
    </Container>
  );
};



export default AjoutReclamtion;
