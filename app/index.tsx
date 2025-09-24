import ProfileDetails from "@/components/profile-details";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex justify-start items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}
