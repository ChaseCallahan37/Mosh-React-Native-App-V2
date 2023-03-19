import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "./Screen";
import {
  ListItem,
  ListItemSeperator,
  ListItemDeleteAction,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 5,
    title: "T5",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 6,
    title: "T6",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 7,
    title: "T7",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 8,
    title: "T8",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 9,
    title: "T9",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 10,
    title: "T10",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 11,
    title: "T11",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 12,
    title: "T12",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 13,
    title: "T13",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 14,
    title: "T14",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 15,
    title: "T15",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 16,
    title: "T16",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 17,
    title: "T17",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 18,
    title: "T18",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 19,
    title: "T19",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
  {
    id: 20,
    title: "T20",
    description: "some description",
    image: require("../assets/chick-fil-a.jpg"),
  },
];
//Give me 50 more messages like the first one

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from messages
    setMessages((prevState) => prevState.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevron={true}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 4,
              title: "T4",
              description: "some description",
              image: require("../assets/chick-fil-a.jpg"),
            },
            {
              id: 5,
              title: "T5",
              description: "some description",
              image: require("../assets/chick-fil-a.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {},
});

export default MessagesScreen;
