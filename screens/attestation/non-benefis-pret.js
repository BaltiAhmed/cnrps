import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Alert,
  Picker,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Error from "../../models/error";
import Success from "../../models/success";
import { Authcontext } from "../../context/auth-context";

const nonBenifisPret = (props) => {
  const [nom, setNom] = useState();
  const [cin, setCin] = useState();
  const [date, setDate] = useState();
  const [selectedValue, setSelectedValue] = useState("jendouba");
  const [lieuNaissance, setLieuNaissance] = useState();

  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date.toString());
    hideDatePicker();
  };

  const auth = useContext(Authcontext);

  const submit = async () => {
    let response = await fetch(
      "http://192.168.42.17:5000/api/nonBenifisPret/ajout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricule: auth.user.matriculeCNRPS,
          centre: selectedValue,
          nom: nom,
          CIN: cin,
          dateCIN: date,
          DateNaissance: date,
          lieuNaissance: lieuNaissance,
          utilisateurId: auth.userId,
        }),
      }
    );
    let responsedata = await response.json();
    if (!response.ok) {
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
    Alert.alert("Message", "Votre demande est enregistrée", [
      { text: "fermer" },
    ]);
  };

  return (
    <View>
      <Success success={success} />
      <Error error={error} />
      <ScrollView>
        <View style={styles.formControl}>
          <Text style={styles.label}>Centre régionale</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="jendouba" value="jendouba" />
            <Picker.Item label="jendouba" value="jendouba" />
          </Picker>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            style={styles.input}
            value={nom}
            onChangeText={(text) => {
              setNom(text);
            }}
            keyboardAppearance="light"
            autoCapitalize="none"
            placeholder="nom"
            placeholderTextColor="dark"
            label="E-mail"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Cin</Text>
          <TextInput
            style={styles.input}
            value={cin}
            onChangeText={(text) => {
              setCin(text);
            }}
            keyboardAppearance="light"
            autoCapitalize="none"
            placeholder="cin"
            keyboardType="numeric"
            placeholderTextColor="dark"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Date de CIN</Text>
          <Button
            color="#b3e5fc"
            title="Date de CIN"
            onPress={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {date && <Text style={styles.label}>{date}</Text>}
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Date de naissance</Text>
          <Button
            color="#b3e5fc"
            title="Date de naissance"
            onPress={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {date && <Text style={styles.label}>{date}</Text>}
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Lieu de naissance</Text>
          <TextInput
            style={styles.input}
            value={lieuNaissance}
            onChangeText={(text) => {
              setLieuNaissance(text);
            }}
            keyboardAppearance="light"
            autoCapitalize="none"
            placeholder="prenom"
            placeholderTextColor="dark"
            label="E-mail"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Envoyer" color="#4a148c" onPress={submit} />
        </View>
      </ScrollView>
    </View>
  );
};

nonBenifisPret.navigationOptions = {
  headerTitle: "Attestation",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 600,
    padding: 20,
    marginLeft: "10%",
    marginTop: "20%",
  },
  buttonContainer: {
    marginTop: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default nonBenifisPret;
