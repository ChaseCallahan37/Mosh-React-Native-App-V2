import React, { createRef, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import Screen from "./Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  FormPhotoPicker,
  SubmitButton,
} from "../components/form";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import listingApi from "../api/listings";
import LoadingSubmitScreen from "./LoadingSubmitScreen";
import UploadScreen from "./UploadScreen";

const items = [
  {
    title: "Furniture",
    value: 1,
    icon: {
      id: 1,
      backgroundColor: "#fc5c65",
      name: "floor-lamp",
    },
  },
  {
    title: "Cars",
    value: 2,
    icon: {
      id: 2,
      backgroundColor: "#fd9644",
      name: "car",
    },
  },
  {
    title: "Cameras",
    value: 3,
    icon: {
      id: 3,
      backgroundColor: "#fed330",
      name: "camera",
    },
  },
  {
    title: "Games",
    value: 4,
    icon: {
      id: 4,
      backgroundColor: "#26de81",
      name: "cards",
    },
  },
  {
    title: "Clothing",
    value: 5,
    icon: {
      id: 5,
      backgroundColor: "#2bcbba",
      name: "shoe-heel",
    },
  },
  {
    title: "Sports",
    value: 6,
    icon: {
      id: 6,
      backgroundColor: "#45aaf2",
      name: "basketball",
    },
  },
  {
    title: "Movies & Music",
    value: 7,
    icon: {
      id: 7,
      backgroundColor: "#4b7bec",
      name: "headphones",
    },
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  category: Yup.object().nullable().required().label("Category"),
  price: Yup.number().min(0).max(10000).required().label("Price"),
  description: Yup.string().max(255).label("Description"),
  images: Yup.array().required().min(1, "Please choose at least one image"),
});

function ListingEditScreen({ route }) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { data, error, loading, request } = useApi(listingApi.postListing);
  const progressBar = useRef();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      {
        ...listing,
        location: {
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        },
      },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          category: null,
          price: "",
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormPhotoPicker name={"images"} itemSize={80} />
        <AppFormField
          maxLength={255}
          name={"title"}
          placeholder="Title"
          textContextType="name"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <AppFormPicker
          numberOfColumns={3}
          style={{ width: "45%" }}
          name={"category"}
          placeholder={"Category"}
          items={items}
        />
        <AppFormField
          style={{ width: "30%" }}
          name={"price"}
          placeholder="Price"
          textContextType=""
          keyboardType="numeric"
          autoCapitalize="none"
          maxLength={8}
          autoCorrect={false}
        />
        <AppFormField
          name={"description"}
          multiline={true}
          numberOfLines={3}
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SubmitButton title={"Register"} />
      </AppForm>
      <LoadingSubmitScreen progress={progress} loading={false} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 5,
  },
});

export default ListingEditScreen;
