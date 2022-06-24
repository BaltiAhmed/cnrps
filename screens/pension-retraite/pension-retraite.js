import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const PensionRetraite = (props) => {
  
    const [arreteMISEretraite, setarreteMISEretraite] = useState();
    const [releveService, setreleveService] = useState();
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
  
    const takearreteMISEretraite = async () => {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image1 = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      setarreteMISEretraite(image1);
      props.onImageTaken(image1.uri);
    };
  
    const takereleveService= async () => {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image1 = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      setreleveService(image1);
      props.onImageTaken(image1.uri);
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
  
    const uploadarreteMISEretraite = async (id) => {
      const url = `${path}/api/pensionretraite/updatearreteMISEretraite/${id}`;
      const fileUri = arreteMISEretraite.uri;
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
      //console.log(formData);
  
      let response = await fetch(url, options);
  
      if (!response.ok) {
        let responsedata = await response.json();
        Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
        throw new Error(responsedata.message);
      }
    };
  
    
  
    const uploadphotoIdentite = async (id) => {
      const url = `${path}/api/pensionretraite/updatephotoIdent/${id}`;
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
      //console.log(formData);
  
      let response = await fetch(url, options);
  
      if (!response.ok) {
        let responsedata = await response.json();
        Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
        throw new Error(responsedata.message);
      }
    };
  
    const uploadextraitNaissance = async (id) => {
      const url = `${path}/api/pensionretraite/updateextraitNaissance/${id}`;
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
      //console.log(formData);
  
      let response = await fetch(url, options);
  
      if (!response.ok) {
        let responsedata = await response.json();
        Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
        throw new Error(responsedata.message);
      }
    };
  
    const postDocument = async () => {
      const url = `${path}/api/pensionretraite/ajout`;
      const fileUri = releveService.uri;
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
      /* console.log(formData); */
  
      let response = await fetch(url, options);
  
      if (!response.ok) {
        let responsedata = await response.json();
        Alert.alert("Message", responsedata.message, [{ text: "fermer" }]);
        throw new Error(responsedata.message);
      }
      let responsedata = await response.json();
  
      const id = responsedata.pensionR._id;
  
      console.log(id);
  
      uploadarreteMISEretraite(id)
      uploadextraitNaissance(id)
      uploadphotoIdentite(id)
      
  
      Alert.alert("Message", "Votre demande est enregistré", [
        { text: "fermer" },
      ]);
    };
  
    return (
      <ScrollView>
        <View style={styles.imagePicker}>
          <H2>Choisir Vos fichier image</H2>
  
          <View style={styles.imagePreview}>
            {!arreteMISEretraite ? (
              <Text>image d 'arret mise en retraite</Text>
            ) : (
              <Image style={styles.image} source={{ uri: arreteMISEretraite.uri }} />
            )}
          </View>
          <IconAntDesign
            name="upload"
            size={30}
            color="#005b4f"
            onPress={takearreteMISEretraite}
          />
          <Text>Choisir une image</Text>
  
          <View style={styles.imagePreview}>
            {!releveService ? (
              <Text>image de relevé de service</Text>
            ) : (
              <Image style={styles.image} source={{ uri: releveService.uri }} />
            )}
          </View>
          <IconAntDesign
            name="upload"
            size={30}
            color="#005b4f"
            onPress={takereleveService}
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
  
  PensionRetraite.navigationOptions = {
    headerTitle: "Pension retraite",
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
  
  export default PensionRetraite;
  