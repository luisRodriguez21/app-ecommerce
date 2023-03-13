import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import logo from "../../assets/logo.png";
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';
import { layoutStyles } from '../styles';


export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);


  const changeForm = () => setShowLogin(!showLogin);


  return (
	<View style={ layoutStyles.container } >
		<Image style={ styles.logo } source={ logo } />
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }>
			{showLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} />}
		</KeyboardAvoidingView>
	</View>
  )
  
}

const styles = StyleSheet.create({
	logo: {
		width: "100%",
		height: 50,
		resizeMode: "contain",
		marginBottom: 20
	}
});

