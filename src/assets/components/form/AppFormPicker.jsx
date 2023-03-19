import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ name, items, placeholder, style, ...otherProps }) {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext();

  const adsf = values;
  return (
    <>
      <AppPicker
        style={style}
        items={items}
        onSelectItem={(value) => setFieldValue(name, value)}
        placeholder={placeholder}
        selectedItem={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
