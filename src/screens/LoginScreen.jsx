import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import Screen from "./Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/form";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      return setLoginFailed(true);
    } else if (loginFailed === true) {
      setLoginFailed(false);
    }
    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
      >
        <Image
          style={styles.logo}
          source={require("../assets/chick-fil-a.jpg")}
        />
        <ErrorMessage error="Invalid email/password" visible={loginFailed} />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          textContextType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder={"Password"}
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
