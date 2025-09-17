import { Text, View } from "react-native";
import "../global.css";
import ProfileDeatils from "@/components/profile-details";

export default function Index() {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <Text className=" text-3xl font-bold text-orange-400">Hola.</Text>
      <ProfileDeatils></ProfileDeatils>
    </View>
  );
}
