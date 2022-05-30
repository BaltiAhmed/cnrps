import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const PretUniversiatire = (props) => {
  const [demandepret, setdemandepret] = useState();
  const [rib, setrib] = useState();
  const [photoIdentite, setphotoIdentite] = useState();
  const [copieCINEtudiant, setcopieCINEtudiant] = useState();
  const [attestationSalaire, setattestationSalaire] = useState();
  const [declarationREV, setdeclarationREV] = useState();
  const [certificatInscrit, setcertificatInscrit] = useState();

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

  const takecertificatInscrit = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcertificatInscrit(image1);
    props.onImageTaken(image1.uri);
  };

  const takedeclarationREV = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdeclarationREV(image1);
    props.onImageTaken(image1.uri);
  };

  const takeattestationSalaire = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setattestationSalaire(image1);
    props.onImageTaken(image1.uri);
  };

  const takecopieCINEtudiant = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieCINEtudiant(image1);
    props.onImageTaken(image1.uri);
  };

  const takedemandepret = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdemandepret(image1);
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

  const takerib = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image2 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setrib(image2);
    props.onImageTaken(image2.uri);
  };

  const auth = useContext(Authcontext);

  const uploadcertificatInscrit = async (id) => {
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updatecertificatInscrit/${id}`;
    const fileUri = certificatInscrit.uri;
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

  const uploaddeclarationREV = async (id) => {
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updatedeclarationREV/${id}`;
    const fileUri = declarationREV.uri;
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

  const uploadattestationSalaire = async (id) => {
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updateattestationSalaire/${id}`;
    const fileUri = attestationSalaire.uri;
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

  const uploadcopieCINEtudiant = async (id) => {
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updatecopieCINEtudiant/${id}`;
    const fileUri = copieCINEtudiant.uri;
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
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updatecopieCINParent/${id}`;
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

  const uploaderib = async (id) => {
    const url = `http://192.168.1.185:5000/api/pretUniversitaire/updaterib/${id}`;
    const fileUri = rib.uri;
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
    const url = "http://192.168.1.185:5000/api/pretUniversitaire/ajout";
    const fileUri = demandepret.uri;
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

    const id = responsedata.pretuniv._id;

    console.log(id);
    uploaderib(id);
    uploadphotoIdentite(id);
    uploadattestationSalaire(id)
    uploadcertificatInscrit(id)
    uploadcopieCINEtudiant(id)
    uploaddeclarationREV(id)

    Alert.alert("Message", "Votre demande est enregistré", [
      { text: "fermer" },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.imagePicker}>
        <H2>Choisir Vos fichier image</H2>

        <View style={styles.imagePreview}>
          {!demandepret ? (
            <Text>image de demande de pret personnel</Text>
          ) : (
            <Image style={styles.image} source={{ uri: demandepret.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedemandepret}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!rib ? (
            <Text>image de RIB banquaire</Text>
          ) : (
            <Image style={styles.image} source={{ uri: rib.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takerib}
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
          {!attestationSalaire ? (
            <Text>image d'attestation de salaire'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: attestationSalaire.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeattestationSalaire}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!certificatInscrit ? (
            <Text>image de certificat d'inscription'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: certificatInscrit.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecertificatInscrit}
        />

        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!declarationREV ? (
            <Text>image de declaration de rev'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: declarationREV.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedeclarationREV}
        />

        <Text>Choisir une image</Text>

        
        <View style={styles.imagePreview}>
          {!copieCINEtudiant ? (
            <Text>image de declaration de rev'.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: copieCINEtudiant.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieCINEtudiant}
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

PretUniversiatire.navigationOptions = {
  headerTitle: "Pret Universitaire",
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

export default PretUniversiatire;
