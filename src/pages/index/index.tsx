import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import useCustomTabbar from "@/hooks/useCustomTabbar";
import "./index.scss";

export default function Index() {
  useCustomTabbar(0);
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <View className="p-4 rounded-lg">
        <Text className="text-white text-xl font-bold">Hello world!</Text>
        <Text className="text-white mt-2">TailwindCSS 已成功配置</Text>
      </View>
    </View>
  );
}
