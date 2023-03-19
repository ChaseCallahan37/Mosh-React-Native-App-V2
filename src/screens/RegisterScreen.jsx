import React from "react";
import * as Yup from "yup";

import AppText from "../components/AppText";
import Screen from "./Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) => console.log()}
        validationSchema={validationSchema}
      >
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
