import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Error from "../../models/error";
import Success from "../../models/success";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Authcontext } from "../../context/auth-context";

const Profile = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [adresse, setAdresse] = useState();
  const [tel, setTel] = useState();
  const [date, setDate] = useState();
  const [Matricule, setMatricule] = useState();

  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const auth = useContext(Authcontext);

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

  const [list, setList] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`${path}/api/utilisateur/${auth.userId}`);

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.utilisateur);
      setNom(responseData.utilisateur.nom);
      setPrenom(responseData.utilisateur.prenom);
      setMatricule(responseData.utilisateur.matriculeCNRPS);
      setEmail(responseData.utilisateur.email);
      setAdresse(responseData.utilisateur.adresse);
      setTel(responseData.utilisateur.tel);
      setDate(responseData.utilisateur.Dnaissance);
    };
    sendRequest();
  }, []);

  const submit = async () => {
    console.log(email);
    console.log(password);
    console.log(nom);
    console.log(prenom);
    console.log(adresse);
    console.log(tel);
    console.log(date);

    let response = await fetch(`${path}/api/utilisateur/${auth.userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        tel: tel,
        Dnaissance: date,
      }),
    });
    let responsedata = await response.json();
    if (!response.ok) {
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
    Alert.alert("Message", "Votre compte est crée", [{ text: "fermer" }]);
  };

  return (
    <View style={{ backgroundColor: "#4ebaaa", height: "100%" }}>
      <Card style={styles.authContainer}>
        <TouchableOpacity
          style={{
            marginTop: "5%",
            borderRadius: 10,
            borderColor: "#be0000",
            paddingTop: "2.5%",
          }}
          onPress={() => auth.logout()}
        >
          <View style={{ alignSelf: "center", flexDirection: "row" }}>
            <AntDesign name="logout" size={30} color={"#be0000"} />
            <Text
              style={{
                fontSize: 18,
                marginTop: "1%",
                marginLeft: "4%",
                color: "#be0000",
              }}
            >
              Déconnextion
            </Text>
          </View>
        </TouchableOpacity>
        <Success success={success} />
        <Error error={error} />
        <ScrollView>
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
            <Text style={styles.label}>Prenom</Text>
            <TextInput
              style={styles.input}
              value={prenom}
              onChangeText={(text) => {
                setPrenom(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="prenom"
              placeholderTextColor="dark"
              label="E-mail"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Matricule CNRPS</Text>
            <TextInput
              style={styles.input}
              value={Matricule}
              onChangeText={(text) => {
                setMatricule(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="prenom"
              placeholderTextColor="dark"
              label="E-mail"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="email"
              placeholderTextColor="dark"
              label="E-mail"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Adresse</Text>
            <TextInput
              style={styles.input}
              value={adresse}
              onChangeText={(text) => {
                setAdresse(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="Adresse"
              placeholderTextColor="dark"
              label="E-mail"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Tel</Text>
            <TextInput
              style={styles.input}
              value={tel}
              onChangeText={(text) => {
                setTel(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="Tel"
              placeholderTextColor="dark"
              label="E-mail"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Date de naissance</Text>
            <Button
              color="#00897b"
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
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              keyboardAppearance="light"
              autoCapitalize="none"
              placeholder="password"
              placeholderTextColor="dark"
              passwordRules
              label="password"
              secureTextEntry
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Mettre à jour le profile"
              color="#005b4f"
              onPress={submit}
            />
          </View>
        </ScrollView>
      </Card>
    </View>
  );
};

Profile.navigationOptions = {
  headerTitle: "Profile",
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

export default Profile;
