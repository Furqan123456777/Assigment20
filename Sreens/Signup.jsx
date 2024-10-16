import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
        <Icon style={{fontSize:150,marginTop:-30,color:"#6a0dad"}} name='bag-handle-outline'/>
      {/* <Image source={require('')} style={styles.logo} /> */}
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="First Name" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Last Name" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   width: 100,
  //   height: 100,
  //   marginBottom: 20,
  // },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signupButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#6a0dad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: '#6a0dad',
    fontWeight: 'bold',
  },
});
