import React from "react";
import { Image, Text, View } from "react-native";
import { LocationDotIcon } from "../assets/icons";
import { StarIcon } from "react-native-heroicons/solid";
import { othersPlaceType } from "../types";

// const OtherplaceImg = require("../assets/images/OtherPlaces/image1.jpg");

export default function OtherPlacesCard({ place }: { place: othersPlaceType }): JSX.Element {
  return (
    <View
      className="bg-white p-2 rounded-[20px] shadow-md shadow-secondary-400 mb-5"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image className="w-[110px] h-[100px] rounded-[20px]" source={place?.picture} />
      <View className="ml-3">
        <Text
          className="text-secondary-500 font-poppinsBold"
          style={{
            fontSize: 16,
          }}
        >
          {place?.name}
        </Text>
        <View
          className="w-[180px]"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <LocationDotIcon size={18} />
            <Text
              className=" text-secondary-600 font-medim font-poppins"
              style={{
                fontSize: 13,
              }}
            >
              {place?.location.substring(0, 14) + "..."}
            </Text>
          </View>

          {/* Rates */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              rowGap: 1,
            }}
          >
            <StarIcon size={17} color="#FFE925" />
            <Text
              className="font-poppinsBold text-secondary-500"
              style={{
                fontSize: 12,
              }}
            >
              {place?.rating}
            </Text>
          </View>
        </View>
        <Text
          className="text-secondary-300 font-poppins max-w-[180px]"
          style={{
            fontSize: 12,
          }}
        >
          {place?.description.substring(0, 50) + "..."}
        </Text>
      </View>
    </View>
  );
}
