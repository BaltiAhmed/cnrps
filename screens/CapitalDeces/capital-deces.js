import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const CapitalDeces = (props) => {
  const [ficheRenseignement, setficheRenseignement] = useState();
  const [acteDeces, setacteDeces] = useState();
  const [extraitNaissConjoint, setextraitNaissConjoint] = useState();
  const [cinConjoint, setcinConjoint] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeficheRenseignement = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setficheRenseignement(image1);
    props.onImageTaken(image1.uri);
  };

  const takeacteDeces = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setacteDeces(image1);
    props.onImageTaken(image1.uri);
  };

  const takerextraitNaissConjoint = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setextraitNaissConjoint(image2);
    props.onImageTaken(image2.uri);
  };

  const takecinConjoint = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcinConjoint(image2);
    props.onImageTaken(image2.uri);
  };

  const auth = useContext(Authcontext);

  const uploadaacteDeces = async (id) => {
    const url = `http://192.168.1.185:5000/api/capitalDeces/updateacteDeces/${id}`;
    const fileUri = acteDeces.uri;
    const newImageUri = "file:///" + fileUri.split("file:/").join("");
    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const options = {
      method: "PATCH",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData);

    let response = await fetch(url, options);

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
  };

  const uploadextraitNaissConjoint = async (id) => {
    const url = `http://192.168.1.185:5000/api/capitalDeces/updateextraitNaissConjoint/${id}`;
    const fileUri = extraitNaissConjoint.uri;
    const newImageUri = "file:///" + fileUri.split("file:/").join("");
    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const options = {
      method: "PATCH",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData);

    let response = await fetch(url, options);

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
  };

  const uploadcinConjoint = async (id) => {
    const url = `http://192.168.1.185:5000/api/capitalDeces/updatecinConjoint/${id}`;
    const fileUri = cinConjoint.uri;
    const newImageUri = "file:///" + fileUri.split("file:/").join("");
    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const options = {
      method: "PATCH",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData);

    let response = await fetch(url, options);

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
  };

  const postDocument = async () => {
    const url = "http://192.168.1.185:5000/api/capitalDeces/ajout";
    const fileUri = ficheRenseignement.uri;
    const newImageUri = "file:///" + fileUri.split("file:/").join("");
    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    formData.append("utilisateurId", auth.userId);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData);

    let response = await fetch(url, options);

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
    let responsedata = await response.json();

    const id = responsedata.Capital._id;

    console.log(id);

    uploadaacteDeces(id)
    uploadcinConjoint(id)
    uploadextraitNaissConjoint(id)

    Alert.alert("Message", "Votre demande est enregistré", [
      { text: "fermer" },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.imagePicker}>
        <H2>Choisir Vos fichier image</H2>

        <View style={styles.imagePreview}>
          {!ficheRenseignement ? (
            <Text>image de fiche de renseignement.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: ficheRenseignement.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#2196f3"
          onPress={takeficheRenseignement}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!acteDeces ? (
            <Text>image d'acte de décés.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: acteDeces.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#2196f3"
          onPress={takeacteDeces}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!extraitNaissConjoint ? (
            <Text>image d'extrait de naissance de conjoint.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: extraitNaissConjoint.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#2196f3"
          onPress={takerextraitNaissConjoint}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!cinConjoint ? (
            <Text>image de CIN conjoint.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: cinConjoint.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#2196f3"
          onPress={takecinConjoint}
        />
        <Text>Choisir une image</Text>

        <Button
          style={{ marginTop: 20 }}
          block
          onPress={() => {
            postDocument();
          }}
        >
          <Text>Envoyer</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

CapitalDeces.navigationOptions = {
  headerTitle: "Capital Décés",
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15,
  },
  imagePreview: {
    width: "80%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CapitalDeces;
