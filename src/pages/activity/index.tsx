import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import useCustomTabbar from "@/hooks/useCustomTabbar";
import "./index.scss";

export default function Activity() {
  useCustomTabbar(1);

  useLoad(() => {
    console.log("免费领胶卷页面加载");
  });

  return (
    <View className="activity-page">
      <Text>免费领胶卷页面</Text>
    </View>
  );
}
