import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = enteredText =>{
    // console.log(enteredText)
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () =>{
    console.log(enteredGoal)
    setCourseGoals(currentGoals => {
      console.log([...currentGoals, enteredGoal ])
      return [...currentGoals, enteredGoal ]
    
    })
    console.log(courseGoals)
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input:{
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
