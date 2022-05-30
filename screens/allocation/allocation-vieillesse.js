import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const AllocationVieillesse = (props) => {
  const [demandeAllocation, setdemandeAllocation] = useState();
  const [arreteMiseRetraite, setarreteMiseRetraite] = useState();
  const [releveServices, setreleveServices] = useState();
  const [photoIdentite, setphotoIdentite] = useState();
  const [extraitNaissance, setextraitNaissance] = useState();



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

  const takearreteMiseRetraite = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setarreteMiseRetraite(image1);
    props.onImageTaken(image1.uri);
  };

  const takedemandeAllocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdemandeAllocation(image1);
    props.onImageTaken(image1.uri);
  };

  const takereleveServices = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setreleveServices(image2);
    props.onImageTaken(image2.uri);
  };

  const takephotoIdentite = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setphotoIdentite(image2);
    props.onImageTaken(image2.uri);
  };


  


  const takeextraitNaissance = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setextraitNaissance(image2);
    props.onImageTaken(image2.uri);
  };

  const auth = useContext(Authcontext);

  const uploadarreteMiseRetraite = async (id) => {
    const url = `http://192.168.1.185:5000/api/allocation/updateArreteMiseRetraite/${id}`;
    const fileUri = arreteMiseRetraite.uri;
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

  const uploadreleveServices = async (id) => {
    const url = `http://192.168.1.185:5000/api/allocation/updateReleveServices/${id}`;
    const fileUri = releveServices.uri;
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

  const uploadphotoIdentite = async (id) => {
    const url = `http://192.168.1.185:5000/api/allocation/updateextraitNaissance/${id}`;
    const fileUri = photoIdentite.uri;
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

  const uploadextraitNaissance = async (id) => {
    const url = `http://192.168.1.185:5000/api/allocation/updatephotoIdentite/${id}`;
    const fileUri = extraitNaissance.uri;
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
    const url = "http://192.168.1.185:5000/api/allocation/ajout";
    const fileUri = demandeAllocation.uri;
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

    const id = responsedata.allocation._id;

    console.log(id);

    uploadarreteMiseRetraite(id)
    uploadextraitNaissance(id)
    uploadphotoIdentite(id)
    uploadreleveServices(id)

    Alert.alert("Message", "Votre demande est enregistré", [
      { text: "fermer" },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.imagePicker}>
        <H2>Choisir Vos fichier image</H2>

        <View style={styles.imagePreview}>
          {!demandeAllocation ? (
            <Text>image de la demande d'allocation.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: demandeAllocation.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedemandeAllocation}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!arreteMiseRetraite ? (
            <Text>image de'arret de mise en retraite.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: arreteMiseRetraite.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takearreteMiseRetraite}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!releveServices ? (
            <Text>image de relevé de service.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: releveServices.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takereleveServices}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!photoIdentite ? (
            <Text>image de photo d'identité.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: photoIdentite.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takephotoIdentite}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!extraitNaissance ? (
            <Text>image d'extrait de naissance'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: extraitNaissance.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeextraitNaissance}
        />
        <Text>Choisir une </Text>
        <Button
          style={{ marginTop: 20,backgroundColor:"#005b4f" }}
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

AllocationVieillesse.navigationOptions = {
  headerTitle: "Allocatioon de vieillesse",
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

export default AllocationVieillesse;
