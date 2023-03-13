import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginApi } from  "../../api/user"
import Toast from 'react-native-root-toast';
import useAuth from '../../hooks/useAuth'
import { formStyles } from "../../styles"
import colors from "../../styles/colors";


export default function LoginForm (props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();



    const formik = useFormik({
		initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async(formData) => {
			setLoading(true);
			console.log("login");
			console.log("formData: ",formData);

            try {
				const response = await LoginApi(formData);
				console.log("response: ",response);

                if(response.success){
                    if(response.metadata.id === 1){
                        console.log("sucess all");
                        login(response);
                    }
                } else {
                    Toast.show("Ocurrio un error al validar los datos", { position: Toast.positions.CENTER, backgroundColor: colors.warning });
                }

			} catch (error) {
				console.log("error: ",error);
				setLoading(false);
				Toast.show("Hubo un error por favor contacta al administrador", { position: Toast.positions.CENTER, backgroundColor: colors.danger });
			}

            setLoading(false);
		}
	});

    function initialValues() {
		return {
			email: "",
			password: ""
		}
	}

    function validationSchema() {
		return {
			email: Yup.string().email(true).required(true),
			password: Yup.string().required(true)
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
				label="Contraseña" 
				onChangeText={(text) => formik.setFieldValue("password",text)} 
				style={ formStyles.input } 
				secureTextEntry 
				value={formik.values.password} 
				error={formik.errors.password} 
			/> 

            <Button mode="contained" style={formStyles.btnSuccess} onPress={formik.handleSubmit} loading={loading} >Entrar</Button>
            <Button mode="text" style={formStyles.btnLabel} onPress={changeForm} >Registrarse</Button>
        </View>
    )
  
}
