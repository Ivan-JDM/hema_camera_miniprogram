import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import useCustomTabbar from "@/hooks/useCustomTabbar";
import "./index.scss";

export default function Record() {
  useCustomTabbar(2);
  
  useLoad(() => {
    console.log("生成记录页面加载");
  });

  return (
    <View className="record-page">
      <Text>生成记录页面</Text>
    </View>
  );
}

