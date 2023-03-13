import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from 'react-native-root-toast';
import { registerApi } from  "../../api/user"
import { formStyles } from "../../styles"
import colors from "../../styles/colors";

export default function RegisterForm(props) {
	const { changeForm } = props;
	const [loading, setLoading] = useState(false);



	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async(formData) => {
			setLoading(true);
			console.log("registro de usuario enviado");
			console.log("formData: ",formData);
			
			try {
				const response = await registerApi(formData);				

				if(response.success){
                    if(response.metadata.id === 1){
                        console.log("sucess all");
						changeForm();
                    }
                } else {
                    Toast.show("Ocurrio un error al validar los datos", { position: Toast.positions.CENTER, backgroundColor: colors.warning });
                }

			} catch (error) {
				console.log("error: ",error);
				setLoading(false);
				Toast.show("Hubo un error por favor contacta al administrador", { position: Toast.positions.CENTER, backgroundColor: colors.danger });
			}

		}
	});

	

	function initialValues() {
		return {
			email: "",
			userName: "",
			password: "",
			repeatPassword: ""
		}
	}

	function validationSchema() {
		return {
			email: Yup.string().email(true).required(true),
			userName: Yup.string().required(true),
			password: Yup.string().required(true),
			repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], true)
		}
	}
	

    return (
     	<View>
            <TextInput 				
				label="Email" 
				onChangeText={(text) => formik.setFieldValue("email",text)} 
				style={ formStyles.input } 
				value={formik.values.email} 
				error={formik.errors.email} 
			/> 

            <TextInput 
				label="Nombre de usuario"
				onChangeText={(text) => formik.setFieldValue("userName",text)} s
				style={ formStyles.input } 
				value={formik.values.userName} 
				error={formik.errors.userName} 
			/> 
            <TextInput 
				label="Contraseña" 
				onChangeText={(text) => formik.setFieldValue("password",text)} 
				style={ formStyles.input } 
				secureTextEntry 
				value={formik.values.password} 
				error={formik.errors.password} 
			/> 
            <TextInput 
				label="Repetir contraseña" 
				onChangeText={(text) => formik.setFieldValue("repeatPassword",text)} 
				style={ formStyles.input } 
				secureTextEntry 
				value={formik.values.repeatPassword} 
				error={formik.errors.repeatPassword} 
			/> 

            <Button mode="contained" style={formStyles.btnSuccess} onPress={formik.handleSubmit} loading={loading} >Registrar</Button>
            <Button mode="text" style={formStyles.btnLabel} onPress={changeForm} >Iniciar sesión</Button>
      	</View>
    )
}

