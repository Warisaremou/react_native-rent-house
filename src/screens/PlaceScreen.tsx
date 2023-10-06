import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, HeartIcon, StarIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlaceScreen(props: any) {
  const item = props.route.params;
  const { navigation } = props;
  const galleryPicture = item?.picture;

  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
		<View className="bg-white h-screen">
			<StatusBar style="light" />
			<Image source={item.picture} className="w-full rounded-b-3xl h-72 absolute" />
			<SafeAreaView className="space-y-4">
				<View className="flex-row justify-between items-center mx-4 pt-2 mb-36">
					<TouchableOpacity
						className="p-2 rounded-lg"
						style={{
							backgroundColor: "rgba(210,210,210,0.5)",
						}}
						onPress={() => navigation.goBack()}
					>
						<ArrowLeftIcon size={22} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						className="p-2 rounded-lg"
						style={{
							backgroundColor: "rgba(210,210,210,0.5)",
						}}
						onPress={() => setIsLiked((prev) => !prev)}
					>
						<HeartIcon size={22} color={isLiked ? "#DE3163" : "white"} />
					</TouchableOpacity>
				</View>

				{/* Place main information */}
				<View
					className="mx-3 rounded-[28px] p-4"
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "rgba(51,51,51,0.9)",
					}}
				>
					<View className="space-y-2">
						<Text className="text-white font-poppinsBold text-[17px]">{item?.name}</Text>
						<View className="flex-row space-x-1">
							<Text className="text-white font-poppins">Rating: </Text>
							<View className="flex-row items-center space-x-1 pb-1">
								<View className="flex-row">
									{[1, 2, 3, 4, 5].map((index) => (
										<StarIcon size={12} key={index} color="#FFE925" />
									))}
								</View>
								<Text
									className="text-white px-[7px] text-[12px] font-poppins rounded-3xl"
									style={{
										fontWeight: "400",
										backgroundColor: "rgba(210,210,210,0.5)",
									}}
								>
									{item?.rating}
								</Text>
							</View>
						</View>
					</View>
					<View className="items-end space-y-2">
						<Text
							className="text-white font-poppins"
							style={{
								fontWeight: "400",
								fontSize: 17,
							}}
						>
							{item?.price}
						</Text>
						<Text className="text-secondary-200 font-poppins">/month</Text>
					</View>
				</View>

				{/* Place gallery */}
				<View className="mx-4">
					<Text className="text-secondary-500 font-poppinsBold">Gallery</Text>
					<View className="flex-row justify-between mt-2">
						{[1, 2, 3, 4].map((index) => (
							<TouchableOpacity key={index}>
								<Image source={galleryPicture} className="w-[70px] h-[70px] rounded-xl" />
							</TouchableOpacity>
						))}
					</View>
				</View>

				{/* Place description */}
				<View className="mx-4">
					<Text className="text-secondary-500 font-poppinsBold">Description</Text>
					<Text className="font-poppins text-justify text-secondary-300">{item?.description}</Text>
				</View>
			</SafeAreaView>

			{/* Buttons */}
			<View className="p-4 flex-row justify-between items-center absolute bottom-2 bg-white w-full">
				<TouchableOpacity>
					<Text className="font-poppins py-2 rounded-lg px-10 bg-primary-100 text-secondary-700">
						Live tour
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text className="font-poppins py-2 rounded-lg px-10 bg-primary-500 text-white">
						Book now
					</Text>
				</TouchableOpacity>
			</View>
		</View>
  );
}
