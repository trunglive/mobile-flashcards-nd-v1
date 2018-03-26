import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";
import { primaryColor } from "../utils/colors";

const FlipCardContent = ({ isFlip, question, answer }) => {
  return (
    <FlipCard style={styles.container} flip={isFlip}>
      <View style={styles.face}>
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={styles.back}>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </FlipCard>
  );
};

export default FlipCardContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  question: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    textAlign: "center",
    fontSize: 18,
    color: primaryColor
  },
  answer: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    textAlign: "center",
    fontSize: 18,
    color: primaryColor
  }
})