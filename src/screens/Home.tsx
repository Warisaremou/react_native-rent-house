import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LocationDotIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import NearbyPlaceCard from "../components/NearbyPlaceCard";
import OtherPlacesCard from "../components/OtherPlacesCard";
import { themeColors } from "../constants";
import { categories, houseList, othersPlaceList } from "../data";
import { othersPlaceType } from "../types";

export default function Home({ navigation }: { navigation: any }): JSX.Element {
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<ScrollView className="px-4 py-9 h-screen bg-white">
			<StatusBar backgroundColor="#fff" style="dark" />
			{/* Top Bar */}
			<View className="flex-row justify-between items-center py-1">
				<View
					style={{
						display: "flex",
						flexDirection: "row",
					}}
					className="space-x-1"
				>
					<LocationDotIcon />
					<Text className="text-lg text-secondary-600 font-medium font-poppins">
						Manchester, UK
					</Text>
				</View>
				<TouchableOpacity className="border border-secondary-100 rounded-lg p-[6px] relative">
					<NotificationIcon />
				</TouchableOpacity>
			</View>

			<Text className="text-xl font-poppinsBold text-secondary-700 w-40 mt-5">
				Find your best Rental Home
			</Text>

			{/* Search Bar */}
			<View className="mt-7 flex-row items-center space-x-3">
				<TextInput
					placeholder="Search"
					className="border-secondary-50 w-full text-sm rounded-xl px-3 py-2 font-poppins text-secondary-600 border focus:border-primary-300 flex-1"
					selectionColor={"#868990"}
				/>
				<TouchableOpacity className="rounded-xl p-[10px] bg-primary-600">
					<SearchIcon color="#FFF" />
				</TouchableOpacity>
			</View>

			{/* Categories */}
			<View className="py-7">
				<Text className="text-secondary-500 font-poppinsBold">Categories</Text>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={categories}
					keyExtractor={(item: any) => item.id}
					className="overflow-visible mt-3"
					renderItem={({ item }) => {
						const isActive = item.id == activeCategory;
						return (
							<TouchableOpacity
								key={item.id}
								onPress={() => setActiveCategory(item.id)}
								style={{
									backgroundColor: isActive ? "#eef4fc" : "#fff",
									borderColor: isActive ? themeColors.iconBlue : "#ededee",
									borderWidth: 1,
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
								className="px-3 py-2 mr-5 rounded-2xl"
							>
								<Image source={item.icon} />
								<Text
									className={`font-poppins pt-[5px] pl-2 ${
										isActive ? "text-primary-700" : "text-secondary-500"
									}`}
									style={{ fontSize: 15 }}
								>
									{item.name}
								</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</View>

			{/* Nearby Places */}
			<View className="py-5">
				<View className="flex-row justify-between mb-5">
					<Text className="text-secondary-500 font-poppinsBold">Nearby Places</Text>
					<Text className="text-primary-600 font-poppins underline">see more</Text>
				</View>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={houseList}
					keyExtractor={(item: any) => item.id}
					className="overflow-visible mt-3"
					renderItem={({ item }) => <NearbyPlaceCard item={item} navigation={navigation} />}
				/>
			</View>

			{/* Other's places */}
			<View className="pt-3 mb-10">
				<View className="flex-row justify-between mb-5">
					<Text className="text-secondary-500 font-poppinsBold">Other’s places</Text>
					<Text className="text-primary-600 font-poppins underline">see all</Text>
				</View>
				<View className="mx-[2px]">
					{othersPlaceList.map((place: othersPlaceType) => {
						return <OtherPlacesCard place={place} key={place.id} />;
					})}
				</View>
			</View>
		</ScrollView>
	);
}
