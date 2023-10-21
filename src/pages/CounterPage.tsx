import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const CounterPage = (props: any) => {
  const [counter, setCounter] = React.useState(0);

  const increaseHandle = () => {
    setCounter(counter + 1);
  };

  const decreaseHandle = () => {
    setCounter(counter - 1);

    if (counter <= 0) {
      setCounter(0);
    }
  };

  const resetBuuton = () => {
    setCounter(0);
  };

  const navigationHandle = () => {
    props.navigation.navigate("LoginPage");
  };

  return (
    <View>
      <View style={styles.viewing}>
        <Text>{counter}</Text>

        <View>
          <Button title="Increase" onPress={increaseHandle}></Button>
          <Button title="Decrease" onPress={decreaseHandle}></Button>
          <Button title="reset" onPress={resetBuuton}></Button>
        </View>

        <View>
          <Button title="newone" onPress={navigationHandle}></Button>
        </View>
      </View>
    </View>
  );
};

export default CounterPage;

const styles = StyleSheet.create({
  viewing: {

    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },

});
