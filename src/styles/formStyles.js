import { StyleSheet } from "react-native";
import colors from "./colors";


const formStyles = StyleSheet.create({
      input: {
            marginBottom: 20
      },
      btnSuccess: {
            padding: .5,
            backgroundColor: colors.primary,
            color:  colors.white
      },
      btnLabel: {
            color: colors.dark,
            marginTop: 10,
      },
      navigation: {
          backgroundColor: "#003a6c"  
      },
      iconTabs: {
            fontSize: 20,
            color: colors.white
      }
});

export default formStyles;