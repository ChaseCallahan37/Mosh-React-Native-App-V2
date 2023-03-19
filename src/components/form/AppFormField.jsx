import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, style, ...otherProps }) {
  const { setFieldValue, setFieldTouched, values, touched, errors } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        style={[styles.text, style]}
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="lock"

        // placeholder={"Password"}
        // textContentType="password"
        //       secureTextEntry={true}
        value={values[name]}
        onChangeText={(value) => setFieldValue(name, value)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {},
});

export default AppFormField;
