import Taro, { useDidShow } from "@tarojs/taro";
import { useMemo } from "react";
import type CustomTabBar from "@/custom-tab-bar";

export default function useCustomTabbar (tabIndex: number) {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page);
    tabbar?.setSelected(tabIndex);
  });
}
