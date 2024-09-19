import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
const Form = ()=>{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (username && password) {
      Alert.alert(
        'Info Submitted',
        `Username: ${username}\nPassword: ${password}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert(
        'Error',
        'Please fill in both fields!',
        [{ text: 'OK' }]
      );
    }
  };

  return (
        <View>
          <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button  style = {styles.button} title="Check" onPress={handleSubmit}/>  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      margin: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    input: {
      borderWidth: 1,
      marginLeft: 10,
      marginRight: 20,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    button : {
        width: 100,
        height: 55,

    },
  });

  export default Form;