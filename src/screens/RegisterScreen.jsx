import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "../components/form";

import usersApi from "../api/users";
import routes from "../navigators/routes";
import Screen from "./Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [error, setError] = useState(false);
  const { logIn } = useAuth();

  const handleRegister = async (credentials) => {
    const response = await usersApi.register(credentials);
    if (!response.ok) {
      if (response.data) {
        setError(response.data);
      } else {
        setError("An unknown error has occured");
      }
      return;
    }
    setError(null);
  };

  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Email has already been taken"
          visible={error ? true : false}
        />

        <AppFormField
          name={"name"}
          placeholder="Name"
          textContextType="name"
          icon="face-man-profile"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <AppFormField
          name={"email"}
          placeholder="Email"
          textContextType="email"
          icon="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name={"password"}
          placeholder="Password"
          textContextType="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
