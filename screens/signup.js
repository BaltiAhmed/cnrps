import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    Alert
} from "react-native";
import Card from "../components/Card";

const Signup = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(false)

    return (
        <Card style={styles.authContainer}>

            <ScrollView>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
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
                        onChangeText={(text) => { setPassword(text) }}
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
                    <Button title="Signup" color="#4a148c" />
                </View>

            </ScrollView>
        </Card>
    );
};

Signup.navigationOptions = {
    headerTitle: 'Signup'
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
    }
});

export default Signup;
