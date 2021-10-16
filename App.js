import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./screens/landing";
import LandingNav from "./navigation/navigation";
import Auth from './navigation/authNavigation'
import { Authcontext } from "./context/auth-context";
import { UserAuth } from "./hooks/auth";

export default function App() {
  const { userId, token, login, logout,user } = UserAuth();
  
  let routes
  if(token){
    routes=<LandingNav/>
  }else{
    routes=<Auth/>
  }
  
  return (
    <Authcontext.Provider value={{userId:userId,token:token,login:login,logout:logout,user:user}}>
      {routes}
    </Authcontext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
