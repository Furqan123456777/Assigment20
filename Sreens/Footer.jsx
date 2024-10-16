import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.text}>We offer the best products at affordable prices. Quality and customer satisfaction are our top priorities.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Quick Links</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.text}>Email: support@example.com</Text>
        <Text style={styles.text}>Phone: +123 456 7890</Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>&copy; 2024 YourStoreName. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 20,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    color: '#ddd',
    fontSize: 14,
  },
  link: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 10,
    alignItems: 'center',
  },
  bottomText: {
    color: '#bbb',
    fontSize: 14,
  },
});

export default Footer;
