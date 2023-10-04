import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { houseType } from "../types";

// const HouseImg = require("../assets/images/image1.jpg");

type NearbyPlaceCardType = {
  item: houseType;
  navigation: any;
};

export default function NearbyPlaceCard({ item, navigation }: NearbyPlaceCardType): JSX.Element {
  return (
    <View
      className="rounded-3xl w-[285px] bg-white shadow-2xl relative mb-3 mr-5 ml-1"
      style={{
        shadowColor: "#6e727a",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Place", { ...item })}>
        <View className="h-48 w-full overflow-hidden rounded-t-3xl ">
          <Image source={item?.picture} className="w-full h-full object-cover" />
        </View>

        {/* Rates */}
        <View
          className="bg-white rounded-2xl p-2 absolute right-3 top-3"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
          }}
        >
          {/* <StarIcon size={20} color={themeColors.iconYellow} /> */}
          <StarIcon size={20} color="#FFE925" />
          <Text className="font-poppinsBold text-secondary-500"> {item?.rating} </Text>
        </View>

        {/* Name and price */}
        <View className="flex-row justify-between items-center py-3 px-4">
          <Text className="font-poppinsBold text-secondary-500">{item?.name}</Text>
          <Text className="font-poppins text-primary-700">{item?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
