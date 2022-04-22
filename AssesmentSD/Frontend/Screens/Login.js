import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import TextLink from "../Components/TextLink";
import ErrorMessage from "../Components/ErrorMessage";
import Check from "../Components/Check";
import axios from 'axios'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  
  const onHandleSignIn = async () => {
    console.log("inside handle---")
    if (email !== "" && password !== "") {
      console.log("inside axios");
      const params = JSON.stringify({

        "name": email,
        
        "password": password,
        
        });
        console.log("params-------",params);

        axios.post("http://192.168.1.30:3306/login", params,{

          "headers": {
          
          "content-type": "application/json",
          
          },
          
          })
          .then(function(response) {
          
          console.log(response.data);
          
          })
          
          .catch(function(error) {
          
          console.log(error);
          
          });
          

    } else if (email === "") {
      setSignupError("Please enter email.");
    } else if (password === "") {
      setSignupError("Please enter password.");
    } else {
      setSignupError("Please check all the field values.");
    }
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        setBackgroundColor="#fff"
      />

      <View style={styles.mainContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/logo/white.png")}
        />
        <Text style={styles.mainHeader}>Login Form</Text>
        <Text style={styles.description}>
          For any issues in login please reach our contact support.
        </Text>
        <View style={styles.SpaceTop}></View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          text={"Email"}
          secureText={false}
          autocap={"none"}
          autocorr={false}
        />
        <View style={{ marginTop: 30 }}></View>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize={"none"}
          autoCorrect={false}
        />

        <View style={{ marginTop: 30 }}></View>
        {signupError ? (
          <ErrorMessage error={signupError} visible={true} />
        ) : null}

        <Check title={"LOGIN"} onPress={onHandleSignIn}></Check>

        <TextLink
          text="CREATE NEW ACCOUNT"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 2,
    backgroundColor: "#fff",
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "white",
    //marginTop: 50,
  },
  SpaceTop: {
    marginTop: 60,
  },
  mainHeader: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
    paddingTop: 2,
  },
  description: {
    fontSize: 12,
    color: "black",
    paddingBottom: 2,
    lineHeight: 25,
  },
  label: {
    fontSize: 14,
    color: "#7d7d7d",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    fontSize: 18,
  },
});
