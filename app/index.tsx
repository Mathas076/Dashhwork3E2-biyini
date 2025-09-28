import ProfileDetails from "@/components/profile-details";
import MoreDetails from "@/components/MoreDetails";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="w-screen h-screen flex justify-start items-center bg-sky-300 rounded-lg ">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View>
  );
}
