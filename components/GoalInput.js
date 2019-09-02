import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    // console.log(enteredText)
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    
    justifyContent: "center",
    alignItems: "center"
  }
});
export default GoalInput;
