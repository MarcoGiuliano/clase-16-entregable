import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "../Components/PlaceItem";
import { useSelector } from "react-redux";

const renderItem = ({ item }) => {
  console.log("ITEM", item);
  return (
    <PlaceItem
      onSelect={() => {}}
      title={item.title}
      image={item.picture}
      address="Mendoza mendoza 1234"
    />
  );
};

const LocationsScreen = () => {
  const { locations } = useSelector((state) => state.locations.value);

  console.log(locations);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={(location) => location.id}
      />
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({});
