import React, { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { H2, Button } from "native-base";
import { Authcontext } from "../../context/auth-context";
import mime from "mime";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const PensionOrphelein = (props) => {
  const [demande, setdemande] = useState();
  const [acteDeces, setacteDeces] = useState();
  const [releveServices, setreleveServices] = useState();
  const [extraitNaissOrphelin, setextraitNaissOrphelin] = useState();
  const [cinOrphelin, setcinOrphelin] = useState();
  const [declarationNonEmploi, setdeclarationNonEmploi] = useState();
  const [certificatInscritUniversitaire, setcertificatInscritUniversitaire] =
    useState();
  const [attestationNonAff, setattestationNonAff] = useState();
  const [attestationNonBenif, setattestationNonBenif] = useState();
  const [carteHandicap, setcarteHandicap] = useState();
  const [jugementTutelle, setjugementTutelle] = useState();
  const [photoTuteur, setphotoTuteur] = useState();
  const [copieCinTuteur, setcopieCinTuteur] = useState();

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

  const takecopieCinTuteur = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcopieCinTuteur(image1);
    props.onImageTaken(image1.uri);
  };

  const takephotoTuteur = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setphotoTuteur(image1);
    props.onImageTaken(image1.uri);
  };

  const takejugementTutelle = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setjugementTutelle(image1);
    props.onImageTaken(image1.uri);
  };

  const takecarteHandicap = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcarteHandicap(image1);
    props.onImageTaken(image1.uri);
  };

  const takeattestationNonBenif = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setattestationNonBenif(image1);
    props.onImageTaken(image1.uri);
  };

  const takeattestationNonAff = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setattestationNonAff(image1);
    props.onImageTaken(image1.uri);
  };

  const takecertificatInscritUniversitaire = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcertificatInscritUniversitaire(image1);
    props.onImageTaken(image1.uri);
  };

  const takedeclarationNonEmploi = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdeclarationNonEmploi(image1);
    props.onImageTaken(image1.uri);
  };

  const takecinOrphelin = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setcinOrphelin(image1);
    props.onImageTaken(image1.uri);
  };

  const takeextraitNaissOrphelin = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setextraitNaissOrphelin(image1);
    props.onImageTaken(image1.uri);
  };

  const takereleveServices = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setreleveServices(image1);
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

  const takedemande = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image1 = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setdemande(image1);
    props.onImageTaken(image1.uri);
  };

  const auth = useContext(Authcontext);

  const uploadcopieCinTuteur = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatecopieCinTuteur/${id}`;
    const fileUri = copieCinTuteur.uri;
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

  const uploadphotoTuteur = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatephotoTuteur/${id}`;
    const fileUri = photoTuteur.uri;
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

  const uploadjugementTutelle = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatejugementTutelle/${id}`;
    const fileUri = jugementTutelle.uri;
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

  const uploadcarteHandicap = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatecarteHandicap/${id}`;
    const fileUri = carteHandicap.uri;
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

  const uploadattestationNonBenif = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updateattestationNonBenif/${id}`;
    const fileUri = attestationNonBenif.uri;
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

  const uploadattestationNonAff = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updateattestationNonAff/${id}`;
    const fileUri = attestationNonAff.uri;
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

  const uploadcertificatInscritUniversitaire = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatecertificatInscritUniversitaire/${id}`;
    const fileUri = certificatInscritUniversitaire.uri;
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

  const uploaddeclarationNonEmploi = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatedeclarationNonEmploi/${id}`;
    const fileUri = declarationNonEmploi.uri;
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

  const uploadcinOrphelin = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatecinOrphelin/${id}`;
    const fileUri = cinOrphelin.uri;
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

  const uploadextraitNaissOrphelin = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updateextraitNaissOrphelin/${id}`;
    const fileUri = extraitNaissOrphelin.uri;
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
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updatereleveServices/${id}`;
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

  const uploadacteDeces = async (id) => {
    const url = `http://192.168.1.185:5000/api/pensionOrphelin/updateacteDeces/${id}`;
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

  const postDocument = async () => {
    const url = "http://192.168.1.185:5000/api/pensionOrphelin/ajout";
    const fileUri = demande.uri;
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

    const id = responsedata.PensionO._id;

    console.log(id);
    uploadcopieCinTuteur(id);
    uploadphotoTuteur(id);
    uploadjugementTutelle(id);
    uploadcarteHandicap(id);
    uploadattestationNonBenif(id);
    uploadattestationNonAff(id);
    uploadcertificatInscritUniversitaire(id);
    uploaddeclarationNonEmploi(id);
    uploadcinOrphelin(id);
    uploadextraitNaissOrphelin(id);
    uploadreleveServices(id);
    uploadacteDeces(id);

    Alert.alert("Message", "Votre demande est enregistré", [
      { text: "fermer" },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.imagePicker}>
        <H2>Choisir Vos fichier image</H2>

        <View style={styles.imagePreview}>
          {!copieCinTuteur ? (
            <Text>image de CIN tuteur</Text>
          ) : (
            <Image style={styles.image} source={{ uri: copieCinTuteur.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecopieCinTuteur}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!photoTuteur ? (
            <Text>image de demande de tuteur</Text>
          ) : (
            <Image style={styles.image} source={{ uri: photoTuteur.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takephotoTuteur}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!jugementTutelle ? (
            <Text>image de demande de jugement tutelle</Text>
          ) : (
            <Image style={styles.image} source={{ uri: jugementTutelle.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takejugementTutelle}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!carteHandicap ? (
            <Text>image de demande de carte handicape</Text>
          ) : (
            <Image style={styles.image} source={{ uri: carteHandicap.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecarteHandicap}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!attestationNonBenif ? (
            <Text>image de demande d'attestation de non benif'</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: attestationNonBenif.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeattestationNonBenif}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!attestationNonAff ? (
            <Text>image de demande d'attestation de non affiliation'</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: attestationNonAff.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeattestationNonAff}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!certificatInscritUniversitaire ? (
            <Text>image de demande d'inscription universiaire</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: certificatInscritUniversitaire.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecertificatInscritUniversitaire}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!declarationNonEmploi ? (
            <Text>image de demande de delaration de non emplois</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: declarationNonEmploi.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedeclarationNonEmploi}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!cinOrphelin ? (
            <Text>image de demande de CIN</Text>
          ) : (
            <Image style={styles.image} source={{ uri: cinOrphelin.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takecinOrphelin}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!extraitNaissOrphelin ? (
            <Text>image de demande diextrait de naissance</Text>
          ) : (
            <Image
              style={styles.image}
              source={{ uri: extraitNaissOrphelin.uri }}
            />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeextraitNaissOrphelin}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!releveServices ? (
            <Text>image de demande de relevée de service</Text>
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
          {!acteDeces ? (
            <Text>image de demande d'acte de decés</Text>
          ) : (
            <Image style={styles.image} source={{ uri: acteDeces.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takeacteDeces}
        />
        <Text>Choisir une image</Text>

        <View style={styles.imagePreview}>
          {!demande ? (
            <Text>image de demande de pension</Text>
          ) : (
            <Image style={styles.image} source={{ uri: demande.uri }} />
          )}
        </View>
        <IconAntDesign
          name="upload"
          size={30}
          color="#005b4f"
          onPress={takedemande}
        />
        <Text>Choisir une image</Text>

        <Button
          style={{ marginTop: 20,backgroundColor:"#005b4f"  }}
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

PensionOrphelein.navigationOptions = {
  headerTitle: "Pension orphelin",
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

export default PensionOrphelein;
