import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (email === "abc@gmail.com" && password === "abc1234") {
      console.log("Successfully Logged in!");
      setIsLoggedIn(true);
    } else {
      console.log("Unsuccessful");
      setIsLoggedIn(false);
    }
  };

  

  return (
    <View>
      <View style={styles.container}>
        {!isLoggedIn ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </>
        ) : (
          <Text>Successfully Logged in!</Text>
        )}
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
});
