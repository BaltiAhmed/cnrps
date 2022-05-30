import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const PrestationSoutien = (props) => {
  const [demandeLocation, setdemandeLocation] = useState();
  const [attestaionSalAffilie, setattestaionSalAffilie] = useState();
  const [attestationSalaireConjoint, setattestationSalaireConjoint] =
    useState();
  const [extraitNaissanceEnfant, setextraitNaissanceEnfant] = useState();
  const [copieDecisionMutation, setcopieDecisionMutation] = useState();
  const [copieContratLocation, setcopieContratLocation] = useState();
  const [copieCINaffilie, setcopieCINaffilie] = useState();
  const [copieCINconjoint, setcopieCINconjoint] = useState();

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

  const takecopieCINconjoint = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieCINconjoint(image1);
    props.onImageTaken(image1.uri);
  };

  const takecopieCINaffilie = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieCINaffilie(image1);
    props.onImageTaken(image1.uri);
  };

  const takecopieContratLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieContratLocation(image1);
    props.onImageTaken(image1.uri);
  };

  const takecopieDecisionMutation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieDecisionMutation(image1);
    props.onImageTaken(image1.uri);
  };

  const takeextraitNaissanceEnfant = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setextraitNaissanceEnfant(image1);
    props.onImageTaken(image1.uri);
  };

  const takeattestationSalaireConjoint = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setattestationSalaireConjoint(image1);
    props.onImageTaken(image1.uri);
  };

  const takeattestaionSalAffilie = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setattestaionSalAffilie(image1);
    props.onImageTaken(image1.uri);
  };

  const takedemandeLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdemandeLocation(image1);
    props.onImageTaken(image1.uri);
  };

  const auth = useContext(Authcontext);

  const uploadcopieCINconjoint = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updatecopieCINconjoint/${id}`;
    const fileUri = copieCINconjoint.uri;
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

  const uploadcopieCINaffilie = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updatecopieCINaffilie/${id}`;
    const fileUri = copieCINaffilie.uri;
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

  const uploadcopieContratLocation = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updatecopieContratLocation/${id}`;
    const fileUri = copieContratLocation.uri;
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

  const uploadcopieDecisionMutation = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updatecopieDecisionMutation/${id}`;
    const fileUri = copieDecisionMutation.uri;
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

  const uploadextraitNaissanceEnfant = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updateextraitNaissanceEnfant/${id}`;
    const fileUri = extraitNaissanceEnfant.uri;
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

  const uploadattestationSalaireConjoint = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updateattestaionSalConjoint/${id}`;
    const fileUri = attestationSalaireConjoint.uri;
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

  const uploadattestaionSalAffilie = async (id) => {
    const url = `http://192.168.1.185:5000/api/prestationSoutien/updateattestaionSalAffilie/${id}`;
    const fileUri = attestaionSalAffilie.uri;
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
    const url = "http://192.168.1.185:5000/api/prestationSoutien/ajout";
    const fileUri = demandeLocation.uri;
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

    let response = await fetch(url, options);

    if (!response.ok) {
      let responsedata = await response.json();
      Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
      throw new Error(responsedata.message);
    }
    let responsedata = await response.json();

    const id = responsedata.prestationsou._id;

    console.log(id);
    uploadcopieCINconjoint(id)
    uploadcopieCINaffilie(id)
    uploadcopieContratLocation(id)
    uploadcopieDecisionMutation(id)
    uploadextraitNaissanceEnfant(id)
    uploadattestationSalaireConjoint(id)
    uploadattestaionSalAffilie(id)

    Alert.alert("Message", "Votre demande est enregistré", [
      { text: "fermer" },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.imagePicker}>
        <H2>Choisir Vos fichier image</H2>

        <View style={styles.imagePreview}>
          {!demandeLocation ? (
            <Text>image de demande de location</Text>
          ) : (
            <Image style={styles.image} source={{ uri: demandeLocation.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedemandeLocation}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!attestaionSalAffilie ? (
            <Text>image d'attestation salaire affilier</Text>
          ) : (
            <Image style={styles.image} source={{ uri: attestaionSalAffilie.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeattestaionSalAffilie}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!attestationSalaireConjoint ? (
            <Text>image de salaire conjoin.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: attestationSalaireConjoint.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeattestationSalaireConjoint}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!extraitNaissanceEnfant ? (
            <Text>image d'extrait de naissance enfant'.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: extraitNaissanceEnfant.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeextraitNaissanceEnfant}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!copieDecisionMutation ? (
            <Text>image de copie de decision de mutation'.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: copieDecisionMutation.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieDecisionMutation}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!copieContratLocation ? (
            <Text>image de copie de contart de location'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: copieContratLocation.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieContratLocation}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!copieCINaffilie ? (
            <Text>image de CIN affilier'.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: copieCINaffilie.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieCINaffilie}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!copieCINconjoint ? (
            <Text>image de CIN conjoint'.</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: copieCINconjoint.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieCINconjoint}
        />

        <Text>Choisir une image</Text>

        <Button
          style={{ marginTop: 20 ,backgroundColor:"#005b4f"}}
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

PrestationSoutien.navigationOptions = {
  headerTitle: "Prestation soutien",
};

const styles = StyleSheet.create({
  imagePicker: {
    backgroundColor: "#4ebaaa",
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

export default PrestationSoutien;
