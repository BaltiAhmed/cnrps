import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TextInput,
  Alert,
  Image,
} from "react-native";
import Card from "../components/Card";
import { Spinner } from "native-base";
import { Authcontext } from "../context/auth-context";
import { useContext } from "react";
import Error from "../models/error";
import Success from "../models/success";
import ToastType from "../models/error";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = useContext(Authcontext);

  const submit = async () => {
    console.log(email);
    console.log(password);

    setLoading(true);

    let response = await fetch(
      `${path}/api/utilisateur/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      setLoading(false);
      throw new Error(responsedata.message);
    }

    let responsedata = await response.json();
    setLoading(false);
    console.log(responsedata.utilisateur._id);
    auth.login(
      responsedata.utilisateur,
      responsedata.utilisateur._id,
      responsedata.token
    );
  };
  return (
    <View style={{ backgroundColor: "#4ebaaa", height: "100%" }}>
      <Card style={styles.authContainer}>
        <View style={{marginBottom:-100,margin:100,marginTop:0}}>
          <Image
            style={{ width: "90%", height: "40%" }}
            source={require("C:/Users/darra/OneDrive/Documents/formaion PFE 2021/afef/cnrps/assets/images/cnrps.jpg")}
          />
        </View>

        {loading && <Spinner />}
        <ToastType />
        <ScrollView>
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
              title="Login"
              color="#005b4f"
              onPress={() => {
                submit();
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Switch to Sign Up"
              color="#005b4f"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "Signup",
                });
              }}
            />
          </View>
        </ScrollView>
      </Card>
    </View>
  );
};

Login.navigationOptions = {
  headerTitle: "Login",
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
    marginTop: "40%",
  },
  buttonContainer: {
    marginTop: 10,
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

export default Login;
