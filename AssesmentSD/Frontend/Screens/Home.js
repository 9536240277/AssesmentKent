import { StyleSheet, Text, View, ScrollView, Alert, FlatList, StatusBar, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'


const Home = () => {
  

  return (
    <View style={styles.mainContainer}>
      


    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "#fff",
    marginTop: 40,
    marginBottom: 100,
    padding: 10,
  }, screenContainer: {
    height: "100%",
    paddingTop: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 100
  }
})