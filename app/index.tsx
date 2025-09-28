import ProfileDetails from "@/components/profile-details";
import MoreDetails from "@/components/MoreDetails";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex justify-start items-center bg-sky-300 w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}
