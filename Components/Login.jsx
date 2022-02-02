import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Log in</Text>
      <TextInput style={styles.input} placeholder='Username' />
      <TextInput style={styles.input} placeholder='Password' />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.alc}>
        <Text style={styles.sign}>Don't have account?</Text>
        <Text style={styles.signup}>Sign up</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderWidth: 2,
    borderColor: "blue",
    margin: 50,
    borderRadius: 30
  },
  login: {
    fontSize: 50,
    color: "blue",
    marginTop: 100,
    fontWeight: "bold",
  },

input: {
  borderBottomWidth: 1,
  marginTop: 50,
  fontSize: 16,
  borderBottomColor: "blue"
},

forgot: {
  textAlign: "right",
  marginTop: 15,
  fontSize: 16
},

btn: {
  backgroundColor: "blue",
  width: 200,
  height: 50,
   borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  marginTop: 70,
},

btntxt: {
  fontSize: 24,
  color: "white"
},

alc: {
  flexDirection: "row",
  marginTop: 50,
  justifyContent: "center",
  alignItems: "center",
},

sign: {
  fontSize: 16
},

signup: {
  fontSize: 16,
  marginLeft: 5,
  color: "blue"
}

});


export default Login;