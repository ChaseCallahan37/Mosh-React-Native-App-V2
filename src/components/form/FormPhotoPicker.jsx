import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

import { ImageList } from "../image";
import ErrorMessage from "./ErrorMessage";

function FormPhotoPicker({ itemSize = 80, numColumns = 4, name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <ImageList
        numColumns={numColumns}
        itemSize={itemSize}
        images={values[name]}
        saveImage={(image) => setFieldValue(name, [image, ...values[name]])}
        removeImage={(image) =>
          setFieldValue(
            name,
            values[name].filter((i) => i.uri !== image.uri)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormPhotoPicker;
